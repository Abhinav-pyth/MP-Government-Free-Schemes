import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "../../lib/i18n";
import { supabase } from "../../lib/supabase/client";

interface HelpDeskFormProps {
  compact?: boolean;
}

export function HelpDeskForm({ compact = false }: HelpDeskFormProps) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    query: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.validation.required;
    if (!formData.email.trim()) newErrors.email = t.validation.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t.validation.invalidEmail;
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = t.validation.invalidPhone;
    if (!formData.category) newErrors.category = t.validation.required;
    if (!formData.query.trim()) newErrors.query = t.validation.required;
    else if (formData.query.trim().length < 10) newErrors.query = t.validation.minLength;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const { error } = await supabase
        .from("user_queries")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          category: formData.category,
          query: formData.query.trim(),
          language: lang,
        })
        .select()
        .single();

      if (error) throw error;
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", category: "", query: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-accent-600" />
        </div>
        <p className="text-lg font-medium text-gray-900 mb-2">{t.help.success}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700"
        >
          {lang === "hi" ? "नया प्रश्न भेजें" : "Submit Another Query"}
        </button>
      </div>
    );
  }

  const categoryOptions = [
    { key: "schemeInfo", label: t.help.categories.schemeInfo },
    { key: "eligibility", label: t.help.categories.eligibility },
    { key: "documents", label: t.help.categories.documents },
    { key: "application", label: t.help.categories.application },
    { key: "dbt", label: t.help.categories.dbt },
    { key: "other", label: t.help.categories.other },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {t.help.error}
        </div>
      )}

      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <label htmlFor="help-name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.help.name} *
          </label>
          <input
            id="help-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            maxLength={100}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="help-email" className="block text-sm font-medium text-gray-700 mb-1">
            {t.help.email} *
          </label>
          <input
            id="help-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            maxLength={100}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="help-phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t.help.phone}
          </label>
          <input
            id="help-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            maxLength={10}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="help-category" className="block text-sm font-medium text-gray-700 mb-1">
            {t.help.category} *
          </label>
          <select
            id="help-category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          >
            <option value="">--</option>
            {categoryOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>{opt.label}</option>
            ))}
          </select>
          {errors.category && <p className="text-xs text-red-600 mt-1">{errors.category}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="help-query" className="block text-sm font-medium text-gray-700 mb-1">
          {t.help.query} *
        </label>
        <textarea
          id="help-query"
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          maxLength={1000}
        />
        {errors.query && <p className="text-xs text-red-600 mt-1">{errors.query}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {t.help.submitting}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t.help.submit}
          </>
        )}
      </button>
    </form>
  );
}

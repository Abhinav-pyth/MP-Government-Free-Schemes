import { Link } from "react-router-dom";
import {
  Heart, Baby, GraduationCap, Briefcase, Tractor, HeartPulse,
  ShieldCheck, MapPin, FileText, ArrowRight, Users
} from "lucide-react";
import { useLanguage } from "../../lib/i18n";
import { Scheme, categories, audiences } from "../../data";
import { cn } from "../../lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Heart, Baby, GraduationCap, Briefcase, Tractor, HeartPulse, ShieldCheck, MapPin,
};

interface SchemeCardProps {
  scheme: Scheme;
}

export function SchemeCard({ scheme }: SchemeCardProps) {
  const { lang, t } = useLanguage();
  const Icon = iconMap[scheme.icon] || FileText;
  const category = categories.find(c => c.key === scheme.category.key);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-primary-200 transition-all duration-200 group flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-50 text-primary-700">
          {lang === "hi" ? category?.hi : category?.en}
        </span>
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
        {lang === "hi" ? scheme.name.hi : scheme.name.en}
      </h3>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
        {lang === "hi" ? scheme.overview.hi : scheme.overview.en}
      </p>

      {/* Target audience badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {scheme.targetAudience.map((aud) => {
          const audience = audiences.find(a => a.key === aud);
          return (
            <span key={aud} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              <Users className="w-3 h-3" />
              {lang === "hi" ? audience?.hi : audience?.en}
            </span>
          );
        })}
      </div>

      {/* Key benefit */}
      <div className="bg-accent-50 rounded-lg p-2.5 mb-3">
        <p className="text-xs font-medium text-accent-700 line-clamp-1">
          {lang === "hi" ? scheme.benefits.hi[0] : scheme.benefits.en[0]}
        </p>
      </div>

      {/* Document count */}
      <p className="text-xs text-gray-500 mb-3">
        📄 {scheme.documents[lang].length} {t.scheme.requiredDocs}
      </p>

      <Link
        to={`/scheme/${scheme.id}`}
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
      >
        {t.scheme.viewDetails}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

interface SchemeGridProps {
  schemes: Scheme[];
}

export function SchemeGrid({ schemes }: SchemeGridProps) {
  const { t } = useLanguage();

  if (schemes.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
          <FileText className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-600 mb-4">{t.filters.noResults}</p>
        <button
          onClick={() => window.location.href = "/schemes"}
          className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
        >
          {t.common.resetFilters}
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {schemes.map((scheme) => (
        <SchemeCard key={scheme.id} scheme={scheme} />
      ))}
    </div>
  );
}

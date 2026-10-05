import { HelpCircle } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { HelpDeskForm } from "../components/help/HelpDeskForm";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export function HelpPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: t.nav.help }]} />

        <div className="mt-4 text-center mb-4">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary-100 flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-primary-600" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{t.help.title}</h1>
          <p className="text-sm text-gray-600 mt-1">{t.help.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <HelpDeskForm />
        </div>
      </div>
    </div>
  );
}

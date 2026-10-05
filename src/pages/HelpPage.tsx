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

        <div className="mt-6 text-center mb-8">
          <div className="h-48 sm:h-64 bg-gray-50 rounded-xl overflow-hidden mb-6">
            <img 
              src="/images/help-hero.svg" 
              alt="Help Desk"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.help.title}</h1>
          <p className="text-gray-600 mt-2">{t.help.subtitle}</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <HelpDeskForm />
        </div>
      </div>
    </div>
  );
}

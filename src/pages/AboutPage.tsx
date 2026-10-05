import { useLanguage } from "../lib/i18n";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: t.nav.about }]} />

      <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="h-48 sm:h-64 bg-gray-50 overflow-hidden">
          <img 
            src="/images/about-hero.svg" 
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{t.about.title}</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.content}</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t.about.mission}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.missionText}</p>

            <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
              <p className="text-sm text-amber-800">{t.about.note}</p>
            </div>
          </div>
        </div>
      </div>      </div>
    </div>
  );
}

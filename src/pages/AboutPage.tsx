import { useLanguage } from "../lib/i18n";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: t.nav.about }]} />

      <div className="mt-4 bg-white rounded-lg border border-gray-200 p-5">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{t.about.title}</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.about.content}</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{t.about.mission}</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.about.missionText}</p>

          <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
            <p className="text-xs text-amber-800">{t.about.note}</p>
          </div>
        </div>
      </div>      </div>
    </div>
  );
}

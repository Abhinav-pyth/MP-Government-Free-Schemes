import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  AlertCircle, CheckCircle, FileText, Users, ExternalLink,
  ArrowRight, Shield, Heart, Baby, GraduationCap, Briefcase,
  Tractor, HeartPulse, ShieldCheck, MapPin
} from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { schemes, categories, audiences } from "../data";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { OfficialLink } from "../components/common/OfficialLink";
import { cn } from "../lib/utils";
import { SEO } from "../components/SEO";
import { AdBanner, AdNativeBanner } from "../components/ads/AdUnits";

const iconMap: Record<string, React.ElementType> = {
  Heart, Baby, GraduationCap, Briefcase, Tractor, HeartPulse, ShieldCheck, MapPin,
};

export function SchemeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const scheme = schemes.find((s) => s.id === id);

  if (!scheme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.common.notFound}</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700">{t.common.backHome}</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[scheme.icon] || FileText;
  const category = categories.find(c => c.key === scheme.category.key);
  const tabs = [t.scheme.overview, t.scheme.eligibility, t.scheme.documents, t.scheme.application];

  return (
    <>
    <SEO 
      title={`${lang === "hi" ? scheme.name.hi : scheme.name.en} | MP Government Schemes`}
      description={lang === "hi" ? scheme.overview.hi : scheme.overview.en}
      keywords={[
        ...(lang === "hi" ? scheme.keywords.hi : scheme.keywords.en),
        lang === "hi" ? scheme.name.hi : scheme.name.en,
        lang === "hi" ? scheme.category.hi : scheme.category.en,
      ].join(", ")}
      canonical={`https://mp-government-free-schemes.vercel.app/scheme/${scheme.id}`}
      ogType="article"
    />
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: t.nav.schemes, path: "/schemes" },
            { label: lang === "hi" ? scheme.name.hi : scheme.name.en },
          ]}
        />

        {/* Hero */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary-600" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-50 text-primary-700">
                {lang === "hi" ? category?.hi : category?.en}
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                {lang === "hi" ? scheme.name.hi : scheme.name.en}
              </h1>
              <p className="text-gray-600 mt-2">
                {lang === "hi" ? scheme.overview.hi : scheme.overview.en}
              </p>

              {/* Target audience */}
              <div className="flex flex-wrap gap-2 mt-4">
                {scheme.targetAudience.map((aud) => {
                  const audience = audiences.find(a => a.key === aud);
                  return (
                    <span key={aud} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                      <Users className="w-3 h-3" />
                      {lang === "hi" ? audience?.hi : audience?.en}
                    </span>
                  );
                })}
              </div>

              {/* Key benefit */}
              <div className="mt-4 bg-accent-50 rounded-lg p-3 border border-accent-200">
                <p className="text-sm font-medium text-accent-700">
                  💰 {lang === "hi" ? scheme.benefits.hi[0] : scheme.benefits.en[0]}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">{t.scheme.requiredDocs}</p>
                  <p className="text-lg font-bold text-blue-700">{scheme.documents[lang].length}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">{t.scheme.benefits}</p>
                  <p className="text-lg font-bold text-green-700">{scheme.benefits[lang].length}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center col-span-2 sm:col-span-1">
                  <p className="text-xs text-gray-500">{t.scheme.application}</p>
                  <p className="text-lg font-bold text-purple-700">{scheme.applicationProcess[lang].length} {lang === "hi" ? "चरण" : "Steps"}</p>
                </div>
              </div>

              {/* Official link */}
              <div className="mt-4">
                <OfficialLink url={scheme.officialLink} />
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">{t.scheme.importantNotice}</p>
        </div>

        {/* In-content ad */}
        <AdBanner className="mt-6" />

        {/* Tabs */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 overflow-x-auto">
            <div className="flex min-w-max">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "px-4 sm:px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                    activeTab === i
                      ? "border-primary-600 text-primary-700 bg-primary-50/50"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Overview */}
            {activeTab === 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.scheme.overview}</h3>
                  <p className="text-gray-600">{lang === "hi" ? scheme.overview.hi : scheme.overview.en}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.scheme.benefits}</h3>
                  <ul className="space-y-2">
                    {(lang === "hi" ? scheme.benefits.hi : scheme.benefits.en).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.scheme.targetAudience}</h3>
                  <div className="flex flex-wrap gap-2">
                    {scheme.targetAudience.map((aud) => {
                      const audience = audiences.find(a => a.key === aud);
                      return (
                        <span key={aud} className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm">
                          {lang === "hi" ? audience?.hi : audience?.en}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Eligibility */}
            {activeTab === 1 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.scheme.eligibility}</h3>
                <ul className="space-y-3">
                  {(lang === "hi" ? scheme.eligibility.hi : scheme.eligibility.en).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-700">{t.scheme.checkEligibility}</p>
                </div>
              </div>
            )}

            {/* Documents */}
            {activeTab === 2 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.scheme.requiredDocs}</h3>
                <div className="space-y-2">
                  {(lang === "hi" ? scheme.documents.hi : scheme.documents.en).map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                      <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent-600" />
                      </div>
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Process */}
            {activeTab === 3 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.scheme.application}</h3>
                <div className="space-y-4">
                  {(lang === "hi" ? scheme.applicationProcess.hi : scheme.applicationProcess.en).map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Native ad after content */}
        <AdNativeBanner />

        {/* Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-gray-100 border border-gray-200">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
            <p className="text-xs text-gray-600">{t.scheme.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

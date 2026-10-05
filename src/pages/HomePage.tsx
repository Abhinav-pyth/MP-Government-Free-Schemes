import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search, ArrowRight, Heart, CheckCircle, FileText,
  ExternalLink, HelpCircle, GraduationCap, Tractor,
  HeartPulse, Baby
} from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { schemes, categories, audiences, blogPosts } from "../data";
import { HelpDeskForm } from "../components/help/HelpDeskForm";
import { SEO } from "../components/SEO";

const categoryIcons: Record<string, React.ElementType> = {
  "women-child": Heart,
  education: GraduationCap,
  agriculture: Tractor,
  "health-social": HeartPulse,
};

export function HomePage() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");

  const filteredSchemes = useMemo(() => {
    return schemes.filter((scheme) => {
      const matchesSearch = !searchQuery || 
        scheme.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.overview[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.keywords[lang].some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = !selectedCategory || scheme.category.key === selectedCategory;
      const matchesAudience = !selectedAudience || scheme.targetAudience.includes(selectedAudience);
      return matchesSearch && matchesCategory && matchesAudience;
    });
  }, [searchQuery, selectedCategory, selectedAudience, lang]);

  const popularSchemes = schemes.slice(0, 6);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/schemes?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
    <SEO 
      title={lang === "hi" 
        ? "मध्य प्रदेश सरकारी योजनाएं | MP Government Free Schemes" 
        : "MP Government Schemes | Free Government Schemes in Madhya Pradesh"
      }
      description={lang === "hi"
        ? "मध्य प्रदेश की सरकारी योजनाओं की जानकारी, पात्रता, आवश्यक दस्तावेज, आवेदन प्रक्रिया और आधिकारिक पोर्टल एक ही जगह।"
        : "Find Madhya Pradesh government schemes, eligibility, documents, benefits, application process and official links."
      }
      keywords={lang === "hi"
        ? "मध्य प्रदेश सरकारी योजनाएं, एमपी सरकार योजना, लाड़ली बहना, किसान कल्याण, छात्रवृत्ति, सरकारी योजना"
        : "MP government schemes, Madhya Pradesh schemes, Ladli Bahna, Kisan Kalyan, scholarship, government schemes"
      }
      canonical="https://mp-government-free-schemes.vercel.app/"
    />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-primary-100 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Search */}
            <form onSubmit={handleHeroSearch} className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.hero.searchPlaceholder}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
                aria-label={t.hero.searchPlaceholder}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                {lang === "hi" ? "खोजें" : "Search"}
              </button>
            </form>

            {/* Quick category buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat.key] || FileText;
                return (
                  <Link
                    key={cat.key}
                    to={`/schemes?category=${cat.key}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {lang === "hi" ? cat.hi : cat.en}
                  </Link>
                );
              })}
            </div>

            {/* Scheme count */}
            <p className="mt-6 text-primary-200 text-sm">
              <span className="font-bold text-white">{schemes.length}+</span> {t.hero.schemeCount}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-primary-50">
              <p className="text-2xl font-bold text-primary-700">{schemes.length}+</p>
              <p className="text-xs text-gray-600 mt-1">{t.home.trust.schemes}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-accent-50">
              <p className="text-2xl font-bold text-accent-600">{categories.length}</p>
              <p className="text-xs text-gray-600 mt-1">{t.home.trust.categories}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-blue-50">
              <p className="text-2xl font-bold text-blue-700">{audiences.length}</p>
              <p className="text-xs text-gray-600 mt-1">{t.home.trust.groups}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-purple-50">
              <p className="text-2xl font-bold text-purple-700">2</p>
              <p className="text-xs text-gray-600 mt-1">{t.home.trust.bilingual}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.home.categories}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.key] || FileText;
              const count = schemes.filter(s => s.category.key === cat.key).length;
              return (
                <Link
                  key={cat.key}
                  to={`/schemes?category=${cat.key}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-primary-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {lang === "hi" ? cat.hi : cat.en}
                  </h3>
                  <p className="text-sm text-gray-500">{count} {lang === "hi" ? "योजनाएं" : "schemes"}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Schemes */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{t.home.popularSchemes}</h2>
            <Link
              to="/schemes"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1"
            >
              {lang === "hi" ? "सभी देखें" : "View All"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularSchemes.map((scheme) => (
              <Link
                key={scheme.id}
                to={`/scheme/${scheme.id}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-primary-200 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <Baby className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary-700 transition-colors">
                      {lang === "hi" ? scheme.name.hi : scheme.name.en}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {lang === "hi" ? scheme.overview.hi : scheme.overview.en}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.home.howItWorks}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, ...t.home.steps.search },
              { icon: CheckCircle, ...t.home.steps.eligibility },
              { icon: FileText, ...t.home.steps.documents },
              { icon: ExternalLink, ...t.home.steps.apply },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary-700" />
                </div>
                <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{t.home.latestArticles}</h2>
            <Link to="/blog" className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1">
              {lang === "hi" ? "सभी लेख" : "All Articles"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary-700 transition-colors">
                  {lang === "hi" ? post.title.hi : post.title.en}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {lang === "hi" ? post.excerpt.hi : post.excerpt.en}
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  {post.readingTime} {t.blog.readingTime} • {post.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Desk CTA */}
      <section className="bg-primary-50 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <HelpCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.help.title}</h2>
            <p className="text-gray-600">{t.help.subtitle}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <HelpDeskForm compact />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            {t.footer.disclaimerText}
          </p>
        </div>
      </section>
    </div>
    </>
  );
}

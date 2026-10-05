import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, AlertCircle, Shield } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { blogPosts, schemes } from "../data";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { OfficialLink } from "../components/common/OfficialLink";
import { SEO } from "../components/SEO";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.common.notFound}</h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            {lang === "hi" ? "ब्लॉग पर वापस जाएं" : "Back to Blog"}
          </Link>
        </div>
      </div>
    );
  }

  const relatedSchemesList = schemes.filter((s) => post.relatedSchemes.includes(s.id));
  const relatedArticles = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
    <SEO 
      title={`${lang === "hi" ? post.title.hi : post.title.en} | MP Schemes Blog`}
      description={lang === "hi" ? post.excerpt.hi : post.excerpt.en}
      keywords={`${post.category}, ${lang === "hi" ? post.title.hi : post.title.en}, सरकारी योजना, government scheme`}
      canonical={`https://mpgovschemes.com/blog/${post.slug}`}
      ogType="article"
    />
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: t.nav.blog, path: "/blog" },
            { label: lang === "hi" ? post.title.hi : post.title.en },
          ]}
        />

        <article className="mt-6">
          {/* Header */}
          <header className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4">
              {lang === "hi" ? post.title.hi : post.title.en}
            </h1>
            <p className="text-gray-600 mb-4">
              {lang === "hi" ? post.excerpt.hi : post.excerpt.en}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime} {t.blog.readingTime}
              </span>
              <span>{post.date}</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* Content */}
          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <div
              className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{
                __html: lang === "hi" ? post.content.hi : post.content.en,
              }}
            />
          </div>

          {/* Important notice */}
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{t.scheme.importantNotice}</p>
          </div>

          {/* Related Schemes */}
          {relatedSchemesList.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.blog.relatedSchemes}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedSchemesList.map((scheme) => (
                  <Link
                    key={scheme.id}
                    to={`/scheme/${scheme.id}`}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-medium text-gray-900 text-sm">
                      {lang === "hi" ? scheme.name.hi : scheme.name.en}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {lang === "hi" ? scheme.overview.hi : scheme.overview.en}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.blog.relatedArticles}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-medium text-gray-900 text-sm">
                      {lang === "hi" ? article.title.hi : article.title.en}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {article.readingTime} {t.blog.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === "hi" ? "सभी लेख देखें" : "View All Articles"}
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 rounded-xl bg-gray-100 border border-gray-200">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <p className="text-xs text-gray-600">{t.scheme.disclaimer}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    </>
  );
}

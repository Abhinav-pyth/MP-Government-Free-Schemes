import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { blogPosts } from "../data";
import { SEO } from "../components/SEO";

export function BlogPage() {
  const { lang, t } = useLanguage();

  return (
    <>
    <SEO 
      title={lang === "hi" 
        ? "ब्लॉग और मार्गदर्शिका | MP Government Schemes" 
        : "Blog & Guides | MP Government Schemes"
      }
      description={lang === "hi"
        ? "सरकारी योजनाओं से संबंधित उपयोगी जानकारी और मार्गदर्शिका पढ़ें।"
        : "Read useful information and guides related to government schemes."
      }
      keywords={lang === "hi"
        ? "सरकारी योजना ब्लॉग, योजना मार्गदर्शिका, एमपी योजना जानकारी"
        : "government schemes blog, scheme guide, MP schemes information"
      }
      canonical="https://mp-government-free-schemes.vercel.app/blog"
    />
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.blog.title}</h1>
          <p className="text-gray-600 mt-1">{t.blog.subtitle}</p>
        </div>

        {/* Featured article */}
        {blogPosts.length > 0 && (
          <Link
            to={`/blog/${blogPosts[0].slug}`}
            className="block mb-4 bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                  {blogPosts[0].category} • Featured
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 mb-2 group-hover:text-primary-700 transition-colors">
                  {lang === "hi" ? blogPosts[0].title.hi : blogPosts[0].title.en}
                </h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {lang === "hi" ? blogPosts[0].excerpt.hi : blogPosts[0].excerpt.en}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {blogPosts[0].readingTime} {t.blog.readingTime}
                  </span>
                  <span>{blogPosts[0].date}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                {post.category}
              </span>
              <h3 className="text-base font-semibold text-gray-900 mt-2 mb-1 group-hover:text-primary-700 transition-colors line-clamp-1">
                {lang === "hi" ? post.title.hi : post.title.en}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {lang === "hi" ? post.excerpt.hi : post.excerpt.en}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime} {t.blog.readingTime}
                  </span>
                  <span>{post.date}</span>
                </div>
                <span className="text-xs font-medium text-primary-600 flex items-center gap-1">
                  {t.blog.readMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

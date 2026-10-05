import { Link } from "react-router-dom";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "../lib/i18n";
import { blogPosts } from "../data";

export function BlogPage() {
  const { lang, t } = useLanguage();

  return (
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
            className="block mb-8 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="p-6 sm:p-8">
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                {blogPosts[0].category} • Featured
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-3 mb-3 group-hover:text-primary-700 transition-colors">
                {lang === "hi" ? blogPosts[0].title.hi : blogPosts[0].title.en}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === "hi" ? blogPosts[0].excerpt.hi : blogPosts[0].excerpt.en}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readingTime} {t.blog.readingTime}
                </span>
                <span>{blogPosts[0].date}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary-700 transition-colors">
                {lang === "hi" ? post.title.hi : post.title.en}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
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
                <span className="text-sm font-medium text-primary-600 flex items-center gap-1">
                  {t.blog.readMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

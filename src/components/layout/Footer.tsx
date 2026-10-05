import { Link } from "react-router-dom";
import { useLanguage } from "../../lib/i18n";
import { categories } from "../../data";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.about}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footer.notOfficial}
            </p>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.popularCategories}</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.key}>
                  <Link
                    to={`/schemes?category=${cat.key}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {lang === "hi" ? cat.hi : cat.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.importantLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/schemes" className="text-sm text-gray-400 hover:text-white transition-colors">{t.nav.schemes}</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">{t.nav.blog}</Link></li>
              <li><Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">{t.nav.help}</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">{t.nav.about}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.importantLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.terms}</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.disclaimer}</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            {t.footer.disclaimerText}
          </p>
          <p className="text-xs text-gray-500">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

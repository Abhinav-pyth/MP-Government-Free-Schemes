import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./lib/i18n";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { SchemesPage } from "./pages/SchemesPage";
import { SchemeDetailPage } from "./pages/SchemeDetailPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { HelpPage } from "./pages/HelpPage";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPage, TermsPage, DisclaimerPage } from "./pages/StaticPages";
import { AdLeaderboard, AdMobileBanner, AdWideSkyscraper, AdPopunder, AdSocialBar } from "./components/ads/AdUnits";

function ScrollToTop() {
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        {/* Invisible ad scripts */}
        <AdPopunder />
        <AdSocialBar />
        
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          {/* Leaderboard ad below header (desktop only) */}
          <AdLeaderboard />
          
          {/* Wide skyscraper on right side (large desktop only) */}
          <AdWideSkyscraper />
          
          <main className="flex-1 pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/scheme/:id" element={<SchemeDetailPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Mobile sticky bottom banner */}
          <AdMobileBanner />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-gray-600 mb-4">Page not found</p>
        <a href="/" className="text-primary-600 hover:text-primary-700 font-medium">
          Go back home
        </a>
      </div>
    </div>
  );
}

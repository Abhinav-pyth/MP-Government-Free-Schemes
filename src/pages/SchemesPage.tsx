import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../lib/i18n";
import { schemes } from "../data";
import { SchemeGrid } from "../components/schemes/SchemeCard";
import { FilterPanel } from "../components/schemes/FilterPanel";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { SEO } from "../components/SEO";

export function SchemesPage() {
  const { lang, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedAudience, setSelectedAudience] = useState(searchParams.get("audience") || "");

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setSelectedCategory(searchParams.get("category") || "");
    setSelectedAudience(searchParams.get("audience") || "");
  }, [searchParams]);

  const filteredSchemes = useMemo(() => {
    return schemes.filter((scheme) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q ||
        scheme.name[lang].toLowerCase().includes(q) ||
        scheme.overview[lang].toLowerCase().includes(q) ||
        scheme.category[lang].toLowerCase().includes(q) ||
        scheme.keywords[lang].some(k => k.toLowerCase().includes(q)) ||
        scheme.benefits[lang].some(b => b.toLowerCase().includes(q));
      const matchesCategory = !selectedCategory || scheme.category.key === selectedCategory;
      const matchesAudience = !selectedAudience || scheme.targetAudience.includes(selectedAudience);
      return matchesSearch && matchesCategory && matchesAudience;
    });
  }, [searchQuery, selectedCategory, selectedAudience, lang]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const params = new URLSearchParams(searchParams);
    if (query) params.set("search", query); else params.delete("search");
    setSearchParams(params, { replace: true });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat) params.set("category", cat); else params.delete("category");
    setSearchParams(params, { replace: true });
  };

  const handleAudienceChange = (aud: string) => {
    setSelectedAudience(aud);
    const params = new URLSearchParams(searchParams);
    if (aud) params.set("audience", aud); else params.delete("audience");
    setSearchParams(params, { replace: true });
  };

  return (
    <>
    <SEO 
      title={lang === "hi" 
        ? "सभी सरकारी योजनाएं | MP Government Schemes Directory" 
        : "All Government Schemes | MP Schemes Directory"
      }
      description={lang === "hi"
        ? "मध्य प्रदेश की सभी सरकारी योजनाओं को खोजें और फ़िल्टर करें। महिला, छात्र, किसान और श्रमिक योजनाओं की पूरी जानकारी।"
        : "Search and filter all Madhya Pradesh government schemes. Complete information on women, student, farmer and worker schemes."
      }
      keywords={lang === "hi"
        ? "सरकारी योजनाएं खोजें, योजना फ़िल्टर, एमपी योजनाएं, सभी योजनाएं"
        : "search government schemes, scheme filter, MP schemes, all schemes"
      }
      canonical="https://mpgovschemes.com/schemes"
    />
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={[{ label: t.nav.schemes }]} />

        <div className="mt-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.nav.schemes}</h1>
          <p className="text-gray-600 mt-1">{t.hero.subtitle}</p>
        </div>

        <div className="flex gap-6">
          <FilterPanel
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            selectedAudience={selectedAudience}
            onAudienceChange={handleAudienceChange}
            resultCount={filteredSchemes.length}
          />

          <div className="flex-1 min-w-0">
            <SchemeGrid schemes={filteredSchemes} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

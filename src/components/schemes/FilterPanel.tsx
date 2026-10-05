import { useState } from "react";
import { Search, Filter, X, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../../lib/i18n";
import { categories, audiences } from "../../data";
import { cn } from "../../lib/utils";

interface FilterPanelProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedAudience: string;
  onAudienceChange: (audience: string) => void;
  resultCount: number;
}

export function FilterPanel({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedAudience,
  onAudienceChange,
  resultCount,
}: FilterPanelProps) {
  const { lang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const hasFilters = searchQuery || selectedCategory || selectedAudience;

  const filterContent = (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.hero.searchPlaceholder}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          aria-label={t.filters.search}
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1.5">{t.filters.category}</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
        >
          <option value="">{t.filters.allCategories}</option>
          {categories.map((cat) => (
            <option key={cat.key} value={cat.key}>
              {lang === "hi" ? cat.hi : cat.en}
            </option>
          ))}
        </select>
      </div>

      {/* Audience */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1.5">{t.filters.audience}</label>
        <select
          value={selectedAudience}
          onChange={(e) => onAudienceChange(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
        >
          <option value="">{t.filters.allAudiences}</option>
          {audiences.map((aud) => (
            <option key={aud.key} value={aud.key}>
              {lang === "hi" ? aud.hi : aud.en}
            </option>
          ))}
        </select>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={() => {
            onSearchChange("");
            onCategoryChange("");
            onAudienceChange("");
          }}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <X className="w-4 h-4" />
          {t.filters.clearFilters}
        </button>
      )}

      {/* Result count */}
      <p className="text-sm text-gray-500 text-center pt-2 border-t border-gray-100">
        <span className="font-semibold text-primary-700">{resultCount}</span> {t.filters.schemesFound}
      </p>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-20 bg-white rounded-xl border border-gray-200 p-4">
          <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            {t.filters.title}
          </h2>
          {filterContent}
        </div>
      </aside>

      {/* Mobile filter button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Filter className="w-4 h-4" />
          {t.filters.title}
          {hasFilters && (
            <span className="w-5 h-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center">!</span>
          )}
        </button>
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-900">{t.filters.title}</h2>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full mt-4 px-4 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium"
            >
              {t.filters.applyFilters} ({resultCount} {t.filters.schemesFound})
            </button>
          </div>
        </div>
      )}
    </>
  );
}

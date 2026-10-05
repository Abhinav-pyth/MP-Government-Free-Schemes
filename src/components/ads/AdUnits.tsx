import { useEffect, useRef } from "react";

// Ad configuration
export const AD_CONFIG = {
  leaderboard: {
    key: "bf25528afa3a1f52399a088b5d73cc96",
    width: 728,
    height: 90,
  },
  banner: {
    key: "746a2db3c77adfc44a7f10b6f3fb87a7",
    width: 468,
    height: 60,
  },
  mediumRect: {
    key: "186189361c2df1faa19bdb0a3e028174",
    width: 300,
    height: 250,
  },
  wideSkyscraper: {
    key: "7e5d73a17810fa68290604513e89ac1a",
    width: 160,
    height: 600,
  },
  skyscraper: {
    key: "ed2f72137e41f72f420c87d4d3433aff",
    width: 160,
    height: 300,
  },
  mobileBanner: {
    key: "f27b378c63425f198172381236ab72df",
    width: 320,
    height: 50,
  },
};

interface AdUnitProps {
  adKey: string;
  width: number;
  height: number;
  className?: string;
  id?: string;
}

function AdUnit({ adKey, width, height, className = "", id }: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !containerRef.current) return;
    
    // Set global ad options
    (window as any).atOptions = {
      key: adKey,
      format: "iframe",
      height: height,
      width: width,
      params: {},
    };

    // Load the script
    const script = document.createElement("script");
    script.src = `https://www.highrevenueformat.com/${adKey}/invoke.js`;
    script.async = true;
    containerRef.current.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [adKey, width, height]);

  return (
    <div 
      ref={containerRef} 
      id={id}
      className={`ad-unit overflow-hidden ${className}`}
      style={{ width: `${width}px`, maxWidth: "100%", height: `${height}px` }}
    />
  );
}

// 728x90 Leaderboard - Top of page (desktop only)
export function AdLeaderboard() {
  return (
    <div className="hidden lg:flex justify-center py-3 bg-gray-50 border-b border-gray-100">
      <div className="text-center">
        <AdUnit
          adKey={AD_CONFIG.leaderboard.key}
          width={728}
          height={90}
          id="ad-leaderboard"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

// 300x250 Medium Rectangle - Sidebar (desktop only)
export function AdMediumRect({ className = "" }: { className?: string }) {
  return (
    <div className={`hidden xl:block ${className}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-3">
        <p className="text-[10px] text-gray-400 text-center mb-2 uppercase tracking-wider">Advertisement</p>
        <AdUnit
          adKey={AD_CONFIG.mediumRect.key}
          width={300}
          height={250}
          id="ad-medium-rect"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

// 160x600 Wide Skyscraper - Right sidebar sticky (desktop only)
export function AdWideSkyscraper() {
  return (
    <div className="hidden xxl:block fixed right-4 top-24 z-30" style={{ width: "160px" }}>
      <div className="bg-white rounded-xl border border-gray-200 p-2 shadow-sm">
        <p className="text-[10px] text-gray-400 text-center mb-1 uppercase tracking-wider">Ad</p>
        <AdUnit
          adKey={AD_CONFIG.wideSkyscraper.key}
          width={160}
          height={600}
          id="ad-wide-skyscraper"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

// 320x50 Mobile Banner - Sticky bottom (mobile only)
export function AdMobileBanner() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-center py-1">
        <AdUnit
          adKey={AD_CONFIG.mobileBanner.key}
          width={320}
          height={50}
          id="ad-mobile-banner"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

// 468x60 Banner - In content
export function AdBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`hidden md:flex justify-center py-4 ${className}`}>
      <div className="text-center">
        <p className="text-[10px] text-gray-400 text-center mb-1 uppercase tracking-wider">Advertisement</p>
        <AdUnit
          adKey={AD_CONFIG.banner.key}
          width={468}
          height={60}
          id="ad-banner"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

// Native Banner - In content
export function AdNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl31673914.profitableratecpmnetwork.com/21dd19711121feba6778e177b06675a6/invoke.js";
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="my-6">
      <p className="text-[10px] text-gray-400 text-center mb-2 uppercase tracking-wider">Advertisement</p>
      <div ref={containerRef} id="container-21dd19711121feba6778e177b06675a6" className="mx-auto max-w-3xl" />
    </div>
  );
}

// Popunder - Goes in head (invisible)
export function AdPopunder() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pl31673915.profitableratecpmnetwork.com/73/41/d8/7341d8e5f0412ae124333aa33a9395f1.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

// Social Bar - Goes at bottom (invisible widget)
export function AdSocialBar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pl31673917.profitableratecpmnetwork.com/7b/62/12/7b6212083287f63dfce82fb2abf6bcc1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {}
    };
  }, []);

  return null;
}

// Ad Container for scheme detail pages
export function AdInContent() {
  return (
    <div className="my-8">
      <AdBanner />
      <AdNativeBanner />
    </div>
  );
}

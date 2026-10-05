import { useState, useEffect, useCallback } from "react";
import { ExternalLink, X, Shield } from "lucide-react";
import { useLanguage } from "../../lib/i18n";
import { getDomainFromUrl } from "../../lib/utils";

interface ExternalRedirectModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ExternalRedirectModal({ url, isOpen, onClose }: ExternalRedirectModalProps) {
  const { t } = useLanguage();
  const domain = getDomainFromUrl(url);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="redirect-title">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 z-10 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-amber-600" />
          </div>
          <h2 id="redirect-title" className="text-lg font-semibold text-gray-900">
            {t.externalLink.title}
          </h2>
        </div>

        <p className="text-gray-600 mb-3">{t.externalLink.message}</p>

        <div className="bg-gray-50 rounded-lg p-3 mb-6 flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-gray-500 shrink-0" />
          <span className="text-sm font-mono text-gray-700 truncate">{domain}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            {t.externalLink.cancel}
          </button>
          <button
            onClick={handleProceed}
            className="flex-1 px-4 py-2.5 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            {t.externalLink.proceed}
          </button>
        </div>
      </div>
    </div>
  );
}

interface OfficialLinkProps {
  url: string;
  label?: string;
  className?: string;
}

export function OfficialLink({ url, label, className = "" }: OfficialLinkProps) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors ${className}`}
      >
        <ExternalLink className="w-4 h-4" />
        {label || t.scheme.officialLink}
      </button>
      <ExternalRedirectModal
        url={url}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

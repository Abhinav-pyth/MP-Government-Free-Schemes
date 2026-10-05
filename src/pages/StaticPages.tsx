import { useLanguage } from "../lib/i18n";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: lang === "hi" ? "गोपनीयता नीति" : "Privacy Policy" }]} />
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {lang === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p>
              {lang === "hi"
                ? "यह वेबसाइट आपकी गोपनीयता का सम्मान करती है। हम केवल उतनी ही व्यक्तिगत जानकारी एकत्र करते हैं जितनी हेल्प डेस्क फॉर्म के माध्यम से आपके प्रश्नों का उत्तर देने के लिए आवश्यक है।"
                : "This website respects your privacy. We collect only the personal information necessary to respond to your queries through the Help Desk form."}
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === "hi" ? "एकत्र की गई जानकारी" : "Information Collected"}
            </h2>
            <p>
              {lang === "hi"
                ? "हेल्प डेस्क फॉर्म के माध्यम से: नाम, ईमेल, फ़ोन नंबर, और प्रश्न। यह जानकारी केवल आपके प्रश्न का उत्तर देने के लिए उपयोग की जाती है।"
                : "Through the Help Desk form: Name, email, phone number, and query. This information is used only to respond to your query."}
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === "hi" ? "डेटा सुरक्षा" : "Data Security"}
            </h2>
            <p>
              {lang === "hi"
                ? "हम आपकी जानकारी को सुरक्षित रखने के लिए उचित तकनीकी उपाय करते हैं। हम आपकी जानकारी तीसरे पक्ष को नहीं बेचते या साझा नहीं करते।"
                : "We take appropriate technical measures to keep your information secure. We do not sell or share your information with third parties."}
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === "hi" ? "कुकीज़" : "Cookies"}
            </h2>
            <p>
              {lang === "hi"
                ? "यह वेबसाइट भाषा प्राथमिकता को स्थानीय रूप से स्टोर करने के लिए localStorage का उपयोग करती है। कोई ट्रैकिंग कुकीज़ का उपयोग नहीं किया जाता।"
                : "This website uses localStorage to store language preference. No tracking cookies are used."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TermsPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: lang === "hi" ? "नियम एवं शर्तें" : "Terms & Conditions" }]} />
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {lang === "hi" ? "नियम एवं शर्तें" : "Terms & Conditions"}
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p>
              {lang === "hi"
                ? "इस वेबसाइट का उपयोग करके, आप इन नियमों और शर्तों से सहमत होते हैं।"
                : "By using this website, you agree to these terms and conditions."}
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === "hi" ? "सूचना उद्देश्य" : "Informational Purpose"}
            </h2>
            <p>
              {lang === "hi"
                ? "यह वेबसाइट केवल सूचना के उद्देश्य से है। यह किसी भी सरकारी योजना के लिए आधिकारिक स्रोत नहीं है। सभी जानकारी सार्वजनिक स्रोतों से संकलित है और बदल सकती है।"
                : "This website is for informational purposes only. It is not an official source for any government scheme. All information is compiled from public sources and may change."}
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === "hi" ? "कोई गारंटी नहीं" : "No Guarantee"}
            </h2>
            <p>
              {lang === "hi"
                ? "हम योजना की पात्रता, लाभ स्वीकृति, या भुगतान की गारंटी नहीं देते हैं। आवेदन करने से पहले हमेशा आधिकारिक सरकारी पोर्टल पर जानकारी की पुष्टि करें।"
                : "We do not guarantee scheme eligibility, benefit approval, or payment. Always verify information on the official government portal before applying."}
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {lang === "hi" ? "बाहरी लिंक" : "External Links"}
            </h2>
            <p>
              {lang === "hi"
                ? "इस वेबसाइट पर आधिकारिक सरकारी वेबसाइटों के लिंक हैं। हम बाहरी वेबसाइटों की सामग्री के लिए जिम्मेदार नहीं हैं।"
                : "This website contains links to official government websites. We are not responsible for the content of external websites."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: lang === "hi" ? "अस्वीकरण" : "Disclaimer" }]} />
        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {lang === "hi" ? "अस्वीकरण" : "Disclaimer"}
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p className="font-medium text-gray-900">{t.footer.disclaimerText}</p>
            <p>{t.footer.notOfficial}</p>
            <p>
              {lang === "hi"
                ? "इस वेबसाइट पर दी गई जानकारी सामान्य सूचना के उद्देश्य से है। हम जानकारी की सटीकता, पूर्णता या वर्तमानता के बारे में कोई प्रतिनिधित्व या वारंटी नहीं देते हैं।"
                : "The information provided on this website is for general informational purposes. We make no representation or warranty about the accuracy, completeness, or currentness of the information."}
            </p>
            <p>
              {lang === "hi"
                ? "किसी भी सरकारी योजना के लिए आवेदन करने का निर्णय पूरी तरह से आपके अपने विवेक पर है। हम किसी भी नुकसान या क्षति के लिए जिम्मेदार नहीं हैं।"
                : "The decision to apply for any government scheme is entirely at your own discretion. We are not responsible for any loss or damage."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

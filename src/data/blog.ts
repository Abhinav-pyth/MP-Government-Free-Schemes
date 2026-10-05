import { BlogPost } from "./index";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-link-samagra-aadhaar",
    title: {
      hi: "Samagra e-KYC ऑनलाइन कैसे पूरा करें — 5 आसान चरण",
      en: "How to Complete Your Samagra e-KYC Online in 5 Steps",
    },
    excerpt: {
      hi: "Samagra e-KYC प्रक्रिया को ऑनलाइन पूरा करने का चरण-दर-चरण मार्गदर्शन। जानिए आवश्यक दस्तावेज, सामान्य समस्याएं और समाधान।",
      en: "Step-by-step guide to completing the Samagra e-KYC process online. Learn about required documents, common problems, and solutions.",
    },
    image: "/images/blog-samagra.svg",
    content: {
      hi: `<h2>Samagra e-KYC क्या है?</h2>
<p>Samagra e-KYC मध्य प्रदेश सरकार की एक डिजिटल पहचान सत्यापन प्रक्रिया है जो नागरिकों की पहचान को उनके समग्र आईडी से जोड़ती है। यह विभिन्न सरकारी योजनाओं के लाभ प्राप्त करने के लिए आवश्यक है।</p>

<h2>यह क्यों आवश्यक है?</h2>
<p>सरकारी योजनाओं के लाभ सीधे बैंक खाते में (DBT) प्राप्त करने के लिए e-KYC अनिवार्य है। बिना e-KYC के कई योजनाओं का लाभ नहीं मिल सकता।</p>

<h2>आवश्यक दस्तावेज/विवरण</h2>
<ul>
<li>समग्र आईडी नंबर</li>
<li>आधार कार्ड (मोबाइल से लिंक)</li>
<li>सक्रिय मोबाइल नंबर</li>
<li>बैंक खाता विवरण</li>
</ul>

<h2>5 आसान चरण</h2>
<ol>
<li><strong>चरण 1:</strong> समग्र पोर्टल (samagra.gov.in) पर जाएं और "e-KYC" विकल्प चुनें</li>
<li><strong>चरण 2:</strong> अपनी समग्र आईडी दर्ज करें और OTP सत्यापन पूरा करें</li>
<li><strong>चरण 3:</strong> आधार बायोमेट्रिक या OTP से सत्यापन करें</li>
<li><strong>चरण 4:</strong> बैंक खाता विवरण सत्यापित करें और DBT लिंक सुनिश्चित करें</li>
<li><strong>चरण 5:</strong> सफलतापूर्वक सबमिट करें और रसीद डाउनलोड करें</li>
</ol>

<h2>सामान्य समस्याएं</h2>
<ul>
<li>OTP प्राप्त न होना - मोबाइल नंबर सही जांचें</li>
<li>बायोमेट्रिक मेल न खाना - निकटतम CSC केंद्र जाएं</li>
<li>नाम मेल नहीं खाता - समग्र पोर्टल पर सुधार करवाएं</li>
</ul>

<h2>महत्वपूर्ण सुरक्षा सलाह</h2>
<p>किसी भी अनजान व्यक्ति को अपना OTP या आधार विवरण न दें। हमेशा आधिकारिक पोर्टल पर ही प्रक्रिया पूरी करें।</p>

<p><strong>नोट:</strong> नवीनतम जानकारी के लिए हमेशा आधिकारिक समग्र पोर्टल पर जांचें।</strong></p>`,
      en: `<h2>What is Samagra e-KYC?</h2>
<p>Samagra e-KYC is a digital identity verification process by the Madhya Pradesh government that links citizens' identities to their Samagra ID. It is required to receive benefits from various government schemes.</p>

<h2>Why is it required?</h2>
<p>e-KYC is mandatory to receive government scheme benefits directly in bank accounts (DBT). Without e-KYC, benefits from many schemes cannot be availed.</p>

<h2>Required Documents/Details</h2>
<ul>
<li>Samagra ID number</li>
<li>Aadhaar Card (linked with mobile)</li>
<li>Active mobile number</li>
<li>Bank account details</li>
</ul>

<h2>5 Easy Steps</h2>
<ol>
<li><strong>Step 1:</strong> Visit the Samagra portal (samagra.gov.in) and select "e-KYC" option</li>
<li><strong>Step 2:</strong> Enter your Samagra ID and complete OTP verification</li>
<li><strong>Step 3:</strong> Verify with Aadhaar biometric or OTP</li>
<li><strong>Step 4:</strong> Verify bank account details and ensure DBT linking</li>
<li><strong>Step 5:</strong> Submit successfully and download receipt</li>
</ol>

<h2>Common Problems</h2>
<ul>
<li>OTP not received - Verify your mobile number is correct</li>
<li>Biometric mismatch - Visit nearest CSC center</li>
<li>Name mismatch - Get corrections done on Samagra portal</li>
</ul>

<h2>Important Safety Advice</h2>
<p>Never share your OTP or Aadhaar details with unknown persons. Always complete the process only on the official portal.</p>

<p><strong>Note:</strong> Always check the official Samagra portal for the latest information.</strong></p>`,
    },
    date: "2024-01-15",
    readingTime: 5,
    author: "MP Schemes Team",
    category: "Guide",
    relatedSchemes: ["ladli-bahna", "ladli-laxmi", "sambal-welfare"],
  },
  {
    slug: "tracking-dbt-status",
    title: {
      hi: "सरकारी योजना का DBT बैंक अकाउंट मैपिंग स्टेटस कैसे चेक करें",
      en: "A Complete Guide to Checking Your DBT Bank Account Mapping Status",
    },
    excerpt: {
      hi: "DBT स्टेटस चेक करने, बैंक अकाउंट मैपिंग, आधार लिंकिंग और भुगतान न मिलने की स्थिति में क्या करें - पूरी जानकारी।",
      en: "Complete information on checking DBT status, bank account mapping, Aadhaar linking, and what to do if payment is not received.",
    },
    image: "/images/blog-dbt.svg",
    content: {
      hi: `<h2>DBT क्या है?</h2>
<p>DBT (Direct Benefit Transfer) एक ऐसी प्रणाली है जिसके माध्यम से सरकार सीधे लाभार्थी के बैंक खाते में धनराशि भेजती है। इससे बिचौलियों की समस्या समाप्त होती है और लाभ सीधे नागरिक तक पहुंचता है।</p>

<h2>बैंक मैपिंग क्यों महत्वपूर्ण है?</h2>
<p>बैंक अकाउंट मैपिंग का अर्थ है कि आपका बैंक खाता सरकारी DBT प्रणाली से जुड़ा हुआ है। यदि मैपिंग नहीं है तो भुगतान आपके खाते में नहीं पहुंचेगा।</p>

<h2>आधार-बैंक लिंकिंग</h2>
<p>DBT भुगतान प्राप्त करने के लिए आपका बैंक खाता आधार से NPCI (National Payments Corporation of India) के माध्यम से लिंक होना चाहिए।</p>

<h2>स्टेटस कैसे चेक करें</h2>
<ol>
<li>PFMS पोर्टल (pfms.nic.in) पर जाएं</li>
<li>"Track Aadhaar" विकल्प चुनें</li>
<li>अपना आधार नंबर दर्ज करें</li>
<li>बैंक खाता मैपिंग स्टेटस देखें</li>
<li>यदि मैप नहीं है, तो बैंक जाएं और NPCI लिंकिंग करवाएं</li>
</ol>

<h2>भुगतान न मिलने के सामान्य कारण</h2>
<ul>
<li>बैंक खाता DBT से मैप नहीं है</li>
<li>आधार-NPCI लिंकिंग नहीं है</li>
<li>बैंक खाता निष्क्रिय (inactive) है</li>
<li>नाम/विवरण में विसंगति</li>
<li>e-KYC पूर्ण नहीं है</li>
</ul>

<h2>भुगतान न मिले तो क्या करें?</h2>
<ol>
<li>पहले बैंक मैपिंग स्टेटस चेक करें</li>
<li>बैंक जाकर NPCI मैपिंग करवाएं</li>
<li>बैंक खाता सक्रिय करें यदि निष्क्रिय है</li>
<li>संबंधित विभाग से संपर्क करें</li>
<li>हेल्पलाइन नंबर पर कॉल करें</li>
</ol>

<h2>महत्वपूर्ण सावधानियां</h2>
<ul>
<li>बैंक खाता हमेशा सक्रिय रखें</li>
<li>मोबाइल नंबर बैंक से लिंक रखें</li>
<li>नियमित रूप से पासबुक अपडेट करें</li>
<li>किसी को भी OTP/OTP न दें</li>
</ul>

<p><strong>नोट:</strong> आधिकारिक जानकारी के लिए हमेशा संबंधित सरकारी पोर्टल पर जांचें।</strong></p>`,
      en: `<h2>What is DBT?</h2>
<p>DBT (Direct Benefit Transfer) is a system through which the government sends money directly to the beneficiary's bank account. This eliminates middlemen and ensures benefits reach citizens directly.</p>

<h2>Why Bank Mapping Matters</h2>
<p>Bank account mapping means your bank account is linked to the government DBT system. If mapping is not done, payments will not reach your account.</p>

<h2>Aadhaar-Bank Linking</h2>
<p>To receive DBT payments, your bank account must be linked with Aadhaar through NPCI (National Payments Corporation of India).</p>

<h2>How to Check Status</h2>
<ol>
<li>Visit PFMS portal (pfms.nic.in)</li>
<li>Select "Track Aadhaar" option</li>
<li>Enter your Aadhaar number</li>
<li>Check bank account mapping status</li>
<li>If not mapped, visit bank and get NPCI linking done</li>
</ol>

<h2>Common Reasons for Payment Failure</h2>
<ul>
<li>Bank account not mapped with DBT</li>
<li>Aadhaar-NPCI linking not done</li>
<li>Bank account is inactive</li>
<li>Name/details mismatch</li>
<li>e-KYC not completed</li>
</ul>

<h2>What to Do If Payment Not Received</h2>
<ol>
<li>First check bank mapping status</li>
<li>Visit bank and get NPCI mapping done</li>
<li>Activate bank account if inactive</li>
<li>Contact the concerned department</li>
<li>Call the helpline number</li>
</ol>

<h2>Important Precautions</h2>
<ul>
<li>Always keep bank account active</li>
<li>Keep mobile number linked with bank</li>
<li>Regularly update passbook</li>
<li>Never share OTP with anyone</li>
</ul>

<p><strong>Note:</strong> Always check the relevant government portal for official information.</strong></p>`,
    },
    date: "2024-02-01",
    readingTime: 6,
    author: "MP Schemes Team",
    category: "Guide",
    relatedSchemes: ["ladli-bahna", "kisan-kalyan", "sambal-welfare"],
  },
];

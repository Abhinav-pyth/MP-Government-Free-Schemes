import { Scheme } from "./index";

export const schemes: Scheme[] = [
  {
    id: "ladli-bahna",
    name: { hi: "लाड़ली बहना योजना", en: "Ladli Bahna Yojana" },
    category: { hi: "महिला एवं बाल कल्याण", en: "Women & Child Welfare", key: "women-child" },
    overview: {
      hi: "आर्थिक आत्मनिर्भरता और पोषण में सहायता के लिए ₹1,250 प्रति माह की वित्तीय सहायता।",
      en: "₹1,250/month financial aid for economic independence and nutrition.",
    },
    eligibility: {
      hi: ["मध्य प्रदेश की स्थायी निवासी महिला", "23 से 60 वर्ष की आयु", "पारिवारिक वार्षिक आय ₹2.5 लाख से कम", "परिवार में कोई आयकर दाता नहीं"],
      en: ["Permanent resident of Madhya Pradesh", "Age between 23 to 60 years", "Family annual income less than ₹2.5 lakhs", "No income tax payer in the family"],
    },
    benefits: {
      hi: ["₹1,250 प्रति माह सीधा बैंक खाते में", "आर्थिक आत्मनिर्भरता में सहायक", "पोषण और स्वास्थ्य में सुधार"],
      en: ["₹1,250 per month directly to bank account", "Helps in economic independence", "Improves nutrition and health"],
    },
    documents: {
      hi: ["समग्र आईडी", "आधार कार्ड", "DBT से लिंक बैंक खाता", "सक्रिय मोबाइल नंबर"],
      en: ["Samagra ID", "Aadhaar Card", "Bank Account linked with DBT", "Active Mobile Number"],
    },
    applicationProcess: {
      hi: ["ग्राम पंचायत/वार्ड कार्यालय जाएं", "भौतिक आवेदन फॉर्म भरें", "बायोमेट्रिक सत्यापन पूरा करें", "DBT पोर्टल पर स्थिति जांचें"],
      en: ["Visit Gram Panchayat/Ward office", "Fill out physical form", "Complete biometric verification", "Check status on DBT portal"],
    },
    targetAudience: ["women"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["लाड़ली बहना", "महिला", "वित्तीय सहायता", "1250"], en: ["ladli bahna", "women", "financial aid", "1250"] },
    icon: "Heart",
  },
  {
    id: "ladli-laxmi",
    name: { hi: "लाड़ली लक्ष्मी योजना", en: "Ladli Laxmi Yojana" },
    category: { hi: "महिला एवं बाल कल्याण", en: "Women & Child Welfare", key: "women-child" },
    overview: {
      hi: "बालिकाओं की उच्च शिक्षा को प्रोत्साहित करने और बाल विवाह को रोकने के उद्देश्य से बचत प्रमाणपत्र एवं विभिन्न चरणों पर वित्तीय सहायता।",
      en: "Savings certificates and milestone-based financial support to ensure higher education and stop child marriage.",
    },
    eligibility: {
      hi: ["मध्य प्रदेश की स्थायी निवासी", "दो बालिकाओं तक सीमित (जुड़वां को छोड़कर)", "परिवार की वार्षिक आय सीमा के अंदर", "बालिका का जन्म प्रमाणित हो"],
      en: ["Permanent resident of Madhya Pradesh", "Limited to two girl children (except twins)", "Within family annual income limit", "Birth of girl child must be certified"],
    },
    benefits: {
      hi: ["बचत प्रमाणपत्र में निवेश", "कक्षा 6, 9, 11, 12 पर वित्तीय सहायता", "21 वर्ष की आयु पर एकमुश्त राशि", "उच्च शिक्षा प्रोत्साहन"],
      en: ["Investment in savings certificates", "Financial support at Class 6, 9, 11, 12", "Lump sum amount at age 21", "Higher education incentive"],
    },
    documents: {
      hi: ["बालिका का जन्म प्रमाण पत्र", "माता-पिता का मध्य प्रदेश निवास प्रमाण", "परिवार की समग्र आईडी", "परिवार नियोजन प्रमाण पत्र, यदि लागू हो"],
      en: ["Girl child birth certificate", "Parents' MP domicile proof", "Family Samagra ID", "Family planning certificate, if applicable"],
    },
    applicationProcess: {
      hi: ["लाड़ली लक्ष्मी पोर्टल पर ऑनलाइन आवेदन करें", "या निकटतम आंगनवाड़ी केंद्र जाएं", "आवश्यक दस्तावेज जमा करें", "सत्यापन के बाद लाभ प्रारंभ"],
      en: ["Apply online via the Ladli Laxmi portal", "Or visit the nearest Anganwadi center for offline submission", "Submit required documents", "Benefits begin after verification"],
    },
    targetAudience: ["women"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["लाड़ली लक्ष्मी", "बालिका", "बचत", "शिक्षा"], en: ["ladli laxmi", "girl child", "savings", "education"] },
    icon: "Baby",
  },
  {
    id: "kanya-vivah",
    name: { hi: "कन्या विवाह योजना", en: "Kanya Vivah Yojana" },
    category: { hi: "महिला एवं बाल कल्याण", en: "Women & Child Welfare", key: "women-child" },
    overview: {
      hi: "गरीब, बेसहारा या विधवा परिवारों की बेटियों के सामूहिक विवाह के लिए राज्य द्वारा वित्तीय सहायता और अनुदान।",
      en: "Financial aid and grants provided by the state for the mass marriage of daughters from poor, destitute, or widowed families.",
    },
    eligibility: {
      hi: ["BPL परिवार की बेटियां", "वधू की आयु 18 वर्ष या अधिक", "वर की आयु 21 वर्ष या अधिक", "मध्य प्रदेश का स्थायी निवासी"],
      en: ["Daughters from BPL families", "Bride age 18 years or above", "Groom age 21 years or above", "Permanent resident of Madhya Pradesh"],
    },
    benefits: {
      hi: ["सामूहिक विवाह में वित्तीय सहायता", "विवाह खर्च में राहत", "सम्मानजनक विवाह सुनिश्चित"],
      en: ["Financial assistance in mass marriage events", "Relief in marriage expenses", "Ensures dignified marriage"],
    },
    documents: {
      hi: ["निवास प्रमाण पत्र", "वर एवं वधू की आयु का प्रमाण", "बीपीएल राशन कार्ड", "समग्र आईडी", "पासपोर्ट आकार के फोटो"],
      en: ["Domicile certificate", "Bride and Groom age proofs", "BPL Ration card", "Samagra ID", "Passport-size photos"],
    },
    applicationProcess: {
      hi: ["सामूहिक विवाह कार्यक्रम से पहले आवेदन करें", "स्थानीय ग्राम पंचायत/जनपद पंचायत में जमा करें", "दस्तावेजों का सत्यापन", "स्वीकृति के बाद अनुदान प्राप्त करें"],
      en: ["Submit application prior to the mass marriage event", "Submit to local Gram Panchayat, Janpad Panchayat, or Urban Local Body", "Document verification", "Receive grant after approval"],
    },
    targetAudience: ["women"],
    officialLink: "https://mpvivahportal.nic.in",
    keywords: { hi: ["कन्या विवाह", "सामूहिक विवाह", "अनुदान"], en: ["kanya vivah", "mass marriage", "grant"] },
    icon: "Heart",
  },
  {
    id: "medhavi-vidyarthi",
    name: { hi: "मुख्यमंत्री मेधावी विद्यार्थी योजना", en: "Mukhya Mantri Medhavi Vidyarthi Yojana" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "कक्षा 12 में उत्कृष्ट प्रदर्शन करने वाले मेधावी विद्यार्थियों की उच्च शिक्षा की 100% ट्यूशन फीस को कवर करने के लिए सहायता।",
      en: "Covers 100% tuition fees for higher education for high-scoring meritorious students in Class 12.",
    },
    eligibility: {
      hi: ["कक्षा 12 में 75% या अधिक अंक", "मध्य प्रदेश का स्थायी निवासी", "पारिवारिक वार्षिक आय ₹6 लाख से कम", "मान्यता प्राप्त संस्थान में प्रवेश"],
      en: ["75% or above marks in Class 12", "Permanent resident of Madhya Pradesh", "Family annual income less than ₹6 lakhs", "Admission in a recognized institution"],
    },
    benefits: {
      hi: ["100% ट्यूशन फीस कवर", "उच्च शिक्षा तक पहुंच", "आर्थिक बोझ में कमी"],
      en: ["100% tuition fee coverage", "Access to higher education", "Reduced financial burden"],
    },
    documents: {
      hi: ["कक्षा 10 एवं 12 की अंकसूची", "आय प्रमाण पत्र (< ₹6 लाख/वर्ष)", "मध्य प्रदेश निवास प्रमाण पत्र", "आधार कार्ड", "कॉलेज प्रवेश पत्र"],
      en: ["Class 10 & 12 Marksheets", "Income Certificate (< ₹6 Lakhs/year)", "MP Domicile Certificate", "Aadhaar Card", "College Admission Letter"],
    },
    applicationProcess: {
      hi: ["MMVY पोर्टल पर पंजीकरण करें", "शैक्षणिक एवं प्रवेश संबंधी दस्तावेज अपलोड करें", "संस्थान के नोडल अधिकारी को आवश्यक दस्तावेज जमा करें", "स्वीकृति के बाद फीस सीधे संस्थान को"],
      en: ["Register on the MMVY portal", "Upload academic admission receipts", "Submit physical dossier to the institute's nodal officer", "After approval, fees paid directly to institution"],
    },
    targetAudience: ["students"],
    officialLink: "https://mp.nic.in",
    keywords: { hi: ["मेधावी विद्यार्थी", "ट्यूशन फीस", "उच्च शिक्षा", "छात्रवृत्ति"], en: ["medhavi vidyarthi", "tuition fee", "higher education", "scholarship"] },
    icon: "GraduationCap",
  },
  {
    id: "gaon-ki-beti",
    name: { hi: "गांव की बेटी योजना", en: "Gaon Ki Beti Yojana" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "कक्षा 12 प्रथम श्रेणी से उत्तीर्ण ग्रामीण छात्राओं को उच्च शिक्षा जारी रखने के लिए मासिक छात्रवृत्ति एवं प्रोत्साहन।",
      en: "Monthly financial scholarships and incentives for rural girl students who pass Class 12 with first division to pursue higher education.",
    },
    eligibility: {
      hi: ["ग्रामीण क्षेत्र की निवासी", "कक्षा 12 प्रथम श्रेणी से उत्तीर्ण", "उच्च शिक्षा में प्रवेशित", "मध्य प्रदेश की स्थायी निवासी"],
      en: ["Resident of rural area", "Passed Class 12 with first division", "Enrolled in higher education", "Permanent resident of Madhya Pradesh"],
    },
    benefits: {
      hi: ["मासिक छात्रवृत्ति", "उच्च शिक्षा प्रोत्साहन", "आर्थिक सहायता"],
      en: ["Monthly scholarship", "Higher education incentive", "Financial assistance"],
    },
    documents: {
      hi: ["कक्षा 12 की अंकसूची", "ग्रामीण क्षेत्र का निवास प्रमाण पत्र", "समग्र आईडी", "बैंक पासबुक", "कॉलेज प्रवेश प्रमाण पत्र"],
      en: ["Class 12 Marksheet", "Rural Area Domicile Certificate", "Samagra ID", "Bank Passbook", "College Admission Certificate"],
    },
    applicationProcess: {
      hi: ["MP State Scholarship Portal पर पंजीकरण करें", "गांव की बेटी आवेदन फॉर्म भरें", "कॉलेज में दस्तावेजों का सत्यापन करवाएं", "स्वीकृति के बाद छात्रवृत्ति प्राप्त करें"],
      en: ["Register on the MP State Scholarship Portal", "Complete the Gaon Ki Beti application form", "Get documents verified at your college", "Receive scholarship after approval"],
    },
    targetAudience: ["students"],
    officialLink: "https://mp.nic.in",
    keywords: { hi: ["गांव की बेटी", "ग्रामीण", "छात्रवृत्ति", "बालिका"], en: ["gaon ki beti", "rural", "scholarship", "girl student"] },
    icon: "GraduationCap",
  },
  {
    id: "cycle-laptop-scooty",
    name: { hi: "निःशुल्क साइकिल, लैपटॉप एवं स्कूटी योजना", en: "Free Cycle, Laptop & Scooty Schemes" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "घर से दूर उच्च कक्षाओं में प्रवेश लेने वाले ग्रामीण विद्यार्थियों को निःशुल्क साइकिल तथा कक्षा 12 के उत्कृष्ट विद्यार्थियों को लैपटॉप/स्कूटी प्रोत्साहन।",
      en: "Free distribution of bicycles to rural students entering higher classes far from home, alongside laptop/scooter incentives for top Class 12 scorers.",
    },
    eligibility: {
      hi: ["ग्रामीण क्षेत्र के विद्यार्थी", "कक्षा 6/9 में प्रवेश (साइकिल के लिए)", "कक्षा 12 में उत्कृष्ट अंक (लैपटॉप/स्कूटी के लिए)", "मध्य प्रदेश का निवासी"],
      en: ["Students from rural areas", "Entering Class 6/9 (for cycle)", "Excellent marks in Class 12 (for laptop/scooty)", "Resident of Madhya Pradesh"],
    },
    benefits: {
      hi: ["निःशुल्क साइकिल", "लैपटॉप प्रोत्साहन", "स्कूटी प्रोत्साहन", "शिक्षा तक पहुंच में सुधार"],
      en: ["Free bicycle", "Laptop incentive", "Scooty incentive", "Improved access to education"],
    },
    documents: {
      hi: ["कक्षा 12/6/9 की अंकसूची", "आधार कार्ड", "निवास प्रमाण पत्र", "आधार से लिंक बैंक खाता"],
      en: ["Class 12/Class 6/9 Marksheet", "Aadhaar Card", "Domicile certificate", "Bank account linked with Aadhaar"],
    },
    applicationProcess: {
      hi: ["मेधावी विद्यार्थियों का डेटा शिक्षा पोर्टल के माध्यम से लिया जाता है", "DBT सीधे बैंक खातों में भेजा जाता है", "साइकिल/स्कूटी का वितरण विद्यालय स्तर के कार्यक्रमों के माध्यम से"],
      en: ["Meritorious student data is pulled automatically via the Education Portal", "DBTs are pushed directly to bank accounts", "Cycles/scooties are distributed via school events"],
    },
    targetAudience: ["students"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["साइकिल", "लैपटॉप", "स्कूटी", "निःशुल्क"], en: ["cycle", "laptop", "scooty", "free"] },
    icon: "GraduationCap",
  },
  {
    id: "seekho-kamao",
    name: { hi: "मुख्यमंत्री सीखो कमाओ योजना", en: "Mukhya Mantri Seekho Kamao Yojana" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "बेरोजगार युवाओं के लिए कौशल प्रशिक्षण कार्यक्रम जिसमें उद्योगों में प्रशिक्षण/प्लेसमेंट के अवसर और ₹8,000 से ₹10,000 तक मासिक स्टाइपेंड शामिल है।",
      en: "Skill training program for unemployed youth providing industry placement opportunities alongside a monthly stipend of ₹8,000 to ₹10,000.",
    },
    eligibility: {
      hi: ["18 से 29 वर्ष की आयु", "मध्य प्रदेश का स्थायी निवासी", "कक्षा 12/ITI/डिप्लोमा/स्नातक उत्तीर्ण", "बेरोजगार"],
      en: ["Age 18 to 29 years", "Permanent resident of Madhya Pradesh", "Passed Class 12/ITI/Diploma/Graduation", "Unemployed"],
    },
    benefits: {
      hi: ["₹8,000 से ₹10,000 मासिक स्टाइपेंड", "कौशल प्रशिक्षण", "उद्योग में प्लेसमेंट", "रोजगार के अवसर"],
      en: ["₹8,000 to ₹10,000 monthly stipend", "Skill training", "Industry placement", "Employment opportunities"],
    },
    documents: {
      hi: ["कक्षा 12/आईटीआई/डिप्लोमा/स्नातक उत्तीर्ण प्रमाण पत्र", "समग्र आईडी", "आधार कार्ड", "निवास प्रमाण पत्र"],
      en: ["Class 12/ITI/Diploma/Graduation passing certificates", "Samagra ID", "Aadhaar Card", "Domicile Certificate"],
    },
    applicationProcess: {
      hi: ["MMSKY पोर्टल पर उम्मीदवार के रूप में पंजीकरण करें", "प्रोफाइल e-KYC पूरा करें", "पसंदीदा कौशल/कोर्स चुनें", "कंपनी की रिक्तियों के लिए आवेदन करें और ऑनलाइन अनुबंध स्वीकार करें"],
      en: ["Register as a candidate on the MMSKY portal", "Complete profile e-KYC", "Select preferred skills/courses", "Apply for company vacancies and accept contracts online"],
    },
    targetAudience: ["students"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["सीखो कमाओ", "कौशल", "प्रशिक्षण", "रोजगार", "स्टाइपेंड"], en: ["seekho kamao", "skill", "training", "employment", "stipend"] },
    icon: "Briefcase",
  },
  {
    id: "kisan-kalyan",
    name: { hi: "मुख्यमंत्री किसान कल्याण योजना", en: "Mukhyamantri Kisan Kalyan Yojana" },
    category: { hi: "कृषि एवं किसान", en: "Agriculture & Farmers", key: "agriculture" },
    overview: {
      hi: "किसानों को केंद्र की PM-Kisan सहायता के साथ ₹4,000 वार्षिक नकद सहायता दो किस्तों में प्रदान की जाती है।",
      en: "Income support of ₹4,000 yearly cash incentive paid to farmers in two installments alongside central PM-Kisan funds.",
    },
    eligibility: {
      hi: ["मध्य प्रदेश का किसान", "भूमि धारक", "PM-Kisan पोर्टल पर पंजीकृत", "वर्तमान खेती कर रहे हों"],
      en: ["Farmer in Madhya Pradesh", "Land holder", "Registered on PM-Kisan portal", "Currently engaged in farming"],
    },
    benefits: {
      hi: ["₹4,000 वार्षिक अतिरिक्त सहायता", "PM-Kisan के साथ संयुक्त लाभ", "दो किस्तों में भुगतान"],
      en: ["₹4,000 yearly additional support", "Combined benefit with PM-Kisan", "Paid in two installments"],
    },
    documents: {
      hi: ["भूमि संबंधी दस्तावेज (खसरा/खतौनी)", "PM-Kisan पंजीकरण संख्या", "आधार कार्ड", "बैंक पासबुक"],
      en: ["Land registry papers (Khasra/Khatauni)", "PM-Kisan registration number", "Aadhaar Card", "Bank Passbook"],
    },
    applicationProcess: {
      hi: ["PM-Kisan पोर्टल के डेटा के माध्यम से स्वतः सत्यापन", "या मैनुअल सत्यापन के लिए स्थानीय पटवारी को भूमि रिकॉर्ड जमा करें", "सत्यापन के बाद DBT द्वारा भुगतान"],
      en: ["Verified automatically via PM-Kisan portal data", "Or submit land records to your local Patwari for manual verification", "Payment via DBT after verification"],
    },
    targetAudience: ["farmers"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["किसान कल्याण", "PM-Kisan", "₹4000", "कृषि"], en: ["kisan kalyan", "PM-Kisan", "4000", "agriculture"] },
    icon: "Tractor",
  },
  {
    id: "free-electricity-farmers",
    name: { hi: "किसानों के लिए निःशुल्क/सब्सिडी बिजली", en: "Free/Subsidized Electricity for Farmers" },
    category: { hi: "कृषि एवं किसान", en: "Agriculture & Farmers", key: "agriculture" },
    overview: {
      hi: "पात्र कम आय वाले SC/ST एवं सीमांत किसानों के लिए 5HP तक के कृषि पंप कनेक्शनों पर निःशुल्क या अत्यधिक रियायती बिजली आपूर्ति।",
      en: "Free or heavily subsidized electricity supply for agricultural pump connections up to 5HP for eligible low-income SC/ST and marginal farmers.",
    },
    eligibility: {
      hi: ["कृषि भूमि धारक", "5HP तक का कृषि पंप कनेक्शन", "SC/ST या सीमांत किसान", "मध्य प्रदेश का निवासी"],
      en: ["Agricultural land holder", "Agricultural pump connection up to 5HP", "SC/ST or marginal farmer", "Resident of Madhya Pradesh"],
    },
    benefits: {
      hi: ["निःशुल्क या रियायती बिजली", "कृषि लागत में कमी", "सिंचाई में सहायता"],
      en: ["Free or subsidized electricity", "Reduced farming costs", "Irrigation support"],
    },
    documents: {
      hi: ["भूमि स्वामित्व दस्तावेज", "SC/ST जाति प्रमाण पत्र, यदि लागू हो", "पिछला बिजली बिल/मीटर कनेक्शन प्रमाण", "आधार कार्ड"],
      en: ["Land ownership documents", "SC/ST Caste Certificate, if applicable", "Previous electricity bill/meter connection proof", "Aadhaar Card"],
    },
    applicationProcess: {
      hi: ["स्थानीय मध्य प्रदेश विद्युत वितरण कंपनी कार्यालय जाएं", "भूमि के खसरा विवरण के साथ आवेदन करें", "सत्यापन प्रक्रिया पूरी करें", "कनेक्शन प्राप्त करें"],
      en: ["Visit your local MP Electricity Distribution Company office", "Apply with your land Khasra details", "Complete verification process", "Receive connection"],
    },
    targetAudience: ["farmers"],
    officialLink: "https://mpenrg.nic.in",
    keywords: { hi: ["बिजली", "किसान", "सब्सिडी", "पंप"], en: ["electricity", "farmer", "subsidy", "pump"] },
    icon: "Tractor",
  },
  {
    id: "krishi-yantra-subsidy",
    name: { hi: "कृषि यंत्र सब्सिडी योजना", en: "Krishi Yantra Subsidy Yojana" },
    category: { hi: "कृषि एवं किसान", en: "Agriculture & Farmers", key: "agriculture" },
    overview: {
      hi: "आधुनिक कृषि उपकरण, ट्रैक्टर और सिंचाई मशीनरी खरीदने के लिए पूंजीगत लागत पर 50% तक की सब्सिडी।",
      en: "Up to 50% capital subsidies for purchasing modern farming equipment, tractors, and irrigation machinery.",
    },
    eligibility: {
      hi: ["किसान / भूमि धारक", "मध्य प्रदेश का निवासी", "कृषि भूमि का स्वामित्व", "आधार से लिंक बैंक खाता"],
      en: ["Farmer / Land holder", "Resident of Madhya Pradesh", "Ownership of agricultural land", "Bank account linked with Aadhaar"],
    },
    benefits: {
      hi: ["50% तक पूंजीगत सब्सिडी", "आधुनिक कृषि उपकरण", "उत्पादकता में वृद्धि"],
      en: ["Up to 50% capital subsidy", "Modern farming equipment", "Increased productivity"],
    },
    documents: {
      hi: ["भूमि खसरा खतौनी", "आधार कार्ड", "लागू SC/ST लाभ के लिए जाति प्रमाण पत्र", "बैंक पासबुक", "आधार से लिंक मोबाइल नंबर"],
      en: ["Land Khasra Khatauni", "Aadhaar Card", "Caste Certificate for applicable SC/ST benefits", "Bank Passbook", "Mobile Number linked with Aadhaar"],
    },
    applicationProcess: {
      hi: ["DBT Agriculture पोर्टल पर आवेदन विंडो खुलने पर ऑनलाइन आवेदन करें", "रैंडमाइज्ड लॉटरी प्रक्रिया में भाग लें", "पूर्व स्वीकृति प्राप्त करें", "उपकरण खरीदें और सब्सिडी प्राप्त करें"],
      en: ["Apply online on the DBT Agriculture portal during open windows", "Participate in the randomized lottery system", "Get pre-approval", "Purchase equipment and receive subsidy"],
    },
    targetAudience: ["farmers"],
    officialLink: "https://mpdage.org",
    keywords: { hi: ["कृषि यंत्र", "सब्सिडी", "ट्रैक्टर", "उपकरण"], en: ["krishi yantra", "subsidy", "tractor", "equipment"] },
    icon: "Tractor",
  },
  {
    id: "sambal-welfare",
    name: { hi: "संबल 2.0 योजना", en: "Sambal 2.0 Yojana" },
    category: { hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा", en: "Health, Housing & Social Security", key: "health-social" },
    overview: {
      hi: "असंगठित क्षेत्र के श्रमिकों के लिए बिजली सब्सिडी, मातृत्व सहायता, दुर्घटना राहत और अंत्येष्टि सहायता सहित सामाजिक सुरक्षा।",
      en: "Safety net providing power subsidies, maternity aid, accident relief, and funeral assistance for unorganized sector workers.",
    },
    eligibility: {
      hi: ["असंगठित क्षेत्र का श्रमिक", "18 से 60 वर्ष की आयु", "मध्य प्रदेश का निवासी", "वार्षिक आय सीमा के अंदर"],
      en: ["Unorganized sector worker", "Age 18 to 60 years", "Resident of Madhya Pradesh", "Within annual income limit"],
    },
    benefits: {
      hi: ["बिजली सब्सिडी", "मातृत्व सहायता", "दुर्घटना राहत", "अंत्येष्टि सहायता"],
      en: ["Power subsidy", "Maternity aid", "Accident relief", "Funeral assistance"],
    },
    documents: {
      hi: ["असंगठित श्रमिक का स्व-घोषणा पत्र", "समग्र आईडी", "आधार", "बैंक विवरण"],
      en: ["Unorganized worker self-declaration", "Samagra ID", "Aadhaar", "Bank Details"],
    },
    applicationProcess: {
      hi: ["संबल पोर्टल पर आवेदन करें", "स्थानीय प्राधिकरण द्वारा क्षेत्रीय सत्यापन पूरा करवाएं", "संबल आईडी कार्ड जारी", "लाभ प्राप्त करना प्रारंभ करें"],
      en: ["Apply on Sambal portal", "Complete field verification by local authority", "Sambal ID card generated", "Start receiving benefits"],
    },
    targetAudience: ["workers"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["संबल", "श्रमिक", "सामाजिक सुरक्षा", "असंगठित"], en: ["sambal", "worker", "social security", "unorganized"] },
    icon: "ShieldCheck",
  },
  {
    id: "teerth-darshan",
    name: { hi: "तीर्थ दर्शन योजना", en: "Teerth Darshan Yojana" },
    category: { hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा", en: "Health, Housing & Social Security", key: "health-social" },
    overview: {
      hi: "60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों के लिए प्रायोजित तीर्थ यात्रा, रेल यात्रा और आवास की सुविधा।",
      en: "Fully sponsored pilgrimage train travel and lodging for state senior citizens aged 60 and above.",
    },
    eligibility: {
      hi: ["60 वर्ष या अधिक आयु", "मध्य प्रदेश का स्थायी निवासी", "मेडिकल रूप से फिट", "पहले इस योजना का लाभ न लिया हो"],
      en: ["Age 60 years or above", "Permanent resident of Madhya Pradesh", "Medically fit", "Has not availed this scheme before"],
    },
    benefits: {
      hi: ["प्रायोजित रेल यात्रा", "आवास की व्यवस्था", "तीर्थ स्थान दर्शन", "भोजन व्यवस्था"],
      en: ["Sponsored train travel", "Lodging arrangement", "Pilgrimage site visits", "Meal arrangements"],
    },
    documents: {
      hi: ["आयु प्रमाण", "सरकारी डॉक्टर द्वारा हस्ताक्षरित मेडिकल फिटनेस प्रमाण पत्र", "निवास प्रमाण पत्र", "पासपोर्ट आकार के फोटो"],
      en: ["Age proof", "Medical fitness certificate signed by a government doctor", "Domicile certificate", "Passport photos"],
    },
    applicationProcess: {
      hi: ["तहसील/जिला कार्यालय से आवेदन प्राप्त करें", "मेडिकल फिटनेस प्रमाण पत्र संलग्न करें", "स्थानीय कलेक्ट्रेट कार्यालय में आवेदन जमा करें", "चयन के बाद यात्रा शेड्यूल प्राप्त करें"],
      en: ["Collect physical application from the Tehsil/District office", "Attach the physical fitness certificate", "Submit to the local Collectorate office", "Receive travel schedule after selection"],
    },
    targetAudience: ["senior-citizens"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["तीर्थ दर्शन", "वरिष्ठ नागरिक", "यात्रा", "रेल"], en: ["teerth darshan", "senior citizen", "travel", "train"] },
    icon: "MapPin",
  },
  {
    id: "free-dialysis",
    name: { hi: "निःशुल्क डायलिसिस सेवा", en: "Free Dialysis Services" },
    category: { hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा", en: "Health, Housing & Social Security", key: "health-social" },
    overview: {
      hi: "किडनी रोगियों के लिए सरकारी स्वास्थ्य सुविधाओं और जिला अस्पतालों में निःशुल्क डायलिसिस सेवा।",
      en: "Free dialysis care provided across government healthcare facilities and district hospitals for kidney patients.",
    },
    eligibility: {
      hi: ["किडनी रोगी", "MP आयुष्मान कार्ड / BPL कार्ड धारक", "मध्य प्रदेश का निवासी", "डॉक्टर की सिफारिश"],
      en: ["Kidney patient", "MP Ayushman Card / BPL card holder", "Resident of Madhya Pradesh", "Doctor's recommendation"],
    },
    benefits: {
      hi: ["निःशुल्क डायलिसिस", "सरकारी अस्पतालों में उपलब्ध", "बार-बार उपचार में राहत"],
      en: ["Free dialysis", "Available at government hospitals", "Relief from recurring treatment costs"],
    },
    documents: {
      hi: ["MP आयुष्मान कार्ड / BPL कार्ड", "डॉक्टर की पर्ची/रेफरल पत्र", "मरीज का पहचान प्रमाण"],
      en: ["MP Ayushman Card / BPL card", "Doctor's prescription/referral letter", "Patient identity proof"],
    },
    applicationProcess: {
      hi: ["आयुष्मान कार्ड के साथ संबंधित जिला अस्पताल या मेडिकल कॉलेज जाएं", "निःशुल्क डायलिसिस रजिस्टर में पंजीकरण करवाएं", "डॉक्टर की सलाह अनुसार उपचार प्राप्त करें"],
      en: ["Walk into an empanelled District Hospital or Medical College in MP with your Ayushman Card", "Get enrolled under the free dialysis register", "Receive treatment as per doctor's advice"],
    },
    targetAudience: ["senior-citizens"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["डायलिसिस", "निःशुल्क", "किडनी", "स्वास्थ्य"], en: ["dialysis", "free", "kidney", "health"] },
    icon: "HeartPulse",
  },
];

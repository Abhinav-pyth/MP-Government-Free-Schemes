import { Scheme } from "./index";

export const schemes: Scheme[] = [
  {
    id: "ladli-bahna",
    name: { hi: "मुख्यमंत्री लाड़ली बहना योजना", en: "Mukhyamantri Ladli Bahna Yojana" },
    category: { hi: "महिला एवं बाल कल्याण", en: "Women & Child Welfare", key: "women-child" },
    overview: {
      hi: "मुख्यमंत्री लाड़ली बहना योजना मध्य प्रदेश सरकार की एक प्रमुख महिला सशक्तिकरण योजना है। इस योजना के तहत पात्र महिलाओं को प्रति माह ₹1,250 की वित्तीय सहायता प्रदान की जाती है। यह राशि सीधे लाभार्थी के बैंक खाते में DBT के माध्यम से भेजी जाती है। योजना का उद्देश्य महिलाओं को आर्थिक रूप से आत्मनिर्भर बनाना, उनके पोषण और स्वास्थ्य में सुधार करना, और परिवार की आय में वृद्धि करना है। यह योजना 8 मार्च 2023 को अंतर्राष्ट्रीय महिला दिवस के अवसर पर शुरू की गई थी।",
      en: "Mukhyamantri Ladli Bahna Yojana is a flagship women empowerment scheme of the Madhya Pradesh government. Under this scheme, eligible women receive financial assistance of ₹1,250 per month. This amount is sent directly to the beneficiary's bank account through DBT. The scheme aims to make women economically independent, improve their nutrition and health, and increase family income. The scheme was launched on March 8, 2023, on the occasion of International Women's Day.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश की स्थायी निवासी महिला होना आवश्यक",
        "आवेदन के कैलेंडर वर्ष में 01 जनवरी की स्थिति में 23 वर्ष पूर्ण हो चुके हों",
        "60 वर्ष से कम आयु की होनी चाहिए",
        "विवाहित महिलाएँ पात्र हैं (विधवा, तलाकशुदा और परित्यक्ता महिलाएँ भी शामिल)",
        "पारिवारिक वार्षिक आय ₹2,50,000 से कम होनी चाहिए",
        "परिवार का कोई भी सदस्य आयकर दाता नहीं होना चाहिए",
        "सरकारी सेवक (नियमित) या उनके परिवार के सदस्य पात्र नहीं हैं",
        "समग्र और आधार e-KYC पूर्ण होना आवश्यक"
      ],
      en: [
        "Must be a permanent resident of Madhya Pradesh",
        "Must have completed 23 years as on January 1st of the application calendar year",
        "Age should be less than 60 years",
        "Married women are eligible (including widows, divorced and abandoned women)",
        "Family annual income should be less than ₹2,50,000",
        "No family member should be an income tax payer",
        "Government servants (regular) or their family members are not eligible",
        "Samagra and Aadhaar e-KYC must be completed"
      ],
    },
    benefits: {
      hi: [
        "₹1,250 प्रति माह सीधे बैंक खाते में (DBT के माध्यम से)",
        "वार्षिक ₹15,000 की वित्तीय सहायता",
        "आर्थिक आत्मनिर्भरता और सशक्तिकरण",
        "परिवार के पोषण और स्वास्थ्य में सुधार",
        "महिलाओं की सामाजिक स्थिति में वृद्धि",
        "ग्रामीण और शहरी दोनों क्षेत्रों की महिलाओं के लिए उपलब्ध",
        "जाति या धर्म से कोई प्रतिबंध नहीं"
      ],
      en: [
        "₹1,250 per month directly to bank account (through DBT)",
        "Annual financial assistance of ₹15,000",
        "Economic independence and empowerment",
        "Improvement in family nutrition and health",
        "Enhancement of women's social status",
        "Available to women in both rural and urban areas",
        "No restriction based on caste or religion"
      ],
    },
    documents: {
      hi: [
        "समग्र आईडी (Samagra ID)",
        "आधार कार्ड (Aadhaar Card)",
        "DBT से लिंक बैंक खाता (Bank Account linked with DBT)",
        "सक्रिय मोबाइल नंबर (Active Mobile Number)",
        "निवास प्रमाण पत्र (Domicile Certificate)",
        "आय प्रमाण पत्र (Income Certificate)",
        "पासपोर्ट साइज फोटो (Passport size photos)",
        "बैंक पासबुक (Bank Passbook)"
      ],
      en: [
        "Samagra ID",
        "Aadhaar Card",
        "Bank Account linked with DBT",
        "Active Mobile Number",
        "Domicile Certificate",
        "Income Certificate",
        "Passport size photos",
        "Bank Passbook"
      ],
    },
    applicationProcess: {
      hi: [
        "निकटतम ग्राम पंचायत या वार्ड कार्यालय जाएं",
        "लाड़ली बहना योजना का आवेदन फॉर्म प्राप्त करें",
        "फॉर्म में सभी आवश्यक जानकारी भरें",
        "आवश्यक दस्तावेज संलग्न करें",
        "बायोमेट्रिक सत्यापन (आधार आधारित) पूरा करें",
        "फॉर्म जमा करें और रसीद प्राप्त करें",
        "आवेदन की स्थिति DBT पोर्टल या हेल्पलाइन पर जांचें",
        "स्वीकृति के बाद प्रति माह ₹1,250 बैंक खाते में आने लगेंगे"
      ],
      en: [
        "Visit nearest Gram Panchayat or Ward office",
        "Obtain Ladli Bahna Yojana application form",
        "Fill all required information in the form",
        "Attach required documents",
        "Complete biometric verification (Aadhaar-based)",
        "Submit the form and receive receipt",
        "Check application status on DBT portal or helpline",
        "After approval, ₹1,250 per month will start coming to bank account"
      ],
    },
    targetAudience: ["women"],
    officialLink: "https://cmladlibahna.mp.gov.in",
    keywords: { hi: ["लाड़ली बहना", "महिला", "वित्तीय सहायता", "1250", "महिला सशक्तिकरण", "मुख्यमंत्री योजना"], en: ["ladli bahna", "women", "financial aid", "1250", "women empowerment", "chief minister scheme"] },
    icon: "Heart",
  },
  {
    id: "ladli-laxmi",
    name: { hi: "मुख्यमंत्री लाड़ली लक्ष्मी योजना", en: "Mukhyamantri Ladli Laxmi Yojana" },
    category: { hi: "महिला एवं बाल कल्याण", en: "Women & Child Welfare", key: "women-child" },
    overview: {
      hi: "लाड़ली लक्ष्मी योजना मध्य प्रदेश सरकार की एक महत्वपूर्ण बालिका कल्याण योजना है। इस योजना का उद्देश्य बालिकाओं के जन्म को प्रोत्साहित करना, बाल विवाह को रोकना, और बालिकाओं की शिक्षा को बढ़ावा देना है। इस योजना के तहत बालिका के जन्म से लेकर 21 वर्ष की आयु तक विभिन्न चरणों पर वित्तीय सहायता प्रदान की जाती है। कुल मिलाकर ₹1,43,000 की राशि बचत प्रमाणपत्र और विभिन्न किस्तों में प्रदान की जाती है। यह योजना 1 जनवरी 2006 के बाद जन्मी बालिकाओं के लिए लागू है।",
      en: "Ladli Laxmi Yojana is an important girl child welfare scheme of the Madhya Pradesh government. The objective of this scheme is to encourage the birth of girl children, prevent child marriage, and promote girls' education. Under this scheme, financial assistance is provided at various stages from the birth of the girl child until she reaches 21 years of age. A total amount of ₹1,43,000 is provided through savings certificates and various installments. This scheme is applicable to girl children born after January 1, 2006.",
    },
    eligibility: {
      hi: [
        "बालिका का जन्म 1 जनवरी 2006 के बाद हुआ हो",
        "माता-पिता मध्य प्रदेश के स्थायी निवासी हों",
        "परिवार में अधिकतम दो बालिकाएँ (जुड़वां बच्चियों को छोड़कर)",
        "माता-पिता की वार्षिक आय ₹2,00,000 से कम हो",
        "बालिका का जन्म प्रमाण पत्र हो",
        "बालिका का जन्म के समय पंजीकरण हो",
        "परिवार नियोजन प्रमाण पत्र (दो बच्चों के बाद)",
        "बालिका का समग्र आईडी और आधार पंजीकरण हो"
      ],
      en: [
        "Girl child must be born after January 1, 2006",
        "Parents must be permanent residents of Madhya Pradesh",
        "Maximum two girl children in the family (except twins)",
        "Parents' annual income should be less than ₹2,00,000",
        "Girl child must have birth certificate",
        "Girl child must be registered at birth",
        "Family planning certificate (after two children)",
        "Girl child must have Samagra ID and Aadhaar registration"
      ],
    },
    benefits: {
      hi: [
        "जन्म पर ₹1,00,000 का बचत प्रमाणपत्र (21 वर्ष पर परिपक्व)",
        "कक्षा 6 में प्रवेश पर ₹2,000",
        "कक्षा 9 में प्रवेश पर ₹2,000",
        "कक्षा 11 में प्रवेश पर ₹4,000",
        "कक्षा 12 में प्रवेश पर ₹4,000",
        "स्नातक प्रवेश पर ₹25,000 (दो किस्तों में)",
        "21 वर्ष की आयु पर बचत प्रमाणपत्र की परिपक्व राशि (लगभग ₹1,00,000)",
        "कुल लाभ: ₹1,43,000 तक",
        "बालिका की शिक्षा और विवाह के लिए वित्तीय सुरक्षा"
      ],
      en: [
        "₹1,00,000 savings certificate at birth (matures at 21 years)",
        "₹2,000 on admission to Class 6",
        "₹2,000 on admission to Class 9",
        "₹4,000 on admission to Class 11",
        "₹4,000 on admission to Class 12",
        "₹25,000 on graduation admission (in two installments)",
        "Matured amount of savings certificate at age 21 (approximately ₹1,00,000)",
        "Total benefit: Up to ₹1,43,000",
        "Financial security for girl's education and marriage"
      ],
    },
    documents: {
      hi: [
        "बालिका का जन्म प्रमाण पत्र (Birth Certificate)",
        "माता-पिता का निवास प्रमाण पत्र (Domicile Certificate)",
        "परिवार की समग्र आईडी (Family Samagra ID)",
        "माता-पिता का आधार कार्ड (Parents' Aadhaar Card)",
        "आय प्रमाण पत्र (Income Certificate)",
        "परिवार नियोजन प्रमाण पत्र (Family Planning Certificate)",
        "बालिका का बैंक खाता (Girl's Bank Account)",
        "पासपोर्ट साइज फोटो (Passport size photos)"
      ],
      en: [
        "Girl child's Birth Certificate",
        "Parents' Domicile Certificate",
        "Family Samagra ID",
        "Parents' Aadhaar Card",
        "Income Certificate",
        "Family Planning Certificate",
        "Girl's Bank Account",
        "Passport size photos"
      ],
    },
    applicationProcess: {
      hi: [
        "बालिका के जन्म के 1 वर्ष के भीतर आवेदन करें",
        "लाड़ली लक्ष्मी पोर्टल पर ऑनलाइन आवेदन करें या आंगनवाड़ी केंद्र जाएं",
        "आवेदन फॉर्म भरें और आवश्यक दस्तावेज संलग्न करें",
        "आंगनवाड़ी कार्यकर्ता द्वारा सत्यापन",
        "बचत प्रमाणपत्र जारी किया जाता है",
        "कक्षा 6, 9, 11, 12 में प्रवेश पर लाभ के लिए आवेदन करें",
        "शैक्षिक संस्थान से प्रमाण पत्र प्राप्त करें",
        "21 वर्ष की आयु पर परिपक्व राशि प्राप्त करें"
      ],
      en: [
        "Apply within 1 year of girl child's birth",
        "Apply online on Ladli Laxmi portal or visit Anganwadi center",
        "Fill application form and attach required documents",
        "Verification by Anganwadi worker",
        "Savings certificate is issued",
        "Apply for benefits on admission to Class 6, 9, 11, 12",
        "Obtain certificate from educational institution",
        "Receive matured amount at age 21"
      ],
    },
    targetAudience: ["women"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["लाड़ली लक्ष्मी", "बालिका", "बचत", "शिक्षा", "₹1,43,000", "बालिका कल्याण"], en: ["ladli laxmi", "girl child", "savings", "education", "143000", "girl child welfare"] },
    icon: "Baby",
  },
  {
    id: "kanya-vivah",
    name: { hi: "मुख्यमंत्री कन्यादान योजना", en: "Mukhyamantri Kanyadaan Yojana" },
    category: { hi: "महिला एवं बाल कल्याण", en: "Women & Child Welfare", key: "women-child" },
    overview: {
      hi: "मुख्यमंत्री कन्यादान योजना (पूर्व में कन्या विवाह योजना) मध्य प्रदेश सरकार की गरीब परिवारों की बेटियों के विवाह के लिए वित्तीय सहायता प्रदान करने वाली योजना है। इस योजना के तहत BPL परिवारों की बेटियों के सामूहिक विवाह कार्यक्रम आयोजित किए जाते हैं और वधू-वर को ₹28,000 की वित्तीय सहायता प्रदान की जाती है। इस योजना का उद्देश्य गरीब परिवारों पर विवाह का वित्तीय बोझ कम करना और बाल विवाह को रोकना है।",
      en: "Mukhyamantri Kanyadaan Yojana (formerly Kanya Vivah Yojana) is a scheme by the Madhya Pradesh government to provide financial assistance for marriage of daughters from poor families. Under this scheme, mass marriage events are organized for daughters from BPL families and financial assistance of ₹28,000 is provided to the bride and groom. The objective of this scheme is to reduce the financial burden of marriage on poor families and prevent child marriage.",
    },
    eligibility: {
      hi: [
        "परिवार BPL (गरीबी रेखा से नीचे) श्रेणी का होना चाहिए",
        "वधू की आयु कम से कम 18 वर्ष होनी चाहिए",
        "वर की आयु कम से कम 21 वर्ष होनी चाहिए",
        "दोनों मध्य प्रदेश के स्थायी निवासी होने चाहिए",
        "यह पहला विवाह होना चाहिए",
        "परिवार की वार्षिक आय ₹2,00,000 से कम",
        "समग्र आईडी और आधार कार्ड होना आवश्यक",
        "BPL राशन कार्ड धारक"
      ],
      en: [
        "Family must belong to BPL (Below Poverty Line) category",
        "Bride's age must be at least 18 years",
        "Groom's age must be at least 21 years",
        "Both must be permanent residents of Madhya Pradesh",
        "This must be the first marriage",
        "Family annual income less than ₹2,00,000",
        "Samagra ID and Aadhaar card mandatory",
        "BPL ration card holder"
      ],
    },
    benefits: {
      hi: [
        "₹28,000 की वित्तीय सहायता (वधू-वर को)",
        "सामूहिक विवाह कार्यक्रम में भागीदारी",
        "विवाह खर्च में भारी राहत",
        "सरकार द्वारा आयोजित सम्मानजनक विवाह",
        "बाल विवाह को रोकने में सहायक",
        "गरीब परिवारों पर वित्तीय बोझ में कमी"
      ],
      en: [
        "₹28,000 financial assistance (to bride and groom)",
        "Participation in mass marriage event",
        "Significant relief in marriage expenses",
        "Dignified marriage organized by government",
        "Helps in preventing child marriage",
        "Reduction in financial burden on poor families"
      ],
    },
    documents: {
      hi: [
        "निवास प्रमाण पत्र",
        "वर एवं वधू की आयु का प्रमाण (जन्म प्रमाण पत्र/10वीं अंकसूची)",
        "BPL राशन कार्ड",
        "समग्र आईडी",
        "आधार कार्ड",
        "पासपोर्ट साइज फोटो (वर-वधू दोनों के)",
        "आय प्रमाण पत्र",
        "शपथ पत्र"
      ],
      en: [
        "Domicile certificate",
        "Age proof of bride and groom (Birth certificate/10th marksheet)",
        "BPL Ration card",
        "Samagra ID",
        "Aadhaar Card",
        "Passport size photos (of both bride and groom)",
        "Income Certificate",
        "Affidavit"
      ],
    },
    applicationProcess: {
      hi: [
        "सामूहिक विवाह कार्यक्रम की घोषणा की प्रतीक्षा करें",
        "स्थानीय ग्राम पंचायत/जनपद पंचायत/नगरीय निकाय से संपर्क करें",
        "आवेदन फॉर्म प्राप्त करें और भरें",
        "सभी आवश्यक दस्तावेज संलग्न करें",
        "आवेदन जमा करें और रसीद प्राप्त करें",
        "दस्तावेजों का सत्यापन होगा",
        "स्वीकृति के बाद सामूहिक विवाह कार्यक्रम में भाग लें",
        "कार्यक्रम में ₹28,000 की राशि प्राप्त करें"
      ],
      en: [
        "Wait for announcement of mass marriage event",
        "Contact local Gram Panchayat/Janpad Panchayat/Urban Local Body",
        "Obtain and fill application form",
        "Attach all required documents",
        "Submit application and receive receipt",
        "Documents will be verified",
        "After approval, participate in mass marriage event",
        "Receive ₹28,000 amount at the event"
      ],
    },
    targetAudience: ["women"],
    officialLink: "https://mpvivahportal.nic.in",
    keywords: { hi: ["कन्या विवाह", "कन्यादान", "सामूहिक विवाह", "अनुदान", "₹28,000", "BPL"], en: ["kanya vivah", "kanyadaan", "mass marriage", "grant", "28000", "BPL"] },
    icon: "Heart",
  },
  {
    id: "medhavi-vidyarthi",
    name: { hi: "मुख्यमंत्री मेधावी विद्यार्थी योजना (MMVY)", en: "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "मुख्यमंत्री मेधावी विद्यार्थी योजना (MMVY) मध्य प्रदेश सरकार की एक प्रतिष्ठित छात्रवृत्ति योजना है। इस योजना के तहत कक्षा 12 में उत्कृष्ट अंक प्राप्त करने वाले मेधावी विद्यार्थियों को उच्च शिक्षा (स्नातक, इंजीनियरिंग, मेडिकल आदि) की 100% ट्यूशन फीस राज्य सरकार द्वारा भरी जाती है। MP Board के छात्रों के लिए 70% अंक और CBSE/ICSE Board के छात्रों के लिए 85% अंक आवश्यक हैं। यह योजना गरीब और मेधावी छात्रों को गुणवत्तापूर्ण उच्च शिक्षा प्राप्त करने में सहायता करती है।",
      en: "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY) is a prestigious scholarship scheme of the Madhya Pradesh government. Under this scheme, the state government pays 100% tuition fees for higher education (graduation, engineering, medical, etc.) for meritorious students who score excellent marks in Class 12. Students of MP Board need 70% marks and CBSE/ICSE Board students need 85% marks. This scheme helps poor and meritorious students to get quality higher education.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश का स्थायी निवासी होना आवश्यक",
        "MP Board: कक्षा 12 में न्यूनतम 70% अंक",
        "CBSE/ICSE Board: कक्षा 12 में न्यूनतम 85% अंक",
        "पारिवारिक वार्षिक आय ₹6,00,000 से कम",
        "मान्यता प्राप्त विश्वविद्यालय/संस्थान में प्रवेश",
        "स्नातक, इंजीनियरिंग, मेडिकल, या अन्य व्यावसायिक पाठ्यक्रम",
        "आयु सीमा: 18-30 वर्ष",
        "अन्य छात्रवृत्ति का लाभार्थी नहीं होना चाहिए"
      ],
      en: [
        "Must be a permanent resident of Madhya Pradesh",
        "MP Board: Minimum 70% marks in Class 12",
        "CBSE/ICSE Board: Minimum 85% marks in Class 12",
        "Family annual income less than ₹6,00,000",
        "Admission in a recognized university/institution",
        "Graduation, Engineering, Medical, or other professional courses",
        "Age limit: 18-30 years",
        "Should not be a beneficiary of any other scholarship"
      ],
    },
    benefits: {
      hi: [
        "उच्च शिक्षा की 100% ट्यूशन फीस का भुगतान",
        "सरकारी और निजी दोनों संस्थानों के लिए मान्य",
        "स्नातक, इंजीनियरिंग, मेडिकल, MBA आदि सभी पाठ्यक्रम",
        "पाठ्यक्रम की पूरी अवधि तक लाभ",
        "सीधे संस्थान को भुगतान",
        "आर्थिक बोझ में भारी कमी",
        "गुणवत्तापूर्ण शिक्षा तक पहुंच",
        "वार्षिक नवीकरण (अंक बनाए रखने पर)"
      ],
      en: [
        "100% tuition fee payment for higher education",
        "Valid for both government and private institutions",
        "All courses including Graduation, Engineering, Medical, MBA etc.",
        "Benefit for the entire duration of the course",
        "Direct payment to institution",
        "Significant reduction in financial burden",
        "Access to quality education",
        "Annual renewal (on maintaining marks)"
      ],
    },
    documents: {
      hi: [
        "कक्षा 10 की अंकसूची",
        "कक्षा 12 की अंकसूची",
        "आय प्रमाण पत्र (₹6 लाख से कम)",
        "मध्य प्रदेश निवास प्रमाण पत्र",
        "आधार कार्ड",
        "कॉलेज/विश्वविद्यालय प्रवेश पत्र",
        "फీस रसीद",
        "समग्र आईडी",
        "बैंक खाता विवरण",
        "पासपोर्ट साइज फोटो"
      ],
      en: [
        "Class 10 marksheet",
        "Class 12 marksheet",
        "Income Certificate (less than ₹6 lakhs)",
        "Madhya Pradesh Domicile Certificate",
        "Aadhaar Card",
        "College/University admission letter",
        "Fee receipt",
        "Samagra ID",
        "Bank account details",
        "Passport size photos"
      ],
    },
    applicationProcess: {
      hi: [
        "MMVY पोर्टल (medhavikalyan.mp.gov.in) पर जाएं",
        "नया पंजीकरण करें और लॉगिन करें",
        "ऑनलाइन आवेदन फॉर्म भरें",
        "सभी आवश्यक दस्तावेज अपलोड करें",
        "संस्थान के नोडल अधिकारी से सत्यापन करवाएं",
        "आवेदन की स्थिति पोर्टल पर जांचें",
        "स्वीकृति के बाद फीस सीधे संस्थान को भेजी जाती है",
        "प्रत्येक वर्ष नवीकरण आवेदन जमा करें"
      ],
      en: [
        "Visit MMVY portal (medhavikalyan.mp.gov.in)",
        "Register new and login",
        "Fill online application form",
        "Upload all required documents",
        "Get verification from institution's nodal officer",
        "Check application status on portal",
        "After approval, fees are sent directly to institution",
        "Submit renewal application every year"
      ],
    },
    targetAudience: ["students"],
    officialLink: "https://medhavikalyan.mp.gov.in",
    keywords: { hi: ["मेधावी विद्यार्थी", "ट्यूशन फीस", "उच्च शिक्षा", "छात्रवृत्ति", "MMVY", "70%"], en: ["medhavi vidyarthi", "tuition fee", "higher education", "scholarship", "MMVY", "70%"] },
    icon: "GraduationCap",
  },
  {
    id: "gaon-ki-beti",
    name: { hi: "गाँव की बेटी योजना", en: "Gaon Ki Beti Yojana" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "गाँव की बेटी योजना मध्य प्रदेश सरकार की ग्रामीण बालिकाओं के लिए एक विशेष शिक्षा प्रोत्साहन योजना है। इस योजना के तहत ग्रामीण क्षेत्रों की उन बालिकाओं को मासिक छात्रवृत्ति प्रदान की जाती है जो कक्षा 12 प्रथम श्रेणी (फर्स्ट डिवीजन) से उत्तीर्ण कर उच्च शिक्षा प्राप्त कर रही हैं। यह योजना ग्रामीण बालिकाओं को उच्च शिक्षा के लिए प्रोत्साहित करती है और उन्हें आर्थिक सहायता प्रदान करती है।",
      en: "Gaon Ki Beti Yojana is a special education incentive scheme by the Madhya Pradesh government for rural girls. Under this scheme, monthly scholarship is provided to girls from rural areas who have passed Class 12 with first division and are pursuing higher education. This scheme encourages rural girls for higher education and provides them financial assistance.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश के ग्रामीण क्षेत्र की स्थायी निवासी बालिका",
        "कक्षा 12 प्रथम श्रेणी (फर्स्ट डिवीजन) से उत्तीर्ण",
        "मान्यता प्राप्त विश्वविद्यालय/संस्थान में स्नातक पाठ्यक्रम में प्रवेश",
        "पारिवारिक वार्षिक आय ₹6,00,000 से कम",
        "अन्य छात्रवृत्ति का लाभार्थी नहीं होना चाहिए",
        "आयु 18-25 वर्ष के बीच",
        "समग्र और आधार e-KYC पूर्ण"
      ],
      en: [
        "Girl must be permanent resident of rural area of Madhya Pradesh",
        "Passed Class 12 with first division",
        "Admission in graduation course in recognized university/institution",
        "Family annual income less than ₹6,00,000",
        "Should not be beneficiary of any other scholarship",
        "Age between 18-25 years",
        "Samagra and Aadhaar e-KYC completed"
      ],
    },
    benefits: {
      hi: [
        "मासिक छात्रवृत्ति (निर्धारित राशि)",
        "उच्च शिक्षा के लिए प्रोत्साहन",
        "आर्थिक सहायता",
        "ग्रामीण बालिकाओं का सशक्तिकरण",
        "शिक्षा में लैंगिक असमानता में कमी",
        "DBT के माध्यम से सीधा भुगतान"
      ],
      en: [
        "Monthly scholarship (fixed amount)",
        "Incentive for higher education",
        "Financial assistance",
        "Empowerment of rural girls",
        "Reduction in gender inequality in education",
        "Direct payment through DBT"
      ],
    },
    documents: {
      hi: [
        "कक्षा 12 की अंकसूची",
        "ग्रामीण क्षेत्र का निवास प्रमाण पत्र",
        "समग्र आईडी",
        "बैंक पासबुक (DBT लिंक)",
        "कॉलेज प्रवेश प्रमाण पत्र",
        "आधार कार्ड",
        "आय प्रमाण पत्र",
        "पासपोर्ट साइज फोटो"
      ],
      en: [
        "Class 12 Marksheet",
        "Rural area residence certificate",
        "Samagra ID",
        "Bank Passbook (DBT linked)",
        "College admission certificate",
        "Aadhaar Card",
        "Income Certificate",
        "Passport size photos"
      ],
    },
    applicationProcess: {
      hi: [
        "MP State Scholarship Portal पर जाएं",
        "गाँव की बेटी योजना के लिए पंजीकरण करें",
        "ऑनलाइन आवेदन फॉर्म भरें",
        "सभी आवश्यक दस्तावेज अपलोड करें",
        "कॉलेज/संस्थान से सत्यापन करवाएं",
        "आवेदन की स्थिति पोर्टल पर जांचें",
        "स्वीकृति के बाद मासिक छात्रवृत्ति बैंक खाते में",
        "प्रत्येक वर्ष नवीकरण आवश्यक"
      ],
      en: [
        "Visit MP State Scholarship Portal",
        "Register for Gaon Ki Beti scheme",
        "Fill online application form",
        "Upload all required documents",
        "Get verification from college/institution",
        "Check application status on portal",
        "After approval, monthly scholarship in bank account",
        "Annual renewal required"
      ],
    },
    targetAudience: ["students"],
    officialLink: "https://scholarship.mp.gov.in",
    keywords: { hi: ["गांव की बेटी", "ग्रामीण", "छात्रवृत्ति", "बालिका", "उच्च शिक्षा"], en: ["gaon ki beti", "rural", "scholarship", "girl student", "higher education"] },
    icon: "GraduationCap",
  },
  {
    id: "cycle-laptop-scooty",
    name: { hi: "निःशुल्क साइकिल, लैपटॉप एवं स्कूटी वितरण योजना", en: "Free Cycle, Laptop & Scooty Distribution Scheme" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "मध्य प्रदेश सरकार की यह योजना ग्रामीण क्षेत्रों के विद्यार्थियों को शिक्षा तक बेहतर पहुंच प्रदान करने के लिए निःशुल्क साइकिल वितरित करती है। इसके अलावा, कक्षा 12 में उत्कृष्ट प्रदर्शन करने वाले मेधावी विद्यार्थियों को लैपटॉप और स्कूटी जैसी प्रोत्साहन राशि प्रदान की जाती है। यह योजना शिक्षा को प्रोत्साहित करने और ग्रामीण छात्रों को आगे बढ़ने में मदद करती है।",
      en: "This scheme by the Madhya Pradesh government distributes free bicycles to students from rural areas to provide better access to education. Additionally, meritorious students who perform excellently in Class 12 are provided incentive amounts like laptops and scooties. This scheme promotes education and helps rural students move forward.",
    },
    eligibility: {
      hi: [
        "साइकिल योजना: कक्षा 6 या 9 में प्रवेश लेने वाले ग्रामीण छात्र",
        "लैपटॉप/स्कूटी: कक्षा 12 में उत्कृष्ट अंक प्राप्त करने वाले छात्र",
        "मध्य प्रदेश के ग्रामीण क्षेत्र के स्थायी निवासी",
        "सरकारी या मान्यता प्राप्त स्कूल/कॉलेज में नामांकित",
        "पारिवारिक वार्षिक आय सीमा के अंदर",
        "समग्र आईडी और आधार कार्ड होना आवश्यक",
        "बैंक खाता आधार से लिंक होना चाहिए"
      ],
      en: [
        "Cycle scheme: Rural students entering Class 6 or 9",
        "Laptop/Scooty: Students scoring excellent marks in Class 12",
        "Permanent residents of rural areas of Madhya Pradesh",
        "Enrolled in government or recognized school/college",
        "Within family annual income limit",
        "Samagra ID and Aadhaar card mandatory",
        "Bank account must be linked with Aadhaar"
      ],
    },
    benefits: {
      hi: [
        "ग्रामीण छात्रों को निःशुल्क साइकिल",
        "कक्षा 12 टॉपर्स को लैपटॉप प्रोत्साहन",
        "उत्कृष्ट प्रदर्शन करने वाली छात्राओं को स्कूटी",
        "शिक्षा तक पहुंच में सुधार",
        "डिजिटल शिक्षा को बढ़ावा",
        "मेधावी छात्रों का सम्मान और प्रोत्साहन",
        "ग्रामीण शिक्षा का विकास"
      ],
      en: [
        "Free bicycle for rural students",
        "Laptop incentive for Class 12 toppers",
        "Scooty for excellent performing girl students",
        "Improvement in access to education",
        "Promotion of digital education",
        "Recognition and incentive for meritorious students",
        "Development of rural education"
      ],
    },
    documents: {
      hi: [
        "कक्षा 12/6/9 की अंकसूची",
        "आधार कार्ड",
        "निवास प्रमाण पत्र (ग्रामीण)",
        "आधार से लिंक बैंक खाता",
        "समग्र आईडी",
        "स्कूल/कॉलेज प्रमाण पत्र",
        "पासपोर्ट साइज फोटो"
      ],
      en: [
        "Class 12/6/9 Marksheet",
        "Aadhaar Card",
        "Residence certificate (rural)",
        "Bank account linked with Aadhaar",
        "Samagra ID",
        "School/College certificate",
        "Passport size photos"
      ],
    },
    applicationProcess: {
      hi: [
        "साइकिल: स्कूल द्वारा स्वतः चयन प्रक्रिया",
        "लैपटॉप/स्कूटी: शिक्षा पोर्टल के माध्यम से मेधावी छात्रों का डेटा",
        "जिलेवार मेरिट लिस्ट तैयार की जाती है",
        "चयनित छात्रों को सूचित किया जाता है",
        "DBT राशि सीधे बैंक खाते में भेजी जाती है",
        "साइकिल/स्कूटी का वितरण विद्यालय स्तरीय कार्यक्रमों में",
        "लैपटॉप का वितरण जिला स्तरीय कार्यक्रमों में"
      ],
      en: [
        "Cycle: Automatic selection process by school",
        "Laptop/Scooty: Data of meritorious students through education portal",
        "District-wise merit list is prepared",
        "Selected students are notified",
        "DBT amount sent directly to bank account",
        "Distribution of cycle/scooty at school-level events",
        "Distribution of laptops at district-level events"
      ],
    },
    targetAudience: ["students"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["साइकिल", "लैपटॉप", "स्कूटी", "निःशुल्क", "मेधावी"], en: ["cycle", "laptop", "scooty", "free", "meritorious"] },
    icon: "GraduationCap",
  },
  {
    id: "seekho-kamao",
    name: { hi: "मुख्यमंत्री सीखो कमाओ योजना (MMSKY)", en: "Mukhyamantri Seekho Kamao Yojana (MMSKY)" },
    category: { hi: "शिक्षा एवं छात्र सहायता", en: "Education & Student Support", key: "education" },
    overview: {
      hi: "मुख्यमंत्री सीखो कमाओ योजना मध्य प्रदेश सरकार की एक कौशल विकास योजना है जो बेरोजगार युवाओं को उद्योग-आधारित प्रशिक्षण प्रदान करती है। इस योजना के तहत प्रशिक्षण अवधि में मासिक स्टाइपेंड दिया जाता है और प्रशिक्षण के बाद उद्योगों में प्लेसमेंट की गारंटी होती है। स्टाइपेंड की राशि शैक्षिक योग्यता के आधार पर ₹8,000 से ₹10,000 प्रति माह तक है। यह योजना युवाओं को रोजगार योग्य कौशल प्रदान करके उन्हें आत्मनिर्भर बनाने का प्रयास करती है।",
      en: "Mukhyamantri Seekho Kamao Yojana is a skill development scheme of the Madhya Pradesh government that provides industry-based training to unemployed youth. Under this scheme, a monthly stipend is provided during the training period and placement in industries is guaranteed after training. The stipend amount ranges from ₹8,000 to ₹10,000 per month based on educational qualification. This scheme tries to make youth self-reliant by providing them employable skills.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश का स्थायी निवासी",
        "आयु 18 से 29 वर्ष के बीच",
        "न्यूनतम कक्षा 12 उत्तीर्ण",
        "ITI/डिप्लोमा/स्नातक धारक भी पात्र",
        "वर्तमान में बेरोजगार होना चाहिए",
        "किसी अन्य कौशल विकास योजना का लाभार्थी नहीं",
        "समग्र और आधार e-KYC पूर्ण",
        "प्रशिक्षण के लिए शारीरिक रूप से फिट"
      ],
      en: [
        "Permanent resident of Madhya Pradesh",
        "Age between 18 to 29 years",
        "Minimum Class 12 passed",
        "ITI/Diploma/Graduation holders also eligible",
        "Must be currently unemployed",
        "Not a beneficiary of any other skill development scheme",
        "Samagra and Aadhaar e-KYC completed",
        "Physically fit for training"
      ],
    },
    benefits: {
      hi: [
        "मासिक स्टाइपेंड: कक्षा 12 उत्तीर्ण - ₹8,000",
        "मासिक स्टाइपेंड: ITI उत्तीर्ण - ₹8,500",
        "मासिक स्टाइपेंड: डिप्लोमा धारक - ₹9,000",
        "मासिक स्टाइपेंड: स्नातक और ऊपर - ₹10,000",
        "उद्योग-आधारित व्यावहारिक प्रशिक्षण",
        "प्रशिक्षण के बाद प्लेसमेंट गारंटी",
        "राज्य कौशल प्रमाण पत्र (SCVT)",
        "रोजगार के अवसर",
        "आत्मनिर्भरता और कौशल विकास"
      ],
      en: [
        "Monthly Stipend: Class 12 passed - ₹8,000",
        "Monthly Stipend: ITI passed - ₹8,500",
        "Monthly Stipend: Diploma holders - ₹9,000",
        "Monthly Stipend: Graduate and above - ₹10,000",
        "Industry-based practical training",
        "Placement guarantee after training",
        "State Skill Certificate (SCVT)",
        "Employment opportunities",
        "Self-reliance and skill development"
      ],
    },
    documents: {
      hi: [
        "शैक्षिक योग्यता प्रमाण पत्र (कक्षा 12/ITI/डिप्लोमा/स्नातक)",
        "समग्र आईडी",
        "आधार कार्ड",
        "निवास प्रमाण पत्र",
        "जन्म प्रमाण पत्र (आयु प्रमाण)",
        "बैंक खाता विवरण",
        "पासपोर्ट साइज फोटो",
        "मोबाइल नंबर"
      ],
      en: [
        "Educational qualification certificates (Class 12/ITI/Diploma/Graduation)",
        "Samagra ID",
        "Aadhaar Card",
        "Domicile Certificate",
        "Birth certificate (age proof)",
        "Bank account details",
        "Passport size photos",
        "Mobile number"
      ],
    },
    applicationProcess: {
      hi: [
        "MMSKY पोर्टल (mmsky.mp.gov.in) पर जाएं",
        "उम्मीदवार के रूप में पंजीकरण करें",
        "प्रोफाइल e-KYC पूरा करें",
        "पसंदीदा कौशल/कोर्स चुनें",
        "उपलब्ध कंपनी रिक्तियों देखें",
        "कंपनी के लिए आवेदन करें",
        "चयन होने पर ऑनलाइन अनुबंध स्वीकार करें",
        "प्रशिक्षण शुरू करें और मासिक स्टाइपेंड प्राप्त करें",
        "प्रशिक्षण पूर्ण होने पर प्लेसमेंट प्राप्त करें"
      ],
      en: [
        "Visit MMSKY portal (mmsky.mp.gov.in)",
        "Register as a candidate",
        "Complete profile e-KYC",
        "Select preferred skill/course",
        "View available company vacancies",
        "Apply to companies",
        "Accept online contract on selection",
        "Start training and receive monthly stipend",
        "Get placement after completion of training"
      ],
    },
    targetAudience: ["students"],
    officialLink: "https://mmsky.mp.gov.in",
    keywords: { hi: ["सीखो कमाओ", "कौशल", "प्रशिक्षण", "रोजगार", "स्टाइपेंड", "MMSKY"], en: ["seekho kamao", "skill", "training", "employment", "stipend", "MMSKY"] },
    icon: "Briefcase",
  },
  {
    id: "kisan-kalyan",
    name: { hi: "मुख्यमंत्री किसान कल्याण योजना", en: "Mukhyamantri Kisan Kalyan Yojana" },
    category: { hi: "कृषि एवं किसान", en: "Agriculture & Farmers", key: "agriculture" },
    overview: {
      hi: "मुख्यमंत्री किसान कल्याण योजना मध्य प्रदेश सरकार की किसानों के लिए एक महत्वपूर्ण योजना है। इस योजना के तहत PM-Kisan योजना के लाभार्थी किसानों को अतिरिक्त ₹4,000 प्रति वर्ष की वित्तीय सहायता प्रदान की जाती है। यह राशि दो किस्तों में (₹2,000 प्रति किस्त) सीधे किसानों के बैंक खाते में DBT के माध्यम से भेजी जाती है। इस प्रकार किसानों को केंद्र सरकार की PM-Kisan योजना (₹6,000/वर्ष) और राज्य सरकार की इस योजना (₹4,000/वर्ष) मिलाकर कुल ₹10,000 प्रति वर्ष की वित्तीय सहायता प्राप्त होती है।",
      en: "Mukhyamantri Kisan Kalyan Yojana is an important scheme for farmers by the Madhya Pradesh government. Under this scheme, additional financial assistance of ₹4,000 per year is provided to farmers who are beneficiaries of the PM-Kisan scheme. This amount is sent directly to farmers' bank accounts through DBT in two installments (₹2,000 per installment). Thus, farmers receive a total financial assistance of ₹10,000 per year - ₹6,000/year from the central government's PM-Kisan scheme and ₹4,000/year from this state government scheme.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश का स्थायी निवासी किसान",
        "किसान के पास कृषि योग्य भूमि होनी चाहिए",
        "PM-Kisan Samman Nidhi योजना में पंजीकृत होना आवश्यक",
        "PM-Kisan e-KYC पूर्ण होना चाहिए",
        "किसान का आधार कार्ड बैंक खाते से लिंक होना चाहिए",
        "आयकर दाता किसान पात्र नहीं हैं",
        "संस्थागत भूमि धारक पात्र नहीं हैं",
        "वर्तमान में कृषि कार्य में संलग्न होना चाहिए"
      ],
      en: [
        "Farmer must be a permanent resident of Madhya Pradesh",
        "Farmer must have cultivable agricultural land",
        "Must be registered under PM-Kisan Samman Nidhi scheme",
        "PM-Kisan e-KYC must be completed",
        "Farmer's Aadhaar card must be linked to bank account",
        "Income tax paying farmers are not eligible",
        "Institutional land holders are not eligible",
        "Must be currently engaged in agricultural activities"
      ],
    },
    benefits: {
      hi: [
        "₹4,000 प्रति वर्ष अतिरिक्त वित्तीय सहायता",
        "दो किस्तों में भुगतान (₹2,000 प्रति किस्त)",
        "PM-Kisan के साथ कुल ₹10,000 प्रति वर्ष",
        "सीधे बैंक खाते में DBT के माध्यम से भुगतान",
        "किसानों की आय में वृद्धि",
        "कृषि निवेश में सहायता",
        "ऋण भार में कमी",
        "किसानों के जीवन स्तर में सुधार"
      ],
      en: [
        "₹4,000 per year additional financial assistance",
        "Payment in two installments (₹2,000 per installment)",
        "Total ₹10,000 per year with PM-Kisan",
        "Payment directly to bank account through DBT",
        "Increase in farmers' income",
        "Assistance in agricultural investment",
        "Reduction in debt burden",
        "Improvement in farmers' standard of living"
      ],
    },
    documents: {
      hi: [
        "भूमि संबंधी दस्तावेज (खसरा/खतौनी)",
        "PM-Kisan पंजीकरण संख्या",
        "आधार कार्ड",
        "बैंक पासबुक",
        "समग्र आईडी",
        "निवास प्रमाण पत्र",
        "मोबाइल नंबर (आधार से लिंक)",
        "पासपोर्ट साइज फोटो"
      ],
      en: [
        "Land registry papers (Khasra/Khatauni)",
        "PM-Kisan registration number",
        "Aadhaar Card",
        "Bank Passbook",
        "Samagra ID",
        "Domicile Certificate",
        "Mobile number (linked with Aadhaar)",
        "Passport size photos"
      ],
    },
    applicationProcess: {
      hi: [
        "सबसे पहले PM-Kisan पोर्टल पर पंजीकरण करें (यदि पहले से पंजीकृत नहीं हैं)",
        "PM-Kisan e-KYC प्रक्रिया पूरी करें",
        "आधार को बैंक खाते से NPCI के माध्यम से लिंक करें",
        "राज्य सरकार द्वारा PM-Kisan डेटा के आधार पर स्वतः सत्यापन",
        "यदि आवश्यक हो, तो स्थानीय पटवारी को भूमि रिकॉर्ड जमा करें",
        "सत्यापन के बाद DBT के माध्यम से भुगतान",
        "बैंक खाते में राशि आने की जांच करें",
        "PM-Kisan पोर्टल पर लाभार्थी स्थिति जांचें"
      ],
      en: [
        "First register on PM-Kisan portal (if not already registered)",
        "Complete PM-Kisan e-KYC process",
        "Link Aadhaar with bank account through NPCI",
        "Automatic verification by state government based on PM-Kisan data",
        "If required, submit land records to local Patwari",
        "Payment through DBT after verification",
        "Check for amount credit in bank account",
        "Check beneficiary status on PM-Kisan portal"
      ],
    },
    targetAudience: ["farmers"],
    officialLink: "https://pmkisan.gov.in",
    keywords: { hi: ["किसान कल्याण", "PM-Kisan", "₹4000", "₹10000", "कृषि", "किसान"], en: ["kisan kalyan", "PM-Kisan", "4000", "10000", "agriculture", "farmer"] },
    icon: "Tractor",
  },
  {
    id: "free-electricity-farmers",
    name: { hi: "किसानों के लिए निःशुल्क/सब्सिडी बिजली योजना", en: "Free/Subsidized Electricity for Farmers Scheme" },
    category: { hi: "कृषि एवं किसान", en: "Agriculture & Farmers", key: "agriculture" },
    overview: {
      hi: "मध्य प्रदेश सरकार की यह योजना पात्र किसानों को कृषि पंप कनेक्शनों पर निःशुल्क या अत्यधिक रियायती बिजली प्रदान करती है। SC/ST और सीमांत किसानों को 5HP तक के कृषि पंप कनेक्शनों पर मुफ्त बिजली मिलती है, जबकि अन्य श्रेणियों के किसानों को भारी सब्सिडी दी जाती है। यह योजना किसानों की सिंचाई लागत को कम करके कृषि को लाभदायक बनाने में सहायक है।",
      en: "This scheme by the Madhya Pradesh government provides free or highly subsidized electricity to eligible farmers for agricultural pump connections. SC/ST and marginal farmers get free electricity for agricultural pump connections up to 5HP, while farmers from other categories receive heavy subsidy. This scheme helps in making agriculture profitable by reducing irrigation costs for farmers.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश का स्थायी निवासी किसान",
        "कृषि भूमि का स्वामित्व होना चाहिए",
        "कृषि पंप कनेक्शन 5HP तक का हो",
        "SC/ST श्रेणी के किसान: पूर्ण छूट",
        "सीमांत किसान (2 हेक्टेयर तक भूमि): भारी सब्सिडी",
        "अन्य श्रेणी के किसान: निर्धारित सब्सिडी",
        "बिजली विभाग में पंजीकृत कृषि कनेक्शन",
        "आधार कार्ड और समग्र आईडी होना आवश्यक"
      ],
      en: [
        "Farmer must be permanent resident of Madhya Pradesh",
        "Must have ownership of agricultural land",
        "Agricultural pump connection should be up to 5HP",
        "SC/ST category farmers: Full exemption",
        "Marginal farmers (up to 2 hectares land): Heavy subsidy",
        "Other category farmers: Fixed subsidy",
        "Registered agricultural connection with electricity department",
        "Aadhaar card and Samagra ID mandatory"
      ],
    },
    benefits: {
      hi: [
        "SC/ST किसानों को निःशुल्क बिजली (5HP तक)",
        "सीमांत किसानों को भारी सब्सिडी",
        "अन्य किसानों को निर्धारित सब्सिडी",
        "कृषि लागत में भारी कमी",
        "सिंचाई सुविधा में सुधार",
        "कृषि उत्पादकता में वृद्धि",
        "किसानों की आय में वृद्धि"
      ],
      en: [
        "Free electricity for SC/ST farmers (up to 5HP)",
        "Heavy subsidy for marginal farmers",
        "Fixed subsidy for other farmers",
        "Significant reduction in farming costs",
        "Improvement in irrigation facilities",
        "Increase in agricultural productivity",
        "Increase in farmers' income"
      ],
    },
    documents: {
      hi: [
        "भूमि स्वामित्व दस्तावेज (खसरा/खतौनी/रजिस्ट्री)",
        "SC/ST जाति प्रमाण पत्र (यदि लागू हो)",
        "पिछला बिजली बिल/मीटर कनेक्शन प्रमाण",
        "आधार कार्ड",
        "समग्र आईडी",
        "बैंक पासबुक",
        "निवास प्रमाण पत्र",
        "मोबाइल नंबर"
      ],
      en: [
        "Land ownership documents (Khasra/Khatauni/Registry)",
        "SC/ST Caste Certificate (if applicable)",
        "Previous electricity bill/meter connection proof",
        "Aadhaar Card",
        "Samagra ID",
        "Bank Passbook",
        "Domicile Certificate",
        "Mobile number"
      ],
    },
    applicationProcess: {
      hi: [
        "स्थानीय मध्य प्रदेश विद्युत वितरण कंपनी (MPEZ/MPMKVVCL/MPPKVVCL) कार्यालय जाएं",
        "कृषि पंप कनेक्शन के लिए आवेदन फॉर्म प्राप्त करें",
        "भूमि के खसरा विवरण और अन्य दस्तावेज संलग्न करें",
        "आवेदन फीस जमा करें (यदि लागू हो)",
        "विद्युत विभाग द्वारा स्थल निरीक्षण",
        "सत्यापन के बाद कनेक्शन स्वीकृत",
        "मीटर स्थापना (यदि आवश्यक हो)",
        "कनेक्शन प्राप्त करें और सब्सिडी लाभ शुरू"
      ],
      en: [
        "Visit local MP Electricity Distribution Company (MPEZ/MPMKVVCL/MPPKVVCL) office",
        "Obtain application form for agricultural pump connection",
        "Attach land Khasra details and other documents",
        "Submit application fee (if applicable)",
        "Site inspection by electricity department",
        "Connection approved after verification",
        "Meter installation (if required)",
        "Receive connection and start subsidy benefits"
      ],
    },
    targetAudience: ["farmers"],
    officialLink: "https://mpenrg.nic.in",
    keywords: { hi: ["बिजली", "किसान", "सब्सिडी", "पंप", "निःशुल्क", "5HP"], en: ["electricity", "farmer", "subsidy", "pump", "free", "5HP"] },
    icon: "Tractor",
  },
  {
    id: "krishi-yantra-subsidy",
    name: { hi: "कृषि यंत्र सब्सिडी योजना (DBT Agriculture)", en: "Krishi Yantra Subsidy Yojana (DBT Agriculture)" },
    category: { hi: "कृषि एवं किसान", en: "Agriculture & Farmers", key: "agriculture" },
    overview: {
      hi: "कृषि यंत्र सब्सिडी योजना मध्य प्रदेश सरकार की किसानों के लिए एक महत्वपूर्ण योजना है। इस योजना के तहत किसानों को आधुनिक कृषि उपकरण, ट्रैक्टर, रोटावेटर, सिंचाई मशीनरी, और अन्य कृषि यंत्र खरीदने पर 50% तक की पूंजीगत सब्सिडी प्रदान की जाती है। सब्सिडी की राशि सीधे किसान के बैंक खाते में DBT के माध्यम से भेजी जाती है। आवेदन ऑनलाइन DBT Agriculture पोर्टल पर किया जाता है और चयन लॉटरी प्रणाली द्वारा होता है।",
      en: "Krishi Yantra Subsidy Yojana is an important scheme for farmers by the Madhya Pradesh government. Under this scheme, farmers receive up to 50% capital subsidy for purchasing modern agricultural equipment, tractors, rotavators, irrigation machinery, and other agricultural implements. The subsidy amount is sent directly to the farmer's bank account through DBT. Application is made online on the DBT Agriculture portal and selection is done through a lottery system.",
    },
    eligibility: {
      hi: [
        "मध्य प्रदेश का स्थायी निवासी किसान",
        "कृषि भूमि का स्वामित्व होना आवश्यक",
        "किसान का नाम भूमि रिकॉर्ड (खसरा/खतौनी) में हो",
        "आधार कार्ड और बैंक खाता लिंक होना चाहिए",
        "पिछले 3 वर्षों में इस योजना का लाभ न लिया हो",
        "SC/ST किसानों को प्राथमिकता",
        "छोटे और सीमांत किसानों को प्राथमिकता",
        "समग्र आईडी पंजीकृत होनी चाहिए"
      ],
      en: [
        "Farmer must be permanent resident of Madhya Pradesh",
        "Must have ownership of agricultural land",
        "Farmer's name must be in land records (Khasra/Khatauni)",
        "Aadhaar card and bank account must be linked",
        "Should not have availed this scheme benefit in last 3 years",
        "Priority to SC/ST farmers",
        "Priority to small and marginal farmers",
        "Samagra ID must be registered"
      ],
    },
    benefits: {
      hi: [
        "कृषि यंत्रों की लागत पर 50% तक सब्सिडी",
        "ट्रैक्टर खरीद पर सब्सिडी",
        "रोटावेटर, पंप, और सिंचाई उपकरण पर सब्सिडी",
        "SC/ST किसानों को अतिरिक्त लाभ",
        "सीधे बैंक खाते में सब्सिडी राशि (DBT)",
        "कृषि यांत्रिकीकरण को बढ़ावा",
        "कृषि उत्पादकता में वृद्धि",
        "किसानों की आय में वृद्धि"
      ],
      en: [
        "Up to 50% subsidy on cost of agricultural implements",
        "Subsidy on tractor purchase",
        "Subsidy on rotavator, pumps, and irrigation equipment",
        "Additional benefits for SC/ST farmers",
        "Subsidy amount directly to bank account (DBT)",
        "Promotion of agricultural mechanization",
        "Increase in agricultural productivity",
        "Increase in farmers' income"
      ],
    },
    documents: {
      hi: [
        "भूमि खसरा खतौनी",
        "आधार कार्ड",
        "जाति प्रमाण पत्र (SC/ST लाभ के लिए)",
        "बैंक पासबुक",
        "समग्र आईडी",
        "मोबाइल नंबर (आधार से लिंक)",
        "निवास प्रमाण पत्र",
        "पासपोर्ट साइज फोटो",
        "कृषि भूमि का नक्शा"
      ],
      en: [
        "Land Khasra Khatauni",
        "Aadhaar Card",
        "Caste Certificate (for SC/ST benefits)",
        "Bank Passbook",
        "Samagra ID",
        "Mobile number (linked with Aadhaar)",
        "Domicile Certificate",
        "Passport size photos",
        "Map of agricultural land"
      ],
    },
    applicationProcess: {
      hi: [
        "DBT Agriculture पोर्टल (dbtagriculture.mp.gov.in) पर जाएं",
        "किसान के रूप में पंजीकरण करें या लॉगिन करें",
        "सब्सिडी योजना का चयन करें",
        "ऑनलाइन आवेदन फॉर्म भरें",
        "सभी दस्तावेज अपलोड करें",
        "आवेदन विंडो बंद होने पर लॉटरी प्रक्रिया",
        "लॉटरी में चयन होने पर पूर्व स्वीकृति",
        "अनुमोदित डीलर से उपकरण खरीदें",
        "भुगतान का प्रमाण अपलोड करें",
        "सत्यापन के बाद सब्सिडी राशि बैंक खाते में"
      ],
      en: [
        "Visit DBT Agriculture portal (dbtagriculture.mp.gov.in)",
        "Register as farmer or login",
        "Select subsidy scheme",
        "Fill online application form",
        "Upload all documents",
        "Lottery process after application window closes",
        "Pre-approval on selection in lottery",
        "Purchase equipment from authorized dealer",
        "Upload payment proof",
        "Subsidy amount in bank account after verification"
      ],
    },
    targetAudience: ["farmers"],
    officialLink: "https://dbtagriculture.mp.gov.in",
    keywords: { hi: ["कृषि यंत्र", "सब्सिडी", "ट्रैक्टर", "उपकरण", "50%", "DBT"], en: ["krishi yantra", "subsidy", "tractor", "equipment", "50%", "DBT"] },
    icon: "Tractor",
  },
  {
    id: "sambal-welfare",
    name: { hi: "मुख्यमंत्री जन कल्याण (संबल 2.0) योजना", en: "Mukhyamantri Jan Kalyan (Sambal 2.0) Yojana" },
    category: { hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा", en: "Health, Housing & Social Security", key: "health-social" },
    overview: {
      hi: "संबल 2.0 योजना मध्य प्रदेश सरकार की असंगठित क्षेत्र के श्रमिकों के लिए एक व्यापक सामाजिक सुरक्षा योजना है। इस योजना के तहत श्रमिकों को बिजली सब्सिडी, मातृत्व सहायता, दुर्घटना में ₹4 लाख की सहायता, मृत्यु पर अंत्येष्टि सहायता, और शिक्षा प्रोत्साहन जैसे विभिन्न लाभ प्रदान किए जाते हैं। संबल कार्ड धारकों को राज्य सरकार की विभिन्न कल्याणकारी योजनाओं का लाभ भी मिलता है। यह योजना श्रमिकों और उनके परिवारों को सामाजिक सुरक्षा प्रदान करती है।",
      en: "Sambal 2.0 Yojana is a comprehensive social security scheme by the Madhya Pradesh government for unorganized sector workers. Under this scheme, workers receive various benefits like electricity subsidy, maternity assistance, ₹4 lakh assistance in accidents, funeral assistance on death, and education incentives. Sambal card holders also get benefits from various welfare schemes of the state government. This scheme provides social security to workers and their families.",
    },
    eligibility: {
      hi: [
        "असंगठित क्षेत्र का श्रमिक (निर्माण, खेतिहर, घरेलू, स्ट्रीट वेंडर आदि)",
        "आयु 18 से 60 वर्ष के बीच",
        "मध्य प्रदेश का स्थायी निवासी",
        "वार्षिक पारिवारिक आय ₹2,00,000 से कम",
        "किसी अन्य सामाजिक सुरक्षा योजना (EPF, ESIC आदि) का लाभार्थी नहीं",
        "समग्र और आधार e-KYC पूर्ण",
        "बैंक खाता आधार से लिंक होना चाहिए",
        "स्व-घोषणा पत्र प्रस्तुत करना होगा"
      ],
      en: [
        "Unorganized sector worker (construction, agricultural, domestic, street vendor, etc.)",
        "Age between 18 to 60 years",
        "Permanent resident of Madhya Pradesh",
        "Annual family income less than ₹2,00,000",
        "Not a beneficiary of any other social security scheme (EPF, ESIC, etc.)",
        "Samagra and Aadhaar e-KYC completed",
        "Bank account must be linked with Aadhaar",
        "Self-declaration letter must be submitted"
      ],
    },
    benefits: {
      hi: [
        "बिजली बिल में सब्सिडी (प्रति यूनिट छूट)",
        "मातृत्व सहायता: ₹6,000 (प्रसव के समय)",
        "दुर्घटना मृत्यु पर ₹4,00,000 की सहायता",
        "आकस्मिक मृत्यु पर अंत्येष्टि सहायता: ₹25,000",
        "बालिकाओं की शिक्षा के लिए प्रोत्साहन राशि",
        "कन्यादान सहायता",
        "स्वास्थ्य बीमा कवरेज",
        "पेंशन योजना का लाभ",
        "संबल कार्ड जारी किया जाता है"
      ],
      en: [
        "Electricity bill subsidy (per unit discount)",
        "Maternity assistance: ₹6,000 (at time of delivery)",
        "₹4,00,000 assistance on accidental death",
        "Funeral assistance on natural death: ₹25,000",
        "Incentive amount for girls' education",
        "Kanyadaan assistance",
        "Health insurance coverage",
        "Pension scheme benefit",
        "Sambal card is issued"
      ],
    },
    documents: {
      hi: [
        "असंगठित श्रमिक का स्व-घोषणा पत्र",
        "समग्र आईडी",
        "आधार कार्ड",
        "बैंक खाता विवरण (DBT लिंक)",
        "निवास प्रमाण पत्र",
        "आय प्रमाण पत्र",
        "पासपोर्ट साइज फोटो",
        "मोबाइल नंबर",
        "व्यवसाय प्रमाण पत्र"
      ],
      en: [
        "Unorganized worker self-declaration letter",
        "Samagra ID",
        "Aadhaar Card",
        "Bank account details (DBT linked)",
        "Domicile Certificate",
        "Income Certificate",
        "Passport size photos",
        "Mobile number",
        "Occupation certificate"
      ],
    },
    applicationProcess: {
      hi: [
        "संबल पोर्टल (sambal.mp.gov.in) पर जाएं",
        "ऑनलाइन पंजीकरण करें या निकटतम सेवा केंद्र जाएं",
        "आवश्यक जानकारी भरें और दस्तावेज अपलोड करें",
        "स्व-घोषणा पत्र जमा करें",
        "स्थानीय प्राधिकरण द्वारा क्षेत्रीय सत्यापन",
        "सत्यापन के बाद संबल कार्ड जारी किया जाता है",
        "संबल कार्ड का उपयोग करके विभिन्न लाभ प्राप्त करें",
        "लाभ सीधे बैंक खाते में DBT के माध्यम से"
      ],
      en: [
        "Visit Sambal portal (sambal.mp.gov.in)",
        "Register online or visit nearest service center",
        "Fill required information and upload documents",
        "Submit self-declaration letter",
        "Field verification by local authority",
        "Sambal card issued after verification",
        "Use Sambal card to avail various benefits",
        "Benefits directly to bank account through DBT"
      ],
    },
    targetAudience: ["workers"],
    officialLink: "https://sambal.mp.gov.in",
    keywords: { hi: ["संबल", "श्रमिक", "सामाजिक सुरक्षा", "असंगठित", "बिजली सब्सिडी", "₹4 लाख"], en: ["sambal", "worker", "social security", "unorganized", "electricity subsidy", "4 lakh"] },
    icon: "ShieldCheck",
  },
  {
    id: "teerth-darshan",
    name: { hi: "मुख्यमंत्री तीर्थ दर्शन योजना", en: "Mukhyamantri Teerth Darshan Yojana" },
    category: { hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा", en: "Health, Housing & Social Security", key: "health-social" },
    overview: {
      hi: "मुख्यमंत्री तीर्थ दर्शन योजना मध्य प्रदेश सरकार की वरिष्ठ नागरिकों के लिए एक विशेष योजना है। इस योजना के तहत 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों को देश के प्रमुख तीर्थ स्थानों की यात्रा के लिए पूर्ण रूप से प्रायोजित व्यवस्था की जाती है। इसमें रेल यात्रा, आवास, भोजन, और दर्शन की सभी व्यवस्थाएं सरकार द्वारा की जाती हैं। यह योजना वरिष्ठ नागरिकों को धार्मिक और आध्यात्मिक यात्रा का अवसर प्रदान करती है।",
      en: "Mukhyamantri Teerth Darshan Yojana is a special scheme by the Madhya Pradesh government for senior citizens. Under this scheme, senior citizens aged 60 years or above are provided fully sponsored arrangements for pilgrimage to major religious places in the country. This includes train travel, lodging, meals, and all arrangements for darshan are made by the government. This scheme provides senior citizens an opportunity for religious and spiritual travel.",
    },
    eligibility: {
      hi: [
        "आयु 60 वर्ष या उससे अधिक होनी चाहिए",
        "मध्य प्रदेश का स्थायी निवासी होना आवश्यक",
        "शारीरिक और मानसिक रूप से यात्रा के लिए फिट",
        "सरकारी डॉक्टर द्वारा मेडिकल फिटनेस प्रमाण पत्र",
        "पहले इस योजना का लाभ न लिया हो",
        "कोई गंभीर बीमारी नहीं होनी चाहिए",
        "समग्र आईडी और आधार कार्ड होना आवश्यक",
        "वार्षिक आय सीमा के अंदर"
      ],
      en: [
        "Age must be 60 years or above",
        "Must be permanent resident of Madhya Pradesh",
        "Physically and mentally fit for travel",
        "Medical fitness certificate by government doctor",
        "Should not have availed this scheme before",
        "Should not have any serious illness",
        "Samagra ID and Aadhaar card mandatory",
        "Within annual income limit"
      ],
    },
    benefits: {
      hi: [
        "प्रायोजित रेल यात्रा (वातानुकूलित कोच)",
        "तीर्थ स्थानों पर आवास की व्यवस्था",
        "भोजन और पेयजल की व्यवस्था",
        "प्रमुख तीर्थ स्थानों के दर्शन",
        "यात्रा बीमा कवरेज",
        "चिकित्सा सहायता (यदि आवश्यक हो)",
        "गाइड की सुविधा",
        "सम्मानजनक यात्रा अनुभव"
      ],
      en: [
        "Sponsored train travel (AC coach)",
        "Lodging arrangement at pilgrimage sites",
        "Arrangement for meals and drinking water",
        "Darshan of major pilgrimage sites",
        "Travel insurance coverage",
        "Medical assistance (if required)",
        "Guide facility",
        "Dignified travel experience"
      ],
    },
    documents: {
      hi: [
        "आयु प्रमाण (जन्म प्रमाण पत्र/10वीं अंकसूची)",
        "सरकारी डॉक्टर द्वारा हस्ताक्षरित मेडिकल फिटनेस प्रमाण पत्र",
        "निवास प्रमाण पत्र",
        "आधार कार्ड",
        "समग्र आईडी",
        "पासपोर्ट साइज फोटो (4)",
        "बैंक पासबुक",
        "मोबाइल नंबर",
        "आपातकालीन संपर्क विवरण"
      ],
      en: [
        "Age proof (Birth certificate/10th marksheet)",
        "Medical fitness certificate signed by government doctor",
        "Domicile certificate",
        "Aadhaar Card",
        "Samagra ID",
        "Passport size photos (4)",
        "Bank Passbook",
        "Mobile number",
        "Emergency contact details"
      ],
    },
    applicationProcess: {
      hi: [
        "तहसील/जिला कार्यालय से आवेदन फॉर्म प्राप्त करें",
        "फॉर्म भरें और सभी दस्तावेज संलग्न करें",
        "सरकारी अस्पताल से मेडिकल फिटनेस प्रमाण पत्र प्राप्त करें",
        "स्थानीय कलेक्ट्रेट कार्यालय में आवेदन जमा करें",
        "दस्तावेजों का सत्यापन होगा",
        "मेडिकल जांच के बाद चयन",
        "चयन होने पर यात्रा शेड्यूल और विवरण प्राप्त करें",
        "निर्धारित तिथि पर यात्रा के लिए रिपोर्ट करें"
      ],
      en: [
        "Obtain application form from Tehsil/District office",
        "Fill form and attach all documents",
        "Get medical fitness certificate from government hospital",
        "Submit application to local Collectorate office",
        "Documents will be verified",
        "Selection after medical examination",
        "Receive travel schedule and details on selection",
        "Report for travel on scheduled date"
      ],
    },
    targetAudience: ["senior-citizens"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["तीर्थ दर्शन", "वरिष्ठ नागरिक", "यात्रा", "रेल", "60 वर्ष", "प्रायोजित"], en: ["teerth darshan", "senior citizen", "travel", "train", "60 years", "sponsored"] },
    icon: "MapPin",
  },
  {
    id: "free-dialysis",
    name: { hi: "निःशुल्क डायलिसिस सेवा योजना", en: "Free Dialysis Service Yojana" },
    category: { hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा", en: "Health, Housing & Social Security", key: "health-social" },
    overview: {
      hi: "निःशुल्क डायलिसिस सेवा योजना मध्य प्रदेश सरकार की स्वास्थ्य योजना है जो किडनी रोगियों को मुफ्त डायलिसिस उपचार प्रदान करती है। इस योजना के तहत राज्य के सभी जिला अस्पतालों और मेडिकल कॉलेजों में निःशुल्क डायलिसिस की सुविधा उपलब्ध है। आयुष्मान कार्ड या BPL कार्ड धारक मरीज इस योजना का लाभ उठा सकते हैं। यह योजना गंभीर किडनी रोगों से पीड़ित मरीजों को वित्तीय बोझ से राहत प्रदान करती है।",
      en: "Free Dialysis Service Yojana is a health scheme by the Madhya Pradesh government that provides free dialysis treatment to kidney patients. Under this scheme, free dialysis facility is available in all district hospitals and medical colleges of the state. Patients with Ayushman Card or BPL card can avail benefits of this scheme. This scheme provides relief from financial burden to patients suffering from serious kidney diseases.",
    },
    eligibility: {
      hi: [
        "किडनी रोगी (क्रोनिक किडनी डिजीज)",
        "MP आयुष्मान कार्ड या BPL कार्ड धारक",
        "मध्य प्रदेश का स्थायी निवासी",
        "डॉक्टर द्वारा डायलिसिस की सिफारिश",
        "सरकारी अस्पताल में पंजीकरण",
        "आधार कार्ड और समग्र आईडी होना आवश्यक",
        "वार्षिक आय ₹3,00,000 से कम (BPL के लिए)",
        "आयुष्मान कार्ड धारकों के लिए आय सीमा नहीं"
      ],
      en: [
        "Kidney patient (Chronic Kidney Disease)",
        "MP Ayushman Card or BPL card holder",
        "Permanent resident of Madhya Pradesh",
        "Doctor's recommendation for dialysis",
        "Registration in government hospital",
        "Aadhaar card and Samagra ID mandatory",
        "Annual income less than ₹3,00,000 (for BPL)",
        "No income limit for Ayushman card holders"
      ],
    },
    benefits: {
      hi: [
        "पूर्णतः निःशुल्क डायलिसिस उपचार",
        "सभी जिला अस्पतालों और मेडिकल कॉलेजों में उपलब्ध",
        "सप्ताह में 2-3 सत्र (डॉक्टर की सलाह अनुसार)",
        "डायलिसिस के लिए सभी दवाइयां मुफ्त",
        "आवश्यक जांच और टेस्ट मुफ्त",
        "बार-बार उपचार में भारी राहत",
        "गरीब मरीजों को विशेष लाभ",
        "जीवन रक्षक उपचार तक पहुंच"
      ],
      en: [
        "Completely free dialysis treatment",
        "Available in all district hospitals and medical colleges",
        "2-3 sessions per week (as per doctor's advice)",
        "All medicines for dialysis free",
        "Necessary tests and investigations free",
        "Significant relief in recurring treatment",
        "Special benefit for poor patients",
        "Access to life-saving treatment"
      ],
    },
    documents: {
      hi: [
        "MP आयुष्मान कार्ड / BPL कार्ड",
        "डॉक्टर की पर्ची/रेफरल पत्र",
        "मरीज का पहचान प्रमाण (आधार कार्ड)",
        "समग्र आईडी",
        "पिछली डायलिसिस रिपोर्ट (यदि हो)",
        "रक्त जांच रिपोर्ट",
        "निवास प्रमाण पत्र",
        "पासपोर्ट साइज फोटो"
      ],
      en: [
        "MP Ayushman Card / BPL card",
        "Doctor's prescription/referral letter",
        "Patient identity proof (Aadhaar Card)",
        "Samagra ID",
        "Previous dialysis reports (if any)",
        "Blood test reports",
        "Domicile Certificate",
        "Passport size photos"
      ],
    },
    applicationProcess: {
      hi: [
        "आयुष्मान कार्ड/BPL कार्ड और डॉक्टर की पर्ची के साथ जिला अस्पताल जाएं",
        "नेफ्रोलॉजी विभाग में पंजीकरण करवाएं",
        "डॉक्टर द्वारा मरीज की जांच",
        "निःशुल्क डायलिसिस रजिस्टर में नाम दर्ज",
        "निर्धारित शेड्यूल अनुसार डायलिसिस सत्र",
        "प्रत्येक सत्र के बाद डॉक्टर की सलाह",
        "आवश्यक दवाइयां मुफ्त प्राप्त करें",
        "नियमित फॉलो-अप जांच"
      ],
      en: [
        "Visit district hospital with Ayushman Card/BPL card and doctor's prescription",
        "Register in Nephrology department",
        "Patient examination by doctor",
        "Name entry in free dialysis register",
        "Dialysis sessions as per scheduled",
        "Doctor's advice after each session",
        "Receive necessary medicines free",
        "Regular follow-up examinations"
      ],
    },
    targetAudience: ["senior-citizens"],
    officialLink: "https://mp.gov.in",
    keywords: { hi: ["डायलिसिस", "निःशुल्क", "किडनी", "स्वास्थ्य", "आयुष्मान"], en: ["dialysis", "free", "kidney", "health", "ayushman"] },
    icon: "HeartPulse",
  },
];

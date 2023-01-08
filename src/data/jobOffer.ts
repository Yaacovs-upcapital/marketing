interface JobOffer {
  jobTitle: string;
  jobTitle_en: string;
  jobId: string;
  location: string;
  jobType: string;
  deadline: string;
  jobDesc: string[];
  jobDesc_en: string[];
  jobQf: string[];
  jobQf_en: string[];
}

export const jobOffers: JobOffer[] = [
  {
    jobTitle: "פקיד/ת הנהלת חשבונות",
    jobTitle_en: "Accounting clerk",
    jobId: "201",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: "01/11/21",
    jobDesc: [`דרוש /ה פקיד /ת למחלקת הנהלת חשבונות, הגדרת התפקיד כוללת: קליטת פקודות יומן ושקים כרטיסים, התאמות, תיוקים, קליטת חשבוניות, תשלומי חשבוניות לספקים, הכנת הוראות תשלום.` ]  ,
    jobDesc_en:[ `A clerk is needed for the accounting department, the job description includes: receipt of diary orders and card bags, adjustments, filing, receipt of invoices, invoice payments to suppliers, preparation of payment orders.`],
    jobQf: [
      `ניסיון קודם – חובה.`,
      `אקסל – חובה.`,
      `יכולת עבודה בסביבה ממוחשבת – חובה.`,
      `ידע בסיסי בהנהלת חשבונות – חובה.`,
      `המשרה מיועדת לנשים וגברים כאחד.`,
    ],
    jobQf_en: [
      `Previous experience - a must.`,
      `Excel skills - a must`,
      `Ability to work in a computerized environment`,
      `Basic knowledge of accounting `,
      `The position is open to both women and men.`,
    ],
  },
  {
    jobTitle: "מנהל/ת דיגיטל",
    jobTitle_en: "Digital Manager",

    jobId: "301",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: " 01/12/2021",
    jobDesc: [
      `,בניית מענה דיגיטלי שיתמוך בניהול דיאלוג מדויק ומבוסס נתונים עם מגוון סוגי הלקוחות, לאורך כל מסע הלקוח. ניתוח מסע הלקוח, זיהוי נקודות לטיפול /מינוף באמצעות פתרונות דיגיטליים, בניית תוכנית, יישומה ובדיקת אפקטיביות לאורך זמן.`,
      `פיתוח תחום האנליזה הדיגיטלית בחברה והגדרת יעדים דיגיטליים בשיווק.`,
      `ניהול Data איסוף וקביעת אופן השימוש בדאטה להגעה לקהלים השונים.`
  ],
    jobDesc_en:[ `Building a digital solution that will support the management of an accurate and data-based dialogue with the variety of customer types, throughout the entire customer journey. Analyzing the customer journey, identifying points for treatment/leverage through digital solutions, building a plan, implementing it and testing its effectiveness over time.`,
  `Developing the field of digital analysis in the company and defining digital goals in marketing.`,
  `Data management, collecting data and determining how to use it to reach the various audiences.`
  ],

    jobQf: [
      `תואר ראשון בכלכלה /הנדסת תעשייה וניהול /מדעי המחשב /תקשורת – חובה.`,
      `תואר שני במנהל עסקים – יתרון.`,
      `ניסיון מעשי משמעותי בתחום טכנולוגיית שיווק בארגון עסקי (או שילוב של ניסיון בארגון עסקי ובחברת פרסום בתחום הדיגיטל) – "חי ונושם דיגיטל".`,
      `יכולות שילוב בין הבנה שיווקית להבנה טכנולוגית משלב בין הבנה חדה של תהליכים שיווקיים, של הצרכן והשוק לבין הבנה טכנולוגית /טכנית.`,
      `יכולת כתיבה שיווקית וכתיבת בלוגים`,
      `המשרה מיועדת לנשים וגברים כאחד.`,
    ],
    jobQf_en: [
      `Bachelor's degree in economics /industrial engineering and management /computer science / communications - mandatory.`,
      `Master's degree in business administration - an advantage.`,
      `Significant practical experience in the field of marketing technology in a business organization (or a combination of experience in a business organization and an advertising company in the digital field) - "Lives and Breathes Digital".`,
      `Ability to combine marketing understanding with technological understanding, combining a sharp understanding of marketing processes, of the consumer and of the market with technological/technical understanding.`,
      `Marketing writing and blogging ability`,
      `The position is open to both women and men.`
    ],
  },
  {
    jobTitle: "נציג/ת תפעול ושירות לקוחות",
    jobTitle_en: "Operations and customer service representative",
    jobId: "102",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: "01/11/2021",
    jobDesc: [ `מתן שירות ומענה ללקוחות עסקיים במגוון נושאים פיננסיים, שיחות נכנסות ויוצאות במטרה להעמיק את הקשרים עם הלקוח, תמיכה וטיפול בתהליכים תפעוליים.`],
    jobDesc_en: [`Providing service and responding to business customers on a variety of financial issues, handling incoming and outgoing calls with the aim of deepening relations with the customer, providing support and handling of operational processes.`],

    jobQf: [
      `ניסיון בתפקיד שירותי – יתרון משמעותי`,
      `אוריינטציה שירותית גבוהה – חובה`,
      `יכולת עבודה בתנאי לחץ`,
      `אחריות אישית ודייקנות`,
      `יכולת עבודה עצמאית וראש גדול`,
      `משרה מלאה, עם נכונות לשעות נוספות`,
    ],
    jobQf_en: [
      `Experience in a customer service position -- a significant advantage`,
      `Highly service-oriented - a must`,
      `Ability to work under pressure`,
      `Personal responsibility and punctuality`,
      `Ability to work independently and think outside the box`,
      `Full time, with willingness to work overtime`,
    ],
  },

];


/*interface JobOffer {
  jobTitle: string;
  jobId: string;
  location: string;
  jobType: string;
  deadline: string;
  jobDesc: string[];
  jobQf: string[];
}

export const jobOffers: JobOffer[] = [
  {
    jobTitle: "פקיד/ת הנהלת חשבונות",
    jobId: "201",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: "01/11/21",
    jobDesc: [
      `דרוש /ה פקיד /ת למחלקת הנהלת חשבונות, הגדרת התפקיד כוללת: קליטת פקודות יומן ושקים כרטיסים, התאמות, תיוקים, קליטת חשבוניות, תשלומי חשבוניות לספקים, הכנת הוראות תשלום.`,
    ],
    jobQf: [
      `ניסיון קודם – חובה.`,
      `אקסל – חובה.`,
      `יכולת עבודה בסביבה ממוחשבת – חובה.`,
      `ידע בסיסי בהנהלת חשבונות – חובה.`,
      `המשרה מיועדת לנשים וגברים כאחד.`,
    ],
  },
  {
    jobTitle: "מנהל/ת דיגיטל",
    jobId: "301",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: " 01/12/2021",
    jobDesc: [
      `בניית מענה דיגיטלי שיתמוך בניהול דיאלוג מדויק ומבוסס נתונים עם מגוון סוגי הלקוחות, לאורך כל מסע הלקוח. ניתוח מסע הלקוח, זיהוי נקודות לטיפול /מינוף באמצעות פתרונות דיגיטליים, בניית תוכנית, יישומה ובדיקת אפקטיביות לאורך זמן.        `,
      `ניהול ואחזקת הנכסים הדיגיטליים השיווקיים של החברה: אתר החברה, נכסי מדיה חברתית וניהול התוכן הדיגיטלי של החברה ברשת.`,
      `פיתוח תחום האנליזה הדיגיטלית בחברה והגדרת יעדים דיגיטליים בשיווק.`,
      `ניהול Data איסוף וקביעת אופן השימוש בדאטה להגעה לקהלים השונים.`,
    ],
    jobQf: [
      `תואר ראשון בכלכלה /הנדסת תעשייה וניהול /מדעי המחשב /תקשורת – חובה.`,
      `תואר שני במנהל עסקים – יתרון.`,
      `ניסיון מעשי משמעותי בתחום טכנולוגיית שיווק בארגון עסקי (או שילוב של ניסיון בארגון עסקי ובחברת פרסום בתחום הדיגיטל) – "חי ונושם דיגיטל".`,
      `יכולות שילוב בין הבנה שיווקית להבנה טכנולוגית משלב בין הבנה חדה של תהליכים שיווקיים, של הצרכן והשוק לבין הבנה טכנולוגית /טכנית.`,
      `יכולת כתיבה שיווקית וכתיבת בלוגים`,
      `המשרה מיועדת לנשים וגברים כאחד.`,
    ],
  },
  {
    jobTitle: "נציג/ת תפעול ושירות לקוחות",
    jobId: "102",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: "01/11/2021",
    jobDesc: [
      `מתן שירות ומענה ללקוחות עסקיים במגוון נושאים פיננסיים, שיחות נכנסות ויוצאות במטרה להעמיק את הקשרים עם הלקוח, תמיכה וטיפול בתהליכים תפעוליים.`,
    ],
    jobQf: [
      `ניסיון בתפקיד שירותי – יתרון משמעותי`,
      `אוריינטציה שירותית גבוהה – חובה`,
      `יכולת עבודה בתנאי לחץ`,
      `אחריות אישית ודייקנות`,
      `יכולת עבודה עצמאית וראש גדול`,
      `משרה מלאה, עם נכונות לשעות נוספות`,
    ],
  },
  {
    jobTitle: "נציגי/ות שירות ומכירות",
    jobId: "101",
    location: "תל אביב",
    jobType: "מלאה",
    deadline: "01/11/2021",
    jobDesc: [`לתפקיד הכולל מתן מענה טלפוני ללקוחות החברה בנושאים מגוונים בעולמות הפיננסיים ומכירת פתרונות פיננסיים. המוקד פעיל בימים א'-ה' בין השעות 08:00-17:00 ועד אחרון הלקוחות ללא ימי שישי וללא משמרות ערב!`],
    jobQf: [
        `אוריינטציה שירותית ומכירתית.`,
         `בגרות מלאה.`,
          `לאחר שירות צבאי.`,
           ],
  },
];
*/ 
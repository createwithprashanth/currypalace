// ─────────────────────────────────────────────────────────────────────────────
// Restaurant Configuration
// To use this template for a new restaurant, update the values below,
// replace images in public/images/, and update src/data/menuData.ts.
// Brand colors are in tailwind.config.ts (brand-gold, brand-dark, brand-cream).
// ─────────────────────────────────────────────────────────────────────────────

export const restaurant = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name: "Curry Palace",
  nameSecondary: "مطعم كاري بالس",          // Arabic / secondary name (leave "" to hide)
  tagline: "The Palace of Iconic Taste",
  cuisineLabel: "Authentic Kerala Cuisine · Abu Dhabi",

  // ── Contact ─────────────────────────────────────────────────────────────────
  phone: "024484041",
  phoneDisplay: "02 448 4041",
  whatsapp: "971551899500",
  whatsappDisplay: "055 189 9500",
  instagram: "curry_palace",

  // ── WhatsApp message presets ─────────────────────────────────────────────────
  whatsappOrderMsg: "Hello%20Curry%20Palace!%20I%20would%20like%20to%20place%20an%20order.",
  whatsappLocationMsg: "Hi%20Curry%20Palace!%20I%20want%20to%20order.",

  // ── Location ────────────────────────────────────────────────────────────────
  address: {
    line1: "Al Zahiyah, Tourist Club Area",
    line2: "Electra Road, Behind KFC Building",
    city: "Abu Dhabi, UAE",
  },
  locationPillFull: "Al Zahiyah · Tourist Club Area · Abu Dhabi, UAE",
  locationPillShort: "Al Zahiyah · Abu Dhabi",
  locationSubtext: "Conveniently located in the heart of Abu Dhabi — easy to find, impossible to forget.",
  mapsLink: "https://maps.app.goo.gl/KLdXXg7ZqBgRAvnT7",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5!2d54.3670!3d24.4960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e673a21e185f1%3A0x1!2sCurry%20Palace%20Restaurant%2C%20Al%20Zahiyah%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
  mapsTitle: "Curry Palace Restaurant Location",

  // ── Hours ───────────────────────────────────────────────────────────────────
  hoursLines: ["Open 24 Hours", "7 Days a Week", "Including Holidays"],
  hoursShort: "Open 24 Hours · Every Day",

  // ── Reviews ─────────────────────────────────────────────────────────────────
  rating: 3.5,
  reviewCount: 127,
  reviewLocation: "Tourist Club Area, Abu Dhabi",

  // ── Assets ──────────────────────────────────────────────────────────────────
  menuPdf: "/curry-palace-menu.pdf",
  menuPdfFilename: "Curry_Palace_Menu.pdf",
  ogImage: "/images/curry_palace00001.jpg",

  // ── Hero ────────────────────────────────────────────────────────────────────
  heroSlides: [
    { img: "/images/hero/hero1_biryani.jpg",        label: "Aromatic Kerala Biriyani" },
    { img: "/images/hero/hero3_curry.jpg",           label: "Kerala Chicken Curry" },
    { img: "/images/hero/hero2_butter_chicken.jpg",  label: "Butter Chicken Special" },
    { img: "/images/hero/hero4_grilled_chicken.jpg", label: "Charcoal Grilled Chicken" },
    { img: "/images/hero/hero5_dosa.jpg",            label: "South Indian Breakfast" },
  ],
  // icon values must match keys exported from lucide-react
  heroBadges: [
    { icon: "Star",   label: "3.5★ Google",   sub: "127 Reviews" },
    { icon: "Clock",  label: "Open 24 Hours",  sub: "Every Day" },
    { icon: "Truck",  label: "Free Delivery",  sub: "Home Delivery" },
    { icon: "MapPin", label: "Al Zahiyah",     sub: "Abu Dhabi, UAE" },
  ],
  heroDescription:
    "Bringing the rich culinary heritage of Kerala — God\u2019s Own Country — to the heart of Abu Dhabi. " +
    "Biriyani, Kizhi Porotta, Charcoal Chicken, Shawarma, Fresh Juices & more, served 24 hours.",

  // ── WhatsApp floating button ─────────────────────────────────────────────────
  floatingWhatsappTooltip: "Order on WhatsApp — Fast & Free Delivery! 🍛",

  // ── About ───────────────────────────────────────────────────────────────────
  aboutWelcome: "Welcome to Curry Palace",
  aboutIntro:
    "At Curry Palace, we are devoted to serving exquisite cuisine crafted with the finest ingredients, " +
    "in an environment defined by cleanliness, care, and hospitality — located in the heart of " +
    "Al Zahiyah, Tourist Club Area, Abu Dhabi.",
  aboutFlavourHeading: "A World of Flavours, Awaits You",
  aboutHighlights: [
    { title: "Authentic Kerala Flavours", desc: "Biriyani, Pothi Choru, Kizhi Porotta, Appam — straight from God\u2019s Own Country." },
    { title: "Arabic & Chinese Fusion",   desc: "Shawarma, Charcoal Chicken, Fried Rice, Noodles and gourmet Pasta." },
    { title: "Fresh Juices & Desserts",   desc: "Over 50 varieties of fresh juices, Falooda, Crush Milk and signature Mojitos." },
    { title: "Free Home Delivery",        desc: "Quick delivery across Al Zahiyah and surrounding areas — absolutely free." },
  ],
  aboutStats: [
    { value: "200+",  label: "Menu Items" },
    { value: "24/7",  label: "Always Open" },
    { value: "1000+", label: "Happy Guests Daily" },
    { value: "3.5\u2605",  label: "Google Rated" },
  ],
  // Three about images: [top-left, top-right, bottom-full-width]
  aboutImages: [
    { src: "/images/curry_palace00003.jpg", alt: "Interior" },
    { src: "/images/curry_palace00007.jpg", alt: "Dining" },
    { src: "/images/curry_palace00005.jpg", alt: "Restaurant" },
  ],

  // ── Heritage / Origin section (inside About) ─────────────────────────────────
  heritage: {
    sectionLabel: "🌴 God\u2019s Own Country",
    heading: "The Heart of",
    headingHighlight: "Kerala Cuisine",
    description:
      "Kerala — nestled on the lush Malabar Coast of South India — is famed for its vibrant spices, " +
      "coconut-rich gravies, and banana-leaf feasts. Our kitchen brings every recipe with the same love " +
      "and tradition straight from the backwaters.",
    dishes: [
      { name: "Thalassery Dum Biriyani", desc: "Fragrant rice cooked Kerala-style with aromatic spices" },
      { name: "Kizhi Porotta",           desc: "Porotta steamed in a banana leaf with masala — iconic Kerala street food" },
      { name: "Appam Pollichath",        desc: "Crisp appam cooked in banana leaf, served with coconut curry" },
      { name: "Puttu Biriyani",          desc: "Steamed rice cake layered with spiced chicken or beef" },
      { name: "Pothi Choru",             desc: "Rice meal wrapped in banana leaf, slow-cooked to perfection" },
      { name: "Pal Porotta",             desc: "Flaky porotta soaked in sweetened milk — a Kerala dessert special" },
    ],
    stripIcon: "🌴",
    stripHeading: "Malabar Coast to Abu Dhabi",
    stripText:
      "Our owner, rooted in the rich culinary traditions of Kerala, has brought the authentic tastes of " +
      "the Malabar Coast to Abu Dhabi. Every dish is crafted with hand-ground spices, fresh coconut, " +
      "and recipes passed down through generations — paired with the warmth and hospitality that " +
      "Kerala is world-famous for.",
    origin:      { label: "Kerala",    sub: "God\u2019s Own Country" },
    destination: { label: "Abu Dhabi", sub: "Our Home" },
  },

  // ── Gallery ──────────────────────────────────────────────────────────────────
  gallery: Array.from({ length: 28 }, (_, i) => ({
    src: `/images/curry_palace${String(i + 1).padStart(5, "0")}.jpg`,
    alt: `Curry Palace ${i + 1}`,
  })),
  gallerySubheading: "A glimpse into our world of flavour, warmth, and Kerala hospitality.",

  // ── Menu section ─────────────────────────────────────────────────────────────
  menuSubheading: "From hearty Kerala breakfasts to midnight charcoal grills — our kitchen never sleeps.",
  menuVatNote: "* All prices include VAT\u00a0\u00b7\u00a0ASP = As Per Season\u00a0\u00b7\u00a0Prices may vary",

  // ── Footer ───────────────────────────────────────────────────────────────────
  footerDesc:
    "Bringing the authentic flavours of Kerala — God\u2019s Own Country — to the heart of Abu Dhabi. " +
    "Open 24 hours, every single day.",
  footerOrigin: "🌴 Kerala · UAE",
  footerBottomNote: "VAT Included · Free Home Delivery · Open 24/7 · 🌴 Kerala Flavours",

  // ── SEO / Metadata ───────────────────────────────────────────────────────────
  siteTitle: "Curry Palace Restaurant | The Palace of Iconic Taste \u00b7 Abu Dhabi",
  siteDescription:
    "Curry Palace Restaurant \u2013 Al Zahiyah, Tourist Club Area, Abu Dhabi. Open 24 hours. " +
    "Authentic Kerala cuisine, Arabic Shawarma, Charcoal Chicken, Fresh Juices & Free Home Delivery. " +
    "Call 02 448 4041.",
  siteKeywords: [
    "Curry Palace Restaurant",
    "Kerala restaurant Abu Dhabi",
    "Biryani Abu Dhabi",
    "Indian restaurant UAE",
    "\u0645\u0637\u0639\u0645 \u0643\u0627\u0631\u064a \u0628\u0627\u0644\u0633",
    "Charcoal chicken Abu Dhabi",
    "Shawarma Abu Dhabi",
    "Open 24 hours restaurant Abu Dhabi",
    "Free delivery restaurant Abu Dhabi",
  ],
  ogTitle: "Curry Palace Restaurant | The Palace of Iconic Taste",
  ogDescription: "Authentic Kerala & Arabic cuisine in Al Zahiyah, Abu Dhabi. Open 24/7. Free Home Delivery.",
};

// ─────────────────────────────────────────────────────────────────────────────
// UI Translations  (en + ar)
// ─────────────────────────────────────────────────────────────────────────────
export const translations = {
  en: {
    nav: {
      home:        "Home",
      about:       "About",
      menu:        "Menu",
      gallery:     "Gallery",
      location:    "Location",
      contact:     "Contact",
      downloadPdf: "Download Menu PDF",
      callNow:     "Call Now",
      whatsapp:    "WhatsApp",
      language:    "AR",
    },
    hero: {
      exploreMenu:    "Explore Our Menu",
      orderWhatsapp:  "Order on WhatsApp",
    },
    about: {
      sectionLabel:   "About Us",
      ourStory:       "Our Story",
      welcomeLabel:   "Welcome to Curry Palace",
      flavourHeading: "A World of Flavours, Awaits You",
      callNow:        "Call Now",
      whatsappOrder:  "WhatsApp Order",
      openBadge:      "Open",
    },
    menu: {
      sectionLabel:       "What We Serve",
      heading:            "Our Menu",
      downloadPdf:        "Download Full Menu PDF",
      viewPdf:            "View Menu PDF",
      searchPlaceholder:  "Search dishes...",
      noResults:          "No dishes found matching",
      addToCart:          "+ Add",
    },
    gallery: {
      sectionLabel: "Our Gallery",
      visualFeast:  "Visual Feast",
      heading:      "Photo Gallery",
    },
    location: {
      sectionLabel:  "Find Us",
      heading:       "Our Location",
      address:       "Address",
      phone:         "Phone",
      hours:         "Hours",
      getDirections: "Get Directions",
      whatsapp:      "WhatsApp",
    },
    contact: {
      sectionLabel:    "Get in Touch",
      heading:         "Contact Us",
      subtext:         "Reserve a table, place an order, or simply say hello. We\u2019re always here for you.",
      quickContact:    "Quick Contact",
      sendMessage:     "Send a Message",
      yourName:        "Your Name",
      namePlaceholder: "Enter your name",
      phoneNumber:     "Phone Number",
      messageOrder:    "Message / Order",
      placeholder:     "e.g. I\u2019d like to order 2x Biriyani...",
      sendViaWhatsapp: "Send via WhatsApp",
      whatsappNote:    "This will open WhatsApp with your message pre-filled",
      callUs:          "Call Us",
      visitUs:         "Visit Us",
      followUs:        "Follow Us",
      whatsappLabel:   "WhatsApp",
      instagramLabel:  "Instagram",
      vatNote:         "VAT Included",
    },
    cart: {
      title:            "Your Order",
      empty:            "Your cart is empty",
      emptyHint:        "Tap + Add on any item",
      clear:            "Clear",
      orderViaWhatsapp: "Order via WhatsApp",
      item:             "item",
      items:            "items",
      remove:           "−",
      add:              "+",
    },
    footer: {
      navigate:     "Navigate",
      contact:      "Contact",
      followUs:     "Follow Us",
      orderWhatsapp:"Order via WhatsApp",
      callNow:      "Call Now",
      downloadMenu: "Download Menu PDF",
    },
    common: {
      openNow:       "Open Now",
      freeDelivery:  "Free Delivery",
      open24Hours:   "Open 24 Hours",
    },
  },
  ar: {
    nav: {
      home:        "الرئيسية",
      about:       "من نحن",
      menu:        "القائمة",
      gallery:     "معرض الصور",
      location:    "الموقع",
      contact:     "تواصل معنا",
      downloadPdf: "تحميل قائمة الطعام",
      callNow:     "اتصل الآن",
      whatsapp:    "واتساب",
      language:    "EN",
    },
    hero: {
      exploreMenu:   "استكشف قائمتنا",
      orderWhatsapp: "اطلب عبر واتساب",
    },
    about: {
      sectionLabel:   "من نحن",
      ourStory:       "قصتنا",
      welcomeLabel:   "مرحباً بك في كاري بالس",
      flavourHeading: "عالم من النكهات يستقبلك",
      callNow:        "اتصل الآن",
      whatsappOrder:  "اطلب عبر واتساب",
      openBadge:      "مفتوح",
    },
    menu: {
      sectionLabel:      "ما نقدمه",
      heading:           "قائمة الطعام",
      downloadPdf:       "تحميل القائمة PDF",
      viewPdf:           "عرض القائمة",
      searchPlaceholder: "ابحث عن الأطباق...",
      noResults:         "لا توجد أطباق تطابق",
      addToCart:         "+ أضف",
    },
    gallery: {
      sectionLabel: "معرضنا",
      visualFeast:  "مشهد بصري",
      heading:      "معرض الصور",
    },
    location: {
      sectionLabel:  "ابحث عنا",
      heading:       "موقعنا",
      address:       "العنوان",
      phone:         "الهاتف",
      hours:         "أوقات العمل",
      getDirections: "احصل على الاتجاهات",
      whatsapp:      "واتساب",
    },
    contact: {
      sectionLabel:    "تواصل معنا",
      heading:         "اتصل بنا",
      subtext:         "احجز طاولة، ضع طلباً، أو ببساطة قل مرحباً. نحن دائماً هنا من أجلك.",
      quickContact:    "تواصل سريع",
      sendMessage:     "إرسال رسالة",
      yourName:        "اسمك",
      namePlaceholder: "أدخل اسمك",
      phoneNumber:     "رقم الهاتف",
      messageOrder:    "الرسالة / الطلب",
      placeholder:     "مثال: أريد أن أطلب...",
      sendViaWhatsapp: "إرسال عبر واتساب",
      whatsappNote:    "سيفتح هذا واتساب مع رسالتك مسبقاً",
      callUs:          "اتصل بنا",
      visitUs:         "زورنا",
      followUs:        "تابعنا",
      whatsappLabel:   "واتساب",
      instagramLabel:  "إنستجرام",
      vatNote:         "شامل ضريبة القيمة المضافة",
    },
    cart: {
      title:            "طلبك",
      empty:            "سلة الطلب فارغة",
      emptyHint:        "اضغط + أضف على أي طبق",
      clear:            "مسح",
      orderViaWhatsapp: "اطلب عبر واتساب",
      item:             "عنصر",
      items:            "عناصر",
      remove:           "−",
      add:              "+",
    },
    footer: {
      navigate:      "التنقل",
      contact:       "التواصل",
      followUs:      "تابعنا",
      orderWhatsapp: "اطلب عبر واتساب",
      callNow:       "اتصل الآن",
      downloadMenu:  "تحميل قائمة الطعام",
    },
    common: {
      openNow:      "مفتوح الآن",
      freeDelivery: "توصيل مجاني",
      open24Hours:  "مفتوح 24 ساعة",
    },
  },
} as const;

export type Lang = "en" | "ar";
type DeepString<T> = { [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string };
export type Translations = DeepString<typeof translations["en"]>;

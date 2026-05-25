import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  const pageTitle = title ? `${title} | مركز السنة للعلوم الشرعية والتأهيل` : 'مركز السنة للعلوم الشرعية والتأهيل'
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="مركز السنة للعلوم الشرعية والتأهيل - تأصيل علمي شرعي برؤية رقمية عصرية. صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا." />
        <meta name="keywords" content="مركز السنة, العلوم الشرعية, التأهيل الدعوي, الماهر, دورات شرعية, تحفيظ القرآن, دعوة, العقيدة, التفسير, الحديث, الفقه, اللغة العربية" />
        <meta name="theme-color" content="#062E25" />
        <title>{pageTitle}</title>

        {/* Dark Mode init - prevent FOUC */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const stored = localStorage.getItem('theme');
              const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = stored === 'dark' || (!stored && prefers);
              if (isDark) document.documentElement.classList.add('dark');
            } catch(e){}
          })();
        `}} />

        {/* Google Fonts - Arabic */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />

        {/* TailwindCSS */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />

        {/* AOS Animations */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        {/* Swiper for carousels */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        {/* Custom Tailwind Config - Premium Emerald Theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                fontFamily: {
                  'cairo': ['Cairo', 'sans-serif'],
                  'tajawal': ['Tajawal', 'sans-serif'],
                  'amiri': ['Amiri', 'serif'],
                },
                colors: {
                  // Deep emerald palette - Primary identity
                  'emerald-deep': {
                    50:  '#e8f0ee',
                    100: '#c4d6d1',
                    200: '#9bb9b1',
                    300: '#6e9b90',
                    400: '#4a8276',
                    500: '#266a5c',
                    600: '#1a5347',
                    700: '#0f4034',
                    800: '#082d24',
                    900: '#062E25',
                    950: '#031c16',
                  },
                  // Royal gold accent
                  'royal-gold': {
                    50:  '#fbf7ec',
                    100: '#f5ecc8',
                    200: '#ecdc94',
                    300: '#e1c863',
                    400: '#d4b14a',
                    500: '#C5A059',
                    600: '#a88440',
                    700: '#866733',
                    800: '#634b25',
                    900: '#403018',
                  },
                  'cream': '#fdfaf3',
                  'ink': '#0a1410',
                },
                boxShadow: {
                  'soft': '0 4px 16px rgba(6, 46, 37, 0.06)',
                  'soft-lg': '0 10px 30px rgba(6, 46, 37, 0.08)',
                  'gold-glow': '0 0 30px rgba(197, 160, 89, 0.3)',
                }
              }
            }
          }
        `}} />

        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="font-cairo bg-cream text-gray-800 dark:bg-ink dark:text-gray-200 antialiased transition-colors duration-300">

        {/* Top Bar */}
        <div class="bg-emerald-deep-900 text-white text-sm py-2 hidden md:block border-b border-royal-gold-500/20">
          <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center gap-6">
              <span class="flex items-center gap-2">
                <i class="fas fa-phone text-royal-gold-400"></i>
                <span dir="ltr">0772 089 390</span>
              </span>
              <span class="flex items-center gap-2 hidden lg:inline-flex">
                <i class="fas fa-envelope text-royal-gold-400"></i>
                <span>info@alssunnah-center.com</span>
              </span>
              <span class="flex items-center gap-2 hidden lg:inline-flex">
                <i class="fas fa-clock text-royal-gold-400"></i>
                <span>السبت - الخميس | 8 ص - 9 م</span>
              </span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-royal-gold-300 text-xs">تابعونا:</span>
              <a href="https://www.facebook.com/alssuunah/" target="_blank" rel="noopener" class="hover:text-royal-gold-400 transition" aria-label="Facebook">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://wa.me/772089390" target="_blank" rel="noopener" class="hover:text-royal-gold-400 transition" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="#" class="hover:text-royal-gold-400 transition" aria-label="YouTube">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="hover:text-royal-gold-400 transition" aria-label="Telegram">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Premium Navigation */}
        <nav id="mainNav" class="sticky top-0 z-50 bg-white/95 dark:bg-ink/95 backdrop-blur-lg shadow-soft border-b border-gray-100 dark:border-emerald-deep-800 transition-all duration-300">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-3 gap-4">

              {/* Logo - Right side in RTL */}
              <a href="/" class="flex items-center gap-3 group flex-shrink-0">
                <div class="relative">
                  <div class="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-deep-700 to-emerald-deep-900 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 border-2 border-royal-gold-500/30">
                    <i class="fas fa-mosque text-royal-gold-400 text-2xl"></i>
                  </div>
                  <div class="absolute -top-1 -left-1 w-4 h-4 bg-royal-gold-500 rounded-full border-2 border-white dark:border-ink"></div>
                </div>
                <div class="text-right">
                  <div class="text-emerald-deep-800 dark:text-royal-gold-400 font-extrabold text-base md:text-lg leading-tight">مركز السنة</div>
                  <div class="text-royal-gold-600 dark:text-gray-400 text-xs md:text-sm leading-tight">للعلوم الشرعية والتأهيل</div>
                </div>
              </a>

              {/* Desktop Menu - Center */}
              <ul class="hidden lg:flex items-center gap-1 mx-auto">
                <li><a href="/" class="nav-link px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-900/50 font-semibold transition flex items-center gap-2"><i class="fas fa-home text-sm opacity-70"></i> الرئيسية</a></li>
                <li><a href="/about" class="nav-link px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-900/50 font-semibold transition flex items-center gap-2"><i class="fas fa-info-circle text-sm opacity-70"></i> عن المركز</a></li>
                <li><a href="/departments" class="nav-link px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-900/50 font-semibold transition flex items-center gap-2"><i class="fas fa-graduation-cap text-sm opacity-70"></i> الأقسام العلمية</a></li>
                <li><a href="/library" class="nav-link px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-900/50 font-semibold transition flex items-center gap-2"><i class="fas fa-book text-sm opacity-70"></i> المكتبة</a></li>
                <li><a href="/media" class="nav-link px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-900/50 font-semibold transition flex items-center gap-2"><i class="fas fa-photo-video text-sm opacity-70"></i> الوسائط</a></li>
                <li><a href="/contact" class="nav-link px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-900/50 font-semibold transition flex items-center gap-2"><i class="fas fa-envelope text-sm opacity-70"></i> اتصل بنا</a></li>
              </ul>

              {/* Right cluster: dark mode + CTA - Left side in RTL */}
              <div class="flex items-center gap-3 flex-shrink-0">

                {/* Dark Mode Toggle */}
                <button id="themeToggle" type="button" aria-label="تبديل الوضع المظلم" class="relative w-11 h-11 rounded-xl bg-gray-100 dark:bg-emerald-deep-800 hover:bg-emerald-deep-100 dark:hover:bg-emerald-deep-700 text-emerald-deep-800 dark:text-royal-gold-400 transition flex items-center justify-center group">
                  <i class="fas fa-sun text-lg dark:hidden"></i>
                  <i class="fas fa-moon text-lg hidden dark:inline-block"></i>
                  <span class="absolute -bottom-9 right-1/2 translate-x-1/2 bg-ink text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">الوضع المظلم</span>
                </button>

                {/* CTA Button - Premium */}
                <a href="/register" class="hidden md:inline-flex items-center gap-2 bg-gradient-to-l from-royal-gold-500 to-royal-gold-600 hover:from-royal-gold-600 hover:to-royal-gold-700 text-white px-5 lg:px-6 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5 relative overflow-hidden group">
                  <span class="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <i class="fas fa-user-plus relative z-10"></i>
                  <span class="relative z-10">انضم إلينا</span>
                </a>

                {/* Mobile Menu Button */}
                <button id="mobileMenuBtn" type="button" aria-label="القائمة" class="lg:hidden text-emerald-deep-800 dark:text-royal-gold-400 text-2xl p-2 rounded-lg hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 transition">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobileMenu" class="lg:hidden hidden pb-4 border-t dark:border-emerald-deep-800 pt-4">
              <ul class="space-y-1">
                <li><a href="/" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-home w-5 text-royal-gold-500"></i> الرئيسية</a></li>
                <li><a href="/about" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-info-circle w-5 text-royal-gold-500"></i> عن المركز</a></li>
                <li><a href="/departments" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-graduation-cap w-5 text-royal-gold-500"></i> الأقسام العلمية</a></li>
                <li><a href="/library" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-book w-5 text-royal-gold-500"></i> المكتبة</a></li>
                <li><a href="/media" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-photo-video w-5 text-royal-gold-500"></i> الوسائط</a></li>
                <li><a href="/courses" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-clipboard-list w-5 text-royal-gold-500"></i> الدورات</a></li>
                <li><a href="/news" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-newspaper w-5 text-royal-gold-500"></i> الأخبار</a></li>
                <li><a href="/contact" class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-deep-50 dark:hover:bg-emerald-deep-800 hover:text-emerald-deep-700 dark:hover:text-royal-gold-400 font-semibold transition"><i class="fas fa-envelope w-5 text-royal-gold-500"></i> اتصل بنا</a></li>
                <li class="pt-3"><a href="/register" class="flex items-center justify-center gap-2 bg-gradient-to-l from-royal-gold-500 to-royal-gold-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg"><i class="fas fa-user-plus"></i> انضم إلينا</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Elegant Footer */}
        <footer class="bg-emerald-deep-950 text-white pt-20 pb-6 mt-20 relative overflow-hidden">
          {/* Decorative pattern */}
          <div class="absolute inset-0 opacity-[0.03] pattern-bg pointer-events-none"></div>
          {/* Top decorative gradient line */}
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-transparent via-royal-gold-500 to-transparent"></div>

          <div class="container mx-auto px-4 relative z-10">
            {/* Top section: brand + newsletter */}
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
              <div class="lg:col-span-2">
                <div class="flex items-center gap-4 mb-5">
                  <div class="w-16 h-16 rounded-full bg-gradient-to-br from-royal-gold-500 to-royal-gold-700 flex items-center justify-center shadow-lg">
                    <i class="fas fa-mosque text-white text-2xl"></i>
                  </div>
                  <div>
                    <div class="font-extrabold text-2xl">مركز السنة</div>
                    <div class="text-royal-gold-400 text-sm">للعلوم الشرعية والتأهيل</div>
                  </div>
                </div>
                <p class="text-gray-300 leading-loose max-w-2xl">
                  مركز شرعي علمي متخصص في صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا، وفق المنهج الوسطي المعتدل القائم على الكتاب والسنة بفهم سلف الأمة الصالح.
                </p>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 class="text-royal-gold-400 font-bold text-lg mb-3 flex items-center gap-2">
                  <i class="fas fa-paper-plane"></i>
                  النشرة البريدية
                </h3>
                <p class="text-sm text-gray-300 mb-4">اشترك ليصلك جديد الدورات والمحاضرات</p>
                <form class="flex gap-2">
                  <input type="email" placeholder="بريدك الإلكتروني" class="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-royal-gold-400" dir="ltr" />
                  <button type="submit" class="bg-royal-gold-500 hover:bg-royal-gold-600 text-white px-4 rounded-lg transition" aria-label="اشترك">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Middle: link grid */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div>
                <h3 class="text-royal-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-link text-sm"></i>
                  روابط سريعة
                </h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="/" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الرئيسية</a></li>
                  <li><a href="/about" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> عن المركز</a></li>
                  <li><a href="/departments" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الأقسام العلمية</a></li>
                  <li><a href="/courses" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الدورات</a></li>
                  <li><a href="/news" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الأخبار</a></li>
                </ul>
              </div>

              <div>
                <h3 class="text-royal-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-graduation-cap text-sm"></i>
                  الأقسام العلمية
                </h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="/departments#aqeedah" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> العقيدة</a></li>
                  <li><a href="/departments#tafsir" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> التفسير</a></li>
                  <li><a href="/departments#hadith" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الحديث</a></li>
                  <li><a href="/departments#fiqh" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الفقه</a></li>
                  <li><a href="/departments#arabic" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> اللغة العربية</a></li>
                </ul>
              </div>

              <div>
                <h3 class="text-royal-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-book text-sm"></i>
                  المحتوى
                </h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="/library" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> المكتبة الرقمية</a></li>
                  <li><a href="/media" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> المحاضرات المرئية</a></li>
                  <li><a href="/media#audio" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> الدروس الصوتية</a></li>
                  <li><a href="/gallery" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> معرض الصور</a></li>
                  <li><a href="/register" class="text-gray-300 hover:text-royal-gold-400 transition flex items-center gap-2"><i class="fas fa-chevron-left text-xs opacity-50"></i> التسجيل</a></li>
                </ul>
              </div>

              <div>
                <h3 class="text-royal-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-headset text-sm"></i>
                  تواصل معنا
                </h3>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-phone text-royal-gold-400 mt-1"></i>
                    <a href="tel:0772089390" class="text-gray-300 hover:text-royal-gold-400" dir="ltr">0772 089 390</a>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fab fa-whatsapp text-royal-gold-400 mt-1"></i>
                    <a href="https://wa.me/771405482" target="_blank" rel="noopener" class="text-gray-300 hover:text-royal-gold-400" dir="ltr">0771 405 482</a>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-envelope text-royal-gold-400 mt-1"></i>
                    <span class="text-gray-300 break-all">info@alssunnah-center.com</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-map-marker-alt text-royal-gold-400 mt-1"></i>
                    <span class="text-gray-300">المقر الرئيسي للمركز</span>
                  </li>
                </ul>

                {/* Social */}
                <div class="flex gap-2 mt-5">
                  <a href="https://www.facebook.com/alssuunah/" target="_blank" rel="noopener" aria-label="Facebook" class="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition border border-white/10">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://wa.me/772089390" target="_blank" rel="noopener" aria-label="WhatsApp" class="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition border border-white/10">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" aria-label="YouTube" class="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition border border-white/10">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#" aria-label="Telegram" class="w-10 h-10 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition border border-white/10">
                    <i class="fab fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <div class="text-center md:text-right">© 2026 <span class="text-royal-gold-400 font-bold">مركز السنة للعلوم الشرعية والتأهيل</span>. جميع الحقوق محفوظة.</div>
              <div class="flex gap-4">
                <a href="#" class="hover:text-royal-gold-400 transition">سياسة الخصوصية</a>
                <span class="text-white/20">|</span>
                <a href="#" class="hover:text-royal-gold-400 transition">شروط الاستخدام</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a href="https://wa.me/772089390" target="_blank" rel="noopener" aria-label="واتساب" class="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl z-40 transition transform hover:scale-110 animate-pulse-slow">
          <i class="fab fa-whatsapp text-3xl"></i>
        </a>

        {/* Back to top */}
        <button id="backToTop" type="button" aria-label="العودة للأعلى" class="hidden fixed bottom-6 right-6 w-12 h-12 bg-emerald-deep-700 hover:bg-emerald-deep-800 text-white rounded-full items-center justify-center shadow-xl z-40 transition">
          <i class="fas fa-arrow-up"></i>
        </button>

        {/* Modal container for library */}
        <div id="modalRoot"></div>

        {/* Scripts */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})

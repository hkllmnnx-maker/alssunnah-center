import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  const pageTitle = title ? `${title} | مركز السنة للعلوم الشرعية والتأهيل` : 'مركز السنة للعلوم الشرعية والتأهيل'
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="مركز السنة للعلوم الشرعية والتأهيل - صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا، وفق المنهج الوسطي المعتدل." />
        <meta name="keywords" content="مركز السنة, العلوم الشرعية, التأهيل الدعوي, الماهر, دورات شرعية, تحفيظ القرآن, دعوة" />
        <meta name="theme-color" content="#0d5c3f" />
        <title>{pageTitle}</title>

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

        {/* Custom Tailwind Config */}
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  'cairo': ['Cairo', 'sans-serif'],
                  'tajawal': ['Tajawal', 'sans-serif'],
                  'amiri': ['Amiri', 'serif'],
                },
                colors: {
                  'primary': {
                    50:  '#e6f4ee',
                    100: '#c2e3d2',
                    200: '#99d0b4',
                    300: '#6fbc95',
                    400: '#4cac7e',
                    500: '#2b9d68',
                    600: '#1f8557',
                    700: '#136a47',
                    800: '#0d5c3f',
                    900: '#054d33',
                    950: '#02331f',
                  },
                  'gold': {
                    50:  '#fdf8e7',
                    100: '#faedba',
                    200: '#f5e08b',
                    300: '#f0d35d',
                    400: '#ecc73f',
                    500: '#d4af37',
                    600: '#b8932b',
                    700: '#92731f',
                    800: '#6e5614',
                    900: '#4a3a0c',
                  },
                  'cream': '#fdfaf3',
                },
                backgroundImage: {
                  'islamic-pattern': "url('/static/pattern.svg')",
                  'gradient-primary': 'linear-gradient(135deg, #0d5c3f 0%, #136a47 50%, #02331f 100%)',
                  'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8932b 100%)',
                }
              }
            }
          }
        `}} />

        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="font-cairo bg-cream text-gray-800 antialiased">
        {/* Top Bar */}
        <div class="bg-primary-900 text-white text-sm py-2 hidden md:block">
          <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center gap-6">
              <span class="flex items-center gap-2">
                <i class="fas fa-phone text-gold-400"></i>
                <span dir="ltr">0772 089 390</span>
              </span>
              <span class="flex items-center gap-2">
                <i class="fas fa-envelope text-gold-400"></i>
                <span>info@alssunnah-center.com</span>
              </span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-gold-300 text-xs">تابعونا على:</span>
              <a href="https://www.facebook.com/alssuunah/" target="_blank" class="hover:text-gold-400 transition">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://wa.me/772089390" target="_blank" class="hover:text-gold-400 transition">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="#" class="hover:text-gold-400 transition">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" class="hover:text-gold-400 transition">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav id="mainNav" class="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-3">
              {/* Logo */}
              <a href="/" class="flex items-center gap-3 group">
                <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                  <i class="fas fa-mosque text-gold-400 text-2xl"></i>
                </div>
                <div class="text-right">
                  <div class="text-primary-800 font-bold text-base md:text-lg leading-tight">مركز السنة</div>
                  <div class="text-gold-600 text-xs md:text-sm leading-tight">للعلوم الشرعية والتأهيل</div>
                </div>
              </a>

              {/* Desktop Menu */}
              <ul class="hidden lg:flex items-center gap-1">
                <li><a href="/" class="nav-link px-4 py-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition">الرئيسية</a></li>
                <li><a href="/about" class="nav-link px-4 py-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition">عن المركز</a></li>
                <li><a href="/courses" class="nav-link px-4 py-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition">الدورات</a></li>
                <li><a href="/gallery" class="nav-link px-4 py-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition">المعرض</a></li>
                <li><a href="/news" class="nav-link px-4 py-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition">الأخبار</a></li>
                <li><a href="/contact" class="nav-link px-4 py-2 rounded-lg text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition">تواصل معنا</a></li>
              </ul>

              {/* CTA Button */}
              <div class="hidden lg:flex items-center gap-3">
                <a href="/register" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
                  <i class="fas fa-user-plus ml-2"></i>
                  سجّل الآن
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button id="mobileMenuBtn" class="lg:hidden text-primary-800 text-2xl p-2">
                <i class="fas fa-bars"></i>
              </button>
            </div>

            {/* Mobile Menu */}
            <div id="mobileMenu" class="lg:hidden hidden pb-4 border-t pt-4">
              <ul class="space-y-2">
                <li><a href="/" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium">الرئيسية</a></li>
                <li><a href="/about" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium">عن المركز</a></li>
                <li><a href="/courses" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium">الدورات</a></li>
                <li><a href="/gallery" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium">المعرض</a></li>
                <li><a href="/news" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium">الأخبار</a></li>
                <li><a href="/contact" class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium">تواصل معنا</a></li>
                <li class="pt-2"><a href="/register" class="block text-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg font-bold">سجّل الآن</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer class="bg-primary-950 text-white pt-16 pb-6 mt-20 relative overflow-hidden">
          <div class="absolute inset-0 opacity-5 bg-islamic-pattern"></div>
          <div class="container mx-auto px-4 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {/* About */}
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                    <i class="fas fa-mosque text-primary-900 text-xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-lg">مركز السنة</div>
                    <div class="text-gold-400 text-xs">للعلوم الشرعية والتأهيل</div>
                  </div>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">
                  مركز شرعي متخصص في صناعة الداعية المؤصل علميًا والمزكى إيمانيًا، وفق المنهج الوسطي المعتدل.
                </p>
                <div class="flex gap-2">
                  <a href="https://www.facebook.com/alssuunah/" target="_blank" class="w-9 h-9 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://wa.me/772089390" target="_blank" class="w-9 h-9 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" class="w-9 h-9 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#" class="w-9 h-9 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition">
                    <i class="fab fa-telegram"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 class="text-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-link text-sm"></i>
                  روابط سريعة
                </h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="/" class="text-gray-300 hover:text-gold-400 transition">الرئيسية</a></li>
                  <li><a href="/about" class="text-gray-300 hover:text-gold-400 transition">عن المركز</a></li>
                  <li><a href="/courses" class="text-gray-300 hover:text-gold-400 transition">الدورات</a></li>
                  <li><a href="/gallery" class="text-gray-300 hover:text-gold-400 transition">المعرض</a></li>
                  <li><a href="/news" class="text-gray-300 hover:text-gold-400 transition">الأخبار</a></li>
                  <li><a href="/contact" class="text-gray-300 hover:text-gold-400 transition">تواصل معنا</a></li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h3 class="text-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-graduation-cap text-sm"></i>
                  برامجنا
                </h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="/courses" class="text-gray-300 hover:text-gold-400 transition">دورة الماهر</a></li>
                  <li><a href="/courses" class="text-gray-300 hover:text-gold-400 transition">التأهيل الدعوي</a></li>
                  <li><a href="/courses" class="text-gray-300 hover:text-gold-400 transition">الأدب المفرد</a></li>
                  <li><a href="/courses" class="text-gray-300 hover:text-gold-400 transition">حلقات التحفيظ</a></li>
                  <li><a href="/courses" class="text-gray-300 hover:text-gold-400 transition">العقيدة والفقه</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 class="text-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <i class="fas fa-headset text-sm"></i>
                  تواصل معنا
                </h3>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-phone text-gold-400 mt-1"></i>
                    <span class="text-gray-300" dir="ltr">0772 089 390</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fab fa-whatsapp text-gold-400 mt-1"></i>
                    <span class="text-gray-300" dir="ltr">0771 405 482</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-envelope text-gold-400 mt-1"></i>
                    <span class="text-gray-300">info@alssunnah-center.com</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-map-marker-alt text-gold-400 mt-1"></i>
                    <span class="text-gray-300">المقر الرئيسي للمركز</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <div>© 2026 مركز السنة للعلوم الشرعية والتأهيل. جميع الحقوق محفوظة.</div>
              <div class="flex gap-4">
                <a href="#" class="hover:text-gold-400 transition">سياسة الخصوصية</a>
                <a href="#" class="hover:text-gold-400 transition">شروط الاستخدام</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a href="https://wa.me/772089390" target="_blank" class="fixed bottom-6 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl z-40 transition transform hover:scale-110 animate-pulse-slow">
          <i class="fab fa-whatsapp text-3xl"></i>
        </a>

        {/* Back to top */}
        <button id="backToTop" class="hidden fixed bottom-6 right-6 w-12 h-12 bg-primary-700 hover:bg-primary-800 text-white rounded-full items-center justify-center shadow-xl z-40 transition">
          <i class="fas fa-arrow-up"></i>
        </button>

        {/* Scripts */}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})

export const HomePage = () => {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section class="hero-bg relative min-h-[90vh] flex items-center overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 relative z-10 py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right - Text */}
            <div class="text-white text-center lg:text-right" data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <i class="fas fa-mosque"></i>
                <span>أهلًا بكم في المركز</span>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                مركز <span class="text-shine">السنة</span><br />
                للعلوم الشرعية والتأهيل
              </h1>
              <p class="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mr-0">
                صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا، وفق المنهج الوسطي المعتدل.
              </p>
              <div class="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a href="/register" class="btn-gold">
                  <i class="fas fa-user-plus"></i>
                  سجّل في الدورات
                </a>
                <a href="/about" class="btn-outline">
                  <i class="fas fa-info-circle"></i>
                  تعرّف على المركز
                </a>
              </div>

              {/* Stats inline */}
              <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 max-w-lg mx-auto lg:mr-0">
                <div class="text-center lg:text-right">
                  <div class="text-3xl md:text-4xl font-extrabold text-gold-400 counter" data-target="1500">0</div>
                  <div class="text-sm text-gray-300 mt-1">طالب وطالبة</div>
                </div>
                <div class="text-center lg:text-right">
                  <div class="text-3xl md:text-4xl font-extrabold text-gold-400 counter" data-target="45">0</div>
                  <div class="text-sm text-gray-300 mt-1">دورة منعقدة</div>
                </div>
                <div class="text-center lg:text-right">
                  <div class="text-3xl md:text-4xl font-extrabold text-gold-400 counter" data-target="25">0</div>
                  <div class="text-sm text-gray-300 mt-1">عالم ومشايخ</div>
                </div>
              </div>
            </div>

            {/* Left - Decorative Logo */}
            <div class="hidden lg:flex justify-center items-center" data-aos="fade-right">
              <div class="relative">
                <div class="w-96 h-96 rounded-full bg-gradient-to-br from-gold-400/20 to-primary-700/20 backdrop-blur-md border-2 border-gold-400/40 flex items-center justify-center animate-float">
                  <div class="w-80 h-80 rounded-full bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div class="absolute inset-0 opacity-20 pattern-bg"></div>
                    <div class="text-center relative z-10">
                      <i class="fas fa-mosque text-gold-400 text-8xl mb-4 glow-text"></i>
                      <div class="text-white font-bold text-2xl">مركز السنة</div>
                      <div class="text-gold-300 text-sm mt-2">للعلوم الشرعية والتأهيل</div>
                    </div>
                  </div>
                </div>
                {/* Decorative dots */}
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full animate-pulse"></div>
                <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-300 rounded-full animate-pulse"></div>
                <div class="absolute top-1/2 -left-8 w-4 h-4 bg-gold-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div class="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" class="w-full" preserveAspectRatio="none">
            <path fill="#fdfaf3" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* ===== Vision & Pillars ===== */}
      <section class="py-20 bg-cream relative">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14" data-aos="fade-up">
            <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <i class="fas fa-eye"></i>
              <span>رؤيتنا ورسالتنا</span>
            </div>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">
              أركان الداعية المتكامل
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto mt-6">
              نسعى لإعداد الداعية المتكامل وفق أربعة أركان أساسية تجمع بين العلم والإيمان والأخلاق والمهارة الدعوية.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div class="feature-card bg-white p-7 rounded-2xl shadow-md text-center" data-aos="fade-up" data-aos-delay="0">
              <div class="feature-icon mx-auto mb-5">
                <i class="fas fa-book-open"></i>
              </div>
              <h3 class="font-bold text-xl text-primary-900 mb-3">المؤصل علميًا</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                تأصيل علمي راسخ في العقيدة والفقه والحديث على منهج أهل السنة والجماعة.
              </p>
            </div>

            {/* Pillar 2 */}
            <div class="feature-card bg-white p-7 rounded-2xl shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-icon mx-auto mb-5">
                <i class="fas fa-heart"></i>
              </div>
              <h3 class="font-bold text-xl text-primary-900 mb-3">المزكى إيمانيًا</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                تزكية القلوب وتربية الروح على الإيمان والعبودية الخالصة لله تعالى.
              </p>
            </div>

            {/* Pillar 3 */}
            <div class="feature-card bg-white p-7 rounded-2xl shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-icon mx-auto mb-5">
                <i class="fas fa-hand-holding-heart"></i>
              </div>
              <h3 class="font-bold text-xl text-primary-900 mb-3">المهذب أخلاقيًا</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                التحلي بأخلاق الإسلام السامية وآداب طالب العلم والداعية إلى الله.
              </p>
            </div>

            {/* Pillar 4 */}
            <div class="feature-card bg-white p-7 rounded-2xl shadow-md text-center" data-aos="fade-up" data-aos-delay="300">
              <div class="feature-icon mx-auto mb-5">
                <i class="fas fa-bullhorn"></i>
              </div>
              <h3 class="font-bold text-xl text-primary-900 mb-3">الماهر دعويًا</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                إتقان مهارات الدعوة والخطابة والتواصل لإيصال الرسالة بفعالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quranic Verse Box ===== */}
      <section class="py-16 bg-gradient-to-br from-cream to-gold-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto" data-aos="zoom-in">
            <div class="verse-box font-quran shadow-xl">
              وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ
            </div>
            <div class="text-center mt-4 text-primary-700 font-bold">[ سورة فصلت - الآية 33 ]</div>
          </div>
        </div>
      </section>

      {/* ===== Featured Courses ===== */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14" data-aos="fade-up">
            <div class="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <i class="fas fa-graduation-cap"></i>
              <span>دوراتنا المميزة</span>
            </div>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">
              برامج علمية متميزة
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto mt-6">
              مجموعة متنوعة من الدورات والبرامج العلمية المتخصصة لإعداد طلاب العلم والدعاة.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 - الماهر 3 */}
            <div class="course-card" data-aos="fade-up" data-aos-delay="0">
              <div class="course-image flex items-center justify-center">
                <div class="course-badge">جديد</div>
                <div class="text-center text-white relative z-10">
                  <i class="fas fa-book-quran text-6xl text-gold-400 mb-3"></i>
                  <div class="text-3xl font-extrabold">الماهر <span class="text-gold-400">3</span></div>
                  <div class="text-sm mt-2 text-gold-200">دورة متقدمة</div>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span class="flex items-center gap-1">
                    <i class="fas fa-clock text-primary-600"></i>
                    19 يومًا
                  </span>
                  <span class="flex items-center gap-1">
                    <i class="fas fa-users text-primary-600"></i>
                    150 مقعدًا
                  </span>
                </div>
                <h3 class="font-bold text-xl text-primary-900 mb-2">دورة الماهر 3 - إتقان القرآن</h3>
                <p class="text-gray-600 text-sm mb-4">
                  دورة مكثفة لإتقان تلاوة وحفظ القرآن الكريم بأحكام التجويد على يد نخبة من المشايخ.
                </p>
                <div class="flex items-center justify-between pt-4 border-t">
                  <div class="text-primary-700 font-bold">
                    <i class="fas fa-calendar-alt ml-1 text-gold-500"></i>
                    تبقى 16 يوم
                  </div>
                  <a href="/courses" class="text-primary-700 hover:text-gold-600 font-bold flex items-center gap-1">
                    التفاصيل
                    <i class="fas fa-arrow-left text-sm"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Course 2 - الأدب المفرد */}
            <div class="course-card" data-aos="fade-up" data-aos-delay="100">
              <div class="course-image flex items-center justify-center" style="background: linear-gradient(135deg, #136a47 0%, #054d33 100%);">
                <div class="course-badge bg-gradient-to-r from-blue-500 to-blue-600">متاح</div>
                <div class="text-center text-white relative z-10">
                  <i class="fas fa-scroll text-6xl text-gold-400 mb-3"></i>
                  <div class="text-2xl font-extrabold">الأدب المفرد</div>
                  <div class="text-sm mt-2 text-gold-200">شرح الإمام البخاري</div>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span class="flex items-center gap-1">
                    <i class="fas fa-clock text-primary-600"></i>
                    12 يومًا
                  </span>
                  <span class="flex items-center gap-1">
                    <i class="fas fa-users text-primary-600"></i>
                    100 مقعد
                  </span>
                </div>
                <h3 class="font-bold text-xl text-primary-900 mb-2">شرح كتاب الأدب المفرد</h3>
                <p class="text-gray-600 text-sm mb-4">
                  دراسة معمّقة لكتاب الأدب المفرد للإمام البخاري في الآداب الإسلامية والمعاملات.
                </p>
                <div class="flex items-center justify-between pt-4 border-t">
                  <div class="text-primary-700 font-bold">
                    <i class="fas fa-user-tie ml-1 text-gold-500"></i>
                    الشيخ ناصر
                  </div>
                  <a href="/courses" class="text-primary-700 hover:text-gold-600 font-bold flex items-center gap-1">
                    التفاصيل
                    <i class="fas fa-arrow-left text-sm"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Course 3 - الواقع المعيب */}
            <div class="course-card" data-aos="fade-up" data-aos-delay="200">
              <div class="course-image flex items-center justify-center" style="background: linear-gradient(135deg, #92731f 0%, #4a3a0c 100%);">
                <div class="course-badge bg-gradient-to-r from-green-500 to-green-600">قريبًا</div>
                <div class="text-center text-white relative z-10">
                  <i class="fas fa-mosque text-6xl text-gold-300 mb-3"></i>
                  <div class="text-2xl font-extrabold">تأهيل الأئمة</div>
                  <div class="text-sm mt-2 text-gold-200">برنامج متكامل</div>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span class="flex items-center gap-1">
                    <i class="fas fa-clock text-primary-600"></i>
                    شهران
                  </span>
                  <span class="flex items-center gap-1">
                    <i class="fas fa-users text-primary-600"></i>
                    50 مقعدًا
                  </span>
                </div>
                <h3 class="font-bold text-xl text-primary-900 mb-2">برنامج تأهيل الأئمة والخطباء</h3>
                <p class="text-gray-600 text-sm mb-4">
                  برنامج متكامل لتأهيل الأئمة والخطباء في الفقه والخطابة والتعامل مع المصلين.
                </p>
                <div class="flex items-center justify-between pt-4 border-t">
                  <div class="text-primary-700 font-bold">
                    <i class="fas fa-certificate ml-1 text-gold-500"></i>
                    شهادة معتمدة
                  </div>
                  <a href="/courses" class="text-primary-700 hover:text-gold-600 font-bold flex items-center gap-1">
                    التفاصيل
                    <i class="fas fa-arrow-left text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/courses" class="btn-primary">
              <i class="fas fa-th-list"></i>
              عرض جميع الدورات
            </a>
          </div>
        </div>
      </section>

      {/* ===== Vision Statement ===== */}
      <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="vision-card rounded-3xl p-10 md:p-16 text-white relative z-10" data-aos="fade-up">
            <div class="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div class="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-5">
                  <i class="fas fa-bullseye"></i>
                  <span>رؤيتنا</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  صناعة الداعية المتكامل وفق <span class="text-gold-400">المنهج الوسطي المعتدل</span>
                </h2>
                <p class="text-lg text-gray-200 leading-relaxed mb-6">
                  نسعى إلى تخريج جيل من الدعاة الراسخين في علمهم، الصادقين في إيمانهم، الكرام في أخلاقهم، الماهرين في دعوتهم،
                  ليكونوا قدوة في مجتمعاتهم ومنارة هدى لمن حولهم.
                </p>
                <a href="/about" class="btn-gold">
                  اقرأ المزيد عن المركز
                  <i class="fas fa-arrow-left"></i>
                </a>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <i class="fas fa-book text-gold-400 text-3xl mb-3"></i>
                  <div class="text-3xl font-extrabold text-gold-400 mb-1">+500</div>
                  <div class="text-sm">حلقة علمية</div>
                </div>
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <i class="fas fa-mosque text-gold-400 text-3xl mb-3"></i>
                  <div class="text-3xl font-extrabold text-gold-400 mb-1">+15</div>
                  <div class="text-sm">سنة عطاء</div>
                </div>
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <i class="fas fa-user-graduate text-gold-400 text-3xl mb-3"></i>
                  <div class="text-3xl font-extrabold text-gold-400 mb-1">+1500</div>
                  <div class="text-sm">طالب علم</div>
                </div>
                <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <i class="fas fa-certificate text-gold-400 text-3xl mb-3"></i>
                  <div class="text-3xl font-extrabold text-gold-400 mb-1">+45</div>
                  <div class="text-sm">دورة شرعية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== News / Activities ===== */}
      <section class="py-20 bg-cream">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14" data-aos="fade-up">
            <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <i class="fas fa-newspaper"></i>
              <span>آخر الأخبار</span>
            </div>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">
              آخر أنشطة وأخبار المركز
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="0">
              <div class="h-48 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center relative">
                <i class="fas fa-mosque text-gold-400 text-6xl"></i>
                <div class="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  حدث جديد
                </div>
              </div>
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">
                  <i class="fas fa-calendar ml-1 text-gold-500"></i>
                  15 شوال 1446
                </div>
                <h3 class="font-bold text-lg text-primary-900 mb-3">انطلاق دورة الماهر 3 بمشاركة 150 طالبًا</h3>
                <p class="text-gray-600 text-sm mb-4">انطلقت اليوم دورة الماهر 3 بمشاركة عدد كبير من الطلاب من مختلف المناطق...</p>
                <a href="/news" class="text-primary-700 font-bold flex items-center gap-1 hover:text-gold-600">
                  اقرأ المزيد
                  <i class="fas fa-arrow-left text-sm"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="100">
              <div class="h-48 bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center relative">
                <i class="fas fa-graduation-cap text-white text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">
                  <i class="fas fa-calendar ml-1 text-gold-500"></i>
                  10 شوال 1446
                </div>
                <h3 class="font-bold text-lg text-primary-900 mb-3">تخريج الدفعة 12 من برنامج الإجازة بالقرآن</h3>
                <p class="text-gray-600 text-sm mb-4">احتفل المركز بتخريج الدفعة الثانية عشرة من طلاب برنامج الإجازة بالقرآن الكريم...</p>
                <a href="/news" class="text-primary-700 font-bold flex items-center gap-1 hover:text-gold-600">
                  اقرأ المزيد
                  <i class="fas fa-arrow-left text-sm"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="200">
              <div class="h-48 bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center relative">
                <i class="fas fa-users text-gold-400 text-6xl"></i>
              </div>
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">
                  <i class="fas fa-calendar ml-1 text-gold-500"></i>
                  5 شوال 1446
                </div>
                <h3 class="font-bold text-lg text-primary-900 mb-3">زيارة وفد علمي من علماء الأمة للمركز</h3>
                <p class="text-gray-600 text-sm mb-4">استقبل المركز وفدًا من العلماء البارزين ضمن جولاتهم العلمية والتعليمية...</p>
                <a href="/news" class="text-primary-700 font-bold flex items-center gap-1 hover:text-gold-600">
                  اقرأ المزيد
                  <i class="fas fa-arrow-left text-sm"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section class="py-20 bg-gradient-primary text-white relative overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10" data-aos="zoom-in">
          <i class="fas fa-mosque text-gold-400 text-6xl mb-6"></i>
          <h2 class="text-3xl md:text-5xl font-extrabold mb-6">
            انضم إلى مسيرة <span class="text-shine">طلب العلم</span>
          </h2>
          <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            سجّل الآن في إحدى دوراتنا العلمية المتميزة وكن جزءًا من رحلة بناء الدعاة وطلاب العلم.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="/register" class="btn-gold">
              <i class="fas fa-user-plus"></i>
              التسجيل في الدورات
            </a>
            <a href="https://wa.me/772089390" target="_blank" class="btn-outline">
              <i class="fab fa-whatsapp"></i>
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

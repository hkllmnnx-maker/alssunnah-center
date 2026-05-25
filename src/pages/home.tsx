export const HomePage = () => {
  return (
    <>
      {/* ============================================================
          1. PREMIUM HERO SECTION - Deep Emerald + Royal Gold
          ============================================================ */}
      <section class="hero-bg-emerald relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Layered geometric Islamic patterns */}
        <div class="islamic-pattern-1"></div>
        <div class="islamic-pattern-2"></div>

        {/* Floating decorative elements */}
        <div class="absolute top-20 left-10 w-32 h-32 border-2 border-royal-gold-500/10 rounded-full animate-spin-slow hidden lg:block"></div>
        <div class="absolute bottom-20 right-20 w-48 h-48 border-2 border-royal-gold-500/10 rounded-full animate-spin-slow hidden lg:block" style="animation-direction: reverse;"></div>

        <div class="container mx-auto px-4 relative z-10 py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right column - Text content */}
            <div class="text-white text-center lg:text-right" data-aos="fade-left">
              {/* Eyebrow badge */}
              <div class="inline-flex items-center gap-2 bg-royal-gold-500/15 backdrop-blur-sm border border-royal-gold-500/30 text-royal-gold-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <span class="w-2 h-2 rounded-full bg-royal-gold-400 animate-pulse"></span>
                <i class="fas fa-mosque text-royal-gold-400"></i>
                <span>مركز السنة للعلوم الشرعية والتأهيل</span>
              </div>

              {/* Main heading - inspirational message */}
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6">
                تأصيل علمي شرعي
                <br />
                <span class="text-shine">برؤية رقمية عصرية</span>
              </h1>

              <p class="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mr-0">
                صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا،
                وفق المنهج الوسطي المعتدل القائم على الكتاب والسنة بفهم سلف الأمة الصالح.
              </p>

              {/* CTA buttons */}
              <div class="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a href="/departments" class="btn-gold">
                  <i class="fas fa-graduation-cap"></i>
                  تصفّح المقررات العلمية
                </a>
                <a href="/about" class="btn-outline">
                  <i class="fas fa-info-circle"></i>
                  عن المركز
                </a>
              </div>

              {/* Inline stats */}
              <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/15 max-w-lg mx-auto lg:mr-0">
                <div class="text-center lg:text-right">
                  <div class="text-3xl md:text-4xl font-extrabold text-royal-gold-400 counter" data-target="1500">0</div>
                  <div class="text-sm text-gray-300 mt-1">طالب وطالبة</div>
                </div>
                <div class="text-center lg:text-right">
                  <div class="text-3xl md:text-4xl font-extrabold text-royal-gold-400 counter" data-target="45">0</div>
                  <div class="text-sm text-gray-300 mt-1">دورة علمية</div>
                </div>
                <div class="text-center lg:text-right">
                  <div class="text-3xl md:text-4xl font-extrabold text-royal-gold-400 counter" data-target="25">0</div>
                  <div class="text-sm text-gray-300 mt-1">مشرف ومحاضر</div>
                </div>
              </div>
            </div>

            {/* Left column - Decorative emblem */}
            <div class="hidden lg:flex justify-center items-center" data-aos="fade-right">
              <div class="relative">
                {/* Outer rotating ring */}
                <div class="absolute inset-0 w-[28rem] h-[28rem] rounded-full border-2 border-dashed border-royal-gold-500/30 animate-spin-slow"></div>

                {/* Middle ring */}
                <div class="w-96 h-96 rounded-full bg-gradient-to-br from-royal-gold-500/20 to-emerald-deep-700/20 backdrop-blur-md border border-royal-gold-400/40 flex items-center justify-center animate-float relative">
                  <div class="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-950 flex items-center justify-center shadow-2xl relative overflow-hidden border-2 border-royal-gold-500/20">
                    <div class="absolute inset-0 opacity-20 pattern-bg"></div>
                    <div class="text-center relative z-10 px-8">
                      <i class="fas fa-mosque text-royal-gold-400 text-8xl mb-4 glow-text"></i>
                      <div class="text-white font-extrabold text-2xl">مركز السنة</div>
                      <div class="text-royal-gold-300 text-sm mt-2 font-medium">للعلوم الشرعية والتأهيل</div>
                      <div class="islamic-divider"><span>۞</span></div>
                      <div class="text-royal-gold-200 text-xs">منذ 2010</div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative dots */}
                <div class="absolute -top-2 -right-2 w-10 h-10 bg-royal-gold-400 rounded-full shadow-lg animate-pulse"></div>
                <div class="absolute -bottom-2 -left-2 w-8 h-8 bg-royal-gold-300 rounded-full shadow-lg animate-pulse" style="animation-delay: 0.5s;"></div>
                <div class="absolute top-1/3 -left-6 w-6 h-6 bg-royal-gold-500 rounded-full shadow-lg animate-pulse" style="animation-delay: 1s;"></div>
                <div class="absolute bottom-1/3 -right-6 w-5 h-5 bg-royal-gold-400 rounded-full shadow-lg animate-pulse" style="animation-delay: 1.5s;"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <div class="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" class="w-full" preserveAspectRatio="none">
            <path fill="#fdfaf3" class="dark:fill-[#0a1410]" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* ============================================================
          2. CORE VALUES CARDS - Vision / Mission / Goals
          ============================================================ */}
      <section class="py-20 bg-cream dark:bg-ink relative">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14" data-aos="fade-up">
            <span class="section-eyebrow">
              <i class="fas fa-compass"></i>
              من نحن
            </span>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-royal-gold-400 mb-4">
              التعريف بالمركز
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
              ثلاثة أركان أساسية تعكس هوية المركز ورسالته العلمية والدعوية
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <div class="soft-card text-center" data-aos="fade-up" data-aos-delay="0">
              <div class="feature-icon-soft mx-auto mb-5">
                <i class="fas fa-eye"></i>
              </div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">رؤيتنا</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose">
                صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا،
                وفق المنهج الوسطي المعتدل.
              </p>
            </div>

            {/* Mission Card */}
            <div class="soft-card text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-icon-soft mx-auto mb-5">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">رسالتنا</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose">
                تقديم محتوى علمي شرعي راسخ، وبيئة تربوية متكاملة تجمع بين أصالة العلم،
                وعمق التزكية، ومهارة الدعوة، لخدمة الإسلام والمسلمين.
              </p>
            </div>

            {/* Goals Card */}
            <div class="soft-card text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-icon-soft mx-auto mb-5">
                <i class="fas fa-flag"></i>
              </div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">أهدافنا</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose">
                إعداد جيل من الدعاة المتمكنين، ونشر العلم الشرعي وفق المنهج الصحيح،
                وخدمة كتاب الله وسنة نبيه ﷺ، وغرس القيم الإسلامية الأصيلة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. SCIENTIFIC DEPARTMENTS GRID
          ============================================================ */}
      <section class="py-20 bg-white dark:bg-emerald-deep-950 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream dark:from-ink to-transparent"></div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center mb-14" data-aos="fade-up">
            <span class="section-eyebrow">
              <i class="fas fa-graduation-cap"></i>
              المناهج العلمية
            </span>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-royal-gold-400 mb-4">
              الأقسام العلمية والمناهج
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
              تخصصات علمية شرعية مرتبة وفق منهج علمي راسخ يجمع بين الأصالة والمعاصرة
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* العقيدة */}
            <div class="department-card" data-aos="fade-up" data-aos-delay="0">
              <div class="dept-icon"><i class="fas fa-shield-alt"></i></div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">العقيدة</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose mb-5 line-clamp-3">
                دراسة العقيدة على منهج أهل السنة والجماعة من خلال أمهات الكتب: العقيدة الواسطية،
                الطحاوية، التدمرية، مع الرد على الشبهات المعاصرة.
              </p>
              <a href="/departments#aqeedah" class="dept-link">
                استكشف المنهج
                <i class="fas fa-arrow-left text-sm"></i>
              </a>
            </div>

            {/* التفسير */}
            <div class="department-card" data-aos="fade-up" data-aos-delay="80">
              <div class="dept-icon"><i class="fas fa-quran"></i></div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">التفسير</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose mb-5 line-clamp-3">
                تفسير القرآن الكريم بالمأثور والمعقول، اعتمادًا على تفاسير ابن كثير والطبري والسعدي،
                مع التطبيقات الواقعية والاستنباطات العصرية.
              </p>
              <a href="/departments#tafsir" class="dept-link">
                استكشف المنهج
                <i class="fas fa-arrow-left text-sm"></i>
              </a>
            </div>

            {/* الحديث */}
            <div class="department-card" data-aos="fade-up" data-aos-delay="160">
              <div class="dept-icon"><i class="fas fa-scroll"></i></div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">الحديث وعلومه</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose mb-5 line-clamp-3">
                دراسة الكتب الستة وأمهات كتب السنة، مع علم المصطلح والتخريج، والأدب المفرد للبخاري،
                وفقه الأحاديث ومعانيها.
              </p>
              <a href="/departments#hadith" class="dept-link">
                استكشف المنهج
                <i class="fas fa-arrow-left text-sm"></i>
              </a>
            </div>

            {/* الفقه */}
            <div class="department-card" data-aos="fade-up" data-aos-delay="240">
              <div class="dept-icon"><i class="fas fa-balance-scale"></i></div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">الفقه وأصوله</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose mb-5 line-clamp-3">
                دراسة الفقه على المذاهب الأربعة مع الترجيح بالدليل، مع علم أصول الفقه والقواعد الفقهية،
                وفقه النوازل والقضايا المعاصرة.
              </p>
              <a href="/departments#fiqh" class="dept-link">
                استكشف المنهج
                <i class="fas fa-arrow-left text-sm"></i>
              </a>
            </div>

            {/* اللغة العربية */}
            <div class="department-card" data-aos="fade-up" data-aos-delay="320">
              <div class="dept-icon"><i class="fas fa-pen-nib"></i></div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">اللغة العربية</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose mb-5 line-clamp-3">
                تعليم النحو والصرف والبلاغة، من الآجرومية والقطر وحتى الألفية، مع مهارات الكتابة
                والإلقاء وتذوق النصوص الأدبية.
              </p>
              <a href="/departments#arabic" class="dept-link">
                استكشف المنهج
                <i class="fas fa-arrow-left text-sm"></i>
              </a>
            </div>

            {/* السيرة والتزكية */}
            <div class="department-card" data-aos="fade-up" data-aos-delay="400">
              <div class="dept-icon"><i class="fas fa-spa"></i></div>
              <h3 class="font-extrabold text-2xl text-emerald-deep-900 dark:text-royal-gold-400 mb-3">السيرة والتزكية</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-loose mb-5 line-clamp-3">
                دراسة السيرة النبوية وتزكية النفوس على ضوء الكتاب والسنة، وأعمال القلوب من إخلاص
                ومحبة وخوف ورجاء.
              </p>
              <a href="/departments#tazkiya" class="dept-link">
                استكشف المنهج
                <i class="fas fa-arrow-left text-sm"></i>
              </a>
            </div>
          </div>

          <div class="text-center mt-12" data-aos="fade-up">
            <a href="/departments" class="btn-primary">
              <i class="fas fa-th-large"></i>
              عرض جميع الأقسام العلمية
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. QURANIC VERSE BOX
          ============================================================ */}
      <section class="py-16 bg-cream dark:bg-ink">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto" data-aos="zoom-in">
            <div class="verse-box font-quran shadow-xl">
              وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ
            </div>
            <div class="text-center mt-4 text-emerald-deep-700 dark:text-royal-gold-400 font-bold">
              [ سورة فصلت - الآية 33 ]
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. FEATURED PUBLICATIONS / LIBRARY (Carousel)
          ============================================================ */}
      <section class="py-20 bg-white dark:bg-emerald-deep-950">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-end justify-between mb-14 gap-4" data-aos="fade-up">
            <div>
              <span class="section-eyebrow">
                <i class="fas fa-book"></i>
                المكتبة الرقمية
              </span>
              <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-royal-gold-400 mt-2">
                أحدث الإصدارات والكتب
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mt-3 max-w-xl">
                مجموعة من الإصدارات والمطبوعات والتفريغات النصية للمحاضرات
              </p>
            </div>
            <a href="/library" class="text-emerald-deep-700 dark:text-royal-gold-400 hover:text-royal-gold-600 font-bold flex items-center gap-2">
              عرض المكتبة كاملة
              <i class="fas fa-arrow-left"></i>
            </a>
          </div>

          {/* Books Swiper */}
          <div class="swiper swiper-books px-2">
            <div class="swiper-wrapper pb-12">
              {[
                { title: 'شرح العقيدة الواسطية', author: 'الشيخ ناصر بن حسين', icon: 'fa-shield-alt', cat: 'العقيدة' },
                { title: 'فقه العبادات', author: 'الشيخ محمد عبدالكريم', icon: 'fa-praying-hands', cat: 'الفقه' },
                { title: 'الأدب المفرد - تفريغ', author: 'تفريغ دروس الشيخ', icon: 'fa-scroll', cat: 'الحديث' },
                { title: 'تزكية النفوس', author: 'الشيخ خالد الزبيدي', icon: 'fa-spa', cat: 'التزكية' },
                { title: 'منهج الداعية', author: 'الشيخ د. عبدالله', icon: 'fa-bullhorn', cat: 'الدعوة' },
                { title: 'مختصر التفسير', author: 'إصدار المركز', icon: 'fa-quran', cat: 'التفسير' },
                { title: 'في رحاب الآجرومية', author: 'إصدار المركز', icon: 'fa-pen-nib', cat: 'اللغة' },
              ].map((book, i) => (
                <div class="swiper-slide">
                  <div class="book-card">
                    <div class="book-cover">
                      <div class="pattern-bg-lg"></div>
                      <div class="book-binding"></div>
                      <div class="text-center text-white px-6 relative z-10">
                        <i class={`fas ${book.icon} text-royal-gold-400 text-6xl mb-3`}></i>
                        <div class="text-xs text-royal-gold-300 mb-2">{book.cat}</div>
                        <h4 class="font-extrabold text-lg leading-tight line-clamp-2">{book.title}</h4>
                      </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col">
                      <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <i class="fas fa-user-tie ml-1 text-royal-gold-500"></i>
                        {book.author}
                      </div>
                      <div class="flex items-center gap-2 mt-auto">
                        <button
                          type="button"
                          class="btn-primary flex-1 text-sm py-2"
                          data-modal-open="bookModal"
                          data-title={book.title}
                          data-author={book.author}
                          data-cat={book.cat}
                        >
                          <i class="fas fa-eye"></i>
                          معاينة
                        </button>
                        <a href="#" class="btn-outline-gold text-sm py-2 px-3" aria-label="تحميل">
                          <i class="fas fa-download"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. MEDIA SECTION (Lectures preview - Tabs)
          ============================================================ */}
      <section class="py-20 bg-cream dark:bg-ink">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12" data-aos="fade-up">
            <span class="section-eyebrow">
              <i class="fas fa-photo-video"></i>
              المرئيات والصوتيات
            </span>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-royal-gold-400 mb-4">
              معرض المحاضرات والدروس
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
              مكتبة متجددة من المحاضرات المرئية والدروس الصوتية لكبار المشايخ
            </p>

            {/* Tabs */}
            <div class="mt-8 flex justify-center">
              <div class="media-tabs" data-tabs="homemedia">
                <button class="media-tab active" data-tab="videos">
                  <i class="fas fa-video"></i>
                  مرئيات
                </button>
                <button class="media-tab" data-tab="audios">
                  <i class="fas fa-headphones"></i>
                  صوتيات
                </button>
              </div>
            </div>
          </div>

          {/* Videos Panel */}
          <div data-tab-panel="homemedia" data-panel="videos" class="block">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'محاضرة: المنهج الوسطي في زمن الفتن', author: 'الشيخ ناصر بن حسين', duration: '45:20', icon: 'fa-balance-scale' },
                { title: 'حلقة من شرح كتاب الأدب المفرد', author: 'دروس المركز', duration: '52:10', icon: 'fa-scroll' },
                { title: 'افتتاح دورة الماهر 3', author: 'فعاليات المركز', duration: '28:45', icon: 'fa-book-quran' },
              ].map((v, i) => (
                <div class="media-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div class="thumb">
                    <div class="absolute inset-0 opacity-15 pattern-bg"></div>
                    <i class={`fas ${v.icon} text-royal-gold-400 text-7xl absolute opacity-30`}></i>
                    <button class="play-btn" aria-label="تشغيل">
                      <i class="fas fa-play mr-1"></i>
                    </button>
                    <div class="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      <i class="fas fa-clock ml-1"></i>
                      {v.duration}
                    </div>
                  </div>
                  <div class="p-5">
                    <h4 class="font-bold text-lg text-emerald-deep-900 dark:text-royal-gold-400 mb-2 line-clamp-2">{v.title}</h4>
                    <div class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <i class="fas fa-user-tie text-royal-gold-500"></i>
                      {v.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audios Panel */}
          <div data-tab-panel="homemedia" data-panel="audios" class="hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'تلاوة سورة آل عمران - تجويد متقن', duration: '28:15', author: 'القارئ المجوّد' },
                { title: 'سلسلة شرح ثلاثة الأصول', duration: '40:50', author: 'الشيخ د. عبدالله' },
                { title: 'فضل طلب العلم وأهمّيته', duration: '33:20', author: 'محاضرة عامة' },
                { title: 'آداب طالب العلم', duration: '25:10', author: 'الشيخ محمد عبدالكريم' },
              ].map((a, i) => (
                <div class="media-card flex items-center p-4 gap-4" data-aos="fade-up" data-aos-delay={i * 60}>
                  <button class="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-deep-700 to-emerald-deep-900 text-royal-gold-400 flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-105 transition" aria-label="تشغيل">
                    <i class="fas fa-play mr-1"></i>
                  </button>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-emerald-deep-900 dark:text-royal-gold-400 mb-1 line-clamp-1">{a.title}</h4>
                    <div class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-3">
                      <span class="flex items-center gap-1"><i class="fas fa-user"></i> {a.author}</span>
                      <span class="flex items-center gap-1"><i class="fas fa-clock"></i> {a.duration}</span>
                    </div>
                  </div>
                  <a href="#" class="text-royal-gold-500 hover:text-royal-gold-700" aria-label="تحميل">
                    <i class="fas fa-download text-lg"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div class="text-center mt-10" data-aos="fade-up">
            <a href="/media" class="btn-primary">
              <i class="fas fa-photo-video"></i>
              عرض كامل المعرض
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. VISION CTA + STATS
          ============================================================ */}
      <section class="py-20 bg-white dark:bg-emerald-deep-950">
        <div class="container mx-auto px-4">
          <div class="vision-card rounded-3xl p-10 md:p-16 text-white relative z-10" data-aos="fade-up">
            <div class="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div class="inline-flex items-center gap-2 bg-royal-gold-500/20 border border-royal-gold-400/30 text-royal-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-5">
                  <i class="fas fa-bullseye"></i>
                  <span>منهجنا</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  المنهج <span class="text-royal-gold-400">الوسطي المعتدل</span>
                </h2>
                <p class="text-lg text-gray-200 leading-relaxed mb-6">
                  نسعى إلى تخريج جيل من الدعاة الراسخين في علمهم، الصادقين في إيمانهم،
                  الكرام في أخلاقهم، الماهرين في دعوتهم، وفق المنهج الوسطي القائم على الكتاب والسنة بفهم سلف الأمة.
                </p>
                <a href="/about" class="btn-gold">
                  اقرأ المزيد عن المركز
                  <i class="fas fa-arrow-left"></i>
                </a>
              </div>

              <div class="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-book', val: '+500', label: 'حلقة علمية' },
                  { icon: 'fa-mosque', val: '+15', label: 'سنة عطاء' },
                  { icon: 'fa-user-graduate', val: '+1500', label: 'طالب علم' },
                  { icon: 'fa-certificate', val: '+45', label: 'دورة شرعية' },
                ].map((s) => (
                  <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-royal-gold-400/50 transition">
                    <i class={`fas ${s.icon} text-royal-gold-400 text-3xl mb-3`}></i>
                    <div class="text-3xl font-extrabold text-royal-gold-400 mb-1">{s.val}</div>
                    <div class="text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FINAL CTA
          ============================================================ */}
      <section class="py-20 bg-cream dark:bg-ink">
        <div class="container mx-auto px-4">
          <div class="hero-bg-emerald rounded-3xl p-10 md:p-16 text-center relative overflow-hidden text-white shadow-2xl" data-aos="zoom-in">
            <div class="islamic-pattern-1"></div>
            <div class="relative z-10">
              <i class="fas fa-mosque text-royal-gold-400 text-6xl mb-6 glow-text"></i>
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
          </div>
        </div>
      </section>

      {/* Book Preview Modal */}
      <div id="bookModal" class="modal-overlay">
        <div class="modal-content">
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-950 flex items-center justify-center">
                <i class="fas fa-book text-royal-gold-400 text-2xl"></i>
              </div>
              <div>
                <div class="text-xs text-royal-gold-600 font-bold mb-1" data-field="cat">القسم</div>
                <h3 class="text-xl font-extrabold text-emerald-deep-900 dark:text-royal-gold-400" data-field="title">عنوان الكتاب</h3>
                <div class="text-sm text-gray-500 mt-1" data-field="author">المؤلف</div>
              </div>
            </div>
            <button type="button" data-modal-close="bookModal" class="text-gray-400 hover:text-red-600 text-2xl" aria-label="إغلاق">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="border-t pt-5 dark:border-emerald-deep-700">
            <p class="text-gray-700 dark:text-gray-300 leading-loose mb-5">
              ملخص هذا الكتاب يتناول جوانب مهمة من العلم الشرعي بأسلوب سهل ومنهجي،
              مع توثيق المعلومات وتأصيلها من الكتاب والسنة. متاح للقراءة المباشرة أو التحميل بصيغة PDF.
            </p>
            <div class="flex gap-3">
              <a href="#" class="btn-primary flex-1">
                <i class="fas fa-download"></i>
                تحميل PDF
              </a>
              <a href="/library" class="btn-outline-gold flex-1">
                <i class="fas fa-book-open"></i>
                قراءة كاملة
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

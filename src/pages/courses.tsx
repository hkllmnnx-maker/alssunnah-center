const courses = [
  {
    id: 'maher-3',
    name: 'الماهر 3',
    category: 'quran',
    categoryName: 'القرآن',
    duration: '19 يومًا',
    seats: 150,
    icon: 'fa-book-quran',
    status: 'open',
    statusName: 'التسجيل مفتوح',
    statusColor: 'from-royal-gold-500 to-royal-gold-600',
    bgGradient: 'from-emerald-deep-700 to-emerald-deep-950',
    description: 'دورة مكثفة لإتقان تلاوة وحفظ القرآن الكريم بأحكام التجويد على يد نخبة من المشايخ المتقنين، وفق منهج تعليمي متدرج يأخذ بيد الطالب من الأساسيات حتى الإتقان.',
    features: ['تعليم التجويد', 'تصحيح التلاوة', 'حفظ منهجي', 'شهادة معتمدة'],
    instructor: 'الشيخ ناصر بن حسين',
    daysLeft: 16,
  },
  {
    id: 'adab-mufrad',
    name: 'شرح الأدب المفرد',
    category: 'hadith',
    categoryName: 'الحديث',
    duration: '12 يومًا',
    seats: 100,
    icon: 'fa-scroll',
    status: 'open',
    statusName: 'متاح',
    statusColor: 'from-blue-500 to-blue-600',
    bgGradient: 'from-emerald-deep-600 to-emerald-deep-800',
    description: 'دراسة معمّقة لكتاب الأدب المفرد للإمام البخاري رحمه الله، يتناول الآداب الإسلامية وأخلاق المعاملات بين المسلمين، مع شرح وتعليق وتأصيل.',
    features: ['شرح الأحاديث', 'استخراج الفوائد', 'تطبيقات معاصرة', 'مادة مرجعية'],
    instructor: 'الشيخ ناصر بن حسين',
    daysLeft: 8,
  },
  {
    id: 'imams-training',
    name: 'تأهيل الأئمة والخطباء',
    category: 'training',
    categoryName: 'تأهيل',
    duration: 'شهران',
    seats: 50,
    icon: 'fa-mosque',
    status: 'soon',
    statusName: 'قريبًا',
    statusColor: 'from-green-500 to-green-600',
    bgGradient: 'from-royal-gold-600 to-royal-gold-800',
    description: 'برنامج متكامل لتأهيل الأئمة والخطباء في الفقه والخطابة والتعامل مع المصلين والقيام بأعباء الإمامة على الوجه الصحيح.',
    features: ['فقه الإمامة', 'مهارات الخطابة', 'إدارة المسجد', 'التعامل مع الجمهور'],
    instructor: 'مجموعة من المشايخ',
    daysLeft: 30,
  },
  {
    id: 'aqeedah',
    name: 'دورة العقيدة الواسطية',
    category: 'aqeedah',
    categoryName: 'العقيدة',
    duration: '20 يومًا',
    seats: 80,
    icon: 'fa-book',
    status: 'open',
    statusName: 'التسجيل مفتوح',
    statusColor: 'from-royal-gold-500 to-royal-gold-600',
    bgGradient: 'from-emerald-deep-800 to-emerald-deep-950',
    description: 'شرح كتاب العقيدة الواسطية لشيخ الإسلام ابن تيمية رحمه الله، أحد أهم متون العقيدة على منهج أهل السنة والجماعة.',
    features: ['تأصيل عقدي', 'شرح المتن', 'الرد على الشبهات', 'متن أصيل'],
    instructor: 'الشيخ د. عبدالله',
    daysLeft: 12,
  },
  {
    id: 'fiqh',
    name: 'فقه العبادات',
    category: 'fiqh',
    categoryName: 'الفقه',
    duration: '25 يومًا',
    seats: 120,
    icon: 'fa-praying-hands',
    status: 'open',
    statusName: 'التسجيل مفتوح',
    statusColor: 'from-royal-gold-500 to-royal-gold-600',
    bgGradient: 'from-emerald-deep-700 to-emerald-deep-900',
    description: 'دراسة شاملة لأحكام العبادات في الإسلام: الطهارة، الصلاة، الزكاة، الصيام، الحج، بأدلتها التفصيلية مع الترجيح بالدليل.',
    features: ['فقه مقارن', 'أدلة من الكتاب والسنة', 'تطبيقات معاصرة', 'تدريب عملي'],
    instructor: 'الشيخ محمد عبدالكريم',
    daysLeft: 20,
  },
  {
    id: 'tazkiya',
    name: 'تزكية النفوس',
    category: 'tazkiya',
    categoryName: 'تزكية',
    duration: '15 يومًا',
    seats: 80,
    icon: 'fa-spa',
    status: 'soon',
    statusName: 'قريبًا',
    statusColor: 'from-green-500 to-green-600',
    bgGradient: 'from-royal-gold-700 to-royal-gold-900',
    description: 'برنامج تربوي إيماني لتزكية القلوب وتطهير النفوس، يتناول أعمال القلوب من إخلاص ومحبة وخوف ورجاء وتوكل.',
    features: ['تربية القلوب', 'أعمال القلوب', 'الرقائق والمواعظ', 'بيئة إيمانية'],
    instructor: 'الشيخ خالد الزبيدي',
    daysLeft: 45,
  },
]

const categories = [
  { id: 'all', name: 'الكل', icon: 'fa-th' },
  { id: 'quran', name: 'القرآن', icon: 'fa-book-quran' },
  { id: 'hadith', name: 'الحديث', icon: 'fa-scroll' },
  { id: 'aqeedah', name: 'العقيدة', icon: 'fa-book' },
  { id: 'fiqh', name: 'الفقه', icon: 'fa-balance-scale' },
  { id: 'tazkiya', name: 'تزكية', icon: 'fa-spa' },
  { id: 'training', name: 'تأهيل', icon: 'fa-user-tie' },
]

export const CoursesPage = () => {
  return (
    <>
      {/* Page Header */}
      <section class="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-flex items-center gap-2 bg-royal-gold-500/20 border border-royal-gold-400/30 text-royal-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-4" data-aos="fade-down">
            <i class="fas fa-graduation-cap"></i>
            <span>برامجنا التعليمية</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">الدورات والبرامج العلمية</h1>
          <div class="divider-ornament"><i class="fas fa-star-and-crescent"></i></div>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            تشكيلة متنوعة من الدورات الشرعية والبرامج التأهيلية لإعداد طلاب العلم والدعاة
          </p>
          <nav class="text-sm mt-6">
            <a href="/" class="text-royal-gold-300 hover:text-royal-gold-100">الرئيسية</a>
            <span class="mx-2 text-royal-gold-400">/</span>
            <span class="text-royal-gold-100">الدورات</span>
          </nav>
        </div>
      </section>

      {/* Featured: الماهر 3 */}
      <section class="py-16 bg-cream dark:bg-ink">
        <div class="container mx-auto px-4">
          <div class="bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-950 rounded-3xl overflow-hidden shadow-2xl relative" data-aos="zoom-in">
            <div class="absolute inset-0 opacity-10 pattern-bg-lg"></div>
            <div class="grid lg:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
              <div class="text-white">
                <div class="inline-flex items-center gap-2 bg-royal-gold-500 text-emerald-deep-950 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                  <i class="fas fa-star"></i>
                  دورة مميزة
                </div>
                <h2 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  دورة <span class="text-shine">الماهر 3</span>
                </h2>
                <p class="text-royal-gold-300 text-lg mb-6">إتقان القرآن الكريم - تجويدًا وحفظًا</p>
                <p class="text-gray-200 leading-loose mb-6">
                  دورة مكثفة على مدى 19 يومًا، تأخذ بيد الطالب لإتقان تلاوة القرآن الكريم وحفظه بأحكام التجويد،
                  على يد نخبة من المشايخ المتقنين، في بيئة علمية إيمانية مميزة.
                </p>

                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <i class="fas fa-calendar-alt text-royal-gold-400 text-2xl mb-2"></i>
                    <div class="text-2xl font-extrabold text-royal-gold-400">19</div>
                    <div class="text-xs text-gray-300">يومًا</div>
                  </div>
                  <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <i class="fas fa-users text-royal-gold-400 text-2xl mb-2"></i>
                    <div class="text-2xl font-extrabold text-royal-gold-400">150</div>
                    <div class="text-xs text-gray-300">مقعدًا</div>
                  </div>
                  <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <i class="fas fa-hourglass-half text-royal-gold-400 text-2xl mb-2"></i>
                    <div class="text-2xl font-extrabold text-royal-gold-400">16</div>
                    <div class="text-xs text-gray-300">يوم متبقي</div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-3">
                  <a href="/register?course=maher-3" class="btn-gold">
                    <i class="fas fa-user-plus"></i>
                    سجّل الآن
                  </a>
                  <a href="https://wa.me/771405482" target="_blank" class="btn-outline">
                    <i class="fab fa-whatsapp"></i>
                    استفسر عبر واتساب
                  </a>
                </div>
              </div>

              <div class="flex items-center justify-center">
                <div class="relative">
                  <div class="w-72 h-72 bg-gradient-to-br from-royal-gold-400/30 to-royal-gold-600/30 rounded-full backdrop-blur-md border-2 border-royal-gold-400/50 flex items-center justify-center animate-float">
                    <i class="fas fa-book-quran text-royal-gold-300 text-9xl glow-text"></i>
                  </div>
                  <div class="absolute -top-4 -left-4 bg-royal-gold-500 text-emerald-deep-950 px-4 py-2 rounded-full font-bold shadow-lg">
                    <i class="fas fa-fire ml-1"></i>
                    تسجيل مفتوح
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section class="py-10 sticky top-[68px] bg-cream dark:bg-ink z-30 border-b border-gray-200">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                class={`filter-btn flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition border-2 ${
                  i === 0 ? 'active bg-emerald-deep-700 text-white border-emerald-deep-700' : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-deep-700 hover:text-emerald-deep-700'
                }`}
                data-filter={cat.id}
              >
                <i class={`fas ${cat.icon}`}></i>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div class="course-card filter-item" data-category={course.category} data-aos="fade-up" data-aos-delay={i * 60}>
                <div class={`course-image flex items-center justify-center bg-gradient-to-br ${course.bgGradient}`}>
                  <div class={`course-badge bg-gradient-to-r ${course.statusColor}`}>{course.statusName}</div>
                  <div class="text-center text-white relative z-10">
                    <i class={`fas ${course.icon} text-6xl text-royal-gold-400 mb-3`}></i>
                    <div class="text-2xl font-extrabold">{course.name}</div>
                    <div class="text-sm mt-2 text-royal-gold-200">{course.categoryName}</div>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
                    <span class="flex items-center gap-1">
                      <i class="fas fa-clock text-emerald-deep-600"></i>
                      {course.duration}
                    </span>
                    <span class="flex items-center gap-1">
                      <i class="fas fa-users text-emerald-deep-600"></i>
                      {course.seats} مقعد
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{course.description}</p>

                  <div class="flex flex-wrap gap-1 mb-4">
                    {course.features.slice(0, 3).map(f => (
                      <span class="bg-emerald-deep-50 text-emerald-deep-700 text-xs px-2 py-1 rounded-md font-medium">{f}</span>
                    ))}
                  </div>

                  <div class="flex items-center justify-between pt-4 border-t">
                    <div class="text-emerald-deep-700 font-bold text-sm">
                      <i class="fas fa-user-tie ml-1 text-royal-gold-500"></i>
                      {course.instructor}
                    </div>
                    <a href={`/register?course=${course.id}`} class="text-emerald-deep-700 hover:text-royal-gold-600 font-bold flex items-center gap-1 text-sm">
                      التسجيل
                      <i class="fas fa-arrow-left text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section class="py-20 bg-cream dark:bg-ink">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 mb-4">
              طريقة التسجيل
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto mt-4">
              ثلاث خطوات بسيطة للالتحاق بدوراتنا العلمية
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="text-center" data-aos="fade-up">
              <div class="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-royal-gold-400 to-royal-gold-600 rounded-2xl flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                1
              </div>
              <i class="fas fa-edit text-emerald-deep-700 text-3xl mb-3"></i>
              <h3 class="font-bold text-xl text-emerald-deep-900 mb-2">املأ نموذج التسجيل</h3>
              <p class="text-gray-600 text-sm">قم بتعبئة استمارة التسجيل ببياناتك الشخصية ومعلومات التواصل.</p>
            </div>

            <div class="text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-royal-gold-400 to-royal-gold-600 rounded-2xl flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                2
              </div>
              <i class="fab fa-whatsapp text-emerald-deep-700 text-3xl mb-3"></i>
              <h3 class="font-bold text-xl text-emerald-deep-900 mb-2">انتظر تواصل المركز</h3>
              <p class="text-gray-600 text-sm">سيتواصل معك فريق المركز عبر الواتساب لتأكيد التسجيل واستكمال البيانات.</p>
            </div>

            <div class="text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-royal-gold-400 to-royal-gold-600 rounded-2xl flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                3
              </div>
              <i class="fas fa-check-circle text-emerald-deep-700 text-3xl mb-3"></i>
              <h3 class="font-bold text-xl text-emerald-deep-900 mb-2">احضر الدورة</h3>
              <p class="text-gray-600 text-sm">احضر إلى مقر المركز في الموعد المحدد للبدء في الدورة بإذن الله.</p>
            </div>
          </div>

          <div class="text-center mt-12">
            <a href="/register" class="btn-primary">
              <i class="fas fa-user-plus"></i>
              ابدأ التسجيل الآن
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

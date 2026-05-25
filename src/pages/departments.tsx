// Scientific Departments Page - dedicated detailed page for each Islamic science
const departments = [
  {
    id: 'aqeedah',
    name: 'العقيدة',
    icon: 'fa-kaaba',
    short: 'تأصيل العقيدة السلفية على منهج أهل السنة والجماعة',
    description: 'يهدف قسم العقيدة إلى تدريس مسائل التوحيد والإيمان والإلهيات وفق منهج السلف الصالح، مع تحصين الطالب من البدع والانحرافات الفكرية المعاصرة.',
    books: [
      'الأصول الثلاثة وأدلتها — للإمام محمد بن عبد الوهاب',
      'كتاب التوحيد — للإمام محمد بن عبد الوهاب',
      'العقيدة الواسطية — لشيخ الإسلام ابن تيمية',
      'العقيدة الطحاوية — للإمام الطحاوي',
      'لمعة الاعتقاد — للإمام ابن قدامة المقدسي'
    ],
    axes: [
      'توحيد الربوبية والألوهية والأسماء والصفات',
      'الإيمان بالملائكة والكتب والرسل واليوم الآخر',
      'القضاء والقدر خيره وشره',
      'مسائل الإيمان والكفر والولاء والبراء',
      'الرد على الفرق المخالفة قديمًا وحديثًا'
    ],
    color: 'from-emerald-deep-800 to-emerald-deep-900'
  },
  {
    id: 'tafsir',
    name: 'التفسير وعلوم القرآن',
    icon: 'fa-book-quran',
    short: 'فهم القرآن الكريم وأحكامه وعلومه على منهج أئمة التفسير',
    description: 'يُعنى هذا القسم بدراسة تفسير القرآن الكريم وعلومه؛ من أسباب النزول والمكي والمدني والناسخ والمنسوخ، مع تطبيق منهج المفسرين المحققين.',
    books: [
      'تفسير الجلالين — للسيوطي والمحلي',
      'تفسير السعدي (تيسير الكريم الرحمن)',
      'تفسير ابن كثير (مختصرًا)',
      'مقدمة في أصول التفسير — لابن تيمية',
      'مباحث في علوم القرآن — لمناع القطان'
    ],
    axes: [
      'تفسير سور المفصل وآيات الأحكام',
      'علوم القرآن: مكي ومدني، أسباب النزول',
      'الناسخ والمنسوخ والمحكم والمتشابه',
      'مناهج المفسرين قديمًا وحديثًا',
      'إعجاز القرآن وبلاغته'
    ],
    color: 'from-royal-gold-600 to-royal-gold-700'
  },
  {
    id: 'hadith',
    name: 'الحديث وعلومه',
    icon: 'fa-scroll',
    short: 'دراسة السنة النبوية المطهرة وأصول الرواية والدراية',
    description: 'يدرّس قسم الحديث متون السنة النبوية وعلومها، من مصطلح وجرح وتعديل وتخريج، لتأهيل الطالب للبحث في الأحاديث صحةً وضعفًا وفهمًا.',
    books: [
      'الأربعون النووية — للإمام النووي',
      'عمدة الأحكام — لعبد الغني المقدسي',
      'بلوغ المرام — لابن حجر العسقلاني',
      'نخبة الفكر — لابن حجر العسقلاني',
      'الأدب المفرد — للإمام البخاري',
      'الماهر بالقرآن (سلسلة الماهر) — مقررات المركز'
    ],
    axes: [
      'متون الأحاديث الجامعة وشروحها',
      'مصطلح الحديث وعلوم الإسناد',
      'الجرح والتعديل وطبقات الرواة',
      'التخريج والحكم على الأحاديث',
      'فقه الحديث واستنباط الأحكام'
    ],
    color: 'from-emerald-deep-700 to-emerald-deep-800'
  },
  {
    id: 'fiqh',
    name: 'الفقه وأصوله',
    icon: 'fa-balance-scale',
    short: 'الأحكام الشرعية العملية بدليلها مع قواعد الاستنباط',
    description: 'يهتم القسم بتعليم الفقه العملي على المذاهب المعتبرة مع الترجيح بالدليل، إضافة إلى أصول الفقه وقواعده الكلية والفقهية.',
    books: [
      'متن أبي شجاع (الغاية والتقريب)',
      'عمدة الفقه — لابن قدامة المقدسي',
      'الفقه الميسر — مجموعة من العلماء',
      'الورقات — لإمام الحرمين الجويني (في الأصول)',
      'القواعد الفقهية — للسعدي'
    ],
    axes: [
      'فقه الطهارة والصلاة والزكاة والصيام والحج',
      'فقه المعاملات والبيوع والأنكحة',
      'أصول الفقه ومسالك الاستدلال',
      'القواعد الفقهية الكبرى والصغرى',
      'فقه النوازل والمستجدات المعاصرة'
    ],
    color: 'from-royal-gold-700 to-royal-gold-800'
  },
  {
    id: 'arabic',
    name: 'اللغة العربية',
    icon: 'fa-pen-nib',
    short: 'لغة القرآن: نحوًا وصرفًا وبلاغةً لخدمة العلوم الشرعية',
    description: 'لا يُفهم النص الشرعي إلا بإتقان لسان العرب؛ لذلك يُعنى القسم بتعليم النحو والصرف والبلاغة والإملاء وفقه اللغة بأسلوب تطبيقي ميسر.',
    books: [
      'الآجرومية — لابن آجروم',
      'قطر الندى وبل الصدى — لابن هشام',
      'شذور الذهب — لابن هشام',
      'البلاغة الواضحة — لعلي الجارم ومصطفى أمين',
      'تيسير الإملاء — لمحمد الأنطاكي'
    ],
    axes: [
      'النحو: المرفوعات والمنصوبات والمجرورات',
      'الصرف: الأبنية والاشتقاق والميزان الصرفي',
      'البلاغة: المعاني والبيان والبديع',
      'الإملاء والترقيم وفنون الكتابة',
      'تطبيقات على النصوص القرآنية والحديثية'
    ],
    color: 'from-emerald-deep-800 to-emerald-deep-900'
  },
  {
    id: 'tazkiya',
    name: 'السيرة والتزكية',
    icon: 'fa-mosque',
    short: 'السيرة النبوية وتزكية النفوس وتربيتها على منهج السلف',
    description: 'يجمع القسم بين دراسة سيرة النبي ﷺ وتزكية النفوس وتربيتها، فالعلم بلا عمل وبال، والتزكية بلا علم ضلال؛ والهدف صناعة الداعية القدوة.',
    books: [
      'الرحيق المختوم — للمباركفوري',
      'فقه السيرة — للغزالي والبوطي',
      'مدارج السالكين — لابن القيم (منتخبات)',
      'تزكية النفوس — لابن رجب وابن القيم وابن تيمية',
      'إغاثة اللهفان — لابن القيم'
    ],
    axes: [
      'السيرة النبوية: المكية والمدنية',
      'الشمائل المحمدية وأخلاق النبي ﷺ',
      'منازل السائرين ومقامات العبودية',
      'أمراض القلوب وعلاجها',
      'تربية الجيل والدعوة بالقدوة'
    ],
    color: 'from-royal-gold-600 to-royal-gold-700'
  }
]

export const DepartmentsPage = () => {
  return (
    <>
      {/* Hero */}
      <section class="hero-bg-emerald relative py-24 overflow-hidden">
        <div class="islamic-pattern-1"></div>
        <div class="container mx-auto px-4 relative z-10 text-center text-white" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 bg-royal-gold-500/15 backdrop-blur-sm border border-royal-gold-500/30 text-royal-gold-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <i class="fas fa-graduation-cap"></i>
            <span>الأقسام والمناهج العلمية</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
            <span class="text-shine">الأقسام العلمية</span> بالمركز
          </h1>
          <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            ستة أقسام علمية متكاملة، تجمع بين أصالة العلوم الشرعية ومنهجية التدريس المعاصرة،
            لصناعة طالب علمٍ مؤصَّلٍ متينٍ في علمه، صادقٍ في عمله، نافعٍ لأمته.
          </p>
        </div>
      </section>

      {/* Departments quick nav */}
      <section class="py-12 bg-white dark:bg-gray-900 sticky top-16 z-30 shadow-sm">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center gap-3">
            {departments.map((d) => (
              <a href={`#${d.id}`} class="px-4 py-2 rounded-full bg-emerald-deep-50 dark:bg-emerald-deep-900/40 text-emerald-deep-800 dark:text-royal-gold-300 hover:bg-royal-gold-500 hover:text-white transition-all font-semibold text-sm">
                <i class={`fas ${d.icon} ml-1`}></i>
                {d.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Departments details */}
      <section class="py-16 bg-gray-50 dark:bg-gray-950">
        <div class="container mx-auto px-4 space-y-16">
          {departments.map((d, idx) => (
            <article id={d.id} class="scroll-mt-32" data-aos="fade-up">
              <div class={`rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 ${idx % 2 === 0 ? '' : ''}`}>
                <div class="grid lg:grid-cols-3">
                  {/* Visual side */}
                  <div class={`bg-gradient-to-br ${d.color} p-10 lg:p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                    <div class="pattern-bg absolute inset-0 opacity-10"></div>
                    <div class="relative z-10">
                      <div class="w-28 h-28 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-royal-gold-500/40 flex items-center justify-center mb-6">
                        <i class={`fas ${d.icon} text-5xl text-royal-gold-300`}></i>
                      </div>
                      <h2 class="text-3xl md:text-4xl font-extrabold mb-4">{d.name}</h2>
                      <p class="text-royal-gold-200 text-sm leading-relaxed">{d.short}</p>
                      <div class="mt-6 flex justify-center gap-2">
                        <span class="px-3 py-1 rounded-full bg-white/10 text-xs">{d.books.length} مرجع</span>
                        <span class="px-3 py-1 rounded-full bg-white/10 text-xs">{d.axes.length} محاور</span>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div class="lg:col-span-2 p-8 lg:p-12">
                    <p class="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                      {d.description}
                    </p>

                    <div class="grid md:grid-cols-2 gap-8">
                      {/* Books */}
                      <div>
                        <h3 class="flex items-center gap-2 text-xl font-bold text-emerald-deep-900 dark:text-royal-gold-300 mb-4">
                          <i class="fas fa-book text-royal-gold-500"></i>
                          المراجع المعتمدة
                        </h3>
                        <ul class="space-y-2">
                          {d.books.map((b) => (
                            <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                              <i class="fas fa-bookmark text-royal-gold-500 mt-1 text-xs"></i>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Axes */}
                      <div>
                        <h3 class="flex items-center gap-2 text-xl font-bold text-emerald-deep-900 dark:text-royal-gold-300 mb-4">
                          <i class="fas fa-list-check text-royal-gold-500"></i>
                          المحاور الرئيسية
                        </h3>
                        <ul class="space-y-2">
                          {d.axes.map((a) => (
                            <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                              <i class="fas fa-check-circle text-emerald-deep-600 dark:text-emerald-deep-400 mt-1 text-xs"></i>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-3">
                      <a href="/register" class="btn-primary">
                        <i class="fas fa-user-plus"></i>
                        التسجيل في القسم
                      </a>
                      <a href="/library" class="btn-outline-gold">
                        <i class="fas fa-book-open"></i>
                        تصفّح المراجع
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12" data-aos="fade-up">
            <span class="inline-block px-4 py-1 rounded-full bg-royal-gold-100 dark:bg-royal-gold-900/30 text-royal-gold-700 dark:text-royal-gold-300 text-sm font-semibold mb-3">
              منهجنا في التدريس
            </span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-white">
              ركائز المنهجية العلمية
            </h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-mosque', t: 'التأصيل السلفي', d: 'العلم على منهج السلف الصالح بلا غلو ولا جفاء' },
              { icon: 'fa-layer-group', t: 'التدرج العلمي', d: 'من المتون الصغيرة إلى الكتب المتوسطة فالمطولات' },
              { icon: 'fa-link', t: 'الربط بالواقع', d: 'تطبيق العلم على نوازل العصر ومستجداته' },
              { icon: 'fa-laptop-code', t: 'الوسيلة المعاصرة', d: 'تقنيات تعليمية حديثة دون الإخلال بأصالة المتن' }
            ].map((p) => (
              <div class="soft-card text-center" data-aos="fade-up">
                <div class="w-16 h-16 mx-auto rounded-2xl bg-emerald-deep-900 dark:bg-emerald-deep-800 flex items-center justify-center mb-4">
                  <i class={`fas ${p.icon} text-royal-gold-400 text-2xl`}></i>
                </div>
                <h3 class="text-lg font-bold text-emerald-deep-900 dark:text-white mb-2">{p.t}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-16 bg-gray-50 dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <div class="hero-bg-emerald rounded-3xl p-12 text-center text-white relative overflow-hidden" data-aos="zoom-in">
            <div class="islamic-pattern-2"></div>
            <div class="relative z-10">
              <i class="fas fa-graduation-cap text-royal-gold-400 text-5xl mb-4"></i>
              <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
                ابدأ رحلتك العلمية في <span class="text-shine">أحد أقسامنا</span>
              </h2>
              <p class="text-gray-200 mb-8 max-w-2xl mx-auto">
                التسجيل مفتوح للجميع، والقبول وفق الشروط والمنهجية المعتمدة بالمركز.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <a href="/register" class="btn-gold">
                  <i class="fas fa-user-plus"></i>
                  انضم إلى أحد الأقسام
                </a>
                <a href="/contact" class="btn-outline">
                  <i class="fas fa-comments"></i>
                  استشر أحد المشرفين
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

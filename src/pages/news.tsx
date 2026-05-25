const news = [
  {
    title: 'انطلاق دورة الماهر 3 بمشاركة 150 طالبًا من مختلف المناطق',
    excerpt: 'انطلقت اليوم دورة الماهر 3 المكثفة لإتقان القرآن الكريم بمشاركة عدد كبير من الطلاب من مختلف المناطق والمحافظات، تحت إشراف نخبة من المشايخ المتخصصين...',
    date: '15 شوال 1446',
    category: 'دورات',
    icon: 'fa-book-quran',
    gradient: 'from-primary-700 to-primary-900',
    badge: 'حدث جديد'
  },
  {
    title: 'تخريج الدفعة 12 من برنامج الإجازة بالقرآن الكريم',
    excerpt: 'احتفل المركز بتخريج الدفعة الثانية عشرة من طلاب برنامج الإجازة بالقرآن الكريم، في حفل بهيج حضره عدد من العلماء وأولياء الأمور...',
    date: '10 شوال 1446',
    category: 'تخريج',
    icon: 'fa-graduation-cap',
    gradient: 'from-gold-600 to-gold-800',
  },
  {
    title: 'زيارة وفد علمي من علماء الأمة للمركز',
    excerpt: 'استقبل المركز وفدًا من العلماء البارزين ضمن جولاتهم العلمية والتعليمية، حيث ألقوا محاضرات قيّمة على طلاب المركز وأثنوا على المسيرة العلمية...',
    date: '5 شوال 1446',
    category: 'فعاليات',
    icon: 'fa-users',
    gradient: 'from-primary-800 to-primary-950',
  },
  {
    title: 'إعلان عن دورة جديدة في شرح الأدب المفرد للإمام البخاري',
    excerpt: 'يعلن مركز السنة عن انعقاد دورة شرح كتاب الأدب المفرد للإمام البخاري رحمه الله، على مدار 12 يومًا، بإشراف الشيخ ناصر بن حسين...',
    date: '28 رمضان 1446',
    category: 'إعلانات',
    icon: 'fa-scroll',
    gradient: 'from-gold-700 to-gold-900',
  },
  {
    title: 'افتتاح حلقات تحفيظ القرآن للنساء في فرع المركز الجديد',
    excerpt: 'افتتح المركز حلقات تحفيظ القرآن الكريم للنساء في الفرع الجديد، بإشراف مجموعة من المحفظات المتخصصات في بيئة آمنة ومخصصة...',
    date: '20 رمضان 1446',
    category: 'افتتاحات',
    icon: 'fa-female',
    gradient: 'from-primary-600 to-primary-800',
  },
  {
    title: 'محاضرة عامة بعنوان: "أسس بناء الداعية الناجح"',
    excerpt: 'يقيم المركز محاضرة عامة بعنوان "أسس بناء الداعية الناجح" يلقيها الشيخ الدكتور عبدالله، وذلك يوم الخميس القادم في تمام الساعة الثامنة مساءً...',
    date: '15 رمضان 1446',
    category: 'محاضرات',
    icon: 'fa-microphone',
    gradient: 'from-primary-700 to-gold-700',
  },
]

export const NewsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section class="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-4" data-aos="fade-down">
            <i class="fas fa-newspaper"></i>
            <span>أخبار المركز</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">الأخبار والفعاليات</h1>
          <div class="divider-ornament"><i class="fas fa-star-and-crescent"></i></div>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            تابع آخر أخبار وأنشطة وفعاليات المركز
          </p>
          <nav class="text-sm mt-6">
            <a href="/" class="text-gold-300 hover:text-gold-100">الرئيسية</a>
            <span class="mx-2 text-gold-400">/</span>
            <span class="text-gold-100">الأخبار</span>
          </nav>
        </div>
      </section>

      {/* News Grid */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          {/* Featured News */}
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden mb-12" data-aos="fade-up">
            <div class="grid md:grid-cols-2">
              <div class={`bg-gradient-to-br ${news[0].gradient} p-12 flex items-center justify-center relative`}>
                <div class="absolute inset-0 opacity-10 pattern-bg"></div>
                <i class={`fas ${news[0].icon} text-gold-400 text-9xl relative z-10`}></i>
              </div>
              <div class="p-8 md:p-10">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {news[0].badge}
                  </span>
                  <span class="text-sm text-gray-500">
                    <i class="fas fa-calendar ml-1 text-gold-500"></i>
                    {news[0].date}
                  </span>
                  <span class="text-sm text-primary-700 font-bold">{news[0].category}</span>
                </div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-primary-900 mb-4 leading-tight">
                  {news[0].title}
                </h2>
                <p class="text-gray-600 leading-relaxed mb-6">{news[0].excerpt}</p>
                <a href="#" class="btn-primary">
                  اقرأ المزيد
                  <i class="fas fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((item, i) => (
              <article class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group" data-aos="fade-up" data-aos-delay={i * 80}>
                <div class={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div class="absolute inset-0 opacity-10 pattern-bg"></div>
                  <i class={`fas ${item.icon} text-gold-400 text-7xl group-hover:scale-110 transition relative z-10`}></i>
                  <span class="absolute top-4 right-4 bg-white/90 text-primary-700 px-3 py-1 rounded-full text-xs font-bold">
                    {item.category}
                  </span>
                </div>
                <div class="p-6">
                  <div class="text-sm text-gray-500 mb-2">
                    <i class="fas fa-calendar ml-1 text-gold-500"></i>
                    {item.date}
                  </div>
                  <h3 class="font-bold text-lg text-primary-900 mb-3 leading-tight line-clamp-2">{item.title}</h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                  <a href="#" class="text-primary-700 font-bold flex items-center gap-1 hover:text-gold-600">
                    اقرأ المزيد
                    <i class="fas fa-arrow-left text-sm"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div class="flex justify-center gap-2 mt-12">
            <button class="w-11 h-11 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-700 hover:text-primary-700 transition">
              <i class="fas fa-chevron-right"></i>
            </button>
            <button class="w-11 h-11 rounded-lg bg-primary-700 text-white font-bold">1</button>
            <button class="w-11 h-11 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-700 hover:text-primary-700 transition font-bold">2</button>
            <button class="w-11 h-11 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-700 hover:text-primary-700 transition font-bold">3</button>
            <button class="w-11 h-11 rounded-lg bg-white border-2 border-gray-200 hover:border-primary-700 hover:text-primary-700 transition">
              <i class="fas fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section class="py-16 bg-gradient-primary text-white">
        <div class="container mx-auto px-4 text-center" data-aos="fade-up">
          <i class="fas fa-envelope-open-text text-gold-400 text-5xl mb-4"></i>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            اشترك في <span class="text-shine">النشرة البريدية</span>
          </h2>
          <p class="text-gray-200 mb-8 max-w-xl mx-auto">احصل على آخر أخبار المركز ودوراته الجديدة عبر بريدك الإلكتروني</p>
          <form class="max-w-md mx-auto flex gap-2">
            <input type="email" placeholder="بريدك الإلكتروني" class="flex-1 form-input text-gray-800" dir="ltr" />
            <button type="submit" class="btn-gold whitespace-nowrap">
              <i class="fas fa-paper-plane"></i>
              اشترك
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

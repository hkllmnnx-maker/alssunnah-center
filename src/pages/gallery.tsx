const galleryImages = [
  { category: 'students', icon: 'fa-users', title: 'حلقات تحفيظ القرآن', desc: 'طلاب المركز خلال حلقات التحفيظ', gradient: 'from-primary-700 to-primary-900' },
  { category: 'events', icon: 'fa-mosque', title: 'مبنى المركز الرئيسي', desc: 'المقر الرئيسي لمركز السنة', gradient: 'from-primary-800 to-primary-950' },
  { category: 'graduation', icon: 'fa-graduation-cap', title: 'حفل تخريج الدفعة 12', desc: 'تخريج طلاب الإجازة بالقرآن', gradient: 'from-gold-600 to-gold-800' },
  { category: 'students', icon: 'fa-book-quran', title: 'دورة الماهر 3', desc: 'انعقاد دورة الماهر 3', gradient: 'from-primary-600 to-primary-800' },
  { category: 'events', icon: 'fa-handshake', title: 'استقبال وفد علمي', desc: 'زيارة العلماء للمركز', gradient: 'from-gold-700 to-gold-900' },
  { category: 'students', icon: 'fa-pen-fancy', title: 'حصص الإملاء والإتقان', desc: 'تطبيقات عملية للطلاب', gradient: 'from-primary-700 to-primary-950' },
  { category: 'lessons', icon: 'fa-book-open', title: 'درس في الفقه', desc: 'دروس الفقه التفصيلية', gradient: 'from-primary-800 to-gold-700' },
  { category: 'lessons', icon: 'fa-scroll', title: 'شرح الأدب المفرد', desc: 'دروس في الأدب الإسلامي', gradient: 'from-gold-600 to-primary-800' },
  { category: 'graduation', icon: 'fa-certificate', title: 'منح الإجازات العلمية', desc: 'منح إجازات القرآن للطلاب', gradient: 'from-primary-700 to-primary-900' },
  { category: 'events', icon: 'fa-microphone', title: 'محاضرات مفتوحة', desc: 'محاضرات للعموم', gradient: 'from-gold-500 to-gold-700' },
  { category: 'lessons', icon: 'fa-chalkboard-teacher', title: 'دروس العقيدة', desc: 'شرح متون العقيدة', gradient: 'from-primary-800 to-primary-950' },
  { category: 'students', icon: 'fa-praying-hands', title: 'برامج التزكية', desc: 'برامج تزكية النفوس', gradient: 'from-primary-700 to-gold-700' },
]

const categories = [
  { id: 'all', name: 'الكل', icon: 'fa-th' },
  { id: 'students', name: 'الطلاب', icon: 'fa-users' },
  { id: 'lessons', name: 'الدروس', icon: 'fa-book-open' },
  { id: 'events', name: 'الفعاليات', icon: 'fa-calendar-day' },
  { id: 'graduation', name: 'التخرج', icon: 'fa-graduation-cap' },
]

export const GalleryPage = () => {
  return (
    <>
      {/* Page Header */}
      <section class="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-4" data-aos="fade-down">
            <i class="fas fa-images"></i>
            <span>معرض الصور</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">معرض المركز</h1>
          <div class="divider-ornament"><i class="fas fa-star-and-crescent"></i></div>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            لحظات من أنشطة المركز وفعالياته العلمية والدعوية
          </p>
          <nav class="text-sm mt-6">
            <a href="/" class="text-gold-300 hover:text-gold-100">الرئيسية</a>
            <span class="mx-2 text-gold-400">/</span>
            <span class="text-gold-100">المعرض</span>
          </nav>
        </div>
      </section>

      {/* Filter */}
      <section class="py-10 bg-cream">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                class={`filter-btn flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition border-2 ${
                  i === 0 ? 'active bg-primary-700 text-white border-primary-700' : 'bg-white text-gray-700 border-gray-200 hover:border-primary-700 hover:text-primary-700'
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

      {/* Gallery Grid */}
      <section class="pb-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div class="gallery-item filter-item bg-gradient-to-br shadow-md hover:shadow-2xl" data-category={img.category} data-aos="fade-up" data-aos-delay={i * 50}>
                <div class={`w-full h-full bg-gradient-to-br ${img.gradient} flex items-center justify-center relative`}>
                  <div class="absolute inset-0 opacity-10 pattern-bg"></div>
                  <i class={`fas ${img.icon} text-gold-400 text-7xl relative z-10`}></i>
                  <div class="gallery-overlay">
                    <div class="text-white">
                      <h3 class="font-bold text-lg mb-1">{img.title}</h3>
                      <p class="text-sm text-gray-200">{img.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div id="lightbox" class="hidden fixed inset-0 bg-black/95 z-50 items-center justify-center p-4">
        <button id="lightboxClose" class="absolute top-6 left-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full text-2xl">
          <i class="fas fa-times"></i>
        </button>
        <img id="lightboxImg" src="" alt="" class="max-w-full max-h-full rounded-lg shadow-2xl" />
      </div>

      {/* CTA */}
      <section class="py-16 bg-gradient-primary text-white">
        <div class="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            هل تريد أن تكون جزءًا من <span class="text-shine">هذه المسيرة؟</span>
          </h2>
          <p class="text-gray-200 mb-8 max-w-xl mx-auto">انضم لطلاب العلم في مركز السنة وكن من بين خريجي دوراتنا.</p>
          <a href="/register" class="btn-gold">
            <i class="fas fa-user-plus"></i>
            سجل الآن
          </a>
        </div>
      </section>
    </>
  )
}

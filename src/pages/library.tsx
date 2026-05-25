// Digital Library Page - books carousel + grid with filter + PDF modal

const books = [
  { id: 1, title: 'الأصول الثلاثة وأدلتها', author: 'الإمام محمد بن عبد الوهاب', cat: 'aqeedah', catName: 'العقيدة', pages: 32, size: '1.2 MB', desc: 'متن مختصر في بيان الأصول التي يجب على كل مسلم معرفتها: معرفة الرب، ومعرفة الدين، ومعرفة النبي ﷺ.' },
  { id: 2, title: 'كتاب التوحيد', author: 'الإمام محمد بن عبد الوهاب', cat: 'aqeedah', catName: 'العقيدة', pages: 220, size: '3.4 MB', desc: 'من أنفس المؤلفات في تقرير توحيد العبادة، وبيان الشرك ووسائله، مع أدلة من الكتاب والسنة.' },
  { id: 3, title: 'العقيدة الواسطية', author: 'شيخ الإسلام ابن تيمية', cat: 'aqeedah', catName: 'العقيدة', pages: 96, size: '2.1 MB', desc: 'متن جامع لعقيدة أهل السنة والجماعة في الأسماء والصفات والإيمان والقدر.' },
  { id: 4, title: 'تفسير السعدي', author: 'الشيخ عبد الرحمن السعدي', cat: 'tafsir', catName: 'التفسير', pages: 950, size: '12.5 MB', desc: 'تيسير الكريم الرحمن في تفسير كلام المنان، من أيسر التفاسير وأقربها للفهم.' },
  { id: 5, title: 'مقدمة في أصول التفسير', author: 'شيخ الإسلام ابن تيمية', cat: 'tafsir', catName: 'التفسير', pages: 120, size: '2.0 MB', desc: 'تأصيل علمي مختصر لقواعد التفسير ومسالك المفسرين وأسباب الاختلاف بينهم.' },
  { id: 6, title: 'الأربعون النووية', author: 'الإمام يحيى بن شرف النووي', cat: 'hadith', catName: 'الحديث', pages: 56, size: '1.4 MB', desc: 'اثنان وأربعون حديثًا جامعة لقواعد الإسلام، يقول النووي: من حفظها حُشر مع العلماء.' },
  { id: 7, title: 'الأدب المفرد', author: 'الإمام محمد بن إسماعيل البخاري', cat: 'hadith', catName: 'الحديث', pages: 340, size: '5.8 MB', desc: 'مصنف الإمام البخاري في الآداب الشرعية وحسن الخلق، يعد مرجعًا في تربية النفس.' },
  { id: 8, title: 'بلوغ المرام', author: 'الحافظ ابن حجر العسقلاني', cat: 'hadith', catName: 'الحديث', pages: 420, size: '6.7 MB', desc: 'جامع لأحاديث الأحكام المستخرجة من الكتب الستة وغيرها، مرتب على أبواب الفقه.' },
  { id: 9, title: 'عمدة الفقه', author: 'الإمام موفق الدين ابن قدامة', cat: 'fiqh', catName: 'الفقه', pages: 180, size: '3.0 MB', desc: 'متن فقهي مختصر على مذهب الإمام أحمد بن حنبل، اعتمد عليه طلاب العلم قرونًا.' },
  { id: 10, title: 'الورقات في أصول الفقه', author: 'إمام الحرمين الجويني', cat: 'fiqh', catName: 'الأصول', pages: 32, size: '0.9 MB', desc: 'أوجز متن في أصول الفقه، يُعدّ بوابة الدخول لعلم الأصول.' },
  { id: 11, title: 'الآجرومية', author: 'الإمام محمد بن آجروم', cat: 'arabic', catName: 'النحو', pages: 30, size: '0.8 MB', desc: 'متن مختصر في النحو، يبدأ به طلاب العلم لإتقان أصول الإعراب.' },
  { id: 12, title: 'قطر الندى وبل الصدى', author: 'ابن هشام الأنصاري', cat: 'arabic', catName: 'النحو', pages: 280, size: '4.5 MB', desc: 'متن متوسط في النحو يجمع بين السلاسة والتأصيل العلمي.' },
  { id: 13, title: 'الرحيق المختوم', author: 'الشيخ صفي الرحمن المباركفوري', cat: 'seerah', catName: 'السيرة', pages: 530, size: '8.2 MB', desc: 'بحث في السيرة النبوية فاز بالجائزة العالمية الأولى، تميز بالتحقيق والترتيب.' },
  { id: 14, title: 'تزكية النفوس', author: 'مجموعة من العلماء', cat: 'seerah', catName: 'التزكية', pages: 240, size: '3.6 MB', desc: 'مختارات من كلام ابن تيمية وابن القيم وابن رجب في تزكية النفس وعلاج القلوب.' }
]

const categories = [
  { id: 'all', name: 'كل التصنيفات', icon: 'fa-th' },
  { id: 'aqeedah', name: 'العقيدة', icon: 'fa-kaaba' },
  { id: 'tafsir', name: 'التفسير', icon: 'fa-book-quran' },
  { id: 'hadith', name: 'الحديث', icon: 'fa-scroll' },
  { id: 'fiqh', name: 'الفقه', icon: 'fa-balance-scale' },
  { id: 'arabic', name: 'اللغة', icon: 'fa-pen-nib' },
  { id: 'seerah', name: 'السيرة', icon: 'fa-mosque' }
]

export const LibraryPage = () => {
  return (
    <>
      {/* Hero */}
      <section class="hero-bg-emerald relative py-20 overflow-hidden">
        <div class="islamic-pattern-1"></div>
        <div class="container mx-auto px-4 relative z-10 text-center text-white" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 bg-royal-gold-500/15 backdrop-blur-sm border border-royal-gold-500/30 text-royal-gold-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <i class="fas fa-book"></i>
            <span>المكتبة الرقمية</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
            <span class="text-shine">مكتبة المركز</span> الرقمية
          </h1>
          <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            مجموعة منتقاة من أمهات الكتب والمقررات المعتمدة في المركز،
            متاحة للتحميل والقراءة المباشرة لتيسير طلب العلم وتقريبه للجميع.
          </p>
          <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-royal-gold-500/20">
              <div class="text-3xl font-extrabold text-royal-gold-300">{books.length}+</div>
              <div class="text-sm text-gray-300">كتاب رقمي</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-royal-gold-500/20">
              <div class="text-3xl font-extrabold text-royal-gold-300">6</div>
              <div class="text-sm text-gray-300">تصنيفات علمية</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-royal-gold-500/20">
              <div class="text-3xl font-extrabold text-royal-gold-300">PDF</div>
              <div class="text-sm text-gray-300">صيغة عالية الجودة</div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-royal-gold-500/20">
              <div class="text-3xl font-extrabold text-royal-gold-300">100%</div>
              <div class="text-sm text-gray-300">تحميل مجاني</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured carousel */}
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex items-end justify-between mb-10" data-aos="fade-up">
            <div>
              <span class="inline-block px-4 py-1 rounded-full bg-royal-gold-100 dark:bg-royal-gold-900/30 text-royal-gold-700 dark:text-royal-gold-300 text-sm font-semibold mb-3">
                إصدارات مختارة
              </span>
              <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-white">
                الأكثر طلبًا
              </h2>
            </div>
            <div class="hidden md:flex gap-2">
              <button class="swiper-button-prev-custom w-12 h-12 rounded-full bg-emerald-deep-900 text-white hover:bg-royal-gold-500 transition-all flex items-center justify-center">
                <i class="fas fa-chevron-right"></i>
              </button>
              <button class="swiper-button-next-custom w-12 h-12 rounded-full bg-emerald-deep-900 text-white hover:bg-royal-gold-500 transition-all flex items-center justify-center">
                <i class="fas fa-chevron-left"></i>
              </button>
            </div>
          </div>

          <div class="swiper swiper-books">
            <div class="swiper-wrapper">
              {books.slice(0, 8).map((b) => (
                <div class="swiper-slide">
                  <div class="book-card">
                    <div class="book-cover">
                      <div class="book-binding"></div>
                      <div class="text-center px-4">
                        <i class="fas fa-book-quran text-royal-gold-300 text-4xl mb-3"></i>
                        <div class="text-white font-bold text-base leading-snug">{b.title}</div>
                        <div class="text-royal-gold-200 text-xs mt-2">{b.catName}</div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="font-bold text-emerald-deep-900 dark:text-white text-sm mb-1 line-clamp-1">{b.title}</h3>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-1">{b.author}</p>
                      <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span><i class="fas fa-file-pdf text-royal-gold-500"></i> {b.size}</span>
                        <span><i class="fas fa-book-open"></i> {b.pages} ص</span>
                      </div>
                      <button
                        type="button"
                        class="w-full btn-primary text-sm py-2"
                        data-modal-open="bookModal"
                        data-title={b.title}
                        data-author={b.author}
                        data-cat={b.catName}
                        data-desc={b.desc}
                      >
                        <i class="fas fa-eye"></i>
                        عرض الكتاب
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="swiper-pagination !relative !mt-6"></div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section class="py-16 bg-gray-50 dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-white mb-3">
              تصفّح المكتبة كاملة
            </h2>
            <p class="text-gray-600 dark:text-gray-400">رتّب حسب التصنيف العلمي الذي يهمك</p>
          </div>

          {/* Filter buttons */}
          <div class="flex flex-wrap justify-center gap-3 mb-10" data-filter-group="library">
            {categories.map((c, i) => (
              <button
                type="button"
                data-filter-target="library"
                data-filter={c.id}
                class={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${i === 0 ? 'bg-emerald-deep-900 text-white' : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-royal-gold-500 hover:text-white'}`}
              >
                <i class={`fas ${c.icon} ml-1`}></i>
                {c.name}
              </button>
            ))}
          </div>

          {/* Books grid */}
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-filter-list="library">
            {books.map((b) => (
              <div class="book-card" data-filter-item={b.cat}>
                <div class="book-cover">
                  <div class="book-binding"></div>
                  <div class="text-center px-3">
                    <i class="fas fa-book text-royal-gold-300 text-3xl mb-3"></i>
                    <div class="text-white font-bold text-sm leading-snug">{b.title}</div>
                    <div class="text-royal-gold-200 text-xs mt-2">{b.catName}</div>
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="font-bold text-emerald-deep-900 dark:text-white text-sm mb-1 line-clamp-2 min-h-[40px]">{b.title}</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-1">{b.author}</p>
                  <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span><i class="fas fa-file-pdf text-royal-gold-500"></i> {b.size}</span>
                    <span><i class="fas fa-book-open"></i> {b.pages} ص</span>
                  </div>
                  <button
                    type="button"
                    class="w-full btn-primary text-xs py-2"
                    data-modal-open="bookModal"
                    data-title={b.title}
                    data-author={b.author}
                    data-cat={b.catName}
                    data-desc={b.desc}
                  >
                    <i class="fas fa-eye"></i>
                    عرض الكتاب
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quranic verse */}
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto bg-gradient-to-br from-emerald-deep-900 to-emerald-deep-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden" data-aos="zoom-in">
            <div class="islamic-pattern-1"></div>
            <div class="relative z-10">
              <i class="fas fa-book-quran text-royal-gold-400 text-4xl mb-6"></i>
              <p class="text-2xl md:text-3xl leading-loose font-amiri mb-4">
                ﴿ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴾
              </p>
              <p class="text-royal-gold-300 text-sm">سورة المجادلة — الآية 11</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Modal */}
      <div id="bookModal" class="modal-overlay">
        <div class="modal-content">
          <button type="button" class="modal-close" data-modal-close="bookModal" aria-label="إغلاق">
            <i class="fas fa-times"></i>
          </button>
          <div class="text-center mb-6">
            <div class="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-deep-900 to-emerald-deep-700 flex items-center justify-center mb-4">
              <i class="fas fa-book-quran text-royal-gold-300 text-3xl"></i>
            </div>
            <h3 class="text-2xl font-extrabold text-emerald-deep-900 dark:text-white mb-2" data-field="title">عنوان الكتاب</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm" data-field="author">المؤلف</p>
            <span class="inline-block mt-3 px-4 py-1 rounded-full bg-royal-gold-100 dark:bg-royal-gold-900/30 text-royal-gold-700 dark:text-royal-gold-300 text-xs font-semibold" data-field="cat">التصنيف</span>
          </div>
          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 text-center" data-field="desc">
            ملخص الكتاب يظهر هنا.
          </p>
          <div class="flex gap-3">
            <a href="#" class="btn-primary flex-1 justify-center">
              <i class="fas fa-download"></i>
              تحميل PDF
            </a>
            <a href="#" class="btn-outline-gold flex-1 justify-center">
              <i class="fas fa-book-open"></i>
              قراءة كاملة
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

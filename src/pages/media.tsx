// Media Gallery Page - videos + audios with tabs and filter

const videos = [
  { id: 1, title: 'افتتاح الدورة العلمية الصيفية', cat: 'events', catName: 'فعاليات', duration: '12:30', date: '2024-07-01', desc: 'كلمة افتتاح فضيلة الشيخ مدير المركز في الدورة الصيفية المكثفة.' },
  { id: 2, title: 'شرح الأصول الثلاثة — الدرس الأول', cat: 'aqeedah', catName: 'العقيدة', duration: '45:12', date: '2024-06-15', desc: 'الدرس الأول من شرح متن الأصول الثلاثة للإمام محمد بن عبد الوهاب.' },
  { id: 3, title: 'تفسير سورة الفاتحة', cat: 'tafsir', catName: 'التفسير', duration: '38:20', date: '2024-06-10', desc: 'تفسير علمي مفصل لسورة الفاتحة على ضوء أقوال أئمة التفسير.' },
  { id: 4, title: 'شرح الأربعين النووية — الحديث الأول', cat: 'hadith', catName: 'الحديث', duration: '32:45', date: '2024-05-28', desc: 'إنما الأعمال بالنيات — شرح وتطبيق وفوائد منتقاة.' },
  { id: 5, title: 'فقه الطهارة — أحكام الوضوء', cat: 'fiqh', catName: 'الفقه', duration: '41:18', date: '2024-05-20', desc: 'دروس عملية في فقه الطهارة مع تطبيقات معاصرة.' },
  { id: 6, title: 'حفل تخريج الدفعة الأولى', cat: 'events', catName: 'فعاليات', duration: '28:50', date: '2024-04-15', desc: 'لحظات من حفل تخريج الدفعة الأولى من طلاب المركز.' },
  { id: 7, title: 'الآجرومية — مقدمة في النحو', cat: 'arabic', catName: 'اللغة', duration: '35:40', date: '2024-04-05', desc: 'الدرس التمهيدي في شرح الآجرومية لطلاب اللغة العربية.' },
  { id: 8, title: 'السيرة النبوية — الميلاد والنشأة', cat: 'seerah', catName: 'السيرة', duration: '52:10', date: '2024-03-22', desc: 'بدايات السيرة النبوية المباركة بسرد علمي محقق.' }
]

const audios = [
  { id: 1, title: 'تلاوة جزء عم — كاملاً', reciter: 'الشيخ القارئ', cat: 'quran', catName: 'تلاوات', duration: '38:00', size: '52 MB', desc: 'تلاوة خاشعة لجزء عم برواية حفص عن عاصم.' },
  { id: 2, title: 'محاضرة: همّة الشباب في طلب العلم', reciter: 'فضيلة الشيخ', cat: 'lectures', catName: 'محاضرات', duration: '48:25', size: '67 MB', desc: 'محاضرة دعوية في تحفيز الشباب على طلب العلم الشرعي.' },
  { id: 3, title: 'خطبة جمعة: فضل العلم وأهله', reciter: 'الإمام', cat: 'khutbas', catName: 'خطب', duration: '25:30', size: '34 MB', desc: 'خطبة جمعة جامعة في بيان فضل العلم ومكانة العلماء.' },
  { id: 4, title: 'درس مسجدي: تزكية النفس', reciter: 'الشيخ', cat: 'lectures', catName: 'محاضرات', duration: '55:12', size: '76 MB', desc: 'سلسلة دروس في تزكية النفس وعلاج أمراض القلوب.' },
  { id: 5, title: 'تلاوة سورة الكهف', reciter: 'القارئ الشيخ', cat: 'quran', catName: 'تلاوات', duration: '22:45', size: '31 MB', desc: 'تلاوة سورة الكهف برواية حفص بصوت خاشع.' },
  { id: 6, title: 'محاضرة: منهج السلف في طلب العلم', reciter: 'فضيلة الشيخ', cat: 'lectures', catName: 'محاضرات', duration: '1:05:20', size: '92 MB', desc: 'محاضرة تأصيلية في بيان منهج السلف الصالح في طلب العلم وتلقيه.' }
]

const videoCategories = [
  { id: 'all', name: 'الكل', icon: 'fa-th' },
  { id: 'aqeedah', name: 'العقيدة', icon: 'fa-kaaba' },
  { id: 'tafsir', name: 'التفسير', icon: 'fa-book-quran' },
  { id: 'hadith', name: 'الحديث', icon: 'fa-scroll' },
  { id: 'fiqh', name: 'الفقه', icon: 'fa-balance-scale' },
  { id: 'arabic', name: 'اللغة', icon: 'fa-language' },
  { id: 'seerah', name: 'السيرة', icon: 'fa-mosque' },
  { id: 'events', name: 'فعاليات', icon: 'fa-calendar-star' }
]

const audioCategories = [
  { id: 'all', name: 'الكل', icon: 'fa-th' },
  { id: 'quran', name: 'تلاوات', icon: 'fa-book-quran' },
  { id: 'lectures', name: 'محاضرات', icon: 'fa-microphone' },
  { id: 'khutbas', name: 'خطب', icon: 'fa-mosque' }
]

export const MediaPage = () => {
  return (
    <>
      {/* Hero */}
      <section class="hero-bg-emerald relative py-20 overflow-hidden">
        <div class="islamic-pattern-1"></div>
        <div class="container mx-auto px-4 relative z-10 text-center text-white" data-aos="fade-up">
          <div class="inline-flex items-center gap-2 bg-royal-gold-500/15 backdrop-blur-sm border border-royal-gold-500/30 text-royal-gold-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <i class="fas fa-photo-film"></i>
            <span>الوسائط المتعددة</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
            معرض <span class="text-shine">المرئيات والصوتيات</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            مكتبة وسائط متكاملة من دروس مرئية، محاضرات صوتية، تلاوات، وخطب
            بإخراج علمي راقٍ يجمع بين أصالة المحتوى وجودة العرض.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          {/* Tabs header */}
          <div class="media-tabs flex justify-center mb-10" data-tabs="media">
            <button type="button" class="media-tab active" data-tab="videos">
              <i class="fas fa-video"></i>
              المرئيات
              <span class="bg-royal-gold-500/20 text-royal-gold-700 dark:text-royal-gold-300 rounded-full px-2 py-0.5 text-xs mr-1">{videos.length}</span>
            </button>
            <button type="button" class="media-tab" data-tab="audios">
              <i class="fas fa-headphones"></i>
              الصوتيات
              <span class="bg-royal-gold-500/20 text-royal-gold-700 dark:text-royal-gold-300 rounded-full px-2 py-0.5 text-xs mr-1">{audios.length}</span>
            </button>
          </div>

          {/* Videos panel */}
          <div data-tab-panel="media" data-panel="videos">
            {/* Featured player */}
            <div class="max-w-4xl mx-auto mb-12" data-aos="fade-up">
              <div class="rounded-3xl overflow-hidden shadow-2xl bg-emerald-deep-900 relative aspect-video">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="pattern-bg-lg absolute inset-0 opacity-10"></div>
                  <div class="relative z-10 text-center text-white">
                    <button type="button" class="w-24 h-24 mx-auto rounded-full bg-royal-gold-500 hover:bg-royal-gold-600 transition-all flex items-center justify-center shadow-2xl mb-4 group">
                      <i class="fas fa-play text-3xl text-white mr-1 group-hover:scale-110 transition-transform"></i>
                    </button>
                    <h3 class="text-2xl font-bold mb-2">{videos[0].title}</h3>
                    <p class="text-royal-gold-200 text-sm">{videos[0].duration} • {videos[0].catName}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video filter */}
            <div class="flex flex-wrap justify-center gap-2 mb-8" data-filter-group="videos">
              {videoCategories.map((c, i) => (
                <button
                  type="button"
                  data-filter-target="videos"
                  data-filter={c.id}
                  class={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-emerald-deep-900 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-royal-gold-500 hover:text-white'}`}
                >
                  <i class={`fas ${c.icon} ml-1`}></i>
                  {c.name}
                </button>
              ))}
            </div>

            {/* Videos grid */}
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-filter-list="videos">
              {videos.map((v) => (
                <div class="media-card" data-filter-item={v.cat}>
                  <div class="thumb">
                    <div class="absolute inset-0 bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-900 flex items-center justify-center">
                      <i class="fas fa-film text-royal-gold-400 text-5xl opacity-30"></i>
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <button type="button" class="play-btn">
                        <i class="fas fa-play"></i>
                      </button>
                    </div>
                    <span class="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      <i class="fas fa-clock"></i> {v.duration}
                    </span>
                    <span class="absolute top-2 right-2 bg-royal-gold-500 text-white text-xs px-3 py-1 rounded-full">{v.catName}</span>
                  </div>
                  <div class="p-5">
                    <h3 class="font-bold text-emerald-deep-900 dark:text-white text-base mb-2 line-clamp-2">{v.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">{v.desc}</p>
                    <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span><i class="fas fa-calendar-alt text-royal-gold-500"></i> {v.date}</span>
                      <button type="button" class="text-emerald-deep-700 dark:text-royal-gold-300 hover:text-royal-gold-500 font-semibold">
                        مشاهدة <i class="fas fa-arrow-left"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audios panel */}
          <div data-tab-panel="media" data-panel="audios" class="hidden">
            {/* Featured audio player */}
            <div class="max-w-3xl mx-auto mb-12" data-aos="fade-up">
              <div class="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-deep-900 to-emerald-deep-700 p-8 text-white relative">
                <div class="islamic-pattern-2"></div>
                <div class="relative z-10 flex items-center gap-6">
                  <div class="w-24 h-24 rounded-2xl bg-royal-gold-500/20 backdrop-blur-sm border-2 border-royal-gold-500/40 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-headphones text-royal-gold-300 text-4xl"></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl md:text-2xl font-bold mb-1">{audios[0].title}</h3>
                    <p class="text-royal-gold-200 text-sm mb-4">{audios[0].reciter} • {audios[0].duration}</p>
                    <div class="flex items-center gap-3">
                      <button type="button" class="w-12 h-12 rounded-full bg-royal-gold-500 hover:bg-royal-gold-600 transition-all flex items-center justify-center">
                        <i class="fas fa-play text-white"></i>
                      </button>
                      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div class="h-full w-1/3 bg-royal-gold-500"></div>
                      </div>
                      <span class="text-sm text-gray-300">12:30 / {audios[0].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio filter */}
            <div class="flex flex-wrap justify-center gap-2 mb-8" data-filter-group="audios">
              {audioCategories.map((c, i) => (
                <button
                  type="button"
                  data-filter-target="audios"
                  data-filter={c.id}
                  class={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-emerald-deep-900 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-royal-gold-500 hover:text-white'}`}
                >
                  <i class={`fas ${c.icon} ml-1`}></i>
                  {c.name}
                </button>
              ))}
            </div>

            {/* Audios grid */}
            <div class="grid md:grid-cols-2 gap-5" data-filter-list="audios">
              {audios.map((a) => (
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex items-center gap-4" data-filter-item={a.cat}>
                  <button type="button" class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-deep-900 to-emerald-deep-700 hover:from-royal-gold-500 hover:to-royal-gold-600 transition-all flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-play text-white text-xl mr-0.5"></i>
                  </button>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs px-2 py-0.5 rounded-full bg-royal-gold-100 dark:bg-royal-gold-900/30 text-royal-gold-700 dark:text-royal-gold-300 font-semibold">{a.catName}</span>
                    </div>
                    <h3 class="font-bold text-emerald-deep-900 dark:text-white text-sm mb-1 line-clamp-1">{a.title}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{a.reciter}</p>
                    <div class="flex items-center gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span><i class="fas fa-clock text-royal-gold-500"></i> {a.duration}</span>
                      <span><i class="fas fa-file-audio text-royal-gold-500"></i> {a.size}</span>
                    </div>
                  </div>
                  <button type="button" class="text-emerald-deep-700 dark:text-royal-gold-300 hover:text-royal-gold-500 p-2" title="تحميل">
                    <i class="fas fa-download"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channels CTA */}
      <section class="py-16 bg-gray-50 dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <div class="text-center mb-10" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 dark:text-white mb-3">
              تابعنا على قنواتنا
            </h2>
            <p class="text-gray-600 dark:text-gray-400">احرص على متابعتنا عبر منصاتنا الرسمية</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="https://www.facebook.com/alssuunah/" target="_blank" rel="noopener" class="soft-card text-center group">
              <div class="w-16 h-16 mx-auto rounded-2xl bg-[#1877F2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fab fa-facebook-f text-white text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-emerald-deep-900 dark:text-white mb-1">فيسبوك</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">صفحتنا الرسمية</p>
            </a>
            <a href="#" target="_blank" rel="noopener" class="soft-card text-center group">
              <div class="w-16 h-16 mx-auto rounded-2xl bg-[#FF0000] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fab fa-youtube text-white text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-emerald-deep-900 dark:text-white mb-1">يوتيوب</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">قناة المركز</p>
            </a>
            <a href="#" target="_blank" rel="noopener" class="soft-card text-center group">
              <div class="w-16 h-16 mx-auto rounded-2xl bg-[#0088CC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fab fa-telegram text-white text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-emerald-deep-900 dark:text-white mb-1">تليجرام</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">قناتنا للتواصل</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

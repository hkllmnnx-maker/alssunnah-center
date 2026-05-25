export const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <section class="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-flex items-center gap-2 bg-royal-gold-500/20 border border-royal-gold-400/30 text-royal-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-4" data-aos="fade-down">
            <i class="fas fa-mosque"></i>
            <span>تعرف علينا</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">عن المركز</h1>
          <div class="divider-ornament"><i class="fas fa-star-and-crescent"></i></div>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            مسيرة علمية شرعية في خدمة الكتاب والسنة وإعداد طلاب العلم والدعاة
          </p>
          <nav class="text-sm mt-6">
            <a href="/" class="text-royal-gold-300 hover:text-royal-gold-100">الرئيسية</a>
            <span class="mx-2 text-royal-gold-400">/</span>
            <span class="text-royal-gold-100">عن المركز</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-left">
              <div class="inline-flex items-center gap-2 bg-emerald-deep-100 text-emerald-deep-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <i class="fas fa-info-circle"></i>
                <span>من نحن</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 mb-6 leading-tight">
                مركز <span class="text-royal-gold-600">السنة</span> للعلوم الشرعية والتأهيل
              </h2>
              <p class="text-gray-700 leading-loose mb-4">
                مركز علمي شرعي متخصص يُعنى بتعليم العلوم الشرعية وتأهيل الدعاة وطلاب العلم،
                انطلق برسالة واضحة في صناعة الداعية المتكامل الذي يجمع بين العلم النافع والإيمان الصادق
                والأخلاق الفاضلة والمهارة الدعوية، وفق المنهج الوسطي المعتدل القائم على الكتاب والسنة
                بفهم سلف الأمة الصالح.
              </p>
              <p class="text-gray-700 leading-loose mb-6">
                نقدم برامج علمية متنوعة تخدم مختلف الفئات، من طلاب العلم المبتدئين إلى المتقدمين،
                مع التركيز على الجودة العلمية والتأهيل العملي.
              </p>
              <div class="flex flex-wrap gap-3">
                <a href="/courses" class="btn-primary">
                  <i class="fas fa-graduation-cap"></i>
                  دوراتنا
                </a>
                <a href="/contact" class="btn-gold">
                  <i class="fas fa-envelope"></i>
                  تواصل معنا
                </a>
              </div>
            </div>

            <div data-aos="fade-right">
              <div class="relative">
                <div class="bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-950 rounded-3xl p-1 shadow-2xl">
                  <div class="bg-cream rounded-3xl p-8 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-royal-gold-400/10 rounded-full -mr-16 -mt-16"></div>
                    <div class="absolute bottom-0 left-0 w-40 h-40 bg-emerald-deep-400/10 rounded-full -ml-20 -mb-20"></div>
                    <div class="relative z-10 text-center">
                      <i class="fas fa-mosque text-emerald-deep-800 text-7xl mb-4"></i>
                      <h3 class="text-2xl font-extrabold text-emerald-deep-900 mb-2">منذ 2010</h3>
                      <p class="text-gray-700 mb-6">في خدمة العلم الشرعي</p>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="bg-white rounded-xl p-4 shadow-md">
                          <div class="text-3xl font-extrabold text-royal-gold-600 mb-1">+1500</div>
                          <div class="text-sm text-gray-600">طالب</div>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-md">
                          <div class="text-3xl font-extrabold text-emerald-deep-700 mb-1">+45</div>
                          <div class="text-sm text-gray-600">دورة</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section class="py-20 bg-cream">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14" data-aos="fade-up">
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 mb-4">
              رؤيتنا ورسالتنا وأهدافنا
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div class="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden border-t-4 border-emerald-deep-700" data-aos="fade-up">
              <div class="w-16 h-16 rounded-full bg-emerald-deep-100 text-emerald-deep-700 flex items-center justify-center mb-5 text-2xl">
                <i class="fas fa-eye"></i>
              </div>
              <h3 class="text-2xl font-bold text-emerald-deep-900 mb-4">رؤيتنا</h3>
              <p class="text-gray-700 leading-loose">
                صناعة الداعية المؤصل علميًا، المزكى إيمانيًا، المهذب أخلاقيًا، الماهر دعويًا،
                وفق المنهج الوسطي المعتدل.
              </p>
            </div>

            {/* Mission */}
            <div class="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden border-t-4 border-royal-gold-500" data-aos="fade-up" data-aos-delay="100">
              <div class="w-16 h-16 rounded-full bg-royal-gold-100 text-royal-gold-600 flex items-center justify-center mb-5 text-2xl">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3 class="text-2xl font-bold text-emerald-deep-900 mb-4">رسالتنا</h3>
              <p class="text-gray-700 leading-loose">
                تقديم محتوى علمي شرعي راسخ، وبيئة تربوية متكاملة، تجمع بين أصالة العلم،
                وعمق التزكية، ومهارة الدعوة، لخدمة الإسلام والمسلمين.
              </p>
            </div>

            {/* Values */}
            <div class="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden border-t-4 border-emerald-deep-700" data-aos="fade-up" data-aos-delay="200">
              <div class="w-16 h-16 rounded-full bg-emerald-deep-100 text-emerald-deep-700 flex items-center justify-center mb-5 text-2xl">
                <i class="fas fa-gem"></i>
              </div>
              <h3 class="text-2xl font-bold text-emerald-deep-900 mb-4">قيمنا</h3>
              <ul class="text-gray-700 space-y-2">
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle text-royal-gold-500 mt-1"></i>
                  <span>الإخلاص والتجرد لله</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle text-royal-gold-500 mt-1"></i>
                  <span>التميز العلمي والمنهجي</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle text-royal-gold-500 mt-1"></i>
                  <span>الوسطية والاعتدال</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check-circle text-royal-gold-500 mt-1"></i>
                  <span>الجودة في كل عمل</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-14" data-aos="fade-up">
            <div class="inline-flex items-center gap-2 bg-royal-gold-100 text-royal-gold-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <i class="fas fa-flag"></i>
              <span>أهدافنا</span>
            </div>
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 mb-4">
              أهداف المركز الإستراتيجية
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fa-book-open', title: 'التأصيل العلمي', desc: 'تقديم تأصيل علمي راسخ في العقيدة والفقه والحديث والتفسير وعلوم اللغة العربية.' },
              { icon: 'fa-spa', title: 'التزكية الإيمانية', desc: 'تربية القلوب على الإيمان والتقوى وتعميق صلة العبد بربه عبر برامج التزكية.' },
              { icon: 'fa-hand-holding-heart', title: 'البناء الأخلاقي', desc: 'غرس الأخلاق الإسلامية الفاضلة وآداب طالب العلم والداعية إلى الله.' },
              { icon: 'fa-bullhorn', title: 'المهارة الدعوية', desc: 'تدريب الدعاة على مهارات الخطابة والإقناع والتواصل الفعّال مع المدعوين.' },
              { icon: 'fa-users', title: 'إعداد القيادات', desc: 'صناعة قيادات شرعية ودعوية قادرة على خدمة الإسلام والمجتمع.' },
              { icon: 'fa-quran', title: 'خدمة القرآن', desc: 'الاهتمام بحفظ القرآن الكريم وتلاوته وتدبره وتعليمه بأحكام التجويد.' },
            ].map((goal, i) => (
              <div class="feature-card bg-white p-7 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay={i * 80}>
                <div class="feature-icon mb-4">
                  <i class={`fas ${goal.icon}`}></i>
                </div>
                <h3 class="font-bold text-xl text-emerald-deep-900 mb-3">{goal.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum / Methodology */}
      <section class="py-20 bg-cream">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" class="order-2 lg:order-1">
              <div class="bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-950 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-40 h-40 bg-royal-gold-400/10 rounded-full -ml-20 -mt-20"></div>
                <div class="absolute bottom-0 right-0 w-32 h-32 bg-royal-gold-400/10 rounded-full -mr-16 -mb-16"></div>
                <div class="relative z-10">
                  <i class="fas fa-route text-royal-gold-400 text-5xl mb-4"></i>
                  <h3 class="text-2xl font-bold mb-6">مراحل المسار العلمي</h3>
                  <div class="space-y-4">
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-full bg-royal-gold-500 text-emerald-deep-900 flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 class="font-bold mb-1">المرحلة التأسيسية</h4>
                        <p class="text-sm text-gray-300">تعلم أساسيات العلوم الشرعية</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-full bg-royal-gold-500 text-emerald-deep-900 flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 class="font-bold mb-1">المرحلة المتوسطة</h4>
                        <p class="text-sm text-gray-300">التعمق في كتب أهل العلم</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-full bg-royal-gold-500 text-emerald-deep-900 flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 class="font-bold mb-1">المرحلة المتقدمة</h4>
                        <p class="text-sm text-gray-300">التحقيق والتخصص</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-full bg-royal-gold-500 text-emerald-deep-900 flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 class="font-bold mb-1">مرحلة التأهيل</h4>
                        <p class="text-sm text-gray-300">التطبيق العملي والتأهيل الدعوي</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" class="order-1 lg:order-2">
              <div class="inline-flex items-center gap-2 bg-emerald-deep-100 text-emerald-deep-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <i class="fas fa-balance-scale"></i>
                <span>منهجنا</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-emerald-deep-900 mb-6 leading-tight">
                المنهج <span class="text-royal-gold-600">الوسطي المعتدل</span>
              </h2>
              <p class="text-gray-700 leading-loose mb-4">
                يعتمد المركز في تعليمه على المنهج الوسطي المعتدل القائم على الكتاب والسنة بفهم سلف الأمة الصالح،
                بعيدًا عن الإفراط والتفريط، مع الاهتمام بكتب أهل العلم المعتبرين، وإكساب الطالب
                مهارات الاستدلال والاستنباط.
              </p>
              <ul class="space-y-3 mt-6">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-double text-royal-gold-500 text-lg mt-1"></i>
                  <span class="text-gray-700">دراسة كتب العقيدة على منهج أهل السنة والجماعة</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-double text-royal-gold-500 text-lg mt-1"></i>
                  <span class="text-gray-700">دراسة الفقه على المذاهب الأربعة مع الترجيح بالدليل</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-double text-royal-gold-500 text-lg mt-1"></i>
                  <span class="text-gray-700">العناية بالحديث وعلومه ومصطلحه</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-double text-royal-gold-500 text-lg mt-1"></i>
                  <span class="text-gray-700">اهتمام خاص بعلوم اللغة العربية</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-double text-royal-gold-500 text-lg mt-1"></i>
                  <span class="text-gray-700">دمج التزكية والسلوك مع التعليم</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quranic Verse */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto" data-aos="zoom-in">
            <div class="verse-box font-quran shadow-xl">
              يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ
            </div>
            <div class="text-center mt-4 text-emerald-deep-700 font-bold">[ سورة المجادلة - الآية 11 ]</div>
          </div>
        </div>
      </section>
    </>
  )
}

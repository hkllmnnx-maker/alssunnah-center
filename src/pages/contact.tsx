export const ContactPage = () => {
  return (
    <>
      {/* Page Header */}
      <section class="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-flex items-center gap-2 bg-royal-gold-500/20 border border-royal-gold-400/30 text-royal-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-4" data-aos="fade-down">
            <i class="fas fa-headset"></i>
            <span>نحن في خدمتك</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">تواصل معنا</h1>
          <div class="divider-ornament"><i class="fas fa-star-and-crescent"></i></div>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            نسعد بتواصلكم معنا وإجابة استفساراتكم في أي وقت
          </p>
          <nav class="text-sm mt-6">
            <a href="/" class="text-royal-gold-300 hover:text-royal-gold-100">الرئيسية</a>
            <span class="mx-2 text-royal-gold-400">/</span>
            <span class="text-royal-gold-100">تواصل معنا</span>
          </nav>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section class="py-16 -mt-20 relative z-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition" data-aos="fade-up">
              <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-deep-700 to-emerald-deep-900 flex items-center justify-center text-white text-2xl">
                <i class="fas fa-phone"></i>
              </div>
              <h3 class="font-bold text-xl text-emerald-deep-900 mb-2">اتصل بنا</h3>
              <p class="text-gray-600 text-sm mb-3">للاستفسارات والتسجيل</p>
              <a href="tel:0772089390" class="text-royal-gold-600 font-bold text-lg hover:text-royal-gold-700" dir="ltr">
                0772 089 390
              </a>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition" data-aos="fade-up" data-aos-delay="100">
              <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-2xl">
                <i class="fab fa-whatsapp"></i>
              </div>
              <h3 class="font-bold text-xl text-emerald-deep-900 mb-2">واتساب</h3>
              <p class="text-gray-600 text-sm mb-3">تواصل سريع عبر واتساب</p>
              <a href="https://wa.me/771405482" target="_blank" class="text-royal-gold-600 font-bold text-lg hover:text-royal-gold-700" dir="ltr">
                0771 405 482
              </a>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition" data-aos="fade-up" data-aos-delay="200">
              <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-royal-gold-500 to-royal-gold-700 flex items-center justify-center text-white text-2xl">
                <i class="fas fa-envelope"></i>
              </div>
              <h3 class="font-bold text-xl text-emerald-deep-900 mb-2">البريد الإلكتروني</h3>
              <p class="text-gray-600 text-sm mb-3">للمراسلات الرسمية</p>
              <a href="mailto:info@alssunnah-center.com" class="text-royal-gold-600 font-bold text-sm hover:text-royal-gold-700 break-all">
                info@alssunnah-center.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div class="lg:col-span-3" data-aos="fade-left">
              <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <h2 class="text-3xl font-extrabold text-emerald-deep-900 mb-2">أرسل لنا رسالة</h2>
                <p class="text-gray-600 mb-8">سنقوم بالرد عليك في أقرب وقت ممكن إن شاء الله</p>

                <form id="contactForm" class="space-y-5">
                  <div class="grid md:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label" for="name">الاسم الكامل <span class="required">*</span></label>
                      <input id="name" name="name" type="text" required class="form-input" placeholder="اكتب اسمك الكامل" />
                    </div>
                    <div>
                      <label class="form-label" for="phone">رقم الهاتف <span class="required">*</span></label>
                      <input id="phone" name="phone" type="tel" required class="form-input" placeholder="07xxxxxxxx" dir="ltr" />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label" for="email">البريد الإلكتروني</label>
                      <input id="email" name="email" type="email" class="form-input" placeholder="example@email.com" dir="ltr" />
                    </div>
                    <div>
                      <label class="form-label" for="subject">الموضوع <span class="required">*</span></label>
                      <select id="subject" name="subject" required class="form-input">
                        <option value="">اختر الموضوع</option>
                        <option value="inquiry">استفسار عام</option>
                        <option value="registration">تسجيل في دورة</option>
                        <option value="suggestion">اقتراح</option>
                        <option value="partnership">شراكة وتعاون</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label class="form-label" for="message">الرسالة <span class="required">*</span></label>
                    <textarea id="message" name="message" rows="6" required class="form-input" placeholder="اكتب رسالتك هنا..."></textarea>
                  </div>

                  <button type="submit" class="btn-primary w-full md:w-auto">
                    <i class="fas fa-paper-plane"></i>
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div class="lg:col-span-2 space-y-6" data-aos="fade-right">
              <div class="bg-gradient-to-br from-emerald-deep-800 to-emerald-deep-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-32 h-32 bg-royal-gold-400/10 rounded-full -ml-16 -mt-16"></div>
                <div class="relative z-10">
                  <i class="fas fa-mosque text-royal-gold-400 text-4xl mb-4"></i>
                  <h3 class="text-2xl font-bold mb-2">مركز السنة</h3>
                  <p class="text-gray-300 mb-6 text-sm">للعلوم الشرعية والتأهيل</p>

                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <i class="fas fa-map-marker-alt text-royal-gold-400 text-lg mt-1"></i>
                      <div>
                        <div class="font-bold mb-1">العنوان</div>
                        <p class="text-sm text-gray-300">المقر الرئيسي للمركز</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <i class="fas fa-clock text-royal-gold-400 text-lg mt-1"></i>
                      <div>
                        <div class="font-bold mb-1">أوقات الدوام</div>
                        <p class="text-sm text-gray-300">السبت - الخميس: 8 صباحًا - 9 مساءً</p>
                        <p class="text-sm text-gray-300">الجمعة: مغلق</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <i class="fas fa-phone text-royal-gold-400 text-lg mt-1"></i>
                      <div>
                        <div class="font-bold mb-1">الهاتف</div>
                        <p class="text-sm text-gray-300" dir="ltr">0772 089 390</p>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-white/10 mt-6 pt-6">
                    <div class="font-bold mb-3">تابعونا</div>
                    <div class="flex gap-3">
                      <a href="https://www.facebook.com/alssuunah/" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-royal-gold-500 rounded-full flex items-center justify-center transition">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://wa.me/772089390" target="_blank" class="w-10 h-10 bg-white/10 hover:bg-royal-gold-500 rounded-full flex items-center justify-center transition">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                      <a href="#" class="w-10 h-10 bg-white/10 hover:bg-royal-gold-500 rounded-full flex items-center justify-center transition">
                        <i class="fab fa-youtube"></i>
                      </a>
                      <a href="#" class="w-10 h-10 bg-white/10 hover:bg-royal-gold-500 rounded-full flex items-center justify-center transition">
                        <i class="fab fa-telegram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/772089390" target="_blank" class="block bg-green-500 hover:bg-green-600 text-white rounded-3xl p-6 text-center transition shadow-xl">
                <i class="fab fa-whatsapp text-5xl mb-3"></i>
                <h3 class="text-xl font-bold mb-1">محادثة مباشرة</h3>
                <p class="text-green-100 text-sm">تواصل معنا الآن عبر واتساب</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-16 bg-cream">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="section-title text-3xl md:text-4xl font-extrabold text-emerald-deep-900 mb-4">
              الأسئلة الشائعة
            </h2>
          </div>

          <div class="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'كيف يمكنني التسجيل في إحدى الدورات؟', a: 'يمكنك التسجيل من خلال نموذج التسجيل في الموقع، أو التواصل معنا مباشرة عبر الواتساب على الرقم 0771 405 482.' },
              { q: 'هل الدورات مجانية؟', a: 'بعض الدورات مجانية والبعض الآخر برسوم رمزية، ويتم توضيح ذلك عند الإعلان عن كل دورة.' },
              { q: 'هل تمنحون شهادات بعد إكمال الدورات؟', a: 'نعم، نمنح شهادات حضور معتمدة من المركز لكل من يكمل الدورة بنجاح، وفي بعض الدورات نمنح إجازات علمية.' },
              { q: 'هل الدورات متاحة للنساء؟', a: 'نعم، لدينا برامج وحلقات مخصصة للنساء بمشرفات متخصصات في بيئة آمنة.' },
              { q: 'هل توفرون تعليم عن بعد؟', a: 'بعض الدورات تكون متاحة عبر البث المباشر، ويتم الإعلان عن ذلك مع كل دورة.' },
            ].map((faq, i) => (
              <details class="bg-white rounded-xl shadow-sm group" data-aos="fade-up" data-aos-delay={i * 50}>
                <summary class="flex items-center justify-between p-5 cursor-pointer font-bold text-emerald-deep-900 hover:bg-emerald-deep-50 rounded-xl transition">
                  <span class="flex items-center gap-3">
                    <i class="fas fa-question-circle text-royal-gold-500"></i>
                    {faq.q}
                  </span>
                  <i class="fas fa-chevron-down text-royal-gold-500 group-open:rotate-180 transition"></i>
                </summary>
                <div class="px-5 pb-5 pt-2 text-gray-700 leading-loose border-t">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

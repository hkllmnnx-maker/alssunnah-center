export const RegisterPage = () => {
  return (
    <>
      {/* Page Header */}
      <section class="relative py-20 bg-gradient-primary text-white overflow-hidden">
        <div class="hero-pattern"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <div class="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 text-gold-300 px-4 py-2 rounded-full text-sm font-bold mb-4" data-aos="fade-down">
            <i class="fas fa-user-plus"></i>
            <span>سجّل معنا</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">التسجيل في الدورات</h1>
          <div class="divider-ornament"><i class="fas fa-star-and-crescent"></i></div>
          <p class="text-lg text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            انضم إلى مسيرة طلب العلم وكن جزءًا من جيل الدعاة الجدد
          </p>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div class="lg:col-span-2" data-aos="fade-left">
              <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <h2 class="text-2xl md:text-3xl font-extrabold text-primary-900 mb-2 flex items-center gap-3">
                  <i class="fas fa-clipboard-list text-gold-500"></i>
                  استمارة التسجيل
                </h2>
                <p class="text-gray-600 mb-8">يرجى ملء البيانات بدقة ليتمكن المركز من التواصل معك</p>

                <form id="registerForm" class="space-y-5">
                  {/* Personal Info */}
                  <div class="border-r-4 border-gold-500 pr-4 mb-2">
                    <h3 class="text-lg font-bold text-primary-900">البيانات الشخصية</h3>
                  </div>

                  <div class="grid md:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label" for="fullName">الاسم الكامل <span class="required">*</span></label>
                      <input id="fullName" name="fullName" type="text" required class="form-input" placeholder="اكتب اسمك الكامل" />
                    </div>
                    <div>
                      <label class="form-label" for="age">العمر <span class="required">*</span></label>
                      <input id="age" name="age" type="number" min="10" max="80" required class="form-input" placeholder="20" />
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label" for="gender">الجنس <span class="required">*</span></label>
                      <select id="gender" name="gender" required class="form-input">
                        <option value="">اختر</option>
                        <option value="male">ذكر</option>
                        <option value="female">أنثى</option>
                      </select>
                    </div>
                    <div>
                      <label class="form-label" for="city">المدينة / المنطقة <span class="required">*</span></label>
                      <input id="city" name="city" type="text" required class="form-input" placeholder="مثال: صنعاء" />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div class="border-r-4 border-gold-500 pr-4 mb-2 mt-8">
                    <h3 class="text-lg font-bold text-primary-900">معلومات التواصل</h3>
                  </div>

                  <div class="grid md:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label" for="phone">رقم الهاتف <span class="required">*</span></label>
                      <input id="phone" name="phone" type="tel" required class="form-input" placeholder="07xxxxxxxx" dir="ltr" />
                    </div>
                    <div>
                      <label class="form-label" for="whatsapp">رقم الواتساب</label>
                      <input id="whatsapp" name="whatsapp" type="tel" class="form-input" placeholder="07xxxxxxxx" dir="ltr" />
                    </div>
                  </div>

                  <div>
                    <label class="form-label" for="email">البريد الإلكتروني</label>
                    <input id="email" name="email" type="email" class="form-input" placeholder="example@email.com" dir="ltr" />
                  </div>

                  {/* Course Info */}
                  <div class="border-r-4 border-gold-500 pr-4 mb-2 mt-8">
                    <h3 class="text-lg font-bold text-primary-900">بيانات الدورة</h3>
                  </div>

                  <div>
                    <label class="form-label" for="course">اختر الدورة <span class="required">*</span></label>
                    <select id="course" name="course" required class="form-input">
                      <option value="">اختر الدورة المطلوبة</option>
                      <option value="maher-3">دورة الماهر 3 - إتقان القرآن (19 يومًا)</option>
                      <option value="adab-mufrad">شرح الأدب المفرد (12 يومًا)</option>
                      <option value="imams-training">تأهيل الأئمة والخطباء (شهران)</option>
                      <option value="aqeedah">العقيدة الواسطية (20 يومًا)</option>
                      <option value="fiqh">فقه العبادات (25 يومًا)</option>
                      <option value="tazkiya">تزكية النفوس (15 يومًا)</option>
                    </select>
                  </div>

                  <div>
                    <label class="form-label" for="education">المستوى العلمي الحالي</label>
                    <select id="education" name="education" class="form-input">
                      <option value="">اختر مستواك</option>
                      <option value="beginner">مبتدئ في طلب العلم</option>
                      <option value="intermediate">متوسط</option>
                      <option value="advanced">متقدم</option>
                      <option value="scholar">طالب علم متمرّس</option>
                    </select>
                  </div>

                  <div>
                    <label class="form-label" for="notes">ملاحظات إضافية</label>
                    <textarea id="notes" name="notes" rows="4" class="form-input" placeholder="أي معلومات إضافية تود إخبارنا بها..."></textarea>
                  </div>

                  {/* Terms */}
                  <div class="bg-primary-50 border border-primary-200 rounded-xl p-4">
                    <label class="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required class="mt-1 w-5 h-5 accent-primary-700" />
                      <span class="text-sm text-gray-700">
                        أوافق على الالتزام بالنظام الداخلي للمركز والحضور المنتظم في مواعيد الدورة.
                      </span>
                    </label>
                  </div>

                  <button type="submit" class="btn-primary w-full text-lg py-4">
                    <i class="fas fa-paper-plane"></i>
                    إرسال طلب التسجيل
                  </button>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div class="space-y-6" data-aos="fade-right">
              {/* Steps */}
              <div class="bg-white rounded-3xl shadow-xl p-6">
                <h3 class="text-xl font-bold text-primary-900 mb-5 flex items-center gap-2">
                  <i class="fas fa-route text-gold-500"></i>
                  خطوات التسجيل
                </h3>
                <div class="timeline">
                  <div class="timeline-item">
                    <h4 class="font-bold text-primary-800 mb-1">املأ الاستمارة</h4>
                    <p class="text-sm text-gray-600">ادخل بياناتك في النموذج</p>
                  </div>
                  <div class="timeline-item">
                    <h4 class="font-bold text-primary-800 mb-1">انتظر التواصل</h4>
                    <p class="text-sm text-gray-600">سنتواصل معك عبر الواتساب</p>
                  </div>
                  <div class="timeline-item">
                    <h4 class="font-bold text-primary-800 mb-1">تأكيد التسجيل</h4>
                    <p class="text-sm text-gray-600">سيتم تأكيد تسجيلك في الدورة</p>
                  </div>
                  <div class="timeline-item" style="padding-bottom: 0;">
                    <h4 class="font-bold text-primary-800 mb-1">احضر الدورة</h4>
                    <p class="text-sm text-gray-600">احضر إلى المركز في الموعد</p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div class="bg-gradient-to-br from-primary-800 to-primary-950 text-white rounded-3xl p-6 shadow-xl">
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                  <i class="fas fa-headset text-gold-400"></i>
                  التسجيل المباشر
                </h3>
                <p class="text-gray-300 text-sm mb-5">يمكنك التسجيل مباشرة عبر الاتصال أو الواتساب</p>

                <a href="https://wa.me/771405482" target="_blank" class="flex items-center gap-3 bg-green-500 hover:bg-green-600 rounded-xl p-4 mb-3 transition">
                  <i class="fab fa-whatsapp text-3xl"></i>
                  <div>
                    <div class="font-bold">واتساب التسجيل</div>
                    <div class="text-sm" dir="ltr">0771 405 482</div>
                  </div>
                </a>

                <a href="tel:0772089390" class="flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-primary-950 rounded-xl p-4 transition">
                  <i class="fas fa-phone text-3xl"></i>
                  <div>
                    <div class="font-bold">اتصل بنا</div>
                    <div class="text-sm" dir="ltr">0772 089 390</div>
                  </div>
                </a>
              </div>

              {/* Note */}
              <div class="bg-gold-50 border-2 border-gold-200 rounded-2xl p-5">
                <div class="flex items-start gap-3">
                  <i class="fas fa-info-circle text-gold-600 text-2xl mt-1"></i>
                  <div class="text-sm text-gray-700 leading-relaxed">
                    <strong class="text-gold-700">ملاحظة:</strong> المقاعد محدودة، يرجى المسارعة في التسجيل لضمان مقعدك في الدورة.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Hono } from 'hono'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { CoursesPage } from './pages/courses'
import { GalleryPage } from './pages/gallery'
import { ContactPage } from './pages/contact'
import { RegisterPage } from './pages/register'
import { NewsPage } from './pages/news'

const app = new Hono()

// Renderer middleware
app.use(renderer)

// ===== Pages =====
app.get('/', (c) => {
  return c.render(<HomePage />, { title: 'الرئيسية' })
})

app.get('/about', (c) => {
  return c.render(<AboutPage />, { title: 'عن المركز' })
})

app.get('/courses', (c) => {
  return c.render(<CoursesPage />, { title: 'الدورات والبرامج' })
})

app.get('/gallery', (c) => {
  return c.render(<GalleryPage />, { title: 'معرض الصور' })
})

app.get('/news', (c) => {
  return c.render(<NewsPage />, { title: 'الأخبار' })
})

app.get('/contact', (c) => {
  return c.render(<ContactPage />, { title: 'تواصل معنا' })
})

app.get('/register', (c) => {
  return c.render(<RegisterPage />, { title: 'التسجيل في الدورات' })
})

// ===== API Endpoints =====
app.post('/api/register', async (c) => {
  try {
    const data = await c.req.json()
    // Basic validation
    if (!data.fullName || !data.phone || !data.course) {
      return c.json({ success: false, message: 'الرجاء تعبئة جميع الحقول الإلزامية' }, 400)
    }
    // In production: save to D1 database or forward to admin
    console.log('New registration:', data)
    return c.json({
      success: true,
      message: 'تم استلام طلب التسجيل بنجاح، سيتواصل معك المركز قريبًا.',
      data: { id: Date.now(), ...data }
    })
  } catch (err) {
    return c.json({ success: false, message: 'خطأ في معالجة الطلب' }, 500)
  }
})

app.post('/api/contact', async (c) => {
  try {
    const data = await c.req.json()
    if (!data.name || !data.phone || !data.message) {
      return c.json({ success: false, message: 'الرجاء تعبئة جميع الحقول الإلزامية' }, 400)
    }
    console.log('New contact message:', data)
    return c.json({
      success: true,
      message: 'تم استلام رسالتك بنجاح، شكرًا لتواصلك معنا.',
      data: { id: Date.now(), ...data }
    })
  } catch (err) {
    return c.json({ success: false, message: 'خطأ في معالجة الطلب' }, 500)
  }
})

// ===== 404 Page =====
app.notFound((c) => {
  return c.render(
    <section class="min-h-[70vh] flex items-center justify-center bg-cream py-20">
      <div class="text-center container mx-auto px-4">
        <div class="text-9xl font-extrabold text-primary-700 mb-4">404</div>
        <i class="fas fa-mosque text-gold-500 text-6xl mb-6"></i>
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">الصفحة غير موجودة</h1>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <a href="/" class="btn-primary">
          <i class="fas fa-home"></i>
          العودة للرئيسية
        </a>
      </div>
    </section>,
    { title: 'الصفحة غير موجودة' }
  )
})

export default app

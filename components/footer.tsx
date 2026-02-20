export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="logo">Intuitive Pixel</h3>
            <p>إنشاء تجارب رقمية مذهلة من خلال التصميم والجرافيكس المبتكر والحديث.</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="تويتر">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="لينكد إن">in</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" title="درايبل">🎨</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="إنستجرام">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>الخدمات</h4>
            <ul>
              <li><a href="#design">تصميم الواجهات</a></li>
              <li><a href="#graphic">التصميم الجرافيكي</a></li>
              <li><a href="#branding">بناء الهوية البصرية</a></li>
              <li><a href="#web">تصميم المواقع</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>عن الشركة</h4>
            <ul>
              <li><a href="#about">عنا</a></li>
              <li><a href="#portfolio">أعمالنا</a></li>
              <li><a href="#blog">المدونة</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>تواصل</h4>
            <ul>
              <li><a href="mailto:hello@nataliya.com">hello@nataliya.com</a></li>
              <li><a href="tel:+201001234567">+20 (100) 123-4567</a></li>
              <li><p>مقرنا في القاهرة، مصر</p></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Intuitive Pixel. جميع الحقوق محفوظة.</p>
          <div className="footer-links">
            <a href="#privacy">سياسة الخصوصية</a>
            <a href="#terms">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

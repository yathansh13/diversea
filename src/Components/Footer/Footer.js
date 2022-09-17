import "./Footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <div className="contain-left">
        <p className="footer-logo">
          diver<span className="logo-bold">sea</span>
        </p>
        <p className="footer-desc">The best strangers you'll ever meet.</p>
      </div>
      <div class="contain-right">
        <div class="col">
          <h1>Help</h1>
          <ul>
            <li>Support</li>
            <li>Knowledgebase</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div class="col">
          <h1>Features</h1>
          <ul>
            <li>Screen Sharing</li>
            <li>iOS & Android Apps</li>
            <li>File Sharing</li>
            <li>User Management</li>
          </ul>
        </div>
        <div class="col">
          <h1>Company</h1>
          <ul>
            <li>About us</li>
            <li>Mission</li>
            <li>Careers</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Contact us</h1>
          <ul>
            <li>diversea@gmail.com</li>
            <li>123-456-789</li>
            <li>313/314 400 kuch Shiv Nadar University</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="welcome-container">
      <Analytics />
      
      <div className="main-content">
        <div className="content">
          <p className="main-message">
            If you&apos;re reading this, you are important. You are enough. The world is a better place with you in it.
          </p>
          <p className="hashtag">#itsoknot2beok</p>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-title">Need support? 988 Lifeline is free, confidential, and available 24/7</p>
        <div className="footer-links">
          <a href="tel:988" className="footer-link">Call 988</a>
          <span className="footer-divider">•</span>
          <a href="sms:988" className="footer-link">Text 988</a>
          <span className="footer-divider">•</span>
          <a href="https://chat.988lifeline.org/" target="_blank" rel="noopener noreferrer" className="footer-link">Chat Online</a>
          <span className="footer-divider">•</span>
          <a href="https://988lifeline.org/deaf-hard-of-hearing-hearing-loss/" target="_blank" rel="noopener noreferrer" className="footer-link">Deaf & Hard of Hearing Support</a>
        </div>
      </footer>
    </main>
  );
}


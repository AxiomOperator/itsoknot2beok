import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="welcome-container">
      <Analytics />
      <div className="content">
        <p className="main-message">
          If you're reading this, you are important. You are enough. The world is a better place with you in it.
        </p>
        <p className="hashtag">#itsoknot2beok</p>
      </div>
    </main>
  );
}


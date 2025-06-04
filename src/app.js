import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>Red Carpet Luxury Spa</h1>
        <nav>
          <a href="/">Home</a> | 
          <a href="/eyebrows">Eyebrows</a> | 
          <a href="/eyeliner">Eyeliner</a> | 
          <a href="/lips">Lips</a> | 
          <a href="/fineline">Fine Line Tattoo</a> | 
          <a href="/spraytan">Spray Tan</a>
        </nav>
      </header>

      <main>
        <h2>Welcome to Red Carpet Luxury Spa</h2>
        <p>Luxury Permanent Makeup & Beauty Services</p>
        <button>Book Now</button>
        <section>
          <h3>Gallery</h3>
          <img src="/images/brow1.jpg" alt="Brows" width="200" />
          <img src="/images/eyeliner1.jpg" alt="Eyeliner" width="200" />
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Red Carpet Luxury Spa</p>
      </footer>
    </div>
  );
}

export default App;


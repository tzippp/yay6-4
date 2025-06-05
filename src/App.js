import React from "react";
import { builder, BuilderComponent } from "@builder.io/react";
import "./App.css";

// Initialize Builder with your API key
// You can get this from https://builder.io/account/organization
builder.init("YOUR_BUILDER_API_KEY_HERE");

function App() {
  return (
    <div className="App">
      {/* This will render Builder.io content for the "page" model */}
      <BuilderComponent model="page" />

      {/* Fallback content when no Builder content is found */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to your Builder.io + React App!</h1>
        <p>
          To get started:
          <br />
          1. Get your API key from{" "}
          <a
            href="https://builder.io/account/organization"
            target="_blank"
            rel="noopener noreferrer"
          >
            Builder.io Account Settings
          </a>
          <br />
          2. Replace "YOUR_BUILDER_API_KEY_HERE" in App.js with your actual API
          key
          <br />
          3. Create content in the Builder.io visual editor
        </p>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768"
          src="https://cdn.builder.io/api/v1/image/assets%2F8e63879005d64a029a10f7c1af64687f%2F07f33fcf1cfb4665ac07000f6b124768"
          alt=""
          className="responsive-image"
        />
      </div>
    </div>
  );
}

export default App;

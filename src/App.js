import React from "react";
import { builder, BuilderComponent } from "@builder.io/react";

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
      </div>
    </div>
  );
}

export default App;

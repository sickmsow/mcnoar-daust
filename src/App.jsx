import React from "react";
import QRCode from "react-qr-code";

const App = () => {
  // Single artwork image
  const artworkImage =
    "https://images.pexels.com/photos/31167094/pexels-photo-31167094.jpeg";

  // AR features
  const arFeatures = [
    {
      id: 1,
      title: "Text Overlay (Intro to AR)",
      description: `
        When visitors scan the QR code or point at the target image, a simple 3D text overlay 
        appears above the piece. It provides artist info, creation year, and cultural context.
      `,
      qrLink: "https://mcnoar-daust.vercel.app/feature1.html",
      image: artworkImage,
    },
    {
      id: 2,
      title: "Artwork Recognition",
      description: `
        The app recognizes artworks automatically with MindAR — no QR required.
      `,
      qrLink: "/feature2.html",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(to bottom, #f9f9f9, #f2f2f2)",
        color: "#222",
        padding: "1rem",
        minHeight: "100vh",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          🏛️ MCNOAR AR Prototype
        </h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "#555" }}>
          Explore planned AR features for the{" "}
          <strong>Musée des Civilisations Noires</strong> digital experience.
        </p>
      </header>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {arFeatures.map((feature) => (
          <div
            key={feature.id}
            style={{
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: "600px",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              padding: "1.5rem",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)")
            }
          >
            <h2 style={{ color: "#333", marginBottom: "0.5rem" }}>
              {feature.title}
            </h2>
            <p
              style={{
                color: "#555",
                lineHeight: "1.6",
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              {feature.description}
            </p>

            {/* Single artwork image */}
            {feature.image && (
              <img
                src={feature.image}
                alt="Artwork"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginTop: "1rem",
                }}
              />
            )}

            {/* AR Target Image - demo.png from public folder */}
            <div
              style={{
                marginTop: "1.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                📷 Point your camera at this image:
              </p>
              <img
                src="/demo.png"
                alt="AR Target Image"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  border: "3px solid #e0e0e0",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
                onClick={() => window.open(feature.qrLink, "_blank")}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#999",
                  marginTop: "0.5rem",
                }}
              >
                Click to open AR experience
              </p>
            </div>

            {/* QR code */}
            <div
              style={{
                background: "white",
                padding: "0.4rem",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                marginTop: "1rem",
                display: "inline-block",
              }}
            >
              <QRCode value={feature.qrLink} size={80} />
            </div>
          </div>
        ))}
      </main>

      <footer
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "0.8rem",
          color: "#777",
        }}
      >
        © 2025 MCNOAR Prototype — Musée des Civilisations Noires
      </footer>
    </div>
  );
};

export default App;
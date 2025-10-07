import React from "react";
import QRCode from "react-qr-code";

const App = () => {
  // Artwork images for the first feature
  const artworkImages = [
    "https://images.pexels.com/photos/31167094/pexels-photo-31167094.jpeg",
    "https://i.ibb.co/pb7m2fN/museum-art2.jpg",
    "https://i.ibb.co/Tb6cjJ3/museum-art3.jpg",
    "https://i.ibb.co/7zsvhKk/museum-art4.jpg",
    "https://i.ibb.co/RybbyjJ/museum-art5.jpg",
  ];

  // Ordered from easiest → most complex
  const arFeatures = [
    {
      id: 1,
      title: "Text Overlay (Intro to AR)",
      description: `
        When visitors scan the QR code near an artwork, a simple 3D text overlay 
        appears above the piece. The text provides contextual info such as the 
        artist’s name, the creation year, and a short cultural background. 
        It’s the simplest feature, ideal for museums introducing AR gradually.
      `,
      qrLink: "https://yourprojectname.vercel.app/feature1.html",
      images: artworkImages,
    },
    {
      id: 2,
      title: "Artwork Recognition",
      description: `
        Using computer vision and MindAR, the app can recognize physical artworks 
        without a QR code. When detected, it automatically loads interactive AR layers 
        tied to that artwork — like contextual stories or metadata in 3D space.
      `,
      qrLink: "/feature2.html",
    },
    {
      id: 3,
      title: "3D Holographic Text",
      description: `
        Adds depth to storytelling — 3D floating holographic text appears anchored 
        to the real-world artwork, using subtle motion and light reflections. 
        It helps create a futuristic “museum of tomorrow” vibe.
      `,
      qrLink: "/feature3.html",
    },
    {
      id: 4,
      title: "Pixel Art Transformation",
      description: `
        Reinterprets the artwork into stylized 2D pixel art. Visitors can switch 
        between the real view and the stylized digital reinterpretation, 
        encouraging creative engagement and digital literacy.
      `,
      qrLink: "/feature4.html",
    },
    {
      id: 5,
      title: "Multimedia Overlays",
      description: `
        Adds contextual media layers — such as audio narrations, archival photos, 
        or short documentary videos — floating around the piece. Perfect for showing 
        restoration timelines or artist interviews.
      `,
      qrLink: "/feature5.html",
    },
    {
      id: 6,
      title: "Interactive Visitor Notes",
      description: `
        Visitors can leave digital sticky notes or emojis directly on AR layers. 
        Notes appear in 3D space and animate slightly when tapped, giving a sense 
        of community and shared interpretation of art.
      `,
      qrLink: "/feature6.html",
    },
    {
      id: 7,
      title: "Accessibility Enhancements & Visual Effects",
      description: `
        Integrates text-to-speech narration, multilingual captions (French, English, Wolof), 
        and visual effects like holographic glow, particles, and high-contrast modes 
        for colorblind visitors.
      `,
      qrLink: "/feature7.html",
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
          Explore the planned Augmented Reality features for the{" "}
          <strong>Musée des Civilisations Noires</strong> digital experience.  
          Each QR code opens a live demo page when deployed on Vercel.
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
              (e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.05)")
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

            {feature.images && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                {feature.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Artwork example ${index + 1}`}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
                href={feature.qrLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#0066cc",
                  color: "white",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                Open Demo
              </a>
              <div
                style={{
                  background: "white",
                  padding: "0.4rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <QRCode value={feature.qrLink} size={80} />
              </div>
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

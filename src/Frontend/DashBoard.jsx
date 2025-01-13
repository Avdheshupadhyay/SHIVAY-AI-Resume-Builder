import React from "react";

const Dashboard = () => {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#001f3f",
          padding: "10px 20px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <button style={navButtonStyle}>Home</button>
          <button style={navButtonStyle}>About us</button>
        </div>
        <button style={navButtonStyle}>Login</button>
      </div>

      {/* Main Section */}
      <div
      
        style={{
          background: "linear-gradient(to bottom, #001f3f, #111111)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      > 
      
      <h1 style={{ fontSize: "3rem", marginTop:"0px" }}>
          BEST FREE AI RESUME BUILDER
        </h1>
        <h1 style={{ fontSize: "3rem", marginTop:"0px" }}>
         
        </h1>
        <h1 style={{ fontSize: "3rem", marginTop:"0px" }}>
       
        </h1>
        
        <button
          style={{
            padding: "15px 30px",
            backgroundColor: "#003f7f",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          Create Your Resume
        </button>
        <div
          style={{
            backgroundColor: "rgba(0, 31, 63, 0.8)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "80%",
            maxWidth: "600px",
            marginTop:"40px"
          }}
        >
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            Our smart AI will automate every step of resume making: write the
            whole resume, edit and optimize your existing one, and make sure
            the formatting is Perfect.
          </p>
        </div>
      </div>
    </div>
    
  );
};

// Button Style
const navButtonStyle = {
  padding: "10px 15px",
  backgroundColor: "#003f7f",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
};

export default Dashboard;
import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landingcomponent = () => {
  const navigate = useNavigate();
  const handleAdminClick = () => {
    navigate("/adminlogin");
  };

  const handleUserClick = () => {
    navigate("/userlogin");
  };

  const aboutUsContent = (
    <h2>
      Service delivery through innovations. <br />
      Provide a wide range of diagnostic solutions. <br/>
      Provide a wide range of diagnostic specialties. <br />
      Use unmatched talent with the best knowledge and skills.
    </h2>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="5000px"
      margin="0 auto"
      padding="20px"
      color="white"
      style={{
        backgroundImage: `url("/images/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(87, 27, 126, 0.5), transparent)",
        }}
      ></div> */}
      <h1
        style={{
          textAlign: "left",
          position: "relative",
          zIndex: 2,
        }}
      >
        Why Choose Us
      </h1>
      <p style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        {aboutUsContent}
      </p>
      <div
        style={{
          background: "#4B0150",
          padding: "10px",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              color: "white",
              margin: 0,
              textAlign: "left",
            }}
          >
            Exploring the Frontiers of Science <br /> Your Gateway to Discovery
          </h1>
        </div>
        <div>
          <Button
            onClick={handleAdminClick}
            variant="outlined"
            color="secondary"
            style={{ color: "wight", marginRight: "10px" }}
          >
            Admin
          </Button>
          <Button
            onClick={handleUserClick}
            variant="outlined"
            color="secondary"
            style={{ color: "wight", marginRight: "40px" }}
          >
            User
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Landingcomponent;

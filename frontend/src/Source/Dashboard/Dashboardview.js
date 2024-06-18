import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    background: {
      default: "#eeeeee",
    },
  },
});

const Dashboard = () => {
  const navigate = useNavigate();

  const HandleNewPatient =()=>{
    navigate("/register-patient")

  };

  const HandleSearchPatient = ()=>
  {
    navigate("/patient-details")
  };

  const HandleStaffDetails=()=>
  {
    navigate("/view-staff-details")
  };









  const [userCookies, setUserCookies] = useState({
    fname: "",
    lname: "",
    registrationno: "",
  });

  useEffect(() => {
    // Retrieve cookies and store them in state
    const cookies = document.cookie.split("; ");
    const cookieData = {};

    cookies.forEach((cookie) => {
      const [name, value] = cookie.split("=");
      cookieData[name] = value;
    });

    setUserCookies(cookieData);
  }, []);

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    document.cookie = "fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "registrationno=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#e1e1e1",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Navbar />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(87, 27, 126, 0.5), transparent)",
          }}
        >
          <div
            style={{
              background: "black",
              padding: "10px",
              position: "fixed",
              top: 65,
              left: 0,
              width: "100%",
              zIndex: 1,
              color: "white",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p>
                You logged In : {userCookies.fname} {userCookies.lname}
              </p>
              <p>Reg NO: {userCookies.registrationno}</p>
            </div>
            <div>
              <Button
                onClick={handleDashboardClick}
                variant="outlined"
                style={{
                  backgroundColor: "#8A2BE2",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                Dashboard
              </Button>
              <Button
                onClick={handleLogout}
                variant="outlined"
                style={{
                  backgroundColor: "#8A2BE2",
                  color: "white",
                  marginRight: "20px",
                }}
              >
                LogOut
              </Button>
            </div>
          </div>

          {/* Add the title and buttons below the black label */}
          <div
            style={{
              top: "250px",
              textAlign: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            <Typography variant="h3" component="div" sx={{ color: "white" }}>
              Dashboard
            </Typography>
            <Button
              onClick={HandleNewPatient}
              variant="outlined"
              style={{
                top: "100px",
                backgroundColor: "#8A2BE2",
                color: "white",
                margin: "10px",
                padding: "15px",
                fontSize: "20px",
              }}
            >
              New Patient
            </Button>
            <Button
              onClick={HandleSearchPatient}
              variant="outlined"
              style={{
                top: "100px",
                backgroundColor: "#8A2BE2",
                color: "white",
                margin: "10px",
                padding: "15px", // Increase padding for button size
                fontSize: "20px", // Increase font size for button text
              }}
            >
              Search Patient
            </Button>
            <Button
              onClick={HandleStaffDetails}
              variant="outlined"
              style={{
                top: "100px",
                backgroundColor: "#8A2BE2",
                color: "white",
                margin: "10px",
                padding: "15px", // Increase padding for button size
                fontSize: "20px", // Increase font size for button text
              }}
            >
              Staff Details
            </Button>
          </div>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="5000px"
            margin="0 auto"
            padding="20px"
            color="white"
            style={{
              backgroundImage: `url("/images/dashboardback.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              minHeight: "100vh",
              position: "relative",
              zIndex: 0,
            }}
          ></Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;

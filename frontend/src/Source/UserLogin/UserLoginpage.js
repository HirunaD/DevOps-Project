import React from "react";
import Navbar from "../Navbar";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
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

const UserLogin = () => {


  const navigate = useNavigate();

    const handleLogin = async () => {
      console.log("handleLogin called");
      const apiUrl = "http://localhost:8080/api/v1/login";
      const fullName = document.getElementById("fullName").value;
      const contactNumber = document.getElementById("contactNumber").value;
  
      const loginData = {

        fullName,
        contactNumber
       
      };
  
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
  
        if (response.ok) {
          const userData = await response.json();
          
  
          navigate("/download-reports");
        } else {
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
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
        <div>
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
              backgroundImage: `url("/images/lab.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <Card
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <CardContent>
                <h2>Login</h2>
                <TextField
                  label="Lab Reference NO"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Passcode (Printed on the bill)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default UserLogin;


// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const handleLogin = async () => {
//     console.log("handleLogin called");
//     const apiUrl = "http://localhost:8080/api/v1/login";
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const loginData = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         document.cookie = `fname=${userData.fname}`;
//         document.cookie = `lname=${userData.lname}`;
//         document.cookie = `registrationno=${userData.registrationno}`;

//         navigate("/dashboard");
//       } else {
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div
//         style={{
//           backgroundColor: "#e1e1e1",
//           minHeight: "100vh",
//           minWidth: "100vw",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           <Navbar />
//         </div>
//         <div>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             maxWidth="5000px"
//             margin="0 auto"
//             padding="20px"
//             color="white"
//             style={{
//               backgroundImage: `url("/images/lab.jpg")`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundAttachment: "fixed",
//               minHeight: "100vh",
//               position: "relative",
//             }}
//           >
//             <Card
//               style={{
//                 backgroundColor: "rgba(255, 255, 255, 0.7)",
//               }}
//             >
//               <CardContent>
//                 <h2>Login</h2>
//                 <TextField
//                   label="Username"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   id="email"
//                 />
//                 <TextField
//                   label="Password"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   type="password"
//                   id="password"
//                 />
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   size="large"
//                   onClick={handleLogin}
//                 >
//                   Log In
//                 </Button>
//               </CardContent>
//             </Card>
//           </Box>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    IconButton,
    Paper,
    InputBase, TableHead, TableRow, TableCell, TableBody, TableContainer, Table, Grid

} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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

function MenuIcon() {
    return null;
}

const Dashboard = () => {
    const navigate = useNavigate();
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
        navigate("/");
    };

    const handleLogout = () => {
        document.cookie = "fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
            "registrationno=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/");
    };

    function createData(No, Name, ReferenceNo, ContactNo , NameOfTest) {
        return { No, Name, ReferenceNo, ContactNo, NameOfTest };
    }

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                minHeight: "100vh",
                minWidth: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: `url("/images/pxfuel.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}>
                <div>
                    <Navbar />
                </div>
                <div style={{position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(rgba(87, 27, 126, 0.5), transparent)",
                }}>
                    <div
                        style={{
                            background: "black",
                            padding: "10px",
                            position: "fixed",
                            top: 65,
                            left: 0,
                            width: "100%",
                            zIndex: 2,
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

                    <div style={{width: "50%", padding:"20px", borderRadius: "20px", overflow: "hidden",  position: "absolute", top: "30%", left: "24%", backgroundColor:"white", opacity: "0.5"}}>
                        <Grid container spacing={2} style={{color : "black", margin: "auto", textAlign: "start"}}>
                            <Grid item xs={4}>
                                <Typography variant="h5" gutterBottom><b> Full Name </b></Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom> Tommy Johns </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" gutterBottom> <b>Address </b></Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom> No 5, Dicmon Road, Colombo 9 </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" gutterBottom> <b>Contact Number</b> </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom> 0732324343 </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" gutterBottom> <b>Date of Birth</b> </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom> 1988/11/30 </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" gutterBottom> <b>Name of Lab Teat</b> </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom> AAAAA Test </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h5" gutterBottom> <b>Symptoms</b> </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom> Bad condition </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Dashboard;

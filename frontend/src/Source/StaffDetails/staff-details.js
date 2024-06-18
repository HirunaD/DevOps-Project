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
    InputBase,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Table,
    Grid,
    ImageList,
    ImageListItem,
    ListSubheader, ImageListItemBar

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

function InfoIcon() {
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

    const itemData = [
        {
            img: '/images/images (1).jpg',
            title: 'Amal',
            author: 'Reg.No',
        },
        {
            img: '/images/images (1).png',
            title: 'Neesha',
            author: 'Reg.No',
        },
        {
            img: '/images/images (2).jpg',
            title: 'Aysha',
            author: 'Reg.No',
        },
        {
            img: '/images/images (2).png',
            title: 'sachini',
            author: 'Reg.No',
        },
        {
            img: '/images/images (3).png',
            title: 'Mark',
            author: 'Reg.No',
        },
        {
            img: '/images/download (1).png',
            title: 'Steave',
            author: 'Reg.No',
        },
    ];

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
                            top: 60,
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

                    <div style={{width: "100%", padding:"20px", borderRadius: "20px", overflow: "hidden",  position: "absolute", top: "20%", left: "10%"}}>

                        <ImageList sx={{ width: 1200, height: 530 }}>
                            <ImageListItem key="Subheader" cols={3}>
                                <ListSubheader component="div" style={{fontSize: "30px", textAlign : "center"}}><b>Our Staff</b></ListSubheader>
                            </ImageListItem>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} style={{padding : "5px 100px"}}>
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        style={{textAlign: "center"}}
                                        title={item.title}
                                        subtitle={item.author}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Dashboard;

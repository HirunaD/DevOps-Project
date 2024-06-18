import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    FormControl,
    FormLabel,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    Select,
    MenuItem,
    Paper
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FileDownloadIcon from "@mui/icons-material/FileDownload";

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

    const [value, setValue] = React.useState(null);
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };


    return (
        <ThemeProvider theme={theme}>
            <div style={{
                backgroundColor: "#e1e1e1",
                minHeight: "200vh",
                minWidth: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
                            zIndex: 3,
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
                    <Paper style={{
                        overflow: 'auto',
                        marginTop: "150px",
                        backgroundImage: `url("/images/pxfuel.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}>

                        <div style={{top: "50px", left:"360px", textAlign: "center", zIndex: 1,borderRadius : "20px",position: "relative",backgroundColor :"#000", width: "100vh",height: "520px"}}>
                            <Typography variant="h3" component="div" sx={{ opacity: "0.6",color: "white",textShadow: "4px 4px black" }}>
                                <b>Staff Registration</b>
                            </Typography>

                            <div style={{top: "100px", backgroundColor: "#f7f1e3"}}>
                                <paper style={{maxHeight: 200, overflow: 'auto'}}>
                                    <FormControl fullWidth sx={{ m: 2 }} style={{width: "80%",color: "black"}}>
                                        <TextField
                                            id="full_name"
                                            label="Full Name"
                                            multiline
                                            maxRows={4}
                                            size="small"
                                        />
                                        <br/>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Address"
                                            multiline
                                            rows={3}
                                            defaultValue=""
                                            size="small"
                                        />
                                        <br/>
                                        <TextField
                                            id="contact"
                                            label="Contact Number"
                                            placeholder="077 33*****"
                                            multiline
                                            size="small"
                                        />
                                        <br/>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} size="small">
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <br/>
                                        <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={gender}
                                                label="Gender"
                                                onChange={handleChange}
                                                size="small"
                                            >
                                                <MenuItem value=""><em>None</em></MenuItem>
                                                <MenuItem value={"Male"}>Male</MenuItem>
                                                <MenuItem value={"Female"}>Female</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br/>
                                        <TextField
                                            id="test_name"
                                            label="NIC"
                                            placeholder=""
                                            multiline
                                            size="small"
                                        />
                                        <br/>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Designation"
                                            multiline
                                            rows={3}
                                            defaultValue=""
                                            size="small"
                                        />
                                        <br/>

                                        <Button component="label" variant="contained" style={{
                                            top: "13px",
                                            backgroundColor: "#8A2BE2",
                                            color: "black",
                                            margin: "10px",
                                            padding: "6px", // Increase padding for button size
                                            fontSize: "14px", // Increase font size for button text
                                        }}>
                                            Register
                                        </Button>
                                    </FormControl>
                                </paper>
                                <br/>

                            </div>
                        </div>
                    </Paper>

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
                            backgroundImage: `url("/images/pxfuel.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                            minHeight: "100vh",
                            position: "relative",
                            zIndex: 4,
                        }}
                    ></Box>

                </div>
            </div>
        </ThemeProvider>
    );
};

export default Dashboard;

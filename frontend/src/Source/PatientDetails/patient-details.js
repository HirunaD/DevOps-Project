import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
    background: {
      default: '#eeeeee',
    },
  },
});

function MenuIcon() {
  return null;
}

const Dashboard = () => {
  const navigate = useNavigate();

  const HandleAdd = () => {
    navigate('/register-patient');
  };

  const HandleUpdatePatient = (patient) => {
    navigate('/Update-patient', { state: { patient } });
  };

  // const handleUpdateClick = () => {
  //   navigate('/register-patient');
  // };

  const [userCookies, setUserCookies] = useState({
    fname: '',
    lname: '',
    registrationno: '',
  });

  useEffect(() => {
    // Retrieve cookies and store them in state
    const cookies = document.cookie.split('; ');
    const cookieData = {};

    cookies.forEach((cookie) => {
      const [name, value] = cookie.split('=');
      cookieData[name] = value;
    });

    setUserCookies(cookieData);
  }, []);

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    document.cookie = 'fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'registrationno=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/');
  };

  function createData(No, Name, ReferenceNo, ContactNo, NameOfTest) {
    return { No, Name, ReferenceNo, ContactNo, NameOfTest };
  }

  const rows = [
    createData(1, 159, 6.0, 24, 'Frozen yoghurt'),
    createData(2, 237, 9.0, 37, 'Ice cream sandwich'),
    createData(3, 262, 16.0, 24, 'Eclair'),
    createData(4, 305, 3.7, 67, 'Cupcake'),
    createData(5, 356, 16.0, 49, 'Gingerbread'),
    createData(5, 356, 16.0, 49, 'Gingerbread'),
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8080/api/v1/patient')
      .then((response) => response.json())
      .then((data) => {
        setData(data.patients.patientsList); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]); // Empty dependency array ensures the effect runs once after the initial render

  const handleDeleteClick = (patientId) => {
    // Make an API request to delete the patient
    fetch(`http://localhost:8080/api/v1/patient/${patientId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.result.acknowledged) {
          alert('Patient Deleted Successfully');
        }
      })
      .catch((error) => {
        console.error('Error deleting patient:', error);
      });
  };

  const handleUpdateClick = (patientId, updatedPatientData) => {
    // Make an API request to update the patient
    fetch(`http://localhost:8080/api/v1/patient/${patientId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPatientData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(`Error updating patient: ${result.error}`);
        } else {
          // Update the frontend data with the updated patient data
          const updatedData = data.map((patient) => {
            if (patient.patientNumber === patientId) {
              // Replace the existing patient with the updated data
              return { ...patient, ...updatedPatientData };
            }
            return patient;
          });
          setData(updatedData);
        }
      })
      .catch((error) => {
        console.error('Error updating patient:', error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundImage: `url("/images/pxfuel.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div>
          <Navbar />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(87, 27, 126, 0.5), transparent)',
          }}
        >
          <div
            style={{
              background: 'black',
              padding: '10px',
              position: 'fixed',
              top: 65,
              left: 0,
              width: '100%',
              zIndex: 2,
              color: 'white',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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
                variant='outlined'
                style={{
                  backgroundColor: '#8A2BE2',
                  color: 'white',
                  marginRight: '10px',
                }}
              >
                Dashboard
              </Button>
              <Button
                onClick={handleLogout}
                variant='outlined'
                style={{
                  backgroundColor: '#8A2BE2',
                  color: 'white',
                  marginRight: '20px',
                }}
              >
                LogOut
              </Button>

              <Button
                onClick={HandleAdd}
                variant='outlined'
                style={{
                  top: '550px',
                  right: '900px',
                  backgroundColor: '#8A2BE2',
                  color: 'white',
                  margin: '10px',
                  padding: '15px',
                  fontSize: '20px',
                }}
              >
                Add Patient
              </Button>

              {/* <Button
                //onClick={HandleSearchPatient}
                variant='outlined'
                onClick={HandleEdit}
                style={{
                  top: '550px',
                  right: '750px',
                  backgroundColor: '#8A2BE2',
                  color: 'white',
                  margin: '10px',
                  padding: '15px', // Increase padding for button size
                  fontSize: '20px', // Increase font size for button text
                }}
              >
                Edit Patient
              </Button>

              <Button
                //onClick={HandleSearchPatient}
                variant='outlined'
                style={{
                  top: '550px',
                  right: '550px',
                  backgroundColor: '#8A2BE2',
                  color: 'white',
                  margin: '10px',
                  padding: '15px', // Increase padding for button size
                  fontSize: '20px', // Increase font size for button text
                }}
              >
                Delete
              </Button> */}
            </div>
          </div>

          <div
            style={{
              width: '90%',
              margin: 'auto',
              marginTop: '200px',
              padding: '20px',
              overflow: 'hidden',
            }}
          >
            <TableContainer component={Paper} style={{ height: '400px' }}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell align='right'>Name</TableCell>
                    <TableCell align='right'>Date</TableCell>
                    <TableCell align='right'>Gender</TableCell>
                    <TableCell align='right'>Contact No</TableCell>
                    <TableCell align='right'>Name of the test</TableCell>
                    <TableCell align='right'>Symptomps</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((patient) => (
                    <TableRow
                      key={patient.patientNumber}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {patient.patientNumber}
                      </TableCell>
                      <TableCell align='right'>{patient.fullName}</TableCell>
                      <TableCell align='right'>{patient.date}</TableCell>
                      <TableCell align='right'>{patient.gender}</TableCell>
                      <TableCell align='right'>
                        {patient.contactNumber}
                      </TableCell>
                      <TableCell align='right'>
                        {' '}
                        {patient.nameOfLabTest}{' '}
                      </TableCell>
                      <TableCell align='right'>{patient.symptoms}</TableCell>
                      <TableCell align='right'>
                        {/* <IconButton
                          aria-label='delete'
                          onClick={() => handleDeleteClick(patient.patientNumber)}
                        >
                          <SearchIcon />
                        </IconButton> */}

                        <td>
                          {' '}
                          <button
                            type='button'
                            class='btn btn-danger'
                            onClick={() => handleDeleteClick(patient._id)}
                          >
                            Delete
                          </button>{' '}
                        </td>

                        <td>
                          {' '}
                          <button
                            type='button'
                            class='btn btn-danger'
                            onClick={() => HandleUpdatePatient(patient)}
                          >
                            Edit
                          </button>{' '}
                        </td>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;

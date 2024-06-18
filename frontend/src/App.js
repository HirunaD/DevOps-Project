import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./Source/Landing/Landingpage";
import UserLogin from "./Source/UserLogin/UserLoginpage";
import AdminLogin from "./Source/AdminLogin/AdminLoginpage";
import Dashboard from "./Source/Dashboard/Dashboardview";
import DownloadReports from "./Source/DownlordReports/downlord-reports";
import PatientRegistration from "./Source/PatientRegistration/patient-registration";
import PatientDetails from "./Source/PatientDetails/patient-details";
import ViewPatientDetails from "./Source/ViewPatientDetails/view-patientDetails";
import StaffDetails from "./Source/StaffDetails/staff-details";
import StaffRegister from "./Source/StaffRegistration/register-staff";
import Updatepatient from "./Source/UpdatePatient/Updatepatient";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/download-reports" element={<DownloadReports />} />
          <Route path="/register-patient" element={<PatientRegistration />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="/view-patient-details" element={<ViewPatientDetails />} />
          <Route path="/view-staff-details" element={<StaffDetails />} />
          <Route path="/register-staff" element={<StaffRegister />} />
          <Route path="/update-patient" element={<Updatepatient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

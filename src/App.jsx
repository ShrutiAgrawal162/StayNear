import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudentDashboard from "./pages/StudentDashboard";
import MyBookings from "./pages/MyBookings";
import SavedProperties from "./pages/SavedProperties";
import Profile from "./pages/Profile";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import properties from "./data/properties";
import OwnerDashboard from "./pages/OwnerDashboard";
import AddProperty from "./pages/AddProperty";
import MyProperties from "./pages/MyProperties";
import BookingRequest from "./pages/BookingRequests";
import OwnerProfile from "./pages/OwnerProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/Login" element={<Login />} />
<Route path="/SignUp" element={<SignUp />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/StudentDashboard" element={<StudentDashboard />} />
<Route path="/MyBookings" element={<MyBookings />} />
<Route path="/Properties" element={<Properties />} />
<Route path="/SavedProperties" element={<SavedProperties />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/property/:id" element={<PropertyDetails />} />
<Route path="/OwnerDashboard" element={<OwnerDashboard />} />
<Route path="/AddProperty" element={<AddProperty />} />
<Route path="/MyProperties" element={<MyProperties />} />
<Route path="/BookingRequest" element={<BookingRequest />} />
<Route path="/OwnerProfile" element={<OwnerProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Register, Landing } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  SharedLayout,
  Stats,
  AllJobs,
  Profile,
  AddJob,
  ProtectedRouter,
} from "./pages/dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <SharedLayout />
              </ProtectedRouter>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-job" element={<AddJob />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;

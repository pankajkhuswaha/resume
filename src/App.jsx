import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";
import Resumebuilder from "./pages/resume-builder";
import Homepage from "./pages/Homepage";
import AddExperience from "./pages/resume-builder/AddExperience";
import AddProjects from "./pages/resume-builder/AddProjects";
import AddBasic from "./pages/resume-builder/AddBasic";
import AddContactInfo from "./pages/resume-builder/AddContactInfo";
import AddSkills from "./pages/resume-builder/AddSkills";
import AddEducation from "./pages/resume-builder/AddEducation";
import AddStrength from "./pages/resume-builder/AddStrength";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/app" element={<Resumebuilder />}>
            <Route path="*" element={<AddBasic />} />
            <Route path="basic-info" element={<AddBasic />} />
            <Route path="contact-details" element={<AddContactInfo />} />
            <Route path="experiences" element={<AddExperience />} />
            <Route path="projects" element={<AddProjects />} />
            <Route path="skills" element={<AddSkills />} />
            <Route path="educations" element={<AddEducation />} />
            <Route path="strengths" element={<AddStrength />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;

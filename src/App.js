import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProfile from "./redux/profile/action";

import AbouteMe from "./components/aboutMe/AbouteMe";
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

const App = () => {
  const profileData = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <>
        <Header />
        <Introduction />
        <AbouteMe profileData={profileData?.profile?.profileData} />
        <Education
          educationDetails={profileData?.profile?.academic}
          page="EDUCATION"
          background="background-grey"
        />
        <Education
          educationDetails={profileData?.profile?.experience}
          page="EXPERIENCE"
          background="background-dark"
        />
        <Skills skills={profileData?.profile?.skills} />
        <Work projects={profileData?.profile?.projects} />
        <Contact />
      </>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};
export default App;

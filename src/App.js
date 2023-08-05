import React from "react";
// import Profile from "./components/Profile";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProfile from "./redux/profile/action";
// import Navbar from "./components/navbar";

import AbouteMe from "./components/aboutMe/AbouteMe";
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

const App = () => {
  const profileData = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  // console.log(profileData);
  useEffect(() => {
    const home = document.getElementById("home");
    const temp = document.getElementsByClassName("intro");
    console.log(temp.offsetHeight, "hhhhhhhh");

    // home.onscroll = (e) => {
    //   console.log(e, "l");
    //   if (home.scrollTop > temp.offsetHeight) {
    //     console.log("PpPP");
    //   }
    // };
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <>
        <Header />
        <Introduction />
        <AbouteMe profileDtata={profileData} />
        <Education />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};
export default App;

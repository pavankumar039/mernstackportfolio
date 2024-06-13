import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./assets/context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <ToastContainer/>
      <MobileNav/>
      <Layout /> 
      <div className="container">
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <Contact/>
      </div>
      <Tada>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center mb-3 ms-3">
          Made With 😎 PAVAN KUMAR &copy; 2024 

        </h4>
      </div>
      </Tada>
      </div>
      <ScrollToTop smooth 
      color="#f29f67"
      style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}}/>
    </>
  );
}

export default App;

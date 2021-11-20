import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Features from "./Components/Features/Features";
import Extensions from "./Components/Extension/Extensions";
import './App.css';
import Questions from "./Components/Questions/Questions";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Features />
      <Extensions />
      <Questions />
      <Footer/>
    </div>
  );
}

export default App;

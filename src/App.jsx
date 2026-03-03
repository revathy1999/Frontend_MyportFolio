import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { useState, useEffect } from "react";
function App() {
  const [portfolio, setportfolio] = useState(null);
  useEffect(() => {
    fetch("https://backend-myportfolio-5qd1.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setportfolio(data[0])) //data[0] means, we stored like name:Revathi
      .catch((err) => console.error(err));
  }, []);
  if (!portfolio) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    <>
      <Header data={portfolio} />
      <About data={portfolio} />
      <Skills data={portfolio} />
      <Projects data={portfolio} />
      <ContactMe data={portfolio} />
    </>
  );
}

export default App;

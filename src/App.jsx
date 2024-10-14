import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <>
      <Hero />
      <div>
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;

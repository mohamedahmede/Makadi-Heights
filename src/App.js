import "./App.scss";
import FormSection from "./Components/Sections/FormSection";
import HomeSection from "./Components/Sections/HomeSection";
import LifestyleSection from "./Components/Sections/LifestyleSection";

function App() {
  //Animation variables
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, x: 100 },
    visible: {
      y: 0,
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <HomeSection container={container} item={item} />
      <LifestyleSection container={container} item={item} />
      <FormSection container={container} item={item} />
    </>
  );
}

export default App;

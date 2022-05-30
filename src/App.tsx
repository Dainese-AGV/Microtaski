import "./App.css";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";

function App() {
  return (
    <>
      <Header title={"NEW Body"} />
      <Body title={123}/>
      <Footer title={"string"} />
    </>
  );
}

export default App;

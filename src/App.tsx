import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating } from "./components/rating/Rating";
import { Body } from "./site/Body";
import { Footer } from "./site/Footer";
import { Header } from "./site/Header";

function App() {
  return (
    <>
    <OnOff on={false}/>
    <OnOff on={false}/>
    <OnOff on={true}/> 
      {/* <Header title={"NEW Body"} />
      <Body title={123} />
      <Footer title={"string"} />
      <Accordion next={"are you next"} />
      <Rating value ={3}/><br/>
      <Rating value ={1}/><br/>
      <Rating value ={2}/><br/>
      <Rating value ={0}/><br/>
      <PageTitle title = {"nixya"}/> */}
    </>
  );
}


const PageTitle = (props:any) => {
  return(
    <h1>it-inkubator {props.title}</h1>
  )
}

export default App;

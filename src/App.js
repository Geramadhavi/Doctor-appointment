import "./App.css";

import Body from "./components/Body/index";
import SplitPane from "react-split-pane";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";


function App() {
  return (
    <SplitPane split="horizontal" minSize={60} maxSize={200} defaultSize={70}>
      <Header/>
      <SplitPane split="vertical" minSize={720} maxSize={1200}  style={{height:"100%"}} >
        <div className="background-container">
          <Body />
          <Footer/>
        </div>
        <div className="second-screen-container">
          <Appointment/>
        </div>
      </SplitPane>
    </SplitPane>
  );
}
export default App;

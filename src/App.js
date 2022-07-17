import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./container/Header";
import Pages from "./container/Pages";

function App() {
  return (
    <div className=" h-full w-full bg-blue-100">
      <BrowserRouter>
        <Header />
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;

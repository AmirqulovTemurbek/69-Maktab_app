import {BrowserRouter, Route, Switch} from "react-router-dom";
import Yangiliklar from "./Pages/Yangiliklar";
import Haqida from "./Pages/Haqida";
import Kurs from "./Pages/Kurs";
import Tadbirlar from "./Pages/Tadbirlar";
import NavBar from "./Comonents/NavBar";
import NotFoud from "./Pages/NotFoud";
import Footer from "./Comonents/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Yangiliklar}/>
                <Route path="/haqida" exact component={Haqida}/>
                <Route path="/kurslar" exact component={Kurs}/>
                <Route path="/tadbirlar" exact component={Tadbirlar}/>
                <Route component={NotFoud}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

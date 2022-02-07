import React from "react";
import AllPets from "./Pages/AllPets";
import AddPet from "./Pages/AddPet";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/pets" component={AllPets} exact />
          <Route path="/add-pet" component={AddPet} exact />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Furniture from '../components/categories/Furniture'
import HomeDecor from '../components/categories/HomeDecor'
import WallDecor from '../components/categories/WallDecor'
const Navigator = () => {
    return (
        <div>
        <Router>
        <Switch>
          <Route path="/furniture" exact component={() => <Furniture />} />{" "}
          <Route path="/homedecor" exact component={() => <HomeDecor />} />{" "}
          <Route path="/walldecor" exact component={() => <WallDecor />} />{" "}
          {/* <Route path="/register" exact component={() => <Register />} />{" "} */}
        </Switch>
      </Router>{" "}
        </div>
    )
}

export default Navigator

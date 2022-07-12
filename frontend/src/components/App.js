import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { Homepage } from "./Homepage";
import { SignIn } from "./SignIn";
import { Profile } from "./Profile";


const App = () => {
  let parsed = JSON.parse(sessionStorage.getItem("User"))
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/signin">
            {parsed? <Redirect to="/"/> : <SignIn />}
            </Route>
          <Route path="/:id"><Profile /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

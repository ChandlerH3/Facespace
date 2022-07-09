import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { Homepage } from "./Homepage";
import { SignIn } from "./SignIn";
import { Profile } from "./Profile";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/signin"><SignIn /></Route>
          <Route path="/:id"><Profile /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header.component";
import Nav from "./components/layout/Nav.component";
import Container from "./components/ui/Container.component";
import Homepage from "./pages/Homepage.component";
import NotFound from "./pages/NotFound.component";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;

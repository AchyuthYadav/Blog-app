import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LogIn from "./LogIn"
import SignUp from "./SignUp"
import NoMatch from "./NoMatch"
import Header from "./Header";
import Home from "./Home";
import Post from "./Post";
import Posts from "./Posts";


function App(props){
    return(
        <div>
            <Header/>
               <Switch>

                    <Route path='/' exact>
                        <Home/>
                    </Route>

                    <Route path="/LogIn">
                        <LogIn/>
                    </Route>

                    <Route path="/SignUp">
                        <SignUp/>
                    </Route>

                    <Route path="*">
                        <NoMatch/>
                    </Route>

                </Switch>
        </div>
    )
}

export default App;
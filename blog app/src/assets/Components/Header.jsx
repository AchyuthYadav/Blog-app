import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import Style from "../Style/app.css"
import LogIn from './LogIn';


function Header(){
    return(  
        <header className="container ">
            <div className="flex justify-between pt-11 ">
                <NavLink  to="/ "> 
                   <h2 className='text-4xl font-bold text-green-600'>Conduit</h2>
                </NavLink>
                <nav>
                    <ul className="flex item-center">
                        <li className="text-2xl  font-thin pr-3 hover:text-secondary-200">
                            <NavLink activeClassName ="active" to="/" exact>
                                 Home 
                            </NavLink>
                        </li>

                        <li className="text-2xl pr-3">
                            <NavLink activeClassName ="active" to="/LogIn">
                                LogIn
                            </NavLink>
                        </li>

                        <li className="text-2xl pr-3"> 
                            <NavLink activeClassName ="active" to="/SignUp">          
                                Sign Up
                            </NavLink>
                        </li> 
                    </ul>
                </nav>
             </div>
        </header>          
    )
}

export default Header;
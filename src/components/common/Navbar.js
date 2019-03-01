import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../../assets/css/nav.css'

class Navbar extends React.Component{
    render (){
        return (
            <nav>
            <div class="nav-wrapper" id="nav">
              <a href="#" class="brand-logo">Mchoro</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/#/about">About</a></li>
                <li><a href="/#/register">Signup</a></li>
              </ul>
            </div>
          </nav>   

        )
    }
}

export default Navbar;
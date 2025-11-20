import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Themecontext } from "../Context/Themecontext";
import light from '../icons/light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import dark from '../icons/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

function Nav(){
      const {theme:theme1,setTheme}=useContext(Themecontext);
      console.log(theme1);

      let myStyle ={};

      if(theme1 === 'light'){
        myStyle ={
          background:' #ffdef0'
        }
      }

      else if(theme1 === 'dark'){
        myStyle ={
          background:'#ff76ad'
        }
      }
  


    return(
        <>
        <header>
          <nav className="navbar navbar-expand-sm  " style={myStyle}>
            
             <div className="container-fluid">
             <ul className="navbar-nav">
            <li className="nav-item">
             {/* <a class="nav-link active" href="/home">Home</a> */}
             <NavLink  className="n" to={"/home"}>Home</NavLink>
        </li>
         <li className="nav-item">
         {/* <a class="nav-link" href="/contact">Contact</a> */}
         <NavLink  className="n"to={"/contact"}>Contact</NavLink>

         </li>
      <li className="nav-item">
        {/* <a class="nav-link" href="/about">About</a> */}
        <NavLink className="n" to={"/about"}>about</NavLink>
      </li>
      <li className="nav-item">
        {/* <a class="nav-link" href="/register">Register</a> */}
        <NavLink className="n" to={"/register"}>Register</NavLink>
      </li>
      <li className="nav-item">
        {/* <a class="nav-link" href="/login">Login</a> */}
        <NavLink className="n"  to={"/login"}>Login</NavLink>
      </li>
      <li className="nav-item">
        {/* <a class="nav-link" href="/product">Product</a> */}
        <NavLink  to={"/product"}>Product</NavLink>
      </li>
      {

        theme1 === 'light'
        ?(
          <img src ={dark}
          onClick={()=>setTheme('dark')}
          />
        )
        :(
          <img src ={light}
          onClick={()=>setTheme('light')}
          />
        )
      }
      
    </ul>
  </div>
</nav>

        </header>
        <main>
          <Outlet/>
        </main>
        </>
    )
}
export default Nav;
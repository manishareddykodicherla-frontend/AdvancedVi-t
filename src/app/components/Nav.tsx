"use client"

import { useDispatch } from "react-redux"
import { openAuth } from "../redux/authSlice";
 
export default function Nav() {

  const dispatch= useDispatch();
  return (
    <div>
      
        <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <img className="nav__img" src="/assets/logo.png" alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={()=>dispatch(openAuth())}>Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

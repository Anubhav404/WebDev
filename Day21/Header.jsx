import React from "react"
import logo from "./Images/logo.jpg"
import "./Style.css"
const Header = () => {
    return (
        <>
        <div className="header">
            <img src={logo}  height="20px" width="40px" className="logo" alt="logo" />
            <h2>Keeps</h2>
        </div>
        </>
    )
}
export default Header
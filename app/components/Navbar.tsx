// @ts-ignore
import {Link} from "react-router";
import React from "react";

const Navbar: () => React.JSX.Element = () =>{
    return(<nav className="navbar" >
        <Link className="text-2xl font-bold text-gradient" to="/">
            RESUMIND
        </Link>
        <Link  to="/upload" className="primary-button w-fit">
            Upload
        </Link>


    </nav>)

}

export default Navbar
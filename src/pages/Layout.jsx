import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div style={{fontSize: "40px", color: "blue"}}>
            <Outlet />
        </div>

    );
}

export default Layout;
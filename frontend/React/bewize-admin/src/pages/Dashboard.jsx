import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return(
        <>
        <div className="main">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="flex flex-row">
                <Sidebar className="basis-1/6" /> 
            </div>

        </div>
   

       
        </>
    )
}
import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "../src/Components/Home";
import Contacts from "../src/Components/Contact";
import Forms from "../src/Components/Forms";


const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/form" element={<Forms />}></Route>
        </Routes>
        
        </>
    )
}

export default AllRoutes;
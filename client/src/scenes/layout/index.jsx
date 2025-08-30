import React from 'react'
import {useState} from "react"
import{ Box, useMediaQuery } from "@mui/material"
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar'

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const  [isSidebarOpen, setIsSidebarOpen] =useState(true)
  return (
   <Box  display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
       isNonMobile={isNonMobile}
        drawerwidth="250px"
        iSidebarOpen={setIsSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen} 
        />
   <Box>
    <Navbar
    iSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
    
    />
    <Outlet/>
   </Box>
   </Box>
  )
}

export default Layout

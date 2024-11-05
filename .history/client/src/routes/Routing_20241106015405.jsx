import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Header, Sidebar } from '../components/Components'
import { Home } from '../pages/Pages'

export default function Routing() {
  return (
    <Router>
        <Header/>
        <Sidebar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
  )
}

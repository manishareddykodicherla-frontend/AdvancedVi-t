import React from 'react'
import Settings from './Settings'
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar'
import Styles from "../globals.css"
export default function page() {
  return (
    <div>
      <header className="header">
        <Searchbar/>
      </header>
      <Sidebar/>
      <Settings/></div>
  )
}

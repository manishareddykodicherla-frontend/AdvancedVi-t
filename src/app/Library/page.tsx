"use client"
import Library from './Library'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
import Styles from "../globals.css"
import Searchbar from '../components/Searchbar'
export default function page() {
  const savedBooks=useSelector(
    (state:any)=>state.library.savedBooks
  )
  console.log(savedBooks)
  return (
    <div>
      <header className="header">
        <Searchbar/>
      </header>
        <Sidebar/>
    <Library/>
       </div>
  )
}

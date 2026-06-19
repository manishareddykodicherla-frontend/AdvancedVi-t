"use client"

import Library from './Library'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
export default function page() {
  const savedBooks=useSelector(
    (state:any)=>state.library.savedBooks
  )
  console.log(savedBooks)
  return (
    <div>
        <Sidebar/>
    <Library/>
       </div>
  )
}

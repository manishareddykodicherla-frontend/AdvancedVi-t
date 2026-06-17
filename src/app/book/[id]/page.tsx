import React from 'react'
import BookDetails from './BookDetails'
import Sidebar from '../../components/Sidebar'
import Styles from "../../globals.css"
export default async function  page({params,}:{params:Promise<{id:string}>}) {
  const {id } = await params
  return (
    <div className="layout">
    <Sidebar/>
    <main className="content">
    <BookDetails  id={id}/>
    </main>
    </div>
  )
}

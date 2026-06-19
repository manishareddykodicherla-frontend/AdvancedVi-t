 "use client"
 import {useSelector} from "react-redux";
 import Styles from "./Player.module.css";
 export  default function Player({id}:{id:string}){
    const books = useSelector((state:any)=>state.books.allBooks ||[]);
    const book =books.find((item:any)=>item.id?.toString()=== id);
    console.log("player ID:", id)
    console.log("Books:",books)
    if (!book){
        return <div>Loading Player.......</div>
    }
    return (
        <main className={Styles.player}>
            <h1> {book.title}</h1>
            <p>{book.summary}</p>
            <audio controls autoPlay className={Styles.audio}>
                <source src={book.audioLink} type="audio/mpeg"/>
            </audio>

        </main>
    )
 }
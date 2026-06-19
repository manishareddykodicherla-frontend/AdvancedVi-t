"use client"
import { useSelector,useDispatch } from "react-redux";
import { Rootstate } from "../redux/store";
import { openAuth } from "../redux/authSlice";
import Styles from "./Library.module.css"
export default function Library() {
    const dispatch=useDispatch();
    const isLoggedIn = useSelector((state:Rootstate)=>state.auth.isLoggedIn);
    const savedBooks=useSelector((state:any)=>state.library.savedBooks);
    console.log("saved books in Library:",savedBooks)
    if(!isLoggedIn){
        return(
    <div>
        <main className={Styles.content}>
            <div>
                <figure className="landing__image--mask">
              <img src="/assets/landing.png" alt="landing" className={Styles.imagewrap}/>
            </figure>
                <h2 className={Styles.text}>
                    login in to your account to see your Library
                </h2>
                <button className={Styles.button} onClick={()=>dispatch(openAuth())}>Login</button>
            </div>

        </main>
    </div>
        )
    }
    else {
  return (
    <div className={Styles.savedBooksSection}>
        <main>
            <h2 className={Styles.savedTitle}>SavedBook</h2>
            
            <p className={Styles.savedCount}>{savedBooks.length} items</p>
            <div className={Styles.savedGrid}>
            {savedBooks.length===0?(
                <div className={Styles.emptyState}>
                <h3 className={Styles.emptyTitle}>
                    Save your favourite books!</h3>
                <p className={Styles.emptyText}> When u save a book, it will appear here.</p>

            </div>
            ):(
                
                savedBooks.map((book:any)=>(
                    <div key={book.id}>
                        <img src={book.imageLink} alt={book.title} width={80}/>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                    </div>
                  
                )
                )
            )}
            
            <h2>Finished</h2>
            <p> 13 items</p>
            
              </div>
        </main>

    </div>
  )
}
}
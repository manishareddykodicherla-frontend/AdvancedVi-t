import Sidebar from "../components/Sidebar";
import BookCard from "../components/BookCard";
import RecommendedBooks from "../components/RecommendedBooks";
import SuggestedBooks from "../components/SuggestedBooks"
import Link from "next/link";
import SelectedBooks from "../components/SelectedBooks";
import StoreBooks from "../components/StoreBooks"
import Styles from "../globals.css"
import Searchbar from "../components/Searchbar";

async function apiSelectedBooks(){
    const response= await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
    const data=await response.json();
    console.log(data)
    console.log("SelectedBook:", data[0])
    return data[0];
    
}
async function apiRecommendedBooks(){
    const response= await fetch ("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
    const recommedbook=await response.json();
  
    console.log("Full response:" ,recommedbook)
    return recommedbook
}
async function apiSuggestedBooks(){
    const response= await fetch ("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
    const suggestedBooks=await response.json();
    
    console.log("Full response:",suggestedBooks)
    return suggestedBooks
}
export default async function page() {
const data = await apiSelectedBooks();
const recommedbook= await apiRecommendedBooks();
const suggestedbook= await apiSuggestedBooks();
const allBooks=[ data,...recommedbook,... suggestedbook]
  return (
    <div>
        <header className="header">
        <Searchbar/>
        </header>
        <div className="side-container">
            <div className="layout">
        <Sidebar/>

        <main className= "content">
            <StoreBooks allBooks={allBooks}/>
        <Link href={`/book/${data.id}`}>
        <div>
        <SelectedBooks data={data}/>
        </div>
        </Link>
        <BookCard/>
        <RecommendedBooks recommedbook={recommedbook}/>
        <SuggestedBooks  suggestedbook={suggestedbook}/>
        </main>
        </div>
                </div>
    </div>
  )
}

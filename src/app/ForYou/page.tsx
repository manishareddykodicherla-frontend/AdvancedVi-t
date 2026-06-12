import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import BookCard from "../components/BookCard";
import RecommendedBooks from "../components/RecommendedBooks";
import Link from "next/link";
import SelectedBooks from "../components/SelectedBooks";
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
    console.log(recommedbook.data)
    console.log("Full response:" ,recommedbook)
    return recommedbook
}
export default async function page() {
const data = await apiSelectedBooks();
const recommedbook= await apiRecommendedBooks();
  return (
    <div>
        <div className="side-container">
        <Sidebar/>
        <main>
            
        <Searchbar/>
        <Link href="/book/1">
        <div>
        <SelectedBooks data={data}/>
        </div>
        </Link>
        <BookCard/>
        <RecommendedBooks recommedbook={recommedbook}/>
        </main>
        </div>
    </div>
  )
}

"use client"
import Styles from "./SuggestedBooks.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CiTimer } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import Link from "next/link";


export default function SuggestedBooks({ suggestedbook}:any) {
  const settings={
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:5,
    slidesToScroll:1,
  }
  return (
    <div>
      <div> 
        <h2 className={Styles.heading}> Suggested For You </h2>
        <h4 className={Styles.think}>
          we think you'll like this
        </h4>
      </div>
      <div className={Styles.sliderContainer}>
    <Slider {...settings}>
      {suggestedbook?.map((book:any)=>(
        <div className={Styles.slideItem} key={book.id}>
            {book.subscriptionRequired &&(<span className={Styles.premium}>Premium</span>)}
          <Link href={`/book/${book.id}`}>
      <div className={Styles.bookmap} >
        
      <div className="bookimage">
        <figure>
          <img src={book.imageLink} alt="recommededbook" className={Styles.imagebook}/>
        </figure>
      </div>
      <div className="bookdescription">
        <div className={Styles.booktitle}>{book.title}</div>
        <div className={Styles.bookauthor}>{book.author}</div>
        <div className={Styles.booksubtitle}>{book.subTitle}</div>
        <div className={Styles.rating}><CiTimer />03:24 <span><CiStar />{book.averageRating}</span></div>
      </div>
     
      </div>
      </Link>
      </div>
      ))}
       </Slider>
      </div>

  </div>
      
  )
}

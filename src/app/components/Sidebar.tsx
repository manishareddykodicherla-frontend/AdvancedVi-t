"use client"
import { openAuth } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import Link from "next/link";
import  {
    FiHome,
    FiBookmark,
    FiEdit3,
    FiSearch,
    FiSettings,
    FiHelpCircle,
    FiLogIn,
} from 'react-icons/fi'
import styles from "./Sidebar.module.css";
export default function Sidebar() {
  const dispatch= useDispatch();
  return (
    <aside className={styles.sidebar} >
        <div className={styles.logo}>
           <img src="/assets/logo.png" alt="logo"/>
        </div>
      <nav className={`${styles.nav} ${styles.active}`}>
        <Link href="/ForYou">
       <div className={styles.navItem}>
          <FiHome /> <span>Home</span>
          </div>
          </Link>
          <Link href="/Library">
           <div className={styles.navItem}><FiBookmark />
           <span>Library</span>
           </div>
           </Link>
           <div className={styles.navItem}><FiEdit3 />
           <span>Edit</span>
           </div>
           <div className={styles.navItem}>
            <FiSearch /> <span>Search</span>
            </div>
           <div className={styles.navItem}>
            <FiSettings />
            <span>Settings</span>
           </div>
           <div className={styles.navItem}><FiHelpCircle /> <span>Help</span></div>
           <div className={styles.navItem} onClick={()=>{dispatch(openAuth())}}><FiLogIn /> <span>Login</span></div>
        
      </nav>
    
    </aside>
   
  )
}

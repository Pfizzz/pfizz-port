import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation() {
 return (
 <header className={classes.header}>
     <div className={classes.logo}>Michael Pfister</div>
     <nav>
         <ul>
         <li>
                 <Link to='/'>About Me</Link>
             </li>
             <li>
                 <Link to='/portfolio'>Portfolio</Link>
             </li>
             <li>
                 <Link to='/contact'>Contact</Link>
             </li>
             <li>
                 <Link to='/resume'>Resume</Link>
             </li>
         </ul>
     </nav>

 </header>
 )}

export default MainNavigation;
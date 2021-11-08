import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
 return (
 <header className={classes.header}>
             
            

             <p className={classes.logo}>Michael Pfister
  
  </p>
     <nav>

         
         <ul>

         <li>
             
                 <NavLink   activeClassName={classes.isActive} to='/about'>About Me</NavLink>
             </li>
             <li>
                 <NavLink   activeClassName={classes.isActive} to='/portfolio'>Portfolio</NavLink>
             </li>
             <li>
                 <NavLink   activeClassName={classes.isActive} to='/contact'>Contact</NavLink>
             </li>
             <li>
                 <NavLink   activeClassName={classes.isActive} to='/resume'>Resume</NavLink>
             </li>

         </ul>
     </nav>

 </header>
 )}

export default MainNavigation;
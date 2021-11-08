import resume from '../images/resume.png'
import classes from '../components/layout/MainNavigation.module.css';

function ResumePage() {
    return <div>
        <img src={resume} className={classes.logo1} alt="resume"/>
    </div>
}

export default ResumePage;
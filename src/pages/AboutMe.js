import logo from '../images/logo1.png';
import classes from'../components/layout/MainNavigation.module.css';

function AboutMe() {
    return (
        <div>
            <img className={classes.logo1} src={logo}/>
            <h1>About me</h1>
            <div>
            <p>Hello there!</p>

            <p>My name is Michael Pfister, and I am a student in the Rutger's University Coding Bootcamp specializing in JavaScript-focused fullstack web development.</p>
            <p> In addition to my anticipated certificate of completion for my bootcamp, I have earned a Master's of Fine Arts in Creative Writing from Rosemont College, and two Bachelor's from Rowan University in Writing Arts and Radio/Television/Film. My goal is to utilize my diverse background with a career in web design and full-stack development. My unique creative skillset makes me a valuable addition to any team.</p>
            </div>
        </div>
    )
}

export default AboutMe;
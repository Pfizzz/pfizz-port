import classes from './Footer.module.css';


function Footer () {
    return (
        <div>
            <p className={classes.footer}>&copy; 2021 by <span><a href="https://github.com/Pfizzz"target="_blank"rel="noreferrer">Pfizz.</a></span> Visit my <span><a href="https://www.linkedin.com/in/michael-pfister-83001857/"target="_blank"rel="noreferrer">LinkedIn.</a></span></p></div>
    )
}

export default Footer;
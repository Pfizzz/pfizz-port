import classes from './Footer.module.css';


function Footer () {
    return (
        <div>
            <p className={classes.footer}>&copy; 2021 by <span><a href="https://github.com/Pfizzz">Pfizz</a></span></p></div>
    )
}

export default Footer;
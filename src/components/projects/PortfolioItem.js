import classes from './PortfolioItem.module.css'
import Card from '../ui/Card';

function PortfolioItem(props) {
    return (
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.favorites}</p>
            <description>{props.description}</description>
        </div>
        <div className={classes.actions}>
            <button>Visit</button>
        </div>
        </Card>
    </li> )
}

export default PortfolioItem;
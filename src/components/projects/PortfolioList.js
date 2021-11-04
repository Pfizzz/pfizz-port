import classes from "./PortfolioList.module.css";
import PortfolioItem from "./PortfolioItem";

function PortfolioList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <PortfolioItem 
        key={item.id} 
        id={item.id} 
        image={item.image}
        title={item.title}
        address={item.address}
        description={item.description}
        link={item.link}
        />
      ))}
    </ul>
  );
}

export default PortfolioList;

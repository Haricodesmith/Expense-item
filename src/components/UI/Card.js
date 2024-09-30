import './Card.css';

function Card(props) {
  // Add a space between 'card' and props.className
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default Card;

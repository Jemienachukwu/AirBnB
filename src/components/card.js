export default function Card(props) {
  let badge;
  if (props.openSpots === 0) {
    badge = "SOLDOUT";
  } else if (props.location === "Online") {
    badge = "online";
  }
  return (
    <div className="cards">
      {badge && <div className="sold">{badge}</div>}
      
      <img src={props.coverImg} alt="img" className="cardsimg" />
      <div className="cardtext">
        <img src="/images/star.svg" alt="img" className="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

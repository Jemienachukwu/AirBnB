import "./index.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Card from "./components/card";
import data from "./data";

export default function App() {
  const plusSlide = () => {
    var scroll = document.getElementById("cardSection");
    scroll.scrollLeft = scroll.scrollLeft - 1000;
  };
  const subSlides = () => {
    var scroll = document.getElementById("cardSection");
    scroll.scrollLeft = scroll.scrollLeft + 1000;
  };

  const card = data.map((item) => {
    return (
      <div>
        <Card className="cards" key={item.id} {...item} />
      </div>
    );
  });

  return (
    <div className="container">
      <Nav />
      <Main />
      <div id="flexed">
        <button className="prev" onClick={plusSlide}>
          &#10094;
        </button>
        <section id="cardSection">{card}</section>
        <button className="next" onClick={subSlides}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

//(1 method  card props.item) item={item}

//(2 method but long) img={item.coverImg}
// rating={item.stats.rating}
// reviewCount={item.stats.reviewCount}
// location={item.location}
// title={item.title}
// price={item.price}
// openSpots={item.openSpots}

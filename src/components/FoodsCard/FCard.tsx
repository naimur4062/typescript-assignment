import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FoodsCard.css";

interface IFoods {
  name: string;
  img: string;
  link: string;
}

const FCard = ({ name, img, link }: IFoods) => {
  return (
    <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
      <Card id="card" style={{ width: "18rem", marginBottom: "2rem" }}>
        <Card.Img style={{ height: "15rem" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Link to={link}>View More</Link>
      </Card>
    </div>
  );
};

export default FCard;

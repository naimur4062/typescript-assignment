import { Carousel } from "react-bootstrap";
import vegetable from "../../images/vagitableFoods.jpg";
import meat from "../../images/meatFoods.jpg";
import sea from "../../images/seaFoods.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={vegetable}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Green vegetables</h3>
            <p>
              We are very careful about our food service. We serve hight quality
              fresh vegetables.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={meat}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Fresh Meat</h3>
            <p>
              We are very careful about our food service. We serve hight quality
              fresh meats.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={sea}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Fresh Sea Foods</h3>
            <p>
              We are very careful about our food service. We serve hight quality
              fresh sea foods.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;

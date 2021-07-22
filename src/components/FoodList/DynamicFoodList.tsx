import { Button, Card, Spinner } from "react-bootstrap";

interface IFoods {
  id: number;
  name: string;
  price: string;
  img: string;
}

const DynamicFoodList = ({ name, price, img }: IFoods) => {
  return (
    <>
      {img ? (
        <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
          <Card id="card" style={{ width: "18rem", marginBottom: "2rem" }}>
            <Card.Img style={{ height: "15rem" }} variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className="d-flex justify-content-evenly">
                <h1>${price}</h1>
                <Button style={{ height: "40px", marginTop: "5px" }}>
                  Order Now
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="text-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      )}
    </>
  );
};

export default DynamicFoodList;

import { Col, Card, Button } from "react-bootstrap";
import useBeverages from "../hook/useBeverages";

const Beverage = ({ beverage }) => {
  const { handleModalClick, handleBeverageId } = useBeverages();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          key={handleBeverageId}
          src={beverage.strDrinkThumb}
          alt={`Imagen de ${beverage.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{beverage.strDrink}</Card.Title>

          <Button
            variant={"warning"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick();
              handleBeverageId(beverage.idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Beverage;

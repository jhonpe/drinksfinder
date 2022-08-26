import { Modal, Image } from "react-bootstrap";
import useBeverages from "../hook/useBeverages";

const ModalBeverage = () => {
  const { modal, handleModalClick, recipe, charging } = useBeverages();

  const showIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={recipe[`strIngredient${i}`]}>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    !charging && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          src={recipe.strDrinkThumb}
          alt={`Imagen receta ${recipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {recipe.strInstructions}
            <h2>Ingredientes y Cantidades</h2>
            {showIngredients()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalBeverage;

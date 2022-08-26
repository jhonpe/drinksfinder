import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BeveragesContext = createContext();

const BeveragesProvider = ({ children }) => {
  const [beverages, setBeverages] = useState([]);
  const [modal, setModal] = useState(false);
  const [beverageId, setBeverageId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipe = async () => {
      if (!beverageId) return;

      try {
        setIsLoading(true);
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${beverageId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRecipe();
  }, [beverageId]);

  const queryBeverage = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`;

      const { data } = await axios(url);
      setBeverages(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = (e) => {
    setModal(!modal);
  };

  const handleBeverageId = (id) => {
    setBeverageId(id);
  };

  return (
    <BeveragesContext.Provider
      value={{
        queryBeverage,
        beverages,
        handleModalClick,
        modal,
        handleBeverageId,
        recipe,
        isLoading,
      }}
    >
      {children}
    </BeveragesContext.Provider>
  );
};

export { BeveragesProvider };

export default BeveragesContext;

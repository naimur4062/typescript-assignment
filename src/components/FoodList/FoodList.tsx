import vegetables from "../../Fakedata/vegetable.json";
import meats from "../../Fakedata/meat.json";
import sea from "../../Fakedata/sea.json";
import soups from "../../Fakedata/soup.json";
import fasts from "../../Fakedata/fast.json";
import chickens from "../../Fakedata/chicken.json";
import DynamicFoodList from "./DynamicFoodList";

interface IFoods {
  id: number;
  name: string;
  price: string;
  img: string;
}

const FoodList = () => {
  const path: string = window.location.pathname;
  const foodCategory: string = path.replace(/\//g, " ").toUpperCase();

  return (
    <div className="container">
      <div className="row">
        <h1 style={{ color: "aqua" }} className="text-center my-4">
          {foodCategory} FOODS
        </h1>
        {path === "/vegetables" &&
          vegetables.map((food: IFoods) => (
            <DynamicFoodList
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
            />
          ))}
        {path === "/meats" &&
          meats.map((food: IFoods) => (
            <DynamicFoodList
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
            />
          ))}
        {path === "/sea" &&
          sea.map((food: IFoods) => (
            <DynamicFoodList
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
            />
          ))}
        {path === "/soups" &&
          soups.map((food: IFoods) => (
            <DynamicFoodList
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
            />
          ))}
        {path === "/fasts" &&
          fasts.map((food: IFoods) => (
            <DynamicFoodList
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
            />
          ))}
        {path === "/chickens" &&
          chickens.map((food: IFoods) => (
            <DynamicFoodList
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodList;

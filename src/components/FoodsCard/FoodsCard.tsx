import FCard from "./FCard";

interface IFoods {
  name: string;
  img: string;
  link: string;
}

const foodsDetail: IFoods[] = [
  {
    name: "Vegetable Foods",
    img: "https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg",
    link: "vegetables",
  },
  {
    name: "Meat Foods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjj3RXsYD9R8bGXdSs01QCwCbD3upkzwOPFWsW6ktrcdxZC9DGYFbRxoy6MAwcJSE4do&usqp=CAU",
    link: "meats",
  },
  {
    name: "Sea Foods",
    img: "https://static8.depositphotos.com/1194063/892/i/950/depositphotos_8929411-stock-photo-seafood-on-ice.jpg",
    link: "sea",
  },
  {
    name: "Fast Foods",
    img: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "fasts",
  },
  {
    name: "Soups",
    img: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/10/eatWhenSick-1053550862-770x533-1-650x428.jpg",
    link: "soups",
  },
  {
    name: "Chicken Foods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEkzAqzsn8opebMw4H6lFCuXKCEgCUQh5SA&usqp=CAU",
    link: "chickens",
  },
];
const FoodsCard = () => {
  return (
    <div className="container mt-5">
      <h1 style={{ color: "#dedede" }} className="text-center mb-4">
        Our Foods Items
      </h1>
      <div className="row">
        {foodsDetail.map((food: IFoods) => (
          <FCard
            key={food.name}
            name={food.name}
            img={food.img}
            link={food.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodsCard;

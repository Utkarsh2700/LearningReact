import Item from "./Item";

const FoodItems = ({ items }) => {
  // let foodItems = [
  //   "Dal",
  //   "Green Vegetable",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "Desi Cow Ghee",
  // ];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

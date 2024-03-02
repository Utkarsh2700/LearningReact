const ErrorMessage = ({ items }) => {
  //   let foodItems = [
  //     "Dal",
  //     "Green Vegetable",
  //     "Roti",
  //     "Salad",
  //     "Milk",
  //     "Desi Cow Ghee",
  //   ];

  return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>;
};

export default ErrorMessage;

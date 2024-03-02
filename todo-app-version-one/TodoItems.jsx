import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
      {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2024"></TodoItem>
      <TodoItem todoName="Go to Collage" todoDate="4/10/2024"></TodoItem> */}
    </div>
  );
};

export default TodoItems;

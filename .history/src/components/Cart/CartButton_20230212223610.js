import { uiActions } from "../../store/ui-slice";
import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const toggleCartHandler = () => {};
  const dispatch = useDispatch();

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

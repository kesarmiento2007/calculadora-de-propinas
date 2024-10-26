import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { orderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<orderActions>
}

const MenuItem = ({ item, dispatch } : MenuItemProps) => {
  return (
    <button
      className="border-2 rounded-lg roun border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({type: "add-item", payload: { item }})}
    >
      
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem;
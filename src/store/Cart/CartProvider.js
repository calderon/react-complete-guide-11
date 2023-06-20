import { useReducer } from 'react';
import CartContext from './CartContext.js'

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const existingIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      let updatedItems = [...state.items];
      let item = state.items[existingIndex];

      if (typeof item === 'undefined') {
        updatedItems = state.items.concat(action.item);
      } else {
        item = {
          ...item,
          amount: item.amount + action.item.amount
        };

        updatedItems[existingIndex] = item;
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount
      };

    case 'REMOVE':
      const removedItemIndex = state.items.findIndex((item) => {
        return item.id === action.itemId;
      });

      let currentItems = [...state.items];
      let removedItem = state.items[removedItemIndex];

      if (typeof removedItem === 'undefined') {
        return {
          items: state.items,
          totalAmount: state.totalAmount
        };
      }

      if (removedItem.amount === 1) {
        currentItems = currentItems.filter((item) => {
          return item.id !== action.itemId;
        });
      }

      if (removedItem.amount > 1) {
        removedItem = {
          ...removedItem,
          amount: removedItem.amount - 1
        };

        currentItems[removedItemIndex] = removedItem;
      }

      return {
        items: currentItems,
        totalAmount: state.totalAmount - removedItem.price
      };

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemCardHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item
    });
  };

  const remoteItemCardHandler = (itemId) => {
    dispatchCartAction({
      type: 'REMOVE',
      itemId
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCardHandler,
    removeItem: remoteItemCardHandler
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;

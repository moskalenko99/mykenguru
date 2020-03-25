import React from "react";

export const CartContext = React.createContext();

class Cart extends React.Component {
  state = {
    list: []
  };

  addToCart = product => {
    this.setState(({ list }) => ({ list: [...list, product] }));
  };

  render = () => {
    return (
      <CartContext.Provider
        value={{
          list: this.state.list,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  };
}

export default Cart;

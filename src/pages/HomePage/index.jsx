import React, { Component } from "react";
import _ from "lodash";
import ListProducts from "./../../components/ListProducts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Recommendations from "./../../components/Recommendations";
import mockedData from "./../../CatalogMock.js";
import GridProducts from "../../components/GridProducts";
import Slider from "./../../components/slider";

class HomePage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Recommendations />

        <div className="container">
          <div className="row product">
            {_.map(productList, product => (
              <GridProducts
                key={`Product-${product.id}`}
                count="4"
                data={product}
              />
            ))}
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  };
}

export default HomePage;

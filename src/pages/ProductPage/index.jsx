import React, { Component } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import DetailsProduct from "../../components/DetailsProduct";
import CatalogMock from "./../../CatalogMock.js";
import { withRouter } from "react-router-dom";
import _ from "lodash";

import "./styles.scss";

class ProductPage extends Component {
  checkProduct = () => {
    for (var i = 0; i < _.size(CatalogMock); i++) {
      if (CatalogMock[i].id == this.props.match.params.productId) {
        return CatalogMock[i];
      }
    }
  };

  render = () => {
    const Product = this.checkProduct();
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <DetailsProduct data={Product} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  };
}

export default withRouter(ProductPage);

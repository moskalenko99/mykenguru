import React, { Component } from "react";
import _ from "lodash";
import ListProducts from "./../../components/ListProducts";
import GridProducts from "./../../components/GridProducts";
import Accordeon from "./../../components/Accordeon";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import mockedData from "./../../CatalogMock.js";
import ListIcon from "./ListIcon";
import GridIcon from "./GridIcon";
import Slider from "./../../components/slider";
import Breadcrumbs from "./../../components/BreadCrumbs";
import Greeting from "./../../components/Greeting";

import "./styles.scss";

const sortList = [
  {
    name: "Сортировка по умолчанию",
    sorter: (leftItem, rigthItem) => {
      if (leftItem.id === rigthItem.id) {
        return 0;
      }
      return leftItem.id > rigthItem.id ? 1 : -1;
    }
  },
  {
    name: "Сортировка по новизне",
    sorter: (leftItem, rigthItem) => {
      if (leftItem.id === rigthItem.id) {
        return 0;
      }
      return leftItem.id > rigthItem.id ? -1 : 1;
    }
  }
];

const perPageList = [1, 10, 25, 50, 100];

class CatalogPage extends Component {
  state = {
    productList: mockedData,
    ProductView: ListProducts,
    sort: 0,
    perPage: 10,
    page: 0
    // ListFill: "#68d6f4",
    // GridFill: "#dfdfdf"
  };

  handleClickGridView = () => {
    this.setState({
      ProductView: GridProducts
      // GridFill: "#68d6f4",
      // ListFill: "#dfdfdf"
    });
  };

  handleClickListView = () => {
    this.setState({
      ProductView: ListProducts
      // ListFill: "#68d6f4",
      // GridFill: "#dfdfdf"
    });
  };

  handleChangeSort = e => {
    this.setState({ sort: +e.target.value });
  };

  handleChangePerPage = e => {
    this.setState({ perPage: +e.target.value });
  };

  handleCahngePage = e => {
    this.setState({ page: +e.target.value });
  };

  render = () => {
    const { ProductView } = this.state;

    let productList = Array.isArray(this.state.productList)
      ? this.state.productList
      : [];

    productList = _.cloneDeep(productList).sort(
      sortList[this.state.sort].sorter
    );

    const pages = _.chunk(productList, this.state.perPage);
    const page = pages[this.state.page];

    return (
      <React.Fragment>
        <Header />
        <div className="container container_breadcrumb">
          <div className="col-md-12">
            <Breadcrumbs Cat />
          </div>
        </div>
        <div className="container">
          <aside className="left col-md-3">
            <Accordeon>
              {[
                {
                  title: <span>Бренд</span>,
                  content: (
                    <>
                      {" "}
                      <br />{" "}
                    </>
                  )
                },
                {
                  title: <span>Цена</span>,
                  content: (
                    <>
                      <Slider min={0} max={255} />
                    </>
                  )
                },
                {
                  title: <span>Вид животного</span>,
                  content: (
                    <>
                      {" "}
                      <br /> <br /> <br /> <br /> <br /> <br />{" "}
                    </>
                  )
                },
                {
                  title: <span>Возраст животного</span>,
                  content: (
                    <>
                      {" "}
                      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                      <br />{" "}
                    </>
                  )
                }
              ]}
            </Accordeon>
          </aside>
          <div className="product row col-md-9">
            <div class="container view_product">
              <div className="sort">
                <select
                  className="select_sort"
                  onChange={this.handleChangeSort}
                >
                  {_.map(sortList, ({ name }, index) => (
                    <option value={index} selected={this.state.sort === index}>
                      {name}
                    </option>
                  ))}
                </select>
                <select
                  className="select_sort select_sort_count"
                  onChange={this.handleChangePerPage}
                >
                  {_.map(perPageList, perPage => (
                    <option
                      value={perPage}
                      selected={this.state.perPage === perPage}
                    >
                      {perPage}
                    </option>
                  ))}
                </select>
              </div>
              <div className="view">
                <label className="grid" onClick={this.handleClickGridView}>
                  <GridIcon active={ProductView === GridProducts} />
                </label>
                <label className="list" onClick={this.handleClickListView}>
                  <ListIcon active={ProductView === ListProducts} />
                </label>
              </div>
            </div>
            <div className="product row">
              {_.map(page, product => (
                <ProductView key={`Product-${product.id}`} data={product} />
              ))}
            </div>
          </div>
        </div>

        <nav className="nav_page">
          {_.map(pages, (_p, index) => (
            <button value={index} onClick={this.handleCahngePage}>
              {index + 1}
            </button>
          ))}
        </nav>

        <Greeting />

        <Footer />
      </React.Fragment>
    );
  };
}

export default CatalogPage;

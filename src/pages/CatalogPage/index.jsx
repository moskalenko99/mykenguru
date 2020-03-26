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
  };

  handleClickGridView = () => {
    this.setState({
      ProductView: GridProducts
    });
  };

  handleClickListView = () => {
    this.setState({
      ProductView: ListProducts
    });
  };

  handleChangeSort = e => {
    this.setState({ sort: +e.target.value });
  };

  handleChangePerPage = e => {
    this.setState({ perPage: +e.target.value, page: 0 });
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
                    <option
                      value={index}
                      select={this.state.sort === index ? "select" : null}
                    >
                      {name}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                >
                  <g>
                    <g transform="rotate(-90 5 3.5)">
                      <g transform="rotate(-90 5 3.5)">
                        <path
                          fill="#68d6f4"
                          d="M.5 4.84l.562.514 3.443-3.06.367.326-.002-.001 3.06 2.718.57-.507-3.995-3.55L.5 4.84"
                        />
                        <path
                          fill="none"
                          stroke="#68d6f4"
                          stroke-linecap="square"
                          stroke-miterlimit="20"
                          stroke-width="1.5"
                          d="M.5 4.84v0l.562.514v0l3.443-3.06v0l.367.326v0L4.87 2.62v0l3.06 2.718v0l.57-.507v0L4.505 1.28v0L.5 4.84v0"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="sort">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                >
                  <g>
                    <g transform="rotate(-90 5 3.5)">
                      <g transform="rotate(-90 5 3.5)">
                        <path
                          fill="#68d6f4"
                          d="M.5 4.84l.562.514 3.443-3.06.367.326-.002-.001 3.06 2.718.57-.507-3.995-3.55L.5 4.84"
                        />
                        <path
                          fill="none"
                          stroke="#68d6f4"
                          stroke-linecap="square"
                          stroke-miterlimit="20"
                          stroke-width="1.5"
                          d="M.5 4.84v0l.562.514v0l3.443-3.06v0l.367.326v0L4.87 2.62v0l3.06 2.718v0l.57-.507v0L4.505 1.28v0L.5 4.84v0"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
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

        <div className="nav">
          <nav className="nav_page">
            {_.size(pages) > 1
              ? _.map(pages, (_p, index) => (
                  <button
                    value={index}
                    onClick={this.handleCahngePage}
                    className="nav_page_button"
                  >
                    {index + 1}
                  </button>
                ))
              : null}
          </nav>
        </div>

        <Greeting />

        <Footer />
      </React.Fragment>
    );
  };
}

export default CatalogPage;

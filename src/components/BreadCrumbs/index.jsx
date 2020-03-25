import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dictionary from "./dictionary.js";

import "./styles.scss";

class BreadCrumbs extends React.Component {
  render = () => {
    const { Home, Catalog, Cat } = this.props;

    const crumbsList = _.reduce(
      this.props.match.url.split("/"),
      (acc, item) => {
        const lastItem = acc[_.size(acc) - 1];

        acc.push([lastItem, item].join("/").replace(/\/+/g, "/"));
        return acc;
      },
      []
    );

    return (
      <div>
        <Breadcrumb separator="›" aria-label="breadcrumb">
          {_.map(crumbsList, (crumb, index) => {
            let title = crumb.split("/");
            title = dictionary(title[_.size(title) - 1] || "home");

            if (_.size(crumbsList) - 1 !== index) {
              return (
                <BreadcrumbItem>
                  <Link to={crumb}>{title}</Link>
                </BreadcrumbItem>
              );
            }
            return <BreadcrumbItem active>{title}</BreadcrumbItem>;
          })}
        </Breadcrumb>
      </div>
    );
  };
}

export default withRouter(BreadCrumbs);

import React from "react";
import _ from "lodash";

import "./styles.scss";

// const List = ({
//     title,
//     items
// }) => (
//     <React.Fragment>
//         <span className='list-title'>{title}</span>
//         <ul>
//             {_.map(items, item => <li className='list-item'>{item}</li>)}
//         </ul>
//     </React.Fragment>
// );

const List = ({ title, items }) => {
  return (
    <React.Fragment>
      <span className="list-title">{title}</span>
      <ul>
        {_.map(items, item => (
          <li className="list-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;

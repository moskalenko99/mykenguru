import React from "react";

class ListIcon extends React.Component {
  render = () => {
    const { active } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="21"
        viewBox="0 0 25 21"
        className="ListIcon"
      >
        <path
          className={active ? "active" : ""}
          fill="#dfdfdf"
          d="M24.01 17.143H6.247c-.545 0-.987.671-.987 1.5 0 .828.442 1.5.987 1.5H24.01c.545 0 .987-.672.987-1.5 0-.829-.442-1.5-.987-1.5zm0-8.572H6.247c-.545 0-.987.672-.987 1.5 0 .829.442 1.5.987 1.5H24.01c.545 0 .987-.671.987-1.5 0-.828-.442-1.5-.987-1.5zM6.247 3H24.01c.545 0 .987-.672.987-1.5S24.555 0 24.01 0H6.247c-.545 0-.987.672-.987 1.5S5.702 3 6.247 3z"
        />
        <path
          className={active ? "active" : ""}
          fill="#dfdfdf"
          d="M2.85 17.143H.15c-.083 0-.15.671-.15 1.5 0 .828.067 1.5.15 1.5h2.7c.083 0 .15-.672.15-1.5 0-.829-.067-1.5-.15-1.5zm0-8.572H.15c-.083 0-.15.672-.15 1.5 0 .829.067 1.5.15 1.5h2.7c.083 0 .15-.671.15-1.5 0-.828-.067-1.5-.15-1.5zM.15 3h2.7C2.933 3 3 2.328 3 1.5S2.933 0 2.85 0H.15C.067 0 0 .672 0 1.5S.067 3 .15 3z"
        />
      </svg>
    );
  };
}

export default ListIcon;

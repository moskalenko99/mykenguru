import React from "react";

class GridIcon extends React.Component {
  render = () => {
    const { active } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="GridIcon"
      >
        <path
          className={active ? "active" : ""}
          fill="#dfdfdf"
          d="M.4 8h7.2c.22 0 .4-1.79.4-4s-.18-4-.4-4H.4C.18 0 0 1.79 0 4s.18 4 .4 4z"
        />
        <path
          className={active ? "active" : ""}
          fill="#dfdfdf"
          d="M12.4 8h7.2c.22 0 .4-1.79.4-4s-.18-4-.4-4h-7.2c-.22 0-.4 1.79-.4 4s.18 4 .4 4z"
        />
        <path
          className={active ? "active" : ""}
          fill="#dfdfdf"
          d="M.4 20h7.2c.22 0 .4-1.79.4-4s-.18-4-.4-4H.4c-.22 0-.4 1.79-.4 4s.18 4 .4 4z"
        />
        <path
          className={active ? "active" : ""}
          fill="#dfdfdf"
          d="M12.4 20h7.2c.22 0 .4-1.79.4-4s-.18-4-.4-4h-7.2c-.22 0-.4 1.79-.4 4s.18 4 .4 4z"
        />
      </svg>
    );
  };
}

export default GridIcon;

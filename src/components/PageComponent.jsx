import React from "react";

const PageComponent = (props) => {
  return (
    <div>
      <p>{props.page.id}</p>
      <p>{props.page.title}</p>
    </div>
  );
};

export default PageComponent;

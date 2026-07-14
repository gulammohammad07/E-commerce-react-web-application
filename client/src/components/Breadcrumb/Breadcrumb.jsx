import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({productName}) => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((item) => item);

  return (
    <div className="breadcrumb">
      <Link to="/" className="breadcrumb-link">
        Home
      </Link>

      {pathnames.map((value, index) => {
  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
  const isLast = index === pathnames.length - 1;

  // Replace the last URL segment with the product name
  const label =
    isLast && productName
      ? productName
      : value
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <React.Fragment key={to}>
      <span className="breadcrumb-separator">/</span>

      {isLast ? (
        <span className="breadcrumb-current">
          {label}
        </span>
      ) : (
        <Link to={to} className="breadcrumb-link">
          {label}
        </Link>
      )}
    </React.Fragment>
  );
})}
    </div>
  );
};

export default Breadcrumb;
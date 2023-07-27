import React from "react";

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <>
      {goToPrevPage ? (
        <button onClick={goToPrevPage}>Previious Page</button>
      ) : null}
      {goToNextPage ? <button onClick={goToNextPage}>Next Page</button> : null}
    </>
  );
};

export default Pagination;

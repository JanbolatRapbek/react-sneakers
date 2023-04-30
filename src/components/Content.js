import React from "react";

function Content() {
  const [searchValue, setSearchValue] = React.useState([]);
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="content">
      <div className="search1">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все красовки"}
        </h1>
        <div className="searchBlock">
          <img src="/img/search.svg" alt="Search"></img>
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            className="searchBlock__input"
            placeholder="Поиск..."
          ></input>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              src="/img/btn-remove.svg"
              alt="Close"
              className="removeBtn"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;

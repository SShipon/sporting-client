
import { useFilterContext } from '../../../context/filterContext';
import { FaCheck } from 'react-icons/fa';
import './FilterSection.css';
const FilterSection = () => {
  const {
    filters: { text, category ,color,price,maxPrice,minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  //to get the unique product (category ,company)
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });

    //to concat unique colors
    if (property === 'colors') {
      newValue = newValue.flat();  // return (newValue=['All', ...new Set([].concat(...newValue))]);
    }  
      return (newValue = ['all', ...new Set(newValue)]); //unique value asbe
    // console.log(newValue);
  };

  //we need unique data
  const categoryOnlyData = getUniqueData(all_products, 'category'); //data and category pass kore dawa props hisabe
  const companyData = getUniqueData(all_products, 'company');
  const colorsData = getUniqueData(all_products, 'colors');
  console.log(colorsData);

  return (
    <div>
      {/* --------search part--------- */}
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>

      {/* --------Category wise filter part--------- */}
      <div className="filter-category">
        <h4>Category</h4>
        <div className="category-name">
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      {/* --------Company wise filter part--------- */}
      <div className="filter-company">
        <h4>Company</h4>
        <div className="company-name">
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company-select"
              onClick={updateFilterValue}
            >
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      {/* --------Color wise filter part--------- */}
      <div className="filter-colors">
        <h4>Colors</h4>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === 'all') {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color" //ai nam r state er nam same howa lagbe exact
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color" //ai nam r state er nam same howa lagbe exact
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
                className={color === curColor ? 'btnStyle active' : 'btnStyle'}
              >
                {color === curColor ? (
                  <FaCheck className="checkStyle"></FaCheck>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* --------Price (bar) wise filter part--------- */}
      <div className="filter-price">
        <h4>Price</h4>
        <p>
          <h2 price={price}></h2>
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      {/* --------clear all filter button --------- */}
      <div className="filter-clear">
        <button onClick={clearFilters}> Clear Filters</button>
      </div>
    </div>
  );
};

export default FilterSection;

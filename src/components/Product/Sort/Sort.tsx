import React from 'react';
import './Sort.css';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../../../context/filterContext';
const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();
  return (
    <div>
      <div className="sorting-section">
        {/* 1st column */}
        <div className="sorting-list--grid">
          <button
            className={grid_view ? 'active sort-btn' : 'sort-btn'}
            onClick={setGridView}
          >
            <BsFillGridFill className=""></BsFillGridFill>
          </button>
          <button
            className={!grid_view ? 'active sort-btn' : 'sort-btn'}
            onClick={setListView}
          >
            <BsList className=""></BsList>
          </button>
        </div>
        {/* 2nd column */}
        <div className="product-data">
          <p>{`${filter_products.length} Products Available`}</p>
        </div>
        {/* 3rd column */}
        <div className="sort-selection ">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sort;

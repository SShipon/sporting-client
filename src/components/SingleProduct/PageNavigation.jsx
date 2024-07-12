import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({title}) => {
    return (
      <div>
        <div className="text-2xl bg-blue-100 text-black pt-2 pb-2 pl-5 mt-5 mb-12">
          <NavLink to="/">Home</NavLink>/{title}
        </div>
      </div>
    );
};

export default PageNavigation;
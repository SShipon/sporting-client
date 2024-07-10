
import { Link } from 'react-router-dom';
import FormatPrice from '../../../Helpers/FormatPrice';
import './GridView.css';

const GridView = ({ products }) => {
    // console.log("grid view products",products)
    return (
        <div>
            <div className="container grid lg:grid-cols-3 md:grid-cols-2 ">
                {
                    products.map((product)=> {
                     return (
                       <div>
                         <Link to={`/singleProduct/${product._id}`}>
                           <div className="card">
                             <figure className="product-figure">
                               <img src={product.image} alt={product.name} />
                               <figcaption className="category">
                                 {product.category}
                               </figcaption>
                             </figure>
                             <div className="card-data card-data-flex">
                               <h1>{product.name}</h1>
                               <p>
                                 {<FormatPrice price={product.price}></FormatPrice>}
                               </p>
                             </div>
                           </div>
                         </Link>
                       </div>
                     );
                    })
                }
            </div>
        </div>
    );
};

export default GridView;
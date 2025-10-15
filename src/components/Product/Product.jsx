import { Link } from 'react-router';


const Product = ({ product, handleAddProduct }) => {
  const { id, name, price, description, rating, category, image } = product;
  // console.log(data);



  return (
    <div className="max-w-sm p-4 bg-gray-800 border border-gray-600 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 rounded-md object-cover"
        src={image}
        alt={name}
      />
      <div className="">
        <h2 className="text-lg font-bold text-white mt-2">{name}</h2>
        <p className="text-gray-200 text-sm mt-1">{category}</p>
        <p className="text-gray-400 mt-2">{description.substring(0, 60)}...</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-amber-400 font-bold text-lg">৳{price}</span>
          <span className="text-yellow-200 font-semibold">{rating} ★</span>
        </div>
        <button
            onClick={() => handleAddProduct(product)}
            className="mt-2 w-full bg-gradient-to-r from-blue-800 to-blue-500
                      hover:from-blue-500 hover:to-blue-800 text-white
                      py-2 rounded-lg hover:bg-blue-700
                      cursor-pointer transition-colors">
          Add to Cart
        </button>
        <Link to={`/products/${id}`}>
         <button
            className="mt-2 w-full  text-white bg-gradient-to-r from-green-500 to-green-800
            hover:from-green-800 hover:to-green-500 py-2 rounded-lg transition-colors
            cursor-pointer">
           Show Details
         </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;







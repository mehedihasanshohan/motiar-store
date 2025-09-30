import { useLoaderData } from 'react-router';
import { NavLink } from 'react-router';
import ReactiveButton from 'reactive-button';

const ProductDetails = () => {
  const product = useLoaderData();

  if (!product) return <p>Product not found!</p>;

  const { name, price, description, rating, category, image } = product;

  return (
    <div className="p-6 bg-steal-300 shadow rounded-lg mt-10">
      <img className=" h-72 object-contain rounded" src={image} alt={name} />
      <h2 className="text-3xl font-bold mt-4 text-green-500">{name}</h2>
      <p className="text-amber-500 mt-1">{category}</p>
      <p className="mt-2 text-blue-300">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">৳{price}</span>
        <span className="text-red-500 font-semibold">{rating} ★</span>
      </div>
      <li>
        <NavLink to='/products'><ReactiveButton color='red' rounded idleText={'Products'}></ReactiveButton></NavLink>
        </li>
    </div>
  );
};

export default ProductDetails;

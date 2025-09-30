import { useLoaderData } from 'react-router';

const ProductDetails = () => {
  const product = useLoaderData();

  if (!product) return <p>Product not found!</p>;

  const { name, price, description, rating, category, image } = product;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <img className="w-full h-64 object-cover rounded" src={image} alt={name} />
      <h2 className="text-3xl font-bold mt-4">{name}</h2>
      <p className="text-gray-500 mt-1">{category}</p>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">৳{price}</span>
        <span className="text-yellow-500 font-semibold">{rating} ★</span>
      </div>
    </div>
  );
};

export default ProductDetails;

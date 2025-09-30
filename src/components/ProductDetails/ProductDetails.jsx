
import { useLoaderData } from "react-router";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { product, products } = useLoaderData();

  if (!product) return <p>Product not found!</p>;

  const { id, name, price, description, rating, category, image } = product;

  // ক্যাটাগরি অনুযায়ী similar products filter
  const similarProducts = products.filter(
    (p) => p.category === category && p.id !== id
  );

  return (
    <div className="p-6">
      {/* Main Product */}
      <div className="bg-slate-600 p-6 shadow rounded-lg">
        <img className="h-72 object-contain rounded" src={image} alt={name} />
        <h2 className="text-3xl font-bold mt-4 text-green-500">{name}</h2>
        <p className="text-amber-500 mt-1">{category}</p>
        <p className="mt-2 text-blue-700">{description}</p>
        <p className="text-xl font-bold">৳{price}</p>
        <p className="text-red-500 font-semibold">★ {rating} </p>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Similar Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProducts.map((sp) => (
              <Product key={sp.id} product={sp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

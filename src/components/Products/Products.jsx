import { useLoaderData } from 'react-router'
import Product from '../Product/Product';
import ReactiveButton from 'reactive-button';


const Products = () => {
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 px-4">

      {/* Left Sidebar - Filters */}
      <aside className="shadow-md  rounded-lg p-4 md:col-span-1 h-fit">
        <h2 className="text-xl font-semibold mb-4">Filter Options</h2>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Products"
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-bold underline mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-accent">Foods</button>
            <button className="btn btn-accent">Chips</button>
            <button className="btn btn-accent">Juice</button>
            <button className="btn btn-accent">Pens</button>
            <button className="btn btn-accent">Noodles</button>
            <button className="btn btn-accent">Mojo</button>
            <button className="btn btn-accent">Fresh Water</button>
            <button className="btn btn-accent">Clemon</button>
            <button className="btn btn-accent">Cake</button>
            <button className="btn btn-accent">Books</button>
            <button className="btn btn-accent">Electronics</button>
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Price</h3>
          <input type="range" min="0" max="1000" className="w-full accent-accent" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="font-medium mb-2">Rating</h3>
          <ul className="space-y-1 text-sm">
            <li><label><input type="radio" name="rating" className="mr-2" /> 4★ & above</label></li>
            <li><label><input type="radio" name="rating" className="mr-2" /> 3★ & above</label></li>
            <li><label><input type="radio" name="rating" className="mr-2" /> 2★ & above</label></li>
          </ul>
        </div>
      </aside>

      {/* Right - Product List */}
      <main className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          products.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </main>
    </div>
  )
}

export default Products;

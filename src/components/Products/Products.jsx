import { useLoaderData } from 'react-router'
import Product from '../Product/Product';

const Products = () => {
  const products = useLoaderData();
  console.log(products);


  return (
    <div className='max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:p-4 gap-4 mt-4'>
      {
        products.map(product => <Product key={product.id} product={product}></Product>)
      }
    </div>
  )
}

export default Products
import { useLoaderData } from 'react-router'
import Product from '../Product/Product';

const Products = () => {
  const products = useLoaderData();
  console.log(products);


  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4'>
      {
        products.map(product => <Product key={product.id} product={product}></Product>)
      }
    </div>
  )
}

export default Products
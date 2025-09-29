import { useLoaderData } from 'react-router'

const Products = () => {
  const products = useLoaderData();
  console.log(products);


  return (
    <div>Products</div>
  )
}

export default Products
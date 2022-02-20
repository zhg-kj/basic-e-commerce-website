import Products from "../components/Products"

const Home = ({ products }) => {
  return (
    <div className='home'>
      <Products products={products} />
    </div>
  )
}

export default Home
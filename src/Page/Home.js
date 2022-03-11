import { Header,BodyContainer,CartSummary,OrderSection } from '../components';
const Home = () => {
  return (
    <>
    <Header searchBar={true}/>
    <BodyContainer heading="Build Your Menu" left={<OrderSection/>} right={<CartSummary/>} />
    </>
  )
}

export default Home
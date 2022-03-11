import {useEffect} from 'react'
import { Header,BodyContainer,CartSummary,Form } from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state=>state.cartData);
  useEffect(() => {
    (cartData.length ===0) &&  navigate('/');
    ;
  }, [cartData])
  return (
    <>
    <Header searchBar={false}/>
    <BodyContainer heading="Order Details" left={<Form/>} right={<CartSummary header={false}/>} /></>
  )
}

export default Cart
import {useState} from 'react'
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromcart, setPayment } from '../../store/action';
import Popup from '../Popup';
import {Link,useNavigate} from "react-router-dom";


const  CartSummary = ({header=true}) => {
  const payment = useSelector(state=>state.payment);
  const paymentMode = useSelector(state=>state.paymentMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, toggleModal] = useState(false);
  const [index, changeIndex] = useState(null);
  const cartData = useSelector(state=>state.cartData);
  const removeCart = () => {
    if(index === null)
    {
      dispatch(removeFromcart([]));
      toggleModal(!modal);
      !header && dispatch(setPayment(null)) && setTimeout(() => {
        navigate('/');
      }, 1000);
    }
    else
    {
      
    let newArr = cartData;
    newArr.splice(index,1);
    dispatch(removeFromcart(newArr));
    toggleModal(!modal);
    }
  }
  return (
<>    {modal && <Popup mode={header} confirmFn={()=>removeCart()} closeFn={()=>toggleModal(!modal)}/>}
    {!header && 
    <div className={style.noheader}>
      <h3>Select Payment Method</h3>
    </div>}
    <div className={style.container} style={header?{height:"68vh"}:{height:"62vh"}}>
    {header && <div className={style.header}>
      <h3>Cart Summary</h3>
      {cartData.length>0 && <FontAwesomeIcon icon={faTrashAlt} className={style.delete} onClick={()=>{toggleModal(!modal);changeIndex(null);}}/>}
    </div>}
    <div className={style.content}>
      {
        cartData.length===0 && header?<div className={style.empty}>
          <FontAwesomeIcon icon={faShoppingCart} className={style.cart}/>
   <p>Your cart is empty</p>
   </div>:
 !header?
 <div className={style.list}>
  {payment?.map((data)=>(
  <li>
  <input type="radio" name="mode" onClick={()=>dispatch(setPayment(data))}/>
  <img src="../../images/credit.png" alt=""/>
  <h4>{data}</h4>
  </li> 
  ))}
  </div>
 :  <>
 <table>
   <tr>
     <th>Item</th>
     <th>Qty</th>
     <th>Price</th>
     <th></th>
   </tr>
   {cartData?.map((data, index)=>(
     <>
     <tr>
     <td>{data?.name}
       {data.addonvalue && <><span>Choose Toppings</span>
       <span><pre> - {data.addonvalue}</pre></span></>}
       {data?.note && <span>Note to kitchen</span>}
       {data?.note}
     </td>
     <td>{data.quantity}</td>
     <td>${data.price.toFixed(2)}</td>
     <td><FontAwesomeIcon icon={faTrashAlt} className={style.icon} onClick={()=>{toggleModal(!modal);changeIndex(index);}}/></td>
   </tr>
   </>
     ))}
   </table>
   </>
      }
    </div>
    <div className={style.button}>
    {cartData.length>0 && <h6>Total Amount: $ {(cartData.reduce((x,y)=>{return x+y.price},0).toFixed(2))}</h6>}
      {cartData.length>0 && <Link to="/booking/payment"><button className={ (!header && !paymentMode) ? style.disable : ''} onClick={()=>{!header && toggleModal(!modal)}}>{header?'Proceed':'Make Payment'}</button></Link>}
    </div>
    </div></>
  )
}

export default CartSummary;

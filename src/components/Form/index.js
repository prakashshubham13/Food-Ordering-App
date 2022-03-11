import {useState,useEffect} from 'react'
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

const Form = () => {
    const cartData = useSelector(state=>state.cartData);
    const paymentMode = useSelector(state=>state.paymentMode);
    const [dummyForm, changeForm] = useState({name:"",number:"",event:"",location:"",date:"",delivery:"default"})
    const setDummy = () => {
        changeForm({
            name:"Shubham",
            number:"6204266219",
            event:"Birthday",
            location:"Jamshedpur",
            date:"13 May, 2022",
            delivery:"Home"
        })
    }
    const clear = () => {
        changeForm({
            name:"",
            number:"",
            event:"",
            location:"",
            date:"",
            delivery:""
        })
    }
    useEffect(() => {
        paymentMode ? setDummy() : clear();
    }, [paymentMode])
    return (
        <div className={style.container}>
        <div className={style.main}>
            <h4>Event Detail</h4>
            <div className={style.cardouter}>
                <div className={style.row}>
                    <div className={style.input}>
                        <span>Name</span>
                        <input name="name" value={dummyForm.name} placeholder='Name' disabled />
                    </div>
                    <div className={style.input}>
                        <span>Contact Number</span>
                        <input name="number" value={dummyForm.number} placeholder='Contact Number' disabled/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.input}>
                        <span>Event Name</span>
                        <input value={dummyForm.event}  name="event" placeholder='Event Name' disabled/>
                    </div>
                    <div className={style.input}>
                        <span>Event Location</span>
                        <input name="location" value={dummyForm.location} placeholder='Event Location' disabled />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.input}>
                        <span>Event Date</span>
                        <input value={dummyForm.date}  name="date" placeholder='Event Date' disabled />
                    </div>
                    <div className={style.input}>
            <span>Delivery Mode</span>
            <select value={dummyForm.delivery} readOnly>
              <option value="default" disabled hidden>Select Delivery Mode:</option>
              <option value="Home">Home</option>
              <option value="Office">Office</option>
            </select>
          </div>
                </div>
            </div>
        </div>
                <div className={style.main}>
                <h4>Cart Summary</h4>
                <div className={style.cardouter}>
                  <div  style={{display:"flex",justifyContent:"flex-end"}}>
                  <Link to="/">Edit</Link>
                  </div>
                <table>
   <tr>
     <th>Item</th>
     <th>Qty</th>
     <th>Price</th>
   </tr>
   {cartData?.map((data,index)=>(
     <tr key={`${data?.addonvalue}-${index}`}>
     <td>{data?.name}
       {data.addonvalue && <><span>Choose Toppings</span>
       <span><pre> - {data.addonvalue}</pre></span></>}
       {data?.note && <span>Note to kitchen</span>}
       {data?.note}
     </td>
     <td>{data.quantity}</td>
     <td>${data.price.toFixed(2)}</td>
   </tr>
     ))}
   </table>
   </div>
            </div>
            </div>
    )
}

export default Form
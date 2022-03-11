import {useState} from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/action';
const Card = ({ data }) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state=>state.cartData);
  const[addOn, updateAddOn] = useState(false);
  const[form, updateForm] = useState({quantity:"",session:"default",note:"",addonvalue:"",addonprice:""});
  const changeFormData = (event) => {
    updateForm({...form,[event.target.name]:event.target.value})
  }
  const addCart = () => {
    form.quantity && form.session && dispatch(addToCart([...cartData,{...form, price:(form?.quantity * (data?.price + form?.addonprice)),name:data.name}])) && clearForm();

  }
  const clearForm = () => {
    updateForm({quantity:0,name:"",session:"",note:"",addonvalue:"",addonprice:0});
  }
  return (
    <div className={style.cardouter}>
      <div className={style.section1}>
        <div className={style.img}>
          <img src={data.img} alt="" />
        </div>
        <div className={style.details}>
          <h3>{data?.name}</h3>
          <p>{data?.desc}</p>
          <button onClick={()=>updateAddOn(!addOn)}>Add-ons</button>
        </div>
        <h2>${data?.price}</h2>
      </div>

{addOn &&       <div className={style.section2}>
        <hr />
        <div className={style.row}>
          <h5 className={style.title}>{data.name}</h5>
          <h5 className={style.link} onClick={()=>updateForm({...form,addonvalue:"",addonprice:0})}>Cancel</h5>
        </div>
        <div className={style.row}>
          <h6 className={style.subtitle}>Choose Toppings</h6>
          <FontAwesomeIcon icon={faAngleUp} className={style.icon} onClick={()=>updateAddOn(false)} />
        </div>
        {data.addons?.map((addonData) => (
          <li key={addonData?.addonvalue}>
            <div className={style.left}>
              <input type="checkbox" name="addonvalue" checked={form.addonvalue === addonData?.name} onChange={()=>updateForm({...form,addonvalue:addonData?.name,addonprice:addonData?.price})}/>
              <img src={addonData.img} alt="" />
              <h6>{addonData?.name}</h6>
            </div>
            <div className={style.right}>
              <h6>{addonData?.price}</h6>
            </div>
          </li>
        ))}

      </div>}
      <div className={style.section3}>
        <hr />
        <div style={{ width: "100%", margin: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div className={style.input}>
            <span>Quantity</span>
            <input type="number" min="1" name="quantity" placeholder='Qty' value={form?.quantity} onChange={changeFormData}/>
          </div>
          <div className={style.input}>
            <span>Session</span>
            <select name="session" value={form?.session} onChange={changeFormData}>
              <option value="default" disabled hidden>Select Session:</option>
              {data?.session.map((val)=>(<option value={val}>{val}</option>))}
            </select>
          </div>
          <div className={style.input} style={{ textAlign: "end" }}>
            <span>Sub Total</span>
            <input name="price" placeholder='$0.00' value={form.quantity!==""?(form?.quantity * (data?.price + form?.addonprice)).toFixed(2):""} disabled style={{ textAlign: "end" }} />
          </div>
        </div>
        <div style={{ width: "100%", margin: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div className={style.input}>
            <span>Note to the kitchen</span>
            <textarea placeholder='' rows="1" name="note" onChange={changeFormData} value={form.note}></textarea>
          </div>
          <button onClick={addCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;

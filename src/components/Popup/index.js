import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Popup = ({mode,confirmFn,closeFn}) => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
      <FontAwesomeIcon icon={faCheckCircle} className={style.cart}/>
        <h4>
          {mode?'Are you sure you want to delete this item?':'Great! Your order has been placed successfully'}
        </h4>
        <button onClick={confirmFn}>{mode?'Confirm':'OK'}</button>
        {mode && <button onClick={closeFn}>Cancel</button>}
        </div>
      </div>
  )
}

export default Popup
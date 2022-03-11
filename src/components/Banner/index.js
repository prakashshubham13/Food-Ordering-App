import style from './style.module.scss'
const Card = ({ data }) => {
  return (
    <div className={style.cardouter}>
      <img src={data?.img} alt=""/>
      <div className={style.content}>
      <h1>{data?.name}</h1>
      <p>{data?.caption}</p>
      </div>
    </div>
  )
}

export default Card;

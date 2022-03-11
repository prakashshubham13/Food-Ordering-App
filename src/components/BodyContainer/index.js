import style from './style.module.scss';

const  BodyContainer = ({heading,left,right}) => {

  return (
<div className={style.container}>
<div>
<h1 className={style.title}>{heading}</h1>
</div>
<div className={style.subcontainer}>
<div className={style.left}>
 {left}
</div>
<div className={style.right}>{right}</div>  
</div>
</div>
  )
}

export default BodyContainer;

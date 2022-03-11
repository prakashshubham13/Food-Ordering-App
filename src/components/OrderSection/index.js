import { React,useState,useEffect } from 'react'
import style from './style.module.scss';
import Card from '../Card';
import Banner from '../Banner';
import { useSelector, useDispatch } from 'react-redux';
import { getMenu,searchData } from '../../store/action';
const searchMenu = {
  "type":"search",
  "name":"Searched Items",
  "icon":"images/searchh.png",
}
const OrderSection = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(state=>state.storeData);
  const menu = useSelector(state=>state.menu);
  const search = useSelector(state=>state.search);
  const [currentMenu, updateMenu] = useState(null);
  useEffect(() => {
    (!search && menu.length>0) ? !currentMenu && updateMenu(menu[0]) : updateMenu(menu[0]);
  }, [menu])
  useEffect(() => {
    let tempMenu = new Set([...menu]);
    tempMenu.delete(searchMenu);
    search && dispatch(getMenu([searchMenu,...tempMenu]));
    !search && dispatch(getMenu([...tempMenu]));
    !search && currentMenu && (currentMenu?.type==="search") && updateMenu(menu[1]);
  }, [search])
  return (
    <>
      <div className={style.menu}>
        <ul>
          {menu.map((data) => (<li key={data.type} className={style[data.type !== currentMenu?.type ? 'inactive' : 'active']} onClick={() => {dispatch(searchData(""));updateMenu(data)}} >
            <img src={data.icon} alt="" />
            <h6>{data.name}</h6>
          </li>))}
        </ul>
      </div>
      <div className={style.result}>
        {!search && <Banner data={currentMenu}/>}
        {storeData
        .filter(data => (search ?data.name.toLowerCase().includes(search.toLowerCase()):data.type === currentMenu?.type))
        .map((data,index) => <Card key={`${data?.name}-${index}`} data={data}/>) }
      </div>
    </>
  )
}

export default OrderSection
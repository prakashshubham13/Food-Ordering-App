import React,{ useState, useEffect } from 'react';
import style from './style.module.css';
import { searchData } from '../../store/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({show}) => {
  const search = useSelector(state=>state.search);
  const dispatch = useDispatch();
  return (
<>
<div className={style.search} style={{
  display: !show && 'none'
}}>
<div>
<FontAwesomeIcon icon={faSearch} className={style.icon}/>
<input type="text" className={style.input} placeholder='Search Item' value={search} onChange={(e)=>dispatch(searchData(e.target.value))} />
  </div>
{search && <FontAwesomeIcon icon={faClose} className={`${style.close}`} onClick={(e)=>dispatch(searchData(""))}/>}
</div>
</>
  )
}

export default Search;

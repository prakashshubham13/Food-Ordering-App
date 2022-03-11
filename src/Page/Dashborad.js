import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getData,errorData,getMenu,getPayment } from '../store/action';
import axios from "axios";
import Routers from '../routes';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
    .get("https://foodapi-f0336-default-rtdb.firebaseio.com/data.json")
    .then((response) => {
      dispatch(getData(response.data.data));
      dispatch(getMenu(response.data.menu));
      dispatch(getPayment(response.data.payment_methods));
    })
    .catch((error) => {
      errorData();
    });
  }, [])
  return (
    <>
    <Routers/>
    </>
  )
}

export default Home
import { get_Data,loading_Data,add_Tocart,error_Data,search_Data,remove_Fromcart,get_Menu,get_Payment,set_Payment } from "../type";

export const getData = (data) => (
    {
        type:get_Data,
        payload:data
    }
)

export const getMenu = (data) => (
    {
        type:get_Menu,
        payload:data
    }
)

export const getPayment = (data) => (
    {
        type:get_Payment,
        payload:data
    }
)

export const setPayment = (data) => (
    {
        type:set_Payment,
        payload:data
    }
)

export const loadingData = () => (
    {
        type:loading_Data
    }
)

export const addToCart = (data) => (
    {
        type:add_Tocart,
        payload:data
    }
)

export const removeFromcart = (data) => (
    {
        type:remove_Fromcart,
        payload:data
    }
)

export const searchData = (data) => (
    {
        type:search_Data,
        payload:data
    }
)

export const errorData = () => (
    {
        type:error_Data
    }
)
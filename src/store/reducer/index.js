import { get_Data, loading_Data, error_Data, add_Tocart, search_Data, remove_Fromcart, get_Menu, get_Payment, set_Payment } from '../type';

const initialStore = {
    loading: false,
    errror: false,
    storeData: [],
    cartData: [],
    menu: [],
    payment: [],
    paymentMode: null
};

const storeReducer = (state = initialStore, action) => {
    switch (action.type) {
        case get_Data:
            return {
                ...state,
                loading: false,
                storeData: action.payload
            }
        case get_Menu:
            return {
                ...state,
                menu: action.payload
            }
        case get_Payment:
            return {
                ...state,
                payment: action.payload
            }
            case set_Payment:
                return {
                    ...state,
                    paymentMode: action.payload
                }    
        case loading_Data:
            return {
                ...state,
                loading: true
            }
        case add_Tocart:
            return {
                ...state,
                cartData: action.payload
            }
        case remove_Fromcart:
            return {
                ...state,
                cartData: JSON.parse(JSON.stringify(action.payload)),
            }
        case search_Data:
            return {
                ...state,
                search: action.payload
            }
        case error_Data:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
};

export default storeReducer;
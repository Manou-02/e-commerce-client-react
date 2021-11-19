import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducers";
import ProduitReducer from "./ProduitReducer"
import PanierReducers from "./PanierReducers";
import ClientReducer from "./ClientReducer";
import CommandeReducer from "./CommandeReducer";
import UserReducer from './UserReducer';

export default combineReducers({
    categoryReducer,
    ProduitReducer,
    PanierReducers,
    ClientReducer,
    CommandeReducer,
    UserReducer
});
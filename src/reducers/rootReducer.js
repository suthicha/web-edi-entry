import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as FormReducer  } from 'redux-form';
import { sessionReducer } from 'redux-react-session';
import asyncReducer from '../common/async/asyncReducer';
// import modalReducer from '../../features/modals/modalReducer';
// import shipmentReducer from '../../features/shipments/shipmentReducer';
// import userprofileReducer from '../../features/userprofile/userprofileReducer';
// import userReducer from '../../features/users/userReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    form: FormReducer,
    toastr: toastrReducer,
    async: asyncReducer
})

export default rootReducer
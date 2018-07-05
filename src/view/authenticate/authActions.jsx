import { toastr } from "react-redux-toastr";
import { sessionService } from "redux-react-session";
import jwtDecode from "jwt-decode";
import * as Cookies from "js-cookie";
import { AUTH_LOGIN_USER, AUTH_SIGN_OUT_USER } from './authConstants';
import {
    asyncActionStart,
    asyncActionFinish,
    asyncActionError
  } from "../../common/async/asyncActions";
  

export const login = (email, password, callback) => {
      return async dispatch => {
        try{
            dispatch(asyncActionStart());
            setTimeout(()=>{
                dispatch(asyncActionFinish());

                let user = {
                    username: 'support@ctibkk.com',
                    company: 'CTI Logistics',
                    level: 1,
                    email: email
                }

                sessionService.saveSession(user);
                dispatch({type: AUTH_LOGIN_USER, payload: user})
                callback({status: 'OK'})
            },1000);
        }catch(e){
            dispatch(asyncActionError());
            callback({error: e.message})
        }
      }
  };

  export const checkAuth = (history, callback) => {
        setTimeout(()=>{
            let cookies = Cookies.getJSON('USER-SESSION');
            if(cookies){
                let validateExpires = jwtDecode(cookies.token).exp > Date.now() / 1000;
                if (!validateExpires){
                sessionService.deleteSession();
                sessionService.deleteUser();
                }
                callback({ authenticated: validateExpires });
            }else{
            sessionService.deleteSession();
            sessionService.deleteUser();
            history.push("/");
            }
        },300);
  };

  export const logout = callback => {
      setTimeout(()=>{
        sessionService.deleteSession();
        sessionService.deleteUser();
        callback({ 
            status_code: 200,
            status_description: "logged out" 
        });
      },300);
      return {
          type: AUTH_SIGN_OUT_USER
      }
  };

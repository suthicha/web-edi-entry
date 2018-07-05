import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import { configureStore } from './store/configureStore';
import ScrollToTop from './common/utils/ScrollToTop';

import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './common/layout/App';

const store = configureStore();
const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <ReduxToastr
                        timeOut={2000}
                        position='bottom-right'
                        transitionIn='fadeIn'
                        transitionOut='fadeOut'
                        progressBar
                    />
                    <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>,
        rootEl
    );
}

if (module.hot){
    module.hot.accept('./common/layout/App', ()=>{
        setTimeout(render)
    });
}

const validateSession = (session) => {
    return session? true: false;
}

const optionSession = {
    refreshOnCheckAuth: true,
    redirectPath: '/',
    driver: 'COOKIES',
    validateSession
}

sessionService.initSessionService(store, optionSession);
render();

// ReactDOM.render(<App />, document.getElementById('root'));

import * as React from "react";
import {Provider} from 'react-redux';
import store from './config/store';
import './styles.scss';
import Rss from 'pages/RssContainer';

export const App = () => {
    return (
        <Provider store={store}>
            <Rss/>
        </Provider>
    )
};
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);





// 在浏览器端开启一个本地服务器，缓存react项目的文件
// 优化项目的加载速度
serviceWorker.unregister();





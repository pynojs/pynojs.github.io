import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './components/App';

// 获取root元素并将其实例化为一个root实例，后续更新、卸载等操作都通过该实例操作。
const root = createRoot(document.getElementById('root'))

//组件渲染
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

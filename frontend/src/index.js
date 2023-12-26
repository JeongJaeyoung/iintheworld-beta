import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './pages';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ScrollToTop from './components/common/ScrollToTop';


const GlobalStyle = createGlobalStyle`
  ${reset} 
  /* 다른 스타일 reset은 header 관련해서 여백 없애기 */
  body {
    font-family: 'NanumSquareRoundR', sans-serif;
  }
`

const config = {
  token: {
    fontFamily: 'NanumSquareRoundR',
  },
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <GlobalStyle />
        <ConfigProvider theme={config}>
          <Root />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
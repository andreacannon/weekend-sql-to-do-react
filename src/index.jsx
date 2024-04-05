import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={newTheme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>
);
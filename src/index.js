import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from 'app/scenes/not-found';
// import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';


import { setGlobalCssModule } from 'reactstrap/lib/utils';

setGlobalCssModule(bootstrap);

const App = (
  <NotFound />
);

ReactDOM.render(App, document.getElementById('root'));

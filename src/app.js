

import React from 'react';
import ReactDOM from 'react-dom';


const template = <p>This is JSX</p>;

ReactDOM.render(template, document.getElementById('app'));


//1. Installed babel-loader
//2. Installed babel-core
//3. Next, we went to the webpack.config.js file and added module to our exports
//4. In webpack.config.js we added loader and test in an array object
//5. We added excludes
//6. We created the .babelrc file that we'll use to set presets.




import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import App from './App';
import LibaryForm from './Component/LibaryForm';
import "bootstrap/dist/css/bootstrap.css"
import DynamicTable from './Component/DynamicTable';
import LibaryFormC2 from './Component/LibaryFormC2';

const containers = document.getElementById('root');
const root = createRoot(containers);
//root.render(<LibaryForm/>);
root.render(<LibaryFormC2/>);


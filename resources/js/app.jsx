import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from './components/Employee';
import EmployeeForm from './components/EmployeeForm';

function MyApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeForm /> } />
                <Route path="/employee" element={<Employee /> } />
            </Routes>
        </Router>
        
    );
}
export default MyApp;
if (document.getElementById('app')) {
    ReactDOM.render(<MyApp />, document.getElementById('app'));
}
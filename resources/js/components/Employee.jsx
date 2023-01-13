import axios from "axios";
import React, { useEffect, useState } from "react";

const Employee = () => {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get('/api/get-employee').then(res => {
            if(res.data.status === 200){
                // setEmployee(res.data.employee_data);
                setEmployee(res.data.employee_data)
                console.log(res.data.employee_data)
            }
        })
    }, [])

    const employeeNum = employee.length;

    var employeeList = '';
    if (employeeNum){
        employeeList = employee.map((emp) => {
            return(
                <tr key={emp}>
                    <th scope="row">{emp.name}</th>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{emp.address}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.birthday}</td>
                    <td>{emp.nationality}</td>
                    <td>{emp.marital_status}</td>
                    <td>{emp.hire_date}</td>
                    <td>{emp.department}</td>
                </tr>
            )
        });
    }
    else{
        return (
            <div style={{textAlign: 'center'}}>
                <h1>No Employee Found</h1>
            </div>
        )
    }
    
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Employee</h1>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Marital Status</th>
                            <th scope="col">Hire Date</th>
                            <th scope="col">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employee;
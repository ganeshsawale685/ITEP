import React, { useRef, useState } from 'react'
import { departments } from '../Department';
import { useNavigate } from 'react-router-dom';

const DepartmentList = () => {
    const [data, setData] = useState(departments);
    const deptRef = useRef();
    const navigate = useNavigate();


    const addDepartment = () => {
        const name = deptRef.current.value;

        if (!name) {
            alert("Enter department name");
            return;
        }

        setData([...data, { id: Date.now(), name, employees: [] }]);
        deptRef.current.value = "";
    };


    const deleteDepartment = (id) => {
        const updated = data.filter((d) => d.id !== id);
        setData(updated);
    };

    return (
        <div className="container mt-4">
            <h2>Departments</h2>


            <input
                ref={deptRef}
                className="form-control"
                placeholder="Department Name"
            />
            <button
                className="btn btn-primary mt-2 mb-3"
                onClick={addDepartment}
            >
                Add Department
            </button>


            <div className="row">
                {data.map((dept) => (
                    <div className="col-md-4" key={dept.id}>
                        <div className="card p-3 mb-3 shadow-sm">

                            <h5>{dept.name}</h5>
                            <p>ID: {dept.id}</p>

                            <button
                                className="btn btn-warning btn-sm mb-2"
                                onClick={() => navigate(`/employee/${dept.id}`)}
                            >
                                View Employees
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteDepartment(dept.id)}
                            >
                                Delete
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentList;
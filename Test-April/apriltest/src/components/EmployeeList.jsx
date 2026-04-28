import React, { useRef, useState } from 'react'
import { departments } from '../Department'
import { useParams } from 'react-router-dom'

const EmployeeList = () => {
    const [data, setData] = useState(departments)
    const { id } = useParams()

    const empNameRef = useRef()
    const empRoleRef = useRef()

    const department = data.find((d) => d.id == id)
    console.log(department)

    const addEmployee = () => {
        const name = empNameRef.current.value
        const role = empRoleRef.current.value

        const newEmp = {
            id: Date.now(),
            name,
            role
        }

        const updatedData = data.map((d) =>
            d.id == id
                ? { ...d, employees: [...d.employees, newEmp] }
                : d
        )

        setData(updatedData)

        empNameRef.current.value = ""
        empRoleRef.current.value = ""
    }

    const deleteEmployee = (empId) => {
        const updatedData = data.map((d) =>
            d.id == id
                ? {
                    ...d,
                    employees: d.employees.filter((e) => e.id !== empId)
                }
                : d
        );

        setData(updatedData);
    };
    return (
        <div className="container mt-4">
            <h2>{department?.name} Employees</h2>


            <div className="card p-3 mb-3">
                <h5>Add Employee</h5>
                <input
                    ref={empNameRef}
                    className="form-control mt-2"
                    placeholder="Name"
                />
                <input
                    ref={empRoleRef}
                    className="form-control mt-2"
                    placeholder="Role"
                />
                <button
                    className="btn btn-success mt-2"
                    onClick={addEmployee}
                >
                    Add
                </button>
            </div>

            {
                department?.employees.map((emp) => (
                    <div key={emp.id} className="card p-3 mb-2">
                        <h5>{emp.name}</h5>
                        <p>{emp.role}</p>

                        <span className=''>
                            <button className='btn btn-warning m-1'>Edit</button>
                            <button className='btn btn-danger m-1' onClick={() => deleteEmployee(emp.id)}>
                                Delete
                            </button>
                        </span>

                    </div>
                ))
            }
        </div>
    )
}

export default EmployeeList
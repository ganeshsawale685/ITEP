import React from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom';
import EmployeeList from './components/EmployeeList'
import DepartmentList from './components/DepartmentList';

const App = () => {
 
  return (
  <>
    <Routes>
      <Route path="/" element={<DepartmentList />} />
        <Route path="/employee/:id" element={<EmployeeList />} />
      </Routes>
  </>
  )
}

export default App
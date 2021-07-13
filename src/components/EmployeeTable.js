import React from "react";

//table of employee lists

function EmployeeTable(props){
    return(<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Image</th>
      <td>Mark Otto</td>
      <td>(111)-111-1111</td>
      <td>email@mail.com</td>
      <td>05-27-1986</td>
    </tr>
  </tbody>
</table>
</div>
);
}

export default EmployeeTable;
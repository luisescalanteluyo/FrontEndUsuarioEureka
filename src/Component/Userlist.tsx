import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Userlistx(){

	return (
		<div className="card">
			<div className="card-header">
				<div className="row">
					<div className="col-md-6"><b>User Data</b></div>
					<div className="col-md-6">
						
					</div>
				</div>
			</div>
			<div className="card-body">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					
					</tbody>
				</table>
			</div>
		</div>
	);
}


function Userlist(){
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const apiUrl = 'http://localhost:7203/api/Usuario/ListarUsuarios'; //This URL change according to path of your PHP Script

		fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log("data");
			console.log(data);
			
			setUsers(data);
		});

	}, []);

	return (
		<div className="card">
			<div className="card-header">
				<div className="row">
					<div className="col-md-6"><b>User Data</b></div>
					<div className="col-md-6">
						<Link to="/add" className="btn btn-success btn-sm float-end">Add</Link>
					</div>
				</div>
			</div>
			<div className="card-body">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>nombres</th>
							<th>apellidos</th>
							<th>correoelectronico</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						
					{users.map((user, index) => (
						<tr key={index}>
							<td>{user.nombres}</td>
							<td>{user.apellidos}</td>
							<td>{user.correoelectronico}</td>
							<td>
								<Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm">Edit</Link>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Userlist;
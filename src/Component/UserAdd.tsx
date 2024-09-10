
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function UserAdd(){

	let navigate = useNavigate();

	const [user, setUser] = useState({
		nombres : '',
		apellidos : '',
		correoelectronico : '',
        nrodocumentoidentidad : ''
	});


	const handleChange = (event) => {
		const { name, value } = event.target;

		setUser({
			...user,
			[name] : value
		});
	};

    const handleSubmit = (event) => {

		event.preventDefault();

		fetch('http://localhost:7203/api/Usuario/GrabarUsuario', {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(user)
		})
		.then((response) => response.json())
		.then((data) => {
            console.log("data");
			console.log(data);
			navigate("/");
		});

        // useEffect(() => {
        //     const apiUrl = 'http://localhost:7203/api/Usuario/GrabarUsuario'; //This URL change according to path of your PHP Script
    
        //     fetch(apiUrl, {
        //         method : 'POST',
        //         headers : {
        //             'Content-Type' : 'application/json'
        //         },
        //         body : JSON.stringify(user)
        //     })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("data");
        //         console.log(data);
                
        //       //  setUsers(data);
        //     });
    
        // }, []);

	};

	return (
		<div className="card">
			<div className="card-header">
				<div className="row">
					<div className="col-md-6">Add User</div>
					<div className="col-md-6">
						<Link to="/" className="btn btn-success btn-sm float-end">View All</Link>
					</div>
				</div>
			</div>
        
			<div className="card-body">
				<div className="row">
					<div className="col-md-4">&nbsp;</div>
					<div className="col-md-4">
						<form method="POST" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label>Nombres</label>
								<input type="text" name="nombres" className="form-control" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label>Apellidos</label>
								<input type="text" name="apellidos" className="form-control" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label>Correo</label>
								<input type="email" name="correoelectronico" className="form-control" onChange={handleChange} />
							</div>
                            <div className="mb-3">
								<label>Documento</label>
								<input type="text" name="nrodocumentoidentidad" className="form-control" onChange={handleChange} />
							</div>
                            
							<div className="mb-3">
								<input type="submit" className="btn btn-primary" value="UserAdd" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserAdd;
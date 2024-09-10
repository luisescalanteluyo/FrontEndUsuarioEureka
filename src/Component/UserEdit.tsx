import React, {useState, useEffect} from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

function UserEdit(){

	let navigate = useNavigate();
	
	const {id} = useParams();

	const [user, setUser] = useState({
        id : 0,
		nombres : '',
		apellidos : '',
		correoelectronico : '',
        nrodocumentoidentidad :''
	});

	const handleChange = (event) => {
		const {name, value} = event.target;

		setUser({
			...user,
			[name] : value
		});
	};

	const fetchUserData = () => {
		fetch(`http://localhost:7203/api/Usuario/UsuariosById?id=${id}`)
		.then((response) => response.json())
		.then((data) => {
            console.log("data fetchUserData");
			console.log(data);
			setUser(data);
		});
	};

	useEffect(() => {
		fetchUserData();
	}, []);


    const handleSubmit = (event) => {

		event.preventDefault();

		fetch(`http://localhost:7203/api/Usuario/ActualizarUsuario`, {
			method : 'PUT',
			headers : {
				'Content-Type': 'application/json'
			},
			body : JSON.stringify(user)
		})
		.then((response) => response.json())
		.then((data) => {
            console.log("data");
			console.log(data);
			navigate("/");
		});

	};

	return (
		<div className="card">
			<div className="card-header">
				<div className="row">
					<div className="col-md-6">UserEdit User</div>
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
								<input type="text" name="nombres" className="form-control" value={user.nombres} onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label>Apellidos</label>
								<input type="text" name="apellidos" className="form-control" value={user.apellidos} onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label>Correo</label>
								<input type="email" name="correoelectronico" className="form-control" value={user.correoelectronico} onChange={handleChange} />
							</div>
                            <div className="mb-3">
								<label>Documento</label>
								<input type="text" name="nrodocumentoidentidad" className="form-control" value={user.nrodocumentoidentidad} onChange={handleChange} />
							</div>

							<div className="mb-3">
								<input type="submit" className="btn btn-primary" value="UserEdit" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserEdit;
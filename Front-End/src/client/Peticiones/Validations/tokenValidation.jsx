import getCookie from '../../../GeneralComponents/GetCookie';

const tokenValidation = ( navigate ) => {
	const token = getCookie('jwtToken');

	if (!token){
		navigate('/login');
	}

	const response = fetch('http://localhost:3000/verify/token', {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	})
	.then(res => {
		if(res.status === 200 || res.status === 403){
			navigate('/login');
		}

		return res.json();
	});
}

export default tokenValidation;
const cerrarSesion = (navigate) => {
    const type = localStorage.getItem('type');

    document.cookie = "jwtToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    localStorage.removeItem('type');
    localStorage.removeItem('id');

    console.log(type);

    if (type == 1){
        navigate('/admin');
    }else{
        navigate('/login');
    }
}

export default cerrarSesion
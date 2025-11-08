import usersData from '../usuarios.json'; 

export default {
    // Valida las credenciales
    login(username, password) {
        const user = usersData.find(
            u => u.username === username && u.password === password
        );
        return user ? true : false; // Devuelve true si encuentra coincidencia
    }
};
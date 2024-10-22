import ConfigurationAPIs from '../services/ConfigApi';

interface LoginData {
    email: string;
    password: string;
}

interface UserData {
  firstName: string;
  firstSurname: string;
  phone: string;
  email: string;
  password: string;
}

const APIs = {
    login: async (data: LoginData) => {
        const path = 'general_login';
        return ConfigurationAPIs.post(path, data); // No se necesita especificar el tipo
    },

    createUsers: async (data: UserData) => {
        const path = 'users_registration';
        return ConfigurationAPIs.post(path, data); // Igual aquí
    },
}

export default APIs;

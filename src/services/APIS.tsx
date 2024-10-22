import ConfigurationAPIs from '../services/ConfigApi';

const APIs = {
    login: async ( data: any) => {
      const path = 'general_login';
      return ConfigurationAPIs.post(path, data);
    },

    createUsers: async ( data: any) => {
        const path = 'users_registration';
        return ConfigurationAPIs.post(path, data);
    },


}

export default APIs;




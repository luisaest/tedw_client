import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state:{
        registerEmail: 'alexsald@itcelaya.edu.mx',
        registerPassword: '123',
        registerName: 'alex',
        registerDepartment: 'Sistemas',
        loginEmail: null,
        loginPassword: null,
        token: null,
        registerError: null,
        loginError: null,
    },
    actions: {
        register({ commit, state }) {
            commit('setRegisterError', null)
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
                department: state.registerDepartment,
                name: state.registerName,
                id_rol: 1,
                id_status: 1,
            })
            .then(({ data }) => {
                commit('setToken', data.token);
                router.go();
            })
            .catch(() =>{
                commit('setRegisterError', 'Información de registro invalida')
            });
        },

        login({ commit, state }) {
            commit('setLoginError', null)
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            })
            .then(({ data }) => {
                commit('setToken', data.token);
                router.go('');
            })
            .catch(() =>{
                commit('setLoginError', 'Ocurrió un error al iniciar sesión, intenta de nuevo.')
            });
        },
    },
    mutations: {
        setRegisterError(state, error){
            state.registerError = error;
        },
        setToken(state, token){
            state.token = token;
        },
        setRegisterEmail(state, email){
            state.registerEmail = email;
        },
        setRegisterPassword(state, password){
            state.registerPassword = password;
        },
        setRegisterName(state, name){
            state.registerName = name;
        },
        setRegisterDepartment(state, department){
            state.registerDepartment = department;    
        },
        setLoginError(state, error){
            state.loginError = error;
        },
        setLoginEmail(state, email){
            state.loginEmail = email;
        },
        setLoginPassword(state, password){
            state.loginPassword = password;
        },
    },
}
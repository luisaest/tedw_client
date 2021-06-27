import HTTP from '../http';

export default {
    namespaced: true,
    state:{
        registerEmail: 'alexsald@itcelaya.edu.mx',
        registerPassword: '123',
        registerName: 'alex',
        registerDepartment: 'Sistemas'
    },
    actions: {
        register({ commit, state }) {
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
                department: state.registerDepartment,
                name: state.registerName,
                id_rol: 1,
                id_status: 1,
            });
        },
    },
    mutations: {
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
    },
}
<template>
    <div>
        <Nav></Nav>
        <div style="display:none;">{{this.id_user=$route.params.id}}</div>
        <h1 class="text-center">Modificar informacion </h1>
        <b-container v-for="(d,i) in this.data" :key="i">
                <b-form @submit="Save">
                    <b-form-group label="Nombre">
                        <b-form-input 
                        :value="d.name"
                        required>
                    </b-form-input>
                    </b-form-group>
                    <b-form-group label="Nombre de usuario">
                        <b-form-input 
                        :value="d.username"
                        required>
                    </b-form-input>
                    </b-form-group>
                    <b-form-group label="Email">
                        <b-form-input type="email"
                        :value="d.email"
                        required>
                    </b-form-input>
                    </b-form-group>
                    <b-form-group label="Password">
                        <b-form-input type="password">
                    </b-form-input>
                    </b-form-group>
                    <b-form-group label="Departamento">
                        <b-form-select class="form-control"
                        :options="departamentos"
                        required>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group label="Rol">
                        <select class="form-control">
                        <option :value="r.id" v-for="(r,i) in roles" :key="i">{{r.rol}}</option>
                    </select>
                    </b-form-group>
                    <b-form-group label="Estado">
                        <select class="form-control">
                        <option :value="e.id" v-for="(e,i) in estados" :key="i">{{e.status}}</option>
                    </select>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    
                </b-form>
        </b-container>
    </div>
</template>
<script>
import Nav from '@/components/Administrador/NavAdministrador.vue'
export default {
    components:{
        Nav,
    },
    data(){
        return{
            id_user:0,
            data:[],
            roles:[],
            estados:[],
            user:{
                id:0,
                username:'',
                email:'',
                password:'',
                name:'',
                departament:'',
                id_rol:0,
                id_status:0,
            },
            departamentos:[ 'Sistemas',
                            'Electronica',
                            'Industrial',
                            'Administración',
                            'Gestión',
                            'Química',
                            'Bioquímica',
                            'Mecanica',
                            'Mecatrónica',
                        ]
        }
    },
    methods:{
        async getUser(){
            const URL_SERVE='http://192.168.1.73:3333/api/auth/users/';
            const url=URL_SERVE+this.id_user;
            const resp=await fetch(url);
            this.data=await resp.json();
        },
        async getRols(){
            const URL_SERVE='http://192.168.1.73:3333/api/rols';
            const url=URL_SERVE;
            const resp=await fetch(url);
            this.roles=await resp.json();
            
        },
        async getStatus(){
            const URL_SERVE='http://192.168.1.73:3333/api/status';
            const url=URL_SERVE;
            const resp=await fetch(url);
            this.estados=await resp.json();
            
        },
        Save(event){
            alert(JSON.stringify(this.user))
        }
    },
    async mounted(){
        this.getUser();
        this.getRols()
        this.getStatus()
    }
}
</script>
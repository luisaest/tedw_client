<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Estudiantes y personal</h1>
        <b-row v-for="(us,i) in this.usuarios" :key="i">
            <v-col>
                Nombre de usuario: {{us.username}}
            </v-col>
            <v-col>
                Email: {{us.email}}
            </v-col>
            <v-col>
                Nombre: {{us.name}}
            </v-col>
            <v-col>
                Rol: {{us.rol}}
            </v-col>
            <v-col>
                <b-button  variant="outline-primary" :to="{name:'admin-edit',params:{id:us.id}}">Editar</b-button>
                <b-button variant="outline-danger" @click="Delete(us)">eliminar</b-button>
            </v-col>
        </b-row>
    </div>
</template>
<script>
import Nav from "@/components/Administrador/NavAdministrador.vue";
export default {
    components:{
        Nav,
    },
    data(){
        return{
            usuarios:null,
        }
    },
    methods:{
        async getUsers(){
            const BaseURL='http://192.168.1.73:3333/api/users/personal';
            const resp=await fetch(BaseURL);
            const data=await resp.json();
            this.usuarios=data;

        },
        Delete(user){
            let resp=confirm('Estas se guro que deseas eliminar al usuario'+user.username);
            if(resp){
                
            }
        },
    },
    async created(){
        this.getUsers();
    }
}
</script>
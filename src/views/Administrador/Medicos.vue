<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Medicos</h1>
        <b-container>
            <table class="table table-hover">
                <thead>
                    <th>Nombre</th>
                    <th>Nombre de usuario</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <tr v-for="(medico,index) in this.medicos" :key="index">
                        <td>{{medico.name}}</td>
                        <td>{{medico.username}}</td>
                        <td>{{medico.email}}</td>
                        <td>{{medico.rol}}</td>
                        <td>
                            <b-button variant="outline-primary">Editar</b-button>
                            <b-button variant="outline-danger">Eliminar</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </b-container>
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
            medicos:[],
        }
    },
    methods:{
        async getMedicos(){
            const URL='http://192.168.1.73:3333/api/users/medicos';
            const resp=await fetch(URL);
            this.medicos=await resp.json();
        }
    },
    async mounted(){
        this.getMedicos();
    },
}
</script>
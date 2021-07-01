<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Editar el medicamento</h1>
        <div style="display:none;">{{this.id=$route.params.id}}</div>
        <b-container>
            <b-form >
            <b-form-group label="Nombre del medicamento">
                <b-form-input
                :placeholder="medicina.name"
                v-model="nombre"
                required></b-form-input>
            </b-form-group>
            <b-button variant="outline-primary" type="submit">Guardar</b-button>
        </b-form>
        </b-container>
        
    </div>
</template>
<script>
import Nav from "@/components/Administrador/NavAdministrador.vue";
export default {
    components:{
        Nav,
    }
    ,
    data(){
        return{
            id: 0,
            medicina:[],
            nombre:'',
        }
    },
    methods:{
        async getMedicameto(){
            const URL_BASE='http://192.168.1.73:3333/api/medicine/'
            const url=URL_BASE+this.id;
            const resp=await fetch(url);
            this.medicina=await resp.json();
        }
    },
    async mounted(){
        this.getMedicameto();
    }
}
</script>
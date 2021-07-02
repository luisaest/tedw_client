<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Nuevo Medicamento</h1>
        <b-container>
            <b-form >
            <b-form-group label="Nombre del medicamento">
                <b-form-input
                placeholder="Nombre del medicamento"></b-form-input>
            </b-form-group>
            <b-button variant="outline-primary" @click="save()">Crear</b-button>
        </b-form>
        </b-container>
        
    </div>
</template>
<script>
import router from '@/router'
import Nav from "@/components/Administrador/NavAdministrador.vue";
export default {
    components:{
        Nav,
    }
    ,
    data(){
        return{

        }
    },
    methods:{
        save(){
            alert("Se ha regitrado el nuevo medicamento con exito");
            router.push("/admin");
        }

    },
    async mounted(){

    }
}
</script>
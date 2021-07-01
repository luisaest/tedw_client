<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Medicamentos</h1>
        <b-button :to="{name:'crear-medicina'}" variant="outline-primary" class="mb-2" >
            New <b-icon icon="plus-square" aria-hidden="true"></b-icon>
        </b-button>
        <b-container>
            <b-row v-for="(medicina,index) in medicinas" :key="index">
                <b-col>
                   <strong> <h5>Nombre del medicamento:</h5>  </strong> 
                    {{medicina.name}}
                </b-col>
                <b-col>
                    <b-button variant="outline-success" :to="{name:'edit-medicina', params:{id:medicina.id}}">Editar</b-button>
                </b-col>
                <b-col>
                    <b-button variant="outline-danger" @click="Delete(medicina)">Eliminar</b-button>
                </b-col>
            </b-row>
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
            medicinas:[],
        }
    },
    methods:{
        async getMedicinas(){
            const url='http://192.168.1.73:3333/api/medicine';
            const resp=await fetch(url);
            this.medicinas=await resp.json();
        },
        Delete(medicina){

        }
    },
    async mounted(){
        this.getMedicinas();
    }
}
</script>
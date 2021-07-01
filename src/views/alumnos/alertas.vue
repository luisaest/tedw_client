<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Mis Alertas</h1>
        <alerta/>
    </div>
</template>
<script>
import Nav from '@/components/alumnos/NavAlumno.vue'
import alerta from '@/components/alumnos/Alerta.vue'
export default {
    name:'alertas',
    data(){
        return{

        }
    },
    methods:{
        
    },
    components:{
        Nav,
        alerta,
    }
}
</script>
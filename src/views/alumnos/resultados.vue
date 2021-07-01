<template>
    <div>
        <Nav></Nav>
        <div >dvfvb</div>
        <h1 class="text-center">Resultados de encuestas y consultas {{$route.params.id}}</h1>
        <Resultados :id_user="id_user"/>
    </div>
</template>
<script>
import Nav from '@/components/alumnos/NavAlumno.vue'
import Resultados from '@/components/alumnos/ResultadosAlumno.vue'

export default {
    name:'resultados',
    data:()=>({
        id_user: 1,
    }),
    components:{
        Nav,
        Resultados,
    },
}
</script>
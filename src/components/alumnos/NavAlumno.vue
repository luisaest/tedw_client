<template>
    <div>
       <b-navbar toggleable="lg" type="light" variant="info">
      <b-container>
        <b-navbar-brand :to="{name:'alumno'}">
          <b-img :src="require('../../assets/imgAlumno/TecNM_logo.png')" height='60' alt="logo"></b-img>
        </b-navbar-brand>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
           <b-navbar-nav>
             <b-nav-item :to="{name:'encuesta-alumno'}">Encuesta</b-nav-item>
             <b-nav-item :to="{name:'alertas-alumno'}">Alertas</b-nav-item>
             <b-nav-item :to="{name:'resultados-alumno',params:{id:id}}">Resultados</b-nav-item>
             <b-nav-item :to="{name:'consulta-alumno'}">Consulta</b-nav-item>
           </b-navbar-nav>
           <b-navbar-nav class="ml-auto">
             <b-nav-item-dropdown v-bind:text="nombre" right>
               <b-dropdown-item>Ajustes</b-dropdown-item>
               <b-dropdown-item @click="logout">Salir</b-dropdown-item>
             </b-nav-item-dropdown>
           </b-navbar-nav>
         </b-collapse>
      </b-container>
    </b-navbar>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavAlumno',
   data(){
        return{
            nombre:'Alumno'
        }
    },
    methods: {
      ...mapActions('authentication', [
        'logout'
      ]),
    },
}
</script>
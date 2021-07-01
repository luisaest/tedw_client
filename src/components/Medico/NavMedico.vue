<template>
    <div>
       <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand >
            <router-link to="medic">
              <b-img :src="require('../../assets/imgAlumno/TecNM_logo.png')"  height='60'></b-img>
            </router-link>
          </b-navbar-brand>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
           <b-navbar-nav>
             <b-nav-item :to="{name:'encuesta'}">Encuesta</b-nav-item>
             <b-nav-item :to="{name:'consultas'}">Consultas</b-nav-item>
             <b-nav-item :to="{name:'pruebas'}">Pruebas</b-nav-item>
           </b-navbar-nav>
           <b-navbar-nav class="ml-auto">
             <b-nav-item-dropdown text="Nombre del medico" right>
               <b-dropdown-item>Ajustes</b-dropdown-item>
               <b-dropdown-item  @click="logout">Salir</b-dropdown-item>
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
  name: 'NavMedico',
   methods: {
      ...mapActions('authentication', [
        'logout'
      ]),
    },
}
</script>
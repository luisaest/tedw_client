<template>
    <div>
       <b-navbar toggleable="lg" type="light" variant="info">
      <b-container>
        <b-navbar-brand :to="{name:'admin'}">
          <b-img :src="require('../../assets/imgAlumno/TecNM_logo.png')" height='60' alt="logo"></b-img>
        </b-navbar-brand>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
           <b-navbar-nav>
             <b-nav-item :to="{name:'admin-personal'}">Estudiantes y personal</b-nav-item>
             <b-nav-item :to="{name:'admin-medicamentos'}">Medicamentos</b-nav-item>
             <b-nav-item :to="{name:'admin-medicos'}">Medicos</b-nav-item>
             <b-nav-item :to="{name:'admin-reportes'}">Reportes</b-nav-item>
           </b-navbar-nav>
           <b-navbar-nav class="ml-auto">
             <b-nav-item-dropdown v-bind:text="nombre" right>
               <b-dropdown-item>Ajustes</b-dropdown-item>
               <b-dropdown-item>Salir</b-dropdown-item>
             </b-nav-item-dropdown>
           </b-navbar-nav>
         </b-collapse>
      </b-container>
    </b-navbar>
    </div>
</template>
<script>
export default {
    name:'NavAdmin',
    data(){
        return{
            nombre:'Administrador',
        }
    }
}
</script>
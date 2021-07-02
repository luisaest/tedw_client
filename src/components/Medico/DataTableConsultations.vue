<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1 mt-10"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  >
  <template v-slot:top>
    <v-toolbar
          flat
        >
      <v-toolbar-title>Consultas</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
    </v-toolbar>
    </template>
  </v-data-table>
        
</template>

<script>
  export default {
    data: () => ({
      headers: [
        {
          text: 'ID Consulta',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Departamento', value: 'department' },
        { text: 'Sintomas', value: 'symptoms' },
        { text: 'Día', value: 'date' },
        { text: 'Hora', value: 'hour' },
        { text: 'Tipo de Consulta', value: 'type_consultation' },
        
        
      ],
      desserts: [],
     
    }),
    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        try {
				const data = await fetch(
					`http://192.168.1.73:3333/api/consultationDT`
				);
				const array = await data.json();
				this.desserts = array;
			} catch (error) {
				console.log(error);
			}
      },
    },
  }
</script>

<style>

</style>
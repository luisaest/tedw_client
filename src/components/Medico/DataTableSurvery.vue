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
      <v-toolbar-title>Encuestas</v-toolbar-title>
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
        { text: 'Día', value: 'date' },
        { text: 'Modalidad', value: 'modality' },
        { text: 'Nombre', value: 'name' },
        { text: 'Departamento', value: 'department' },
        
        
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
					`http://192.168.1.73:3333/api/surveyDT`
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
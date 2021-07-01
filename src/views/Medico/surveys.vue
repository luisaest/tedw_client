<template>
  <div>
      <header>
          <NavMedico/>
      </header>
      <main>
          <DataTableSurvery/>
      </main>
  </div>
</template>

<script>
import DataTableSurvery from '../../components/Medico/DataTableSurvery.vue'
import NavMedico from '../../components/Medico/NavMedico.vue'
export default {
  components: { NavMedico, DataTableSurvery },

}
</script>

<style>

</style>
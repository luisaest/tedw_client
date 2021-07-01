<template>
  <div>
      <header>
          <NavMedico/>
      </header>
      <main>
          <DataTableConsultations/>
      </main>
  </div>
</template>

<script>
import DataTableConsultations from '../../components/Medico/DataTableConsultations.vue'
import NavMedico from '../../components/Medico/NavMedico.vue'
export default {
  components: { NavMedico, DataTableConsultations },

}
</script>

<style>

</style>
<template>
  <div>
      <header>
          <NavMedico/>
      </header>
      <main>
          <DataTableEncuesta/>
      </main>
  </div>
</template>

<script>
import DataTableEncuesta from '../../components/Medico/DataTableEncuesta.vue'
import NavMedico from '../../components/Medico/NavMedico.vue'
export default {
  components: { NavMedico, DataTableEncuesta },

}
</script>

<style>

</style>
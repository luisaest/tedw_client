<template>
    <div>
        <Nav/>
        <br><br>
        <Tarjetas/>
    </div>
</template>
<script>

import Nav from '@/components/Medico/NavMedico.vue'
import Tarjetas from '@/components/Medico/Tarjetas.vue'

export default {
  name: 'NavMedico',
  components: {
    Nav,
    Tarjetas
  }
}
</script>
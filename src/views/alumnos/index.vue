<template>
    <div>
        <Nav/>
        <Tarjetas/>
    </div>
</template>
<script>

import Nav from '@/components/alumnos/NavAlumno.vue'
import Tarjetas from '@/components/alumnos/Tarjetas.vue'

export default {
  name: 'alumno',
  components: {
    Nav,
    Tarjetas
  }
}
</script>
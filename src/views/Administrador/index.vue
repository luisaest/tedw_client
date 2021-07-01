<template>
    <div>
        <Nav></Nav>
        <Tarjetas/>
    </div>
</template>
<script>
import Nav from "@/components/Administrador/NavAdministrador.vue";
import Tarjetas from "@/components/Administrador/Tarjetas.vue";
export default {
    components:{
        Nav,
        Tarjetas,
    }
}
</script>
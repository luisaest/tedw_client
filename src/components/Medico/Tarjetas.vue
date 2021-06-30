<template>
    <div>
    <b-container>
        <b-card-group deck class="wripper"> 
            <b-card 
            title="Encuesta" 
            img-src="https://image.flaticon.com/icons/png/512/2279/2279095.png"
            img-top
            style="max-width: 15rem;"
            class="mb-2">
                <b-card-text>
                Encuestas de estudiantes y personal.
                </b-card-text>
                <b-button pill variant="outline-secondary" :to="{name:'encuesta'}">Acceder</b-button>
            </b-card>

            <b-card 
            title="Consulta" 
            img-src="https://image.flaticon.com/icons/png/512/4228/4228730.png"
            img-top
            style="max-width: 15rem;"
            class="mb-2">
                <b-card-text>
                Consultas de estudiantes y personal.
                </b-card-text>
                <b-button pill variant="outline-secondary" :to="{name:'consulta'}">Acceder</b-button>
            </b-card>

            <b-card 
            title="Pruebas" 
            img-src="https://image.flaticon.com/icons/png/512/4119/4119213.png"
            img-top
            style="max-width: 15rem;"
            class="mb-2">
                <b-card-text>
                Pruebas de estudiantes y personal.
                </b-card-text>
                <b-button pill variant="outline-secondary" :to="{name:'pruebas'}">Acceder</b-button>
            </b-card>
        </b-card-group>
    </b-container>
    
    </div>
</template>
<script>
export default {
    name:'TarjetasMedico'
}
</script>
<style>
    .wripper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap:10px;
    }

</style>
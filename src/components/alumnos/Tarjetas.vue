<template>
    <div>
        <h1 style="text-align:center;">Que deseas hacer?...</h1>
        <b-row class="justify-content-md-center">
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="require('../../assets/imgAlumno/encuesta.png')" height='200' alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Encuesta">
                        <b-card-text>
                            Descripcion de la encuesta
                        </b-card-text>
                        <b-button :to="{name:'encuesta-alumno'}" variant="info">Contestar encuesta</b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="require('../../assets/imgAlumno/consulta.png')" height='200' alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Solicitar consulta">
                        <b-card-text>
                            Descripcion de la consulta
                        </b-card-text>
                        <b-button :to="{name:'consulta-alumno'}" variant="info">Solicitar consulta</b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="require('../../assets/imgAlumno/alertas.png')" height='200' alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Alertas">
                        <b-card-text>
                            Descripcion de las alertas
                        </b-card-text>
                        <b-button :to="{name:'alertas-alumno'}" variant="info">Revisar alertas</b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="require('../../assets/imgAlumno/resultados.jpg')" height='200' alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Resultados">
                        <b-card-text>
                            Descripcion de los resultados
                        </b-card-text>
                        <b-button :to="{name:'resultados-alumno',params:{id:id}}" variant="info">Ver resultados</b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    
    name:'TarjetasAlumno',
    data(){
        return{
            id:1,
        }
    }
}
</script>
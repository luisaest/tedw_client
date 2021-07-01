<template>
<div>
    <b-container>
        <div>
            <h1 style="text-align:center;">Bienvenido a la vista de Administrador, Que deseas hacer?</h1>
            <b-row class="justify-content-md-center">
                <b-col>
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="require('../../assets/imgAlumno/encuesta.png')" height='200' alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Estudiantes y personal">
                            <b-card-text>
                                Puedes gestionar la informacion de los estudiantes y el personal de la institucion
                            </b-card-text>
                            <b-button :to="{name:'admin-personal'}" variant="info">Acceder</b-button>
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
                            <b-card-body title="Medicamentos">
                            <b-card-text>
                                Puedes agregar, eliminar y modificar los medicamentos en la base de datos
                            </b-card-text>
                            <b-button :to="{name:'admin-medicamentos'}" variant="info">Acceder</b-button>
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
                            <b-card-body title="Medicos">
                            <b-card-text>
                                Puedes getionar la informacion de los medicos
                            </b-card-text>
                            <b-button :to="{name:'admin-medicos'}" variant="info">Acceder</b-button>
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
                            <b-card-body title="Reportes">
                            <b-card-text>
                                Puedes visualizar todos los reportes
                            </b-card-text>
                            <b-button :to="{name:'admin-reportes'}" variant="info">Acceder</b-button>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </b-container>
</div>
    
     
</template>
<script>
export default {
    name:'TarjetasAdmin'
}
</script>
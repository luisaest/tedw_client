<template>
    <div>
        <v-row v-for="(t,i) in this.Tipos" :key="i" justify="center">
            <v-col>
                Id del usuario: {{t.id_user}}
            </v-col>
          <v-col>
            Fecha de consulta: {{ t.date}}
          </v-col>
          <v-col>
              Sintomas: {{t.symptoms}}
          </v-col>
          <v-col>
              <b-button size="lg"  variant="primary">Imprimir receta</b-button>
          </v-col>
        </v-row>
    </div>
</template>
<script>
const SERVER_URL="http://localhost:3333/api/private_consultation/";
export default {
    name:'ResultadosAlumno',
    data(){
        return{
            Tipos:null,
            id: this.id_user,
        }
    },
    methods:{
        async getTypeConsultation(){
            const url=SERVER_URL+this.id;
            const res= await fetch(url);
            const tipos=await res.json();
            this.Tipos=tipos;
        },
    },
    async mounted(){
        this.getTypeConsultation();
    },
    props:['id_user']
}
</script>
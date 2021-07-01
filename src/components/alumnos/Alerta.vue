<template>
    <div>
        <b-container>
            <b-alert v-for="(al,i) in this.Alerta" :key="i" show variant="danger" >
                <v-row>
                    <v-col>
                        Fecha: {{al.created_at}}
                    </v-col>
                    <v-col>
                        Para: {{al.email}}
                    </v-col>
                    <v-col>
                        Asunto: {{al.alert}}
                    </v-col>
                    
                </v-row>
            </b-alert>
        </b-container>
        
    </div>
</template>
<script>
const SERVER_URL="http://192.168.1.73:3333/api/alerts";
export default {
    name:'Alertas',
    data(){
        return{
            Alerta:[],
        }
    },
    methods:{
        async getAlerts(){
            const url=SERVER_URL;
            const res= await fetch(url);
            const alertas=await res.json();
            this.Alerta=alertas;
        },
    },
    async mounted(){
        this.getAlerts();
    }

}
</script>
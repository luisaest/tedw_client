<template>
    <div>
        <Nav></Nav>
        <h1 class="text-center">Solicitar Consultas</h1>
        <div class="center">
            <b-img center :src="require('../../assets/imgAlumno/consulta.png')" height='250' rounded></b-img>
        </div>
        <div class=" container">
            <b-form @submit="Enviar" @reset="Reset">
                <b-form-group>
                    <h4>Sintomas</h4>
                    <b-form-textarea
                    v-model="sintomas"
                    placeholder="Describa sus sintomas"
                    required
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group>
                    <h4>Desea que su cita sea...</h4>
                    <b-form-select class="form-control" v-model="consulta" :options="opciones" required></b-form-select>
                </b-form-group>
                <b-form-group>
                    <h4>Evidencias de sus sintomas</h4>
                    <span>Las evidencias deben ser imagenes o videos</span>
                    <b-form-file  v-model="file1" class="mt-3 form-control" plain></b-form-file>
                    <b-form-file  v-model="file2" class="mt-3 form-control" plain></b-form-file>
                    <b-form-file  v-model="file3" class="mt-3 form-control" plain></b-form-file>
                </b-form-group>
                <div class="text-center m-4">
                     <b-button  type="submit"  variant="primary">Solicitar</b-button>
                    <b-button  type="reset" variant="danger">Cancelar</b-button>
                </div>
            </b-form>
        </div>
    </div>
</template>
<script>
import Nav from '@/components/alumnos/NavAlumno.vue'
export default {
    name:'consulta',
    data(){
        return{
                sintomas:'',
                file1:null,
                file2:null,
                file3:null,
                consulta:'',
            opciones:[
                {value:null,text:'Seleccione una opcion'},
                {value:'Virtual',text:'Virtual'},
                {value:'Presencial',text:'Presencial'},
            ],
        }
    },
    components:{
        Nav,
    },
    methods:{
        Enviar(){
            alert(this.sintomas);
        },
        Reset(){
            console.log("hola");
        }
    }
}
</script>
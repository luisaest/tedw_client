<template>
<div id="encuesta">
    <Nav ></Nav>
    <b-container fluid="md" class="p3">
        <h1 class="text-center">Encuestas</h1>
        <div class="center">
            <b-img center :src="require('../../assets/imgAlumno/encuesta.png')" height='250' rounded></b-img>
        </div>
        <b-alert show variant="danger" class=" m-3 text-center">Tener dos o más de los siguientes síntomas justifica la ausencia o retiro inmediato de la Institución.</b-alert>
        <div class="p-3">
            <b-form @submit="Enviar" @reset="Reset" >
                <label class="mr-sm-2" for="Answer1">¿Siente fiebre, escalofríos como los de una gripe, o una fiebre
                con una temperatura tomada por la boca de 38,1°C (100,6°F)
                o más?</label>
                <b-form-radio-group v-model="Answer1" :options="opciones" class="" required></b-form-radio-group>
            <hr>
                <label class="mr-sm-2" for="Answer2">
                ¿Ha tenido una pérdida repentina del olfato sin congestión
                nasal (nariz tapada), con o sin pérdida del gusto?
                </label>
                <b-form-radio-group v-model="Answer2" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer3">
                ¿Ha desarrollado una tos o su tos crónica ha empeorado
                recientemente?
                </label>
                <b-form-radio-group v-model="Answer3" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer4">
                ¿Ha desarrollado una tos o su tos crónica ha empeorado
                recientemente?
                </label>
                <b-form-radio-group v-model="Answer4" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer5">
                ¿Tiene problemas al respirar o le falta el aliento? 
                </label>
                <b-form-radio-group v-model="Answer5" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer6">
                ¿Tiene dolor de garganta? 
                </label>
                <b-form-radio-group v-model="Answer6" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer7">
                ¿Tiene secreción o congestión nasal de causa desconocida? 
                </label>
                <b-form-radio-group v-model="Answer7" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer8">
                Dolor de estómago
                </label>
                <b-form-radio-group v-model="Answer8" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer9">
                Náuseas o vómitos
                </label>
                <b-form-radio-group v-model="Answer9" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer10">
                Diarrea
                </label>
                <b-form-radio-group v-model="Answer10" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer11">
                Fatiga inusualmente intensa sin razón obvia
                </label>
                <b-form-radio-group v-model="Answer11" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer12">
                Pérdida significativa de apetito
                </label>
                <b-form-radio-group v-model="Answer12" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer13">
                Dolores musculares generalizados inusuales o sin razón obvia
                (no relacionado con el esfuerzo físico)
                </label>
                <b-form-radio-group v-model="Answer13" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <label class="mr-sm-2" for="Answer14">
                Dolor de cabeza inhabitual 
                </label>
                <b-form-radio-group v-model="Answer14" :options="opciones" class="mb-2 mr-sm-2 mb-sm-0" required></b-form-radio-group>
                <hr>
                <h3>Otros sintomas</h3>
                <label class="mr-sm-2" for="Answer15">
                Describa si tiene otros sintomas
                </label>
                <b-form-textarea size="sm" v-model="Answer15" placeholder="Describa sus sintomas"></b-form-textarea>
                <hr>
                <div class="text-center">
                    <b-row>
                        <b-col>
                            <b-button size="lg" type="submit" variant="success">Enviar</b-button>
                        </b-col>
                        <b-col>
                            <b-button size="lg" type="reset" variant="primary">Borrar</b-button>
                        </b-col>
                    </b-row>  
                </div>
            </b-form>
        </div>
    </b-container>
    
</div>
    
</template>
<script>
import router from '@/router'
import Nav from '@/components/alumnos/NavAlumno.vue'
export default {
    name:'encuesta',
    data(){
        return{
                Answer1:null,
                Answer2:null,
                Answer3:null,
                Answer4:null,
                Answer5:null,
                Answer6:null,
                Answer7:null,
                Answer8:null,
                Answer9:null,
                Answer10:null,
                Answer11:null,
                Answer12:null,
                Answer13:null,
                Answer14:null,
                Answer15:'',
                opciones:[
                    {value:'Si',text:'Si'},
                    {value:'No',text:'No'},
                ]
        }
    },
    methods:{
        Enviar(event){
            alert("Su encuesta ha sido enviada");
            router.push('/alumno')
        },
        Reset(event){
            
        }
    },
    components:{
        Nav,
    }
}
</script>


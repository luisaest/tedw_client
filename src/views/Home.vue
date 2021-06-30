<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Bienvenido a aksdmask</h1>
                        <div class="text-center mt-4">
                          <v-avatar size="68px" >
                            <img src="https://image.flaticon.com/icons/png/512/1869/1869354.png">
                          </v-avatar>

                          <v-avatar size="68px" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7DN2LCWRpebScAFFD1TH2fTuxfx6J9dnfhOtW2OSfPDYa1nnhqyUer_0NmxxjNQEXfU&usqp=CAU">
                          </v-avatar>
                          
                          <v-avatar size="68px"  >
                            <img src="https://i.pinimg.com/originals/e4/47/c2/e447c2346721248a29b8003706d507b8.png">
                          </v-avatar>
                        </div>
                        <h4 class="text-center mt-4">Inicia sesión con tu correo institucional</h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            :value="loginEmail"
                            @input = "setLoginEmail"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            :value="loginPassword"
                            @input = "setLoginPassword"
                          />
                        </v-form>
                        
                        <h3 class="text-center mt-4">¿Olvidaste tu contraseña?</h3>
                        <v-alert type="error" :value="loginError">
                          {{loginError}}
                        </v-alert>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark @click="login();">Iniciar sesión</v-btn>
                      </div>
                      <br>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">¡Hola Lince!</h1>
                        <h5
                          class="text-center"
                        >Esta aplicación nos ayudará a mantener una comunidad estudiantil segura</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">¡Bienvenido!</h1>
                        <h5
                          class="text-center"
                        >Por favor crea tu cuenta con tus datos correctos y correo institucional</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Iniciar sesión</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Crea tu cuenta</h1>
                        <div class="text-center mt-4">
                          <v-avatar size="68px" >
                            <img src="https://image.flaticon.com/icons/png/512/1869/1869354.png">
                          </v-avatar>

                          <v-avatar size="68px" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7DN2LCWRpebScAFFD1TH2fTuxfx6J9dnfhOtW2OSfPDYa1nnhqyUer_0NmxxjNQEXfU&usqp=CAU">
                          </v-avatar>
                          
                          <v-avatar size="68px"  >
                            <img src="https://i.pinimg.com/originals/e4/47/c2/e447c2346721248a29b8003706d507b8.png">
                          </v-avatar>
                        </div>
                        <h4 class="text-center mt-4"></h4>
                        <v-form>
                          <v-text-field
                            label="Nombre"
                            name="Nombre"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            :value="registerName"
                            @input = "setRegisterName"
                          />
                          <v-text-field
                            label="Correo"
                            name="Correo"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                             :value="registerEmail"
                             @input = "setRegisterEmail"
                          />

                          <v-text-field
                            id="contraseña"
                            label="Contraseña"
                            name="contraseña"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                             :value="registerPassword"
                             @input = "setRegisterPassword"
                          />

                           <v-select
                            prepend-icon="badge"
                            type="select"
                            :items= "items"
                            :rules="[v => !!v || 'Item is required']"
                            label="Departamento"
                            required
                            :value="registerDepartment"
                            @input = "setRegisterDepartment"
                          ></v-select>
                        </v-form>
                        <v-alert type="error" :value="registerError">
                          {{registerError}}
                        </v-alert>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark @click="register">Registrarse</v-btn>
                      </div>
                      <br>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerName',
      'registerDepartment',
      'registerError',
      'loginEmail',
      'loginPassword',
      'loginError',
    ]),
  },
  methods:{
  ...mapMutations('authentication', [
      'setRegisterEmail', 'setRegisterPassword',
      'setRegisterName', 'setRegisterDepartment',
      'setLoginEmail', 'setLoginPassword']),
  ...mapActions('authentication', [
      'register',
      'login',
      'search_user',
  ])
  },
  data: () => ({
    items: [
        'Sistemas',
        'Electronica',
        'Industrial',
        'Administración',
        'Gestión',
        'Química',
        'Bioquímica',
        'Mecanica',
        'Mecatrónica',
      ],
    step: 1,
  }),
  props: {
    source: String
  },
  
  
};
</script>
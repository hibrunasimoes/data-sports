<template>
  <section class="setup">
    <div class="section-header">
      <h4>Entre em contato</h4>
      <i class="fa-duotone fa-quotes"></i>
      <p></p>
    </div>
    <div class="container rounded-4 p-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-6">
          <img class="contact-us align-center" src=".././assets/image/undraw_projections_re_ulc6.svg" alt="">
        </div>
        <div class="col-lg-6">
          <h3>Fale conosco</h3>
          <small class="my-2 text-muted">Cadastre-se para receber...</small>
          <div class="mb-3">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <input type="text"
                  v-model="state.name.value"
                  :class="{'border-brand-danger': !!state.name.errorMessage}"
                  name="name"
                  placeholder="Nome"
                  class="form-control shadow-none rounded-pill">
                <span v-if="!!state.name.errorMessage" class="block font-medium text-brand-danger">
                  {{ state.name.errorMessage }}
                </span>
              </div>
              <div class="mb-3">
                <input type="text"
                  v-model="state.email.value"
                  :class="{'border-brand-danger': !!state.email.errorMessage}"
                  name="email"
                  placeholder="nome@email.com"
                  class="form-control shadow-none rounded-pill">
                <span id="email-error" v-if="!!state.email.errorMessage" class="block font-medium text-brand-danger">
                  {{ state.email.errorMessage }}
                </span>
              </div>
              <div class="mb-3">
                <input type="text"
                  v-model="state.phoneNumber.value"
                  :class="{'border-brand-danger': !!state.phoneNumber.errorMessage}"
                  name="phoneNumber"
                  placeholder="Telefone"
                  class="form-control shadow-none rounded-pill">
                <span id="phone-error" v-if="!!state.phoneNumber.errorMessage" class="block font-medium text-brand-danger">
                  {{ state.phoneNumber.errorMessage }}
                </span>
              </div>
              <div class="mb-3">
                <button type="submit"
                  :disabled="state.isLoading"
                  :class="{'opacity-50': state.isLoading}"
                  class="btn btn-purple shadow-none rounded-pill w-100">
                  Cadastre-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import  { reactive }  from 'vue'
import { useField } from 'vee-validate'
import { emailEmpty, validateName, phoneNumber} from '../utils/validatorsform.js'

 export default {
 name: "FormPage",
 setup() {
  const {
    value: emailValue,
    errorMessage: emailErrorMessage
   } = useField('email', emailEmpty)
const {
  value: nameValue,
  errorMessage: nameErrorMessage
} = useField('name', validateName)
    const {
    value: phoneNumberValue,
    errorMessage: phoneNumberErrorMessage
   } = useField('phoneNumber', phoneNumber)
  const state = reactive({
    hasErrors: false,
    isLoading: false,
    email: {
      value: emailValue,
      errorMessage: emailErrorMessage
    },
      name: {
      value: nameValue,
      errorMessage: nameErrorMessage
    },
     phoneNumber: {
      value: phoneNumberValue,
      errorMessage: phoneNumberErrorMessage
    },
  })
   function handleSubmit () {
   }
   return {
     state,
     handleSubmit
   }
 },
     methods: {
      scrollToTop(){
        let currentScroll = document.documentElement.scrollTop,
          int = setInterval(frame, 2)
          
          function frame(){
              if( 0 > currentScroll)
                  clearInterval(int)
                  
              else {
                  currentScroll = currentScroll - 12
                  document.documentElement.scrollTop = currentScroll
              }
          }
      }
    },
}
</script>

<style scoped>
.contact-us {
  width: 500px;
}

section.setup {
  padding: 5rem 0;
}
.align-right {
  float: right;
}
.btn-purple {
  color: #fff;
  background-color: #6f42c1;
  border-color: #61129F;
  
}
.scroll-to-top {
  padding: 30px 0;
  position: absolute;
  right: 0;
}
.scroll-to-top button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.btn-purple:hover {
  background-color: #6f42c1;
  color: #fff;
}

</style>
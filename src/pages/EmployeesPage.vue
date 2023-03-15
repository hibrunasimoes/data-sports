<template>
  <div class="container">
        <div class="section-header">
          <h4> Colaboradores</h4>
          <i class="fa-duotone fa-quotes"></i>
          <p> Nossos funcionários possuem ampla experiência no mercado de análise de desempenho esportivo.</p>
        </div>
        <br>
    <div class="table-responsive shadow-4 rounded-5 overflow-hidden ">
      <table class="table align-middle mb-0 bg-white table-responsive-sm">
        <thead class="bg-light">
          <tr>
            <th class="col-md-3">Nome</th>
            <th class="col-md-3">Título</th>
            <th class="col-md-3">Status</th>
            <th class="col-md-3">Nivel</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employe in employess" :key="employe.name">
            <td class="col-md-3">
              <div class="d-flex align-items-center">
                <img
                  alt=""
                  style="width: 45px; height: 45px"
                  class="rounded-circle"
                  :src="employe.adressImage"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">{{employe.name}}</p>
                  <p class="text-muted mb-0">{{employe.email}}</p>
                </div>
              </div>
            </td>
            <td class="col-md-3">
              <p class="fw-bold mb-1">{{employe.role}}</p>
              <p class="text-muted mb-0">{{employe.department}}</p>
            </td>
            <td class="col-md-3">
              <span
                class="badge bg-success rounded-pill"
                style="opacity: 0.5;"
              >{{employe.status}}</span>
            </td>
            <td class="col-md-3">{{employe.position}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  name: "EmployeesPage",
    data () {
    return {
      employess:[],
    }
  },
  async mounted() {
  try {
    const response = await fetch('http://localhost:3000/employess');
    const data = await response.json();
    this.employess = data;
  } catch (error) {
    console.error(error);
  }
}
}
</script>

<style>


.section-header {
  margin-bottom: 6opx;
}
.section-header h4{
  position: relative;
  padding: 0;
  color:#010101;
  line-height: 1;
  letter-spacing: 0.3px;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  text-transform: none;
  margin-bottom: 30px;

}
.section-header h4::before {
  content: '';
  width: 60px;
  height: 3px;
  background: #61129F;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.section-header p {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: gray;
}


</style>

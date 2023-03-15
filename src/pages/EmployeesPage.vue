<template>
    <div class="container my-5">
    <div class="text-header text-center">
      <h3>Conheca nossos funcionarios</h3>
    </div>
    <div class="shadow-4 rounded-5 overflow-hidden">
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Position</th>
          </tr>
        </thead>
         <tbody v-for="employe in employess" :key="employe.name">
          <tr>
            <td>
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
              <td>
              <p class="fw-bold mb-1">{{employe.role}}</p>
              <p class="text-muted mb-0">{{employe.department}}</p>
            </td>
            <td>
              <span class="badge bg-success rounded-pill " style="opacity: 0.6">{{employe.status}}</span>
            </td>
            <td>{{employe.position}}</td>
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

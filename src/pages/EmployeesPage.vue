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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                     src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                     alt=""
                     style="width: 45px; height: 45px"
                     class="rounded-circle"
                     />
                <div class="ms-3">
                  <p class="fw-bold mb-1">Bruna Simoes</p>
                  <p class="text-muted mb-0">bruna.simoesdoe@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-bold mb-1">Software engineer</p>
              <p class="text-muted mb-0">IT department</p>
            </td>
            <td>
              <span class="badge bg-success rounded-pill " style="opacity: 0.6">Active</span>
            </td>
            <td>Senior</td>
            <td>
              <button type="button" class="btn btn-link btn-sm btn-rounded">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                     src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                     class="rounded-circle"
                     alt=""
                     style="width: 45px; height: 45px"
                     />
                <div class="ms-3">
                  <p class="fw-bold mb-1">Alex Ray</p>
                  <p class="text-muted mb-0">alex.ray@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Consultant</p>
              <p class="text-muted mb-0">Finance</p>
            </td>
            <td>
              <span class="badge bg-primary rounded-pill " style="opacity: 0.3">Onboarding</span>
            </td>
            <td>Junior</td>
            <td>
              <button
                      type="button"
                      class="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      >
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                     src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                     class="rounded-circle"
                     alt=""
                     style="width: 45px; height: 45px"
                     />
                <div class="ms-3">
                  <p class="fw-bold mb-1">Bruna Simoes</p>
                  <p class="text-muted mb-0">bruna.simoes@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Tech Leader</p>
              <p class="text-muted mb-0">TI</p>
            </td>
            <td>
              <span class="badge bg-warning rounded-pill" style="opacity: 0.6" >Awaiting</span>
            </td>
            <td>Senior</td>
            <td>
              <button
                      type="button"
                      class="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                      >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeesPage"
}
</script>

<template>
  <NavBarComponent />
  <HeroPage />
  <SportsPage />
  <TestimonialsPage />
  <EmployeesPage />
  <FormPage />
  <FooterPage />
</template>

<script>
import NavBarComponent  from './components/NavBarComponent';
import EmployeesPage from './pages/EmployeesPage.vue';
import HeroPage from './pages/HeroPage.vue';
import TestimonialsPage from './pages/TestimonialsPage.vue';
import SportsPage from './pages/SportsPage.vue';
import FormPage from './pages/FormPage.vue';
import FooterPage from './pages/FooterPage.vue';

    

export default {
  components: {
    NavBarComponent,
    HeroPage,
    TestimonialsPage,
    EmployeesPage,
    SportsPage,
    FormPage,
    FooterPage,
  }
}
</script>
<style >
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
</style>


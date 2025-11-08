<template>
  <div class="d-flex" style="min-height: 100vh;">
    <SidebarComponent />
    
    <div class="flex-grow-1 d-flex flex-column">
      <NavbarComponent />
      
      <main class="p-4 flex-grow-1">
        <router-view></router-view>
      </main>

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import SidebarComponent from '../components/SidebarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'DashboardView',
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  }
};
</script>
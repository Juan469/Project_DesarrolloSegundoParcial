<template>
  <div class="dashboard-container">
    <NavbarComponent />
    
    <div class="dashboard-content">
      <SidebarComponent />
      
      <main class="main-content">
        <div class="content-wrapper">
          <router-view />
        </div>
        <FooterComponent />
      </main>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
}

.dashboard-content {
  display: flex;
  flex: 1;
  padding-top: 56px;
}

.main-content {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
}

.content-wrapper {
  flex: 1;
  padding: 20px;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
  
  .dashboard-content {
    flex-direction: column;
    padding-top: 56px;
  }
}
</style>
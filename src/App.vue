<template>
  <div class="app">
    <!-- Header -->
    <NavbarView />
    <!-- Content -->
    <div class="page-container px-md py-sm relative">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarView from './components/NavbarView.vue';
export default {
  components: {
    NavbarView,
  },
  setup() {
    return {

    }
  }
}
</script>
<template>
  <div id="app">
    <nav-menu/>
    <div class="container content">
      <router-view />
    </div>
    <app-footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~shared-ui/scss/gerdi.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>

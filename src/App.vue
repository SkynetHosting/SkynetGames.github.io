<template>
  <div id="app">
    <div class="header">
      <router-link to="/">Skynet</router-link>
      <router-link to="/donate">Donate</router-link>
      <router-link to="/downloads">Downloads</router-link>
      <router-link to="/games">Games</router-link>
      <router-link to="/software">Software</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "assets/scss/colors";
@import "assets/scss/fonts";

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html body #app {
  display: flex;
  flex-flow: column nowrap;

  background-color: $color-primary-light;

  .header {
    display: flex;
    flex-flow: row wrap;
    flex: 0 0 auto;

    background-color: $color-primary-dark;

    border-bottom: 3px solid;
    border-color: $color-primary;

    a {
      padding: 10px;

      color: white;

      font-family: $font-stack-main;
      font-size: 20px;
      text-decoration: none;

      transition: color 0.3s;

      &:hover {
        color: $color-secondary-light;
      }
    }

    .router-link-exact-active {
      text-decoration: overline;
    }
  }

  .content {
    flex: 1 1 auto;

    padding: 10px;
  }
}
</style>

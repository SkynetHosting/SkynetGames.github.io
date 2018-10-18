<template>
  <div id="app">
    <div class="header">
        <router-link to="/">Skynet</router-link>
        <router-link to="donate">Donate</router-link>
        <router-link to="/games">Games</router-link>
        <router-link to="/software">Software</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./assets/scss/variables";

  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    background-color: #B0BEC5;
  }

  html body #app {
    display: flex;
    flex-flow: column nowrap;

    .header {
      flex: 0 0 auto;
      display: flex;
      flex-flow: row nowrap;

      font-family: $font-stack-accent;
      font-size: 20px;

      background-color: #263238;
      border-bottom: solid 3px;
      border-color: #546E7A;

      a {
        margin: 0;
        padding: 10px;

        text-decoration: none;
        color: #ECEFF1;
      }

      .router-link-exact-active {
        text-decoration: overline;
      }
    }

    .content {
      flex: 1 1 auto;
    }
  }
</style>

<script>
export default {
  name: 'App'
}
</script>

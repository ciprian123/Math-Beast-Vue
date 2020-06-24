<template>
  <div id="app">
    <My-header />
    <router-view />
    <My-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'My-header': Header,
    'My-footer': Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: #263238;
}

.container-large {
  width: 95%;
  margin: auto;
}
.container-small {
  width: 30%;
  margin: auto;
}
</style>

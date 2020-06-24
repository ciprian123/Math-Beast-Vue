<template>
  <header>
    <div class='container-large'>
      <p id='logo-title'>{{ title }}</p>
        <nav>
          <router-link to='/' exact>Calculator</router-link>
          <router-link to='/CurrencyConverter' exact>Currency converter</router-link>
          <router-link to='/About' exact>About US</router-link>
        </nav>
      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Math-Beast'
    }
  }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 60px;
        background: #E65100;
        text-transform: uppercase;
    }
    
    #logo-title {
        padding: 0;
        margin: 0;
        color: white;
        font-size: 18px;
        float: left;
        margin-top: 15px;
    }

    nav {
        float: right;
        margin-top: 20px;
    }

    nav a {
        display: inline;
        text-decoration: none;
        color: white;
        margin: 0 25px;
    }

    .router-link-active {
        background: white;
        border-radius: 5px;
        color: #E65100;
        padding: 5px 15px;
        transition: .4s;
    }
</style>

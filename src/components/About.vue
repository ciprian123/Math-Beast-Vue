<template>
  <div class='about-area'>
    <div id='title-area'>
      <span id='title'>About this mini-project</span>
    </div>
    <div class='about-area-content'>
      <div class='container-medium'>
        <p>This simple project was made in order to learn the basics of vue js. It covers the concepts of components, router and single page application, and the resource package of vue.</p>
        <p>We use the resource package in order to perform requests and get data from an api for currency live exchange and use that data in our interface.</p>
        <p>The calculator component is a simple calculator and we can do there the basic math operations.</p>
        <p>The live currency converter is simple too, it uses data from 'https://api.exchangeratesapi.io/latest'.</p>
        <p>The design of this app si made in 'vanilla css' and not other frameworks were used so far.</p>
      </div>
    </div>
  </div>
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
    .about-area {
      width: 60%;
      margin: 100px auto 0 auto;
    }
    #title-area {
      padding: 23px 0;
      background: #E65100;
      border-radius: 3px 3px 0 0;
      text-align: center;
    }
    #title {
      font-size: 22px;
      color: white;
    }
    .about-area-content {
      background: white;
      padding: 32px 0 60px 0;
      border-radius: 0 0 3px 3px;
    }
</style>

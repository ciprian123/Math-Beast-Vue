<template>
  <footer>
    <div class='container-large'>
      <p id='copyright-title'>{{ title }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      title: 'Made and designed By Ciprian Ursulean (c) Math-Beast all rights reserved.'
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background: white;
  margin-top: 100px;
}
#copyright-title {
  padding: 0;
  margin: 0;
  color: #E65100;
  font-size: 16px;
  text-align: center;
  padding-top: 20px;
  font-weight: bold;
}
@media screen and (max-width: 720px) {
  header {
    height: 120px;
  }
}
@media screen and (max-width: 460px) {
  footer {
    height: 140px;
  }
}
</style>

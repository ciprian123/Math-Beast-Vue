<template>
  <div id='calculator'>
    <div class='container-small'>
      <div id='result'>
        <p v-if='result == ""'>0</p>
        <p v-else>{{ result }}</p>
      </div>
      <div id='calc-buttons'>
        <button class='btn' v-on:click='appendToResult("+")'>+</button>
        <button class='btn' v-on:click='appendToResult("-")'>-</button>
        <button class='btn' v-on:click='appendToResult("x")'>&times;</button>
        <button class='btn' v-on:click='appendToResult("/")'>%</button>
        <button class='btn' v-on:click='appendToResult("7")'>7</button>
        <button class='btn' v-on:click='appendToResult("8")'>8</button>
        <button class='btn' v-on:click='appendToResult("9")'>9</button>
        <button class='btn' v-on:click='appendToResult("0")'>0</button>
        <button class='btn' v-on:click='appendToResult("4")'>4</button>
        <button class='btn' v-on:click='appendToResult("5")'>5</button>
        <button class='btn' v-on:click='appendToResult("6")'>6</button>
        <button class='btn' v-on:click='appendToResult(".")'>.</button>
        <button class='btn' v-on:click='appendToResult("1")'>1</button>
        <button class='btn' v-on:click='appendToResult("2")'>2</button>
        <button class='btn' v-on:click='appendToResult("3")'>3</button>
        <button class='btn'>=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: ''
    }
  },
  methods: {
    appendToResult: function(chr) {
      if (this.result == '') {
        if (!this.isDigit(chr)) {
          return
        }
        this.result += chr
      }
      else {
        if (this.result.includes('.') && chr === '.') {
          return
        }
        let len = this.result.length
        if (this.isOperator(this.result[len - 1]) && this.isOperator(chr)) {
          this.result = this.result.substring(0, len - 1) + chr;
          return
        }
        if (this.result[0] == '0' && chr != '0' && chr != '.' && len == 1) {
          this.result = chr
          return
        }
        if (this.result[len - 1] == '0' && chr == '0' && len == 1) {
          return;
        }
        if (len > 1 && this.isOperator(this.result[len - 2]) && this.result[len - 1] == '0' && chr == '0') {
          return;
        }
        if (len > 1 && this.isOperator(this.result[len - 2]) && this.result[len - 1] == '0' && chr != '0') {
          this.result = this.result.substring(0, len - 1) + chr;
          return;
        }
        this.result += chr
      }
    },
    isDigit: function(chr) {
      return '0' <= chr && chr <= '9';
    },
    isOperator: function(chr) {
      return '+-x/='.includes(chr);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#result {
  margin-top: 100px;
  background: #E65100;
  padding: 15px 0;
  width: 100%;
  height: 80px;
  border-radius: 5px 5px 0 0;
}

#result p {
  text-align: right;
  margin-right: 12px;
  font-size: 32px;
  color: white;
}

#calc-buttons {
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 12px;
  border-radius: 0 0 5px 5px;
}

.btn {
  flex: 1 0 21%;
  height: 100px;
  background-color: #37474F;
  height: 50px;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 3px;
  margin: 1px;
  cursor: pointer;
  transition: .4s;
}

.btn:hover {
  background: #607D8B;
}
</style>

<template>
  <div id='calculator'>
    <div class='container-small'>
      <div id='result'>
        <p id='resultString' >{{ result }}</p>
      </div>
      <div id='calc-buttons'>
        <button class='btn' v-on:click='toogleSign'>+/-</button>
        <button class='btn' v-on:click='squareResult("x")'>&times;<sup>2</sup></button>
        <button class='btn' v-on:click='inverseResult("/")'>1/x</button>
        <button class='btn' v-on:click='clearResult'>CE</button>

        <button class='btn' v-on:click='appendToResult("+")'>+</button>
        <button class='btn' v-on:click='appendToResult("-")'>-</button>
        <button class='btn' v-on:click='appendToResult("*")'>&times;</button>
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
        <button class='btn' v-on:click='computeResult'>=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: '0',
      operators: '+-/x'
    }
  },
  methods: {
    adaptResultArea() {
      const resultString = document.querySelector('#resultString')
      console.log(resultString.offsetWidth)
    },
    appendToResult: function(chr) {
      this.adaptResultArea()
      if (this.result == '') {
        if (chr == '.') {
          this.result += '0.'
        }
        if (!this.isDigit(chr)) {
          return
        }
        this.result += chr
      }
      else {
        let len = this.result.length
        if (chr === '.') {
          let currentToken = ''
          let tmp = len
          // get current number token in order to verify if we already putted the '.'
          if (!this.getLastToken().includes('.')) {
            this.result += '.'
          }
          return
        }
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
      return this.operators.includes(chr);
    },
    toogleSign: function() {
      if (this.result == '0' || this.result == '') {
        return
      }
      let counter = 0
      for (let i = 0; i < this.operators.length; ++i) {
        if (this.result.includes(this.operators[i])) {
          counter++
        }
      }
      if (counter > 1 || counter == 1 && !this.isOperator(this.result[0])) {
        return
      }
      if (this.result[0] == '-') {
        this.result = this.result.substring(1);
      }
      else {
        this.result = '-' + this.result
      }
    },
    squareResult: function() {
      let lastToken = this.getLastToken()
      if (lastToken.length == this.result.length) {
        this.result = String(eval(this.result + '*' + this.result))
      } else {
        let lastTokenIndex = this.result.lastIndexOf(lastToken)
        console.log(lastTokenIndex + '#' + this.result.substring(0, lastTokenIndex))
        if (lastTokenIndex == 1 && this.result[0] == '-') {
          this.result = String(eval(this.result + '*' + this.result))
        } else {
          this.result = this.result.substring(0, lastTokenIndex) + eval(lastToken + '*' + lastToken)
        }
      }
    },
    inverseResult: function() {
      let lastToken = this.getLastToken()
      if (lastToken.length == this.result.length) {
        this.result = String(eval('1/' + this.result))
      } else {
        let lastTokenIndex = this.result.lastIndexOf(lastToken)
        this.result = this.result.substring(0, lastTokenIndex) + eval('1/' + lastToken)
      }
    },
    clearResult: function() {
      this.result = '0'
    },
    computeResult: function() {
      let solution = eval(this.result)
      this.result = String(isNaN(solution) ? '' : solution) 
    },
    getLastToken: function() {
      // cautam si returnam ultimul numar introdus, acesta fiind dat de maximul indicilor aparitiilor operatorilor
      let len = this.result.length
      let lastIndexOfAdd = this.result.lastIndexOf('+')
      let lastIndexOfSub = this.result.lastIndexOf('-')
      let lastIndexOfMul = this.result.lastIndexOf('*')
      let lastIndexOfDiv = this.result.lastIndexOf('/');
      let index = Math.max(Math.max(lastIndexOfAdd, lastIndexOfSub), Math.max(lastIndexOfMul, lastIndexOfDiv))
      return index >= 0 ? this.result.substring(index + 1) : this.result
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
  max-width: 95%;
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

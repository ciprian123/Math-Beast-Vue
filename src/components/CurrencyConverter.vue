<template>  
  <div id='currency-converter'>
    <div class='title'>
      <span>Currency converter</span>
    </div>
    <div class='input-area'>
    </div>
    <div class='conversion-area'>
      <div class='container-medium'>
        <div class='convert-from-area'>
          <label for='convert-from'>Choose currency to convert from:</label>
          <select ref='convertFromSelect' name='convert-from' id='convert-from'>
            <option v-for='unit in conversionUnits' v-bind:key='unit' v-bind:value='unit'>{{ unit }}</option>
          </select>
        </div>
      </div>
      <div class='container-medium'>
        <div class='convert-to-area'>
          <label for='convert-to'>Choose currency to convert to:</label>
          <select ref='convertToSelect' name='convert-to' id='convert-to'>
            <option v-for='unit in conversionUnits' v-bind:key='unit' v-bind:value='unit'>{{ unit }}</option>
          </select>
        </div>
      </div>
      <div class='result-area'>
        <div class='container-medium'>
        <button v-on:click='computeConversion' id='compute-conversion-btn'>Convert</button>
        </div>
      </div>
      <div id='result-label'>The result is: {{ result }}</div>
    </div>
  </div>
</template>

<script>
import config, { apiURL } from '../config'

export default {
  data() {
    return {
      result: '0',
      conversionUnits: []
    }
  },
  methods: {
    computeConversion: function() {
      const convertFromSelect = this.$refs.convertFromSelect
      const convertToSelect = this.$refs.convertToSelect

      const unitFrom = convertFromSelect.options[convertFromSelect.selectedIndex].value
      const unitTo = convertToSelect.options[convertToSelect.selectedIndex].value

      this.$http.get(`${apiURL}` + '?base=' + `${unitFrom}`)
                .then(response => {
                  this.result = response.body.rates[unitTo]
                })
    }
  },
  created: function() {
    this.$http.get(apiURL)
              .then(response => {
                this.conversionUnits = Object.keys(response.body.rates)
                this.conversionUnits.push('EUR')
              })
  }
}
</script>

<style scoped>
  #currency-converter {
    width: 50%;
    margin: auto;
    margin-top: 100px;
  }
  .title {
    width: 100%;
    background: #E65100;
    padding: 25px 0;
    text-align: center;
    border-radius: 3px 3px 0 0;
  }
  .title span {
    color: white;
    font-size: 22px;
  }
  .conversion-area {
    background: white;
    height: 200px;
    padding-top: 64px;
  }
  .convert-from-area select, .convert-to-area select {
    display: block;
    width: 100%;
    font-size: 16px;
    margin-top: 12px;
    text-align: center;
    padding: 5px 0;
  }
  .convert-from-area select option, .convert-from-area select option {
    text-align: center;
  }
  .convert-from-area {
    padding: 0 0 20px 0;
    margin-top: -32px;
  }
  .result-area {
    height: 150px;
    background: white;
    padding-top: 45px;
  }
  #compute-conversion-btn {
    display: block;
    margin: auto;
    width: 50%;
    padding: 8px 0;
    outline: none;
    border: none;
    background: #37474F;
    color: white;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    transition: .4s;
  }
  #compute-conversion-btn:hover {
    background: #607D8B;
  }
  #result-label {
    background: #E65100;
    color: white;
    text-align: center;
    padding: 25px 0;
    font-size: 22px;
    border-radius: 0 0 3px 3px;
    margin-top: -60px;
  }
</style>

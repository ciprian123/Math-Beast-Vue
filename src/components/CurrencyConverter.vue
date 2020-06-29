<template>  
  <div id='currency-converter'>
    <div class='title'>
      <span>Currency converter</span>
    </div>
    <div class='input-area'>
      <div class='container-medium'>
        <label for='amount-to-convert'>Enter the amount:</label>
        <input id='amount-input' type='number' required>
      </div> 
    </div>
    <div class='conversion-area'>
      <div class='container-medium'>
        <div class='convert-from-area'>
          <label for='convert-from'>Choose currency to convert from:</label>
          <select name='convert-from' id='convert-from'>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
      </div>
      <div class='container-medium'>
        <div class='convert-to-area'>
          <label for='convert-to'>Choose currency to convert to:</label>
          <select name='convert-to' id='convert-to'>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
      </div>
      <div class='result-area'>
        <div class='container-medium'>
        <button id='compute-conversion-btn'>Convert</button>
        </div>
      </div>
      <div id='result-label'>The result is: {{ result }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '0'
    }
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
  .input-area {
    height: 150px;
    padding-top: 32px;
    background: white;
  }
  #amount-input {
    display: block;
    margin-top: 12px;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #E65100;
    outline: none;
    text-align: right;
    font-size: 22px;
  }
  .conversion-area {
    background: white;
    height: 200px;
  }
  .convert-from-area select, .convert-to-area select {
    display: block;
    width: 100%;
    font-size: 16px;
    margin-top: 12px;
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
    margin-top: -50px;
  }
</style>

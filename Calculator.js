class Calculator {
  constructor() {
    document.getElementById('start').addEventListener('click', this.startCalc.bind(this))
    this.inputAge = document.getElementById('age');
    this.inputSex = document.getElementById('sex');
    this.inputWeight = document.getElementById('weight');
    this.inputLifestyle = document.getElementById('lifestyle');
    this.resultDiv = document.querySelector('.result');
  }

  startCalc() {
    if (this.inputAge.value && this.inputSex.value != "Sex" && this.inputWeight.value && this.inputLifestyle != 'Lifestyle') {
      if (this.inputAge.value >= 10 && this.inputAge.value <= 18) {
        if (this.inputSex.value === 'male') {
          let result = (this.inputWeight.value * 17.5) + 651;
          let lifestyleValue = this.inputLifestyle.value === 'sedentary' ? 1.4 : this.inputLifestyle.value === 'moderate' ? 1.7 : this.inputLifestyle.value === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          this.resultDiv.textContent = `${Math.floor(result)} kcal`;
        }
        if (this.inputSex.value === 'female') {
          let result = (this.inputWeight.value * 12.2) + 746;
          let lifestyleValue = this.inputLifestyle.value === 'sedentary' ? 1.4 : this.inputLifestyle.value === 'moderate' ? 1.7 : this.inputLifestyle.value === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          this.resultDiv.textContent = `${Math.floor(result)} kcal`;
        }
      }
      else if (this.inputAge.value >= 19 && this.inputAge.value <= 30) {
        if (this.inputSex.value === 'male') {
          let result = (this.inputWeight.value * 15.3) + 679;
          let lifestyleValue = this.inputLifestyle.value === 'sedentary' ? 1.4 : this.inputLifestyle.value === 'moderate' ? 1.7 : this.inputLifestyle.value === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          this.resultDiv.textContent = `${Math.floor(result)} kcal`;
        }
        if (this.inputSex.value === 'female') {
          let result = (this.inputWeight.value * 14.7) + 496;
          let lifestyleValue = this.inputLifestyle.value === 'sedentary' ? 1.4 : this.inputLifestyle.value === 'moderate' ? 1.7 : this.inputLifestyle.value === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          this.resultDiv.textContent = `${Math.floor(result)} kcal`;
        }
      }
      else if (this.inputAge.value >= 31 && this.inputAge.value <= 100) {
        if (this.inputSex.value === 'male') {
          let result = (this.inputWeight.value * 11.6) + 879;
          let lifestyleValue = this.inputLifestyle.value === 'sedentary' ? 1.4 : this.inputLifestyle.value === 'moderate' ? 1.7 : this.inputLifestyle.value === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          this.resultDiv.textContent = `${Math.floor(result)} kcal`;
        }
        if (this.inputSex.value === 'female') {
          let result = (this.inputWeight.value * 8.7) + 829;
          let lifestyleValue = this.inputLifestyle.value === 'sedentary' ? 1.4 : this.inputLifestyle.value === 'moderate' ? 1.7 : this.inputLifestyle.value === 'active' ? 2 : console.log('something wrong with the result');
          result = result * lifestyleValue;
          this.resultDiv.textContent = `${Math.floor(result)} kcal`;
        }
      }
      else {
        alert("Your age must be from 10 to 100, please put another age value.")
      }
    } else {
      alert('Please put all of the data.')
    }
  }
}

const calculator = new Calculator();
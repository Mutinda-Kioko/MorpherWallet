<template>
  <div>
    <div class="main">
  
  <div class="cardTop">
    
    <svg width="497" height="219" viewBox="0 0 497 219" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-38.5 196C-38.5 196 34 91 133.5 91C233 91 427 159 532.5 30C638 -99 518 236 518 236L-49 246.5L-38.5 196Z" fill="#FF768E"/>
</svg>
    
    
  
  </div>
  
  
    <div class="timeline">
      
      <h3> Instantly Purchase Coins</h3>  
      <div class="maininput">
        <input class="textinput" type="number" name="amountInput" v-model="amountInput" placeholder="KES"  @input="submitAmount" />
        <img class="image" src="https://p7.hiclipart.com/preview/885/544/999/flag-of-kenya-wikimedia-commons-flag-of-saint-vincent-and-the-grenadines-flag.jpg" />
      </div>
  
      <div class="box">        
        <div class="container">
          
          <div class="lines">
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
          </div>
          
          <div class="cards">
            <div class="card">
              <h4>Payment: </h4>
              <p><img class="imagePay" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png"/></p>
            </div>
            <div class="card mid">
              <h4>KES Rate(USD):</h4>
              <p>{{ kesRate }}</p>
            </div>
            <div class="card">
              <h4>ETH Price (KES):</h4>
              <p>{{  Math.floor(ethRate) }}</p>
            </div>
            <div class="card">
              <h4>You will get: </h4>
              <div class="estTxt">{{ estimatedAmount }}<img class="imageEst" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png"/></div>
            </div>
          </div> 
        </div>
        <div class="bottom">
          <div class="btn" @click="buyCoin">Buy Now</div>
        </div>
      </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'SwapForm',
  data(){
    return {
      ethRate: null,
      kesRate: null,
      amountInput: null,
      estimatedAmount: null,
    }
  },
 methods :{
   buyCoin(){
     console.log("Buy some coins worth..." , this.amountInput)
   },
   submitAmount (){
     this.estimatedAmount = this.amountInput / this.ethRate;
   }
 },
 mounted (){
fetch('https://openexchangerates.org/api/latest.json?app_id=dafb29eb51db43a789f7546e9a8fa510')
.then(response => response.json())
.then((data) => {this.kesRate = data.rates.KES;
                this.ethRate = 2800 * data.rates.KES;
} );

}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
* {
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  list-style: none;
  font-family: "Mulish", sans-serif;
}

body {
  display: flex;
  padding-top: 50px;
  justify-content: center;
  background: #ecf1f5;
  transform: scale(0.8) translateY(-50px);
}

.cardTop {
  width: 497px;
  height: 284px;
  background: #FAC24F;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  align-items: flex-end;
}

.timeline {
  width: 355px;
  height: 696px;
  background: #ECF1F524;
  mix-blend-mode: normal;
  overflow: hidden;
  position: absolute;
  top: 144px;
  margin-left: 71px;
  box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.566816);
  border-radius: 10px;
}
.timeline h3 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  color: #FFFFFF;
  margin-left: 66px;
  margin-top: 40px;
}
.timeline label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  margin-left: 66px;
  margin-top: 10px;
  color: #FFFFFF;
}
.timeline .box {
  width: 100%;
  height: 509px;
  background: #fbfcfd;
  margin-top: 20px;
}
.timeline .box .container {
  width: 100%;
  height: 357px;
  display: flex;
}
.timeline .box .container .lines {
  margin-left: 40px;
  margin-top: 6px;
}
.timeline .box .container .lines .dot {
  width: 14px;
  height: 14px;
  background: #D1D6E6;
  border-radius: 7px;
}
.timeline .box .container .lines .line {
  height: 80px;
  width: 2px;
  background: #D1D6E6;
  margin-left: 5.3px;
}
.timeline .box .container .cards {
  padding-top: 40px;
  margin-left: 12px;
  transform: translateY(-50px);
}
.timeline .box .container .cards .card {
  width: 249px;
  height: 70px;
  padding-top: 10px;
  background: #FFFFFF;
  box-shadow: 0 2px 2px 0 #eeeeee40;
  border-radius: 10px;
  box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
  margin-bottom: 10px;
}
.timeline .box .container .cards .card.mid {
  height: 71px;
}
.timeline .box .container .cards .card h4 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  margin-left: 25px;
  margin-bottom: 5px;
  color: #2B2862;
}
.timeline .box .container .cards .card p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #2B2862;
  margin-left: 25px;
}
.timeline .box .bottom {
  width: 100%;
  height: 107px;
  background: #fff;
  box-shadow: 0 0 2px #eeeeee50;
  padding-top: 45px;
}
.timeline .box .bottom .btn {
  width: 249px;
  height: 62px;
  background: #FFFFFF40;
  mix-blend-mode: normal;
  cursor: pointer;
  border: 1px solid #8260D780;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #2B2862;
  margin-left: 53px;
  transition: 0.3s;
  background: #2B2862;
  color: #fff;
  border-color: #2B2862;
}
.timeline .box .bottom .btn:hover {
  transform: scale(1.03);
}
.maininput {
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 70px;

  background: #FFFFFF;
  border-radius: 10px;
  margin:30px  0 0 30px;
}
.textinput{
  font-size:large;
  font-weight: bold;
}
.image{
  max-width: 50px;
  object-fit: contain;
}
.imagePay {
  width: 70px;
  object-fit: cover;
}
.estTxt{
  font-size: large;
  font-weight: bold;
  color: #2B2862;
  display: flex;
  flex-direction: row;
}
.imageEst{
  max-width: 30px;
  object-fit: contain;
  margin: auto;
}
</style>

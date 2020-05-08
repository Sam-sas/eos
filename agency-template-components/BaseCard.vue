<template>
  <div id="cardService">
    <b-card class="services" :title="card.heading">
      <b-card-img :src="getImage(card.image)" class="rounded-0" id="img"></b-card-img>
    </b-card>
    <b-card-text class="text">{{ card.sellPoint }}</b-card-text>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      required: false,
      type: Object,
    },
  },
  methods: {
    getImage(img) {
      const returnedImage = `/assets/${img}`;
      return returnedImage;
    },
  },
};
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

$defaultFont: sans-serif;

* {
  -webkit-box-sizing: content-box !important;
  box-sizing: content-box !important;
}

.card {
  border: none;
}

#cardService {
  width: 398px;
  height: 302px;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border-radius: 2% 2% 10% 2%;
  margin-bottom: 30px;
}

.card-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 20px 0 0 20px;
}

;

#img {
  width: 65px;
  height: 52px;
  -o-object-fit: contain;
  object-fit: contain;
  margin-right: 10px;
  border: solid 3px #ffffff;
}

h4.card-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: none;
  font-family: 'Poppins', $defaultFont;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.46;
  text-align: left;
  color: #2c0f2b;
  margin: 0;
}

.text {
  width: 350px;
  border: none;
  font-family: 'Poppins', $defaultFont;
  font-size: 22px;
  line-height: 1.46;
  text-align: left;
  color: #2c0f2b;
  margin: 0 auto;
  padding: 25px 15px 32px 20px;
}

@media only screen and (max-device-width : 767px) {
  #cardService {
    width: 300px;
    height: 220px;
    margin-bottom: 15px;
  }

  .card-body {
    margin-right: 0;
  }

  ;

  #img {
    width: 50px;
    height: 40px;
  }

  h4.card-title {
    font-size: 20px;
    margin-right: 0 !important;
  }

  .text {
    width: 80%;
    font-size: 16px;
    padding-top: 10px;
  }
}
</style>

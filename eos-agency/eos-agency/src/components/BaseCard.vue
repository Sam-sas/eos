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
  box-sizing: content-box !important;
}

.card {
  border: none;
}

#cardService {
  width: clamp(280px, 20vw, 398px);
  max-height: clamp(280px, 15vw, 302px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border-radius: 2% 2% 10% 2%;
  margin-bottom: 30px;
}

.card-body {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding: 20px 0 0 20px;
};

#img {
  width: 65px;
  height: 52px;
  object-fit: contain;
  margin-right: 10px;
  border: solid 3px #ffffff;
}

h4.card-title {
    display: flex;
    align-items: center;
    border: none;
    font-family: 'Poppins', $defaultFont;
    font-size:clamp(18px, 2vw, 24px);
    font-weight: bold;
    line-height: 1.46;
    text-align: left;
    color: #2c0f2b;
    margin: 0;
}

.text {
  width: clamp(200px, 18vw, 350px);
  height: 173px;
  border: none;
  font-family: 'Poppins', $defaultFont;
  font-size: clamp(16px, 2vw, 22px);
  line-height: 1.46;
  text-align: left;
  color: #2c0f2b;
  margin: 0;
  padding: 25px 15px 32px 20px;
}
</style>

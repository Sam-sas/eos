/* eslint-disable import/no-dynamic-require */
<template>
  <div fluid class="splashArea" :style="{ backgroundImage: 'url('+getImage(splashArea.bgd)+')' }">
    <div class="splashGet">
      <h1 class="mainText"
       data-aos="fade-left"
      data-aos-delay="50">{{ splashArea.mainText }}</h1>
      <P class="subText"
       data-aos="fade-left"
      data-aos-delay="200">{{ splashArea.subText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    splashArea: {
      required: false,
      type: Object,
    },
  },
  methods: {
    getImage(img) {
      // eslint-disable-next-line global-require
      const returnedImage = `/assets/${img}`;
      return returnedImage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@500&display=swap');
$defaultFont: sans-serif;
.splashArea {
  height: clamp(500px, 46vw, 917px);
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-size: cover;

}
.splashGet {
  display: flex;
  flex-direction: column;
}
.mainText {
  margin: 60px 0 18px 0;
  font-family: 'Poppins', $defaultFont;
  text-transform: uppercase;
  font-size: clamp(20px ,2.5vw, 50px);
  font-weight: bold;
  line-height: 1.52;
  text-align: center;
  color: #2c0f2b;
}
.subText {
  width: 52%;
  margin: 0 auto;
  font-family: 'Roboto', $defaultFont;
  font-size: clamp(12px ,2vw, 24px);
  font-weight: 500;
  line-height: 1.33;
  text-align: center;
  color: #2c0f2b;
}
</style>

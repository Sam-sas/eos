<template>
  <div class="section">
    <h2 data-aos="fade-left" data-aos-delay="50">Our Process is Simple</h2>
    <div class="cards">
      <BaseCardLong :card="sectionInfo.plan"></BaseCardLong>
      <BaseCardLong :card="sectionInfo.complete"></BaseCardLong>
      <BaseCardLong :card="sectionInfo.results"></BaseCardLong>
    </div>
  </div>
</template>

<script>
import BaseCardLong from './BaseCardLong.vue';

export default {
  props: {
    sectionInfo: {
      required: false,
      type: Object,
    },
  },
  components: {
    BaseCardLong,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
$defaultFont: sans-serif;
h2 {
  height: 71px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: 'Poppins', $defaultFont;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.52;
  text-align: left;
  color: #2c0f2b;
}
.cards {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media only screen and (min-device-width : 500px) and (max-device-width : 1267px) {
  h2 {
    font-size: 35px;
    text-align: center;
  }
}

@media only screen and (max-device-width : 499px) {
  h2 {
    font-size: 28px;
    height: 40px;
    text-align: center;
  }
}

@media only screen and (max-device-width : 1268px) {
  .cards {
    align-items: flex-start;
  }
}
</style>

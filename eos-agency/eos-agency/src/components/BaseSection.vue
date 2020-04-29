<template>
<div class="section">
    <h2 data-aos="fade-left" data-aos-delay="50">Our Process is Simple</h2>
    <BaseCardLong :card="sectionInfo.plan"></BaseCardLong>
    <BaseCardLong :card="sectionInfo.complete"></BaseCardLong>
    <BaseCardLong :card="sectionInfo.results"></BaseCardLong>
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
  max-height: 71px;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', $defaultFont;
  font-size: clamp(30px, 2.6vw, 50px);
  font-weight: bold;
  line-height: 1.52;
  text-align: left;
  color: #2c0f2b;
}
</style>

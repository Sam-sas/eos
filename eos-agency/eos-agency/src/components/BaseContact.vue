/* eslint-disable import/no-dynamic-require */
<template>
<b-container fluid>
  <b-row class="contactInformation" :id="contactInfo.bgd">
    <img class="logo" :src="getImage(contactInfo.logo)" :alt="contactInfo.logoAltText" />
    <p class="contactText">{{ contactInfo.phoneNum }}</p>
  </b-row>
</b-container>
</template>

<script>
export default {
  props: {
    contactInfo: {
      required: false,
      type: Object,
    },
  },
  methods: {
    getImage(logoImages) {
      const returnedImage = `/assets/${logoImages}`;
      return returnedImage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300&display=swap');
$defaultFont: sans-serif;
.container {
  margin: 0 !important;
}
.contactInformation {
    display: flex;
    justify-content: space-between;
    height: 65px;
 }
 .logo {
    max-width: 65px;
    max-height: 65px;
    padding-left: 20px;
 }
.contactText {
    text-align: left;
    padding-right: 20px;
    align-self: center;
}
#purpleBackground {
    background-color: #303044;
    color: #fafaff;
    font-family: 'Roboto', $defaultFont;
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.31;
    font-weight: 300;
    .contactText {
      margin: 0;
    }
}
#whiteBackground {
    background-color: #fff;
    color: #5b1e3f;
    font-family: 'Poppins', $defaultFont;
    font-size: 18px;
}
</style>

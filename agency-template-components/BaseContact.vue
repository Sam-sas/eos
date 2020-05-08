/* eslint-disable import/no-dynamic-require */
<template>
<b-container fluid id="contactContainer">
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
  mounted() {
    if (this.contactInfo.bgd === 'whiteBackground') {
      document.getElementById('contactContainer').classList.add('sticky-top');
    }
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
$roboto: 'Roboto', $defaultFont;
$poppins: 'Poppins', $defaultFont;

.container {
  margin: 0 !important;
}
.contactInformation {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    height: 65px;
 }
 .logo {
    width: 65px;
    height: 65px;
    padding-left: 20px;
 }
.contactText {
    text-align: left;
    padding-right: 20px;
    -ms-flex-item-align: center;
        -ms-grid-row-align: center;
        align-self: center;
    margin: 0;
}
#purpleBackground {
    background-color: #303044;
    color: #fafaff;
    font-family: $roboto;
    font-size: 18px;
    line-height: 1.31;
    font-weight: 300;
    .contactText {
      margin: 0;
    }
}
#whiteBackground {
    background-color: #fff;
    color: #5b1e3f;
    font-family: $poppins;
    font-size: 18px;
}
</style>

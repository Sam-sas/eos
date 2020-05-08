<template>
  <div fluid id="splashArea" :style="{ backgroundImage: 'url('+getImage(splashArea.bgd)+')' }">
    <div class="splashGet">
      <h1 class="mainText"
       data-aos="fade-left"
      data-aos-delay="100">{{ splashArea.mainText }}</h1>
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
  mounted() {
    if (this.msieversion()) {
      document.getElementById('splashArea').classList.add('splash-fallback');
      this.splashArea.bgd = this.splashArea.bgdFallback;
    } else {
      document.getElementById('splashArea').classList.add('splashStyle');
    }
  },
  methods: {
    getImage(img) {
      // eslint-disable-next-line global-require
      const returnedImage = `/assets/${img}`;
      return returnedImage;
    },
    msieversion() {
      let detectIEregexp;
      // eslint-disable-next-line no-unused-expressions
      navigator.userAgent.indexOf('MSIE') !== -1 ? detectIEregexp = /MSIE (\d+\.\d+);/ : detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/;
      // test for rv:x.x or rv x.x where Trident string exists
      if (detectIEregexp.test(navigator.userAgent)) { // if some form of IE
        // eslint-disable-next-line no-new-wrappers
        const ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
        if (ieversion <= 11) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@500&display=swap');
$defaultFont: sans-serif;

.splashStyle {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
}

.splash-fallback {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-size: 100% 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
}

#splashArea {
  .splashGet {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }

  .mainText {
    margin: 60px 0 18px 0;
    font-family: 'Poppins', $defaultFont;
    text-transform: uppercase;
    font-size: 50px;
    font-weight: bold;
    line-height: 1.52;
    text-align: center;
    color: #2c0f2b;
  }

  .subText {
    width: 52%;
    margin: 0 auto;
    font-family: 'Roboto', $defaultFont;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    text-align: center;
    color: #2c0f2b;
  }
}

@media screen and (min-device-width: 1281px) {
  .splashStyle {
    height: 917px;
  }

  .splash-fallback {
    height: 1268px;
  }
}

@media only screen and (min-device-width: 501px) and (max-device-width: 1280px)  {
  .splashStyle {
    height: 0;
    padding-bottom: 65%;
    width: 100%;
    background-size: cover;
  }

  .splash-fallback {
    height: 0;
    padding-bottom: 65%;
    width: 100%;
    background-size: cover;
  }

  #splashArea {
    .mainText {
      font-size: 30px;
      margin-bottom: 0;
    }

    .subText {
      font-size: 20px;
      width: 60%;
    }
  }
}

@media only screen
  and (min-device-width: 360px)  and (max-device-width: 500px) {
  .splashStyle {
    height: 0;
    padding-bottom: 100%;
    width: 100%;
    background-size: cover;
  }

  #splashArea {
    .mainText {
      font-size: 18px;
      margin-bottom: 0;
      margin-top: 1.5em;
    }

    .subText {
      font-size: 14px;
      width: 80%;
    }
  }
}

@media only screen and (max-device-width: 359px) {
    .splashStyle {
      height: 0;
      padding-bottom: 100%;
      width: 100%;
      background-size: cover;
    }

  #splashArea {
    .mainText {
      font-size: 18px;
      margin-bottom: .5em;
      margin-top: 1.3em;
    }

    .subText {
      font-size: 11px;
      width: 80%;
    }
  }
}


</style>

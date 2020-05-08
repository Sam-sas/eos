<template>
  <div class="quoteForm" :id="quoteForm.id">
    <form id="contactForm" action="https://formspree.io/meqrjlby" method="POST">
      <label class="formLabel"> {{ quoteForm.label }}</label>
      <div class="inline">
        <div class="input-form">
          <input class="form-control" type="email" id="email-address" name="_replyto"
            :placeholder="quoteForm.placeholder" required="">
          <p v-if="quoteForm.msg" id="privacy">{{ quoteForm.msg }}</p>
        </div>
        <input type="text" name="_gotcha" style="display:none" />
        <button type="submit" value="Submit" class="submitButton">{{ quoteForm.submit }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    quoteForm: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      form: {
        email: '',
      },
      bottomContact: false,
    };
  },
  mounted() {
    if (this.quoteForm.img && this.quoteForm.id === 'bottomForm') {
      const img = this.getImage(this.quoteForm.img);
      const placement = document.getElementById('bottomForm');
      this.setBackground(img, placement);
    }
  },
  methods: {
    getImage(bgdImg) {
      const returnedImage = `/assets/${bgdImg}`;
      return returnedImage;
    },
    setBackground(image, placement) {
      let setImage = placement;
      // eslint-disable-next-line no-multi-assign
      setImage = setImage.style.backgroundImage = `url('${image}')`;
      return setImage;
    },
  },
};
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
$defaultFont: sans-serif;
$white: #fff;

#email-address {
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: none;
  background: -webkit-gradient(linear, left top, left bottom, from($white), to($white));
  background: -o-linear-gradient(top, $white, $white);
  background: linear-gradient(to bottom, $white, $white);
  background-repeat: no-repeat;
  background-size: 200% 100%;
  background-position: top;
  -webkit-transition: all .5s ease-out;
  -o-transition: all .5s ease-out;
  transition: all .5s ease-out;
  height: 55px;
  border-radius: 10px;
  margin: 0;
}

  #email-address:hover {
  background-size: 100% 80%;
  }

 .submitButton {
    width: 23%;
    height: 55px;
    border: none;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 200% 100%;
    background-position: left bottom;
    -webkit-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out;
    font-family: 'Roboto', $defaultFont;
    font-size: 20px;
    line-height: 1.3;
    color: $white;
    margin-left: 23px;
  }

  .submitButton:hover {
     background-size: 90% 100%;
     background-color:  #fc7d48;
  }

  .submitButton:focus {
     background-size: 10% 100%;
     background-color:  #fc7d48;
  }

#topForm {
  height: 287px;
  width: 907px;
  border-radius: 10px;
  background-color: #2c0f2b;
  color: $white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 32px;

  .formLabel {
    font-family: 'Roboto', $defaultFont;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    text-align: left;
    margin: 20px 0 42px 0;
  }

  .inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .input-form {
    width: 80%;
  }

  #email-address:hover {
  background-color: #fc7d48;
  }

  .submitButton {
    width: 23%;
    height: 55px;
    border: none;
    border-radius: 10px;
    background: -webkit-gradient(linear, left top, right top, from(#fe9c48), to(#fe9c48));
    background: -o-linear-gradient(left, #fe9c48, #fe9c48);
    background: linear-gradient(to right, #fe9c48, #fe9c48);
    background-repeat: no-repeat;
    background-size: 200% 100%;
    background-position: left bottom;
    -webkit-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out;
    font-family: 'Roboto', $defaultFont;
    font-size: 20px;
    line-height: 1.3;
    color: $white;
    margin-left: 23px;
  }

  .submitButton:hover {
     background-size: 90% 100%;
     background-color:  #fc7d48;
  }

  .submitButton:focus {
     background-size: 10% 100%;
     background-color:  #fc7d48;
  }

  #privacy {
    margin-top: 10px;
    font-family: 'Roboto', $defaultFont;
    font-size: 16px;
    line-height: 1.31;
    color: $white;
    text-align: right;
  }
}

#bottomForm {
  height: 287px;
  -o-object-fit: contain;
     object-fit: contain;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  color: #2c1c2b;
  padding: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  #contactForm {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  }

  .formLabel {
    width: 772px;
    font-family: "Roboto", $defaultFont;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    text-align: left;
    margin-bottom: 25px;
  }

  .inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }

  #email-address {
    width: 622px;
  }

#email-address:hover {
  background-color: #810234;
}

  .submitButton {
    width: 198px;
    height: 55px;
    border: none;
    border-radius: 10px;
    background: -webkit-gradient(linear, left top, right top, from(#de3b4e), to(#de3b4e));
    background: -o-linear-gradient(left, #de3b4e, #de3b4e);
    background: linear-gradient(to right, #de3b4e, #de3b4e);
    background-repeat: no-repeat;
    background-size: 200% 100%;
    background-position: left bottom;
    -webkit-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out;
    font-family: 'Roboto', $defaultFont;
    font-size: 20px;
    line-height: 1.3;
    color: $white;
    margin-left: 23px;
  }

    .submitButton:hover {
     background-size: 90% 100%;
     background-color: #810234;
  }

  .submitButton:focus {
     background-size: 10% 100%;
     background-color:#810234;
  }
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1268px)  {
  #bottomForm #email-address {
    width: 520px;
  }
}

@media only screen and (min-device-width : 500px)
 and (max-device-width : 700px) {
 #topForm {
    padding: 0;
    border-radius: 0;

    #contactForm {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: 100%;
      height: 100%;
    }

    .formLabel {
      margin: 0 0 20px 0;
      font-size: 18px;
    }

    .inline {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }

    .input-form {
      height: 75px;
    }

    .input-form,
    #privacy,
    .submitButton,
    .formLabel {
      width: 360px;
    }

    #privacy {
      font-size: 10px;
    }

    .submitButton {
      margin-top: 20px;
      width: 360px;
      margin-left: 0;
    }
  }

  #bottomForm {
    padding: 0;

    #contactForm {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: 100%;
      height: 100%;
    }

    .formLabel {
      width: 360px;
      font-size: 18px;
    }

    .inline {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: 360px;
    }

    #email-address {
      width: 360px;
    }

    .submitButton {
      margin-top: 20px;
      width: 360px;
      margin-left: 0;
    }
  }
}

@media only screen and (max-device-width : 499px) {
  #topForm {
    padding: 0;
    border-radius: 0;

    #contactForm {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: 100%;
      height: 100%;
    }

    .formLabel {
      margin: 0 0 20px 0;
      font-size: 16px;
    }

    .inline {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }

    .input-form {
      height: 75px;
    }

    .input-form,
    #privacy,
    .submitButton,
    .formLabel {
      width: 250px;
    }

    #privacy {
      font-size: 10px;
    }

    .submitButton {
      margin-top: 20px;
      width: 250px;
      margin-left: 0;
    }
  }

  #bottomForm {
    padding: 0;

    #contactForm {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: 100%;
      height: 100%;
    }

    .formLabel {
      width: 250px;
      font-size: 16px;
    }

    .inline {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: 250px;
    }

    #email-address {
      width: 250px;
    }

    .submitButton {
      margin-top: 20px;
      width: 250px;
      margin-left: 0;
    }
  }
}
</style>

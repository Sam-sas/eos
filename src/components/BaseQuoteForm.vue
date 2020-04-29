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
      console.log('here');
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
#topForm {
  height: 287px;
  width: 907px;
  border-radius: 10px;
  background-color: #2c0f2b;
  color: $white;
  display: flex;
  flex-direction: column;
  padding: 32px;

  .formLabel {
    font-family: 'Roboto', $defaultFont;
    font-size: clamp(18px, 5vw, 24px);
    font-weight: 500;
    line-height: 1.33;
    text-align: left;
    margin: 20px 0 42px 0;
  }

  .inline {
    display: flex;
  }

  .input-form {
    width: 80%;
  }

  #email-address {
    height: 55px;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: $white;
    margin: 0;
  }

  .submitButton {
    width: 23%;
    height: 55px;
    border: none;
    border-radius: 10px;
    background-color: #fe9c48;
    font-family: 'Roboto', $defaultFont;
    font-size: clamp(14px, 2vw, 20px);
    line-height: 1.3;
    color: $white;
    margin-left: 23px;
  }

  #privacy {
    margin-top: 10px;
    font-family: 'Roboto', $defaultFont;
    font-size: clamp(10px, 1.5vw, 16px);
    line-height: 1.31;
    color: $white;
    text-align: right;
  }
}

#bottomForm {
    height: 287px;
    object-fit: contain;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    color: #2c1c2b;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    #contactForm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }
  .formLabel {
    width: clamp(250px, 50vw, 772px);
    font-family: "Roboto", $defaultFont;
    font-size: clamp(12px, 2vw, 24px);
    font-weight: 500;
    line-height: 1.33;
    text-align: left;
    margin-bottom: 25px;
  }

  .inline {
    display: flex;
    flex-wrap: wrap;
  }
  #email-address {
    width: clamp(250px, 50vw, 622px);
    height: 55px;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: $white;
    margin: 0;
  }

  .submitButton {
    width: 198px;
    height: 55px;
    border: none;
    border-radius: 10px;
    background-color: #de3b4e;
    font-family: 'Roboto', $defaultFont;
    font-size: 20px;
    line-height: 1.3;
    color: $white;
    margin-left: 23px;
  }
}

@media only screen
and (max-device-width : 812px)
and (-webkit-device-pixel-ratio : 3) {
  #topForm {
    padding-top: 20px;
    padding-left: 50px;
    .formLabel {
        margin: 20px 0 20px 0;
      }
      .inline {
        flex-wrap: wrap;
      }
        .input-form {
    width: 100%;
    height: 75px;
  }
    .submitButton {
      margin-top: 20px;
      width: 250px;
      margin-left: 0;
    }
  }
  #bottomForm {
    padding-left: 50px;
    .submitButton {
      margin-top: 20px;
      width: 250px;
      margin-left: 0;
    }
  }
}
</style>

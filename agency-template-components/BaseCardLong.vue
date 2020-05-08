<template>
<div class="cardLong" data-aos="fade-left" data-aos-delay="200">
  <div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="12" id="sellSection">
        <b-card-img :src="getImage(card.image)" class="rounded-0" id="sellPointImg"></b-card-img>
        <b-card-body id="heading" :title="card.heading">
          <b-card-text id="sellPoint" >{{ card.sellPoint }}</b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
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
.card {
  border: none;
}
.cardLong {
  background-color: #fff;
  width: 80%;
}

#sellSection {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 10px 0 30px 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#sellPointImg {
  width: 87.1px;
  height: 116.1px;
  -o-object-fit: contain;
     object-fit: contain;
  margin-right: 65px;
}

#heading {
  font-family: 'Poppins', $defaultFont;
  text-align: left;
  h4.card-title {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.5;
    color: #de3b4e;
    margin: 10px 0 10px 0px;
  }

  #sellPoint {
    width: 80%;
    font-size: 24px;
    font-weight: normal;
    line-height: 1.46;
    text-align: left;
    color: #212135;
  }
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1268px)  {
.cardLong {
  width: 100%;
}
 #sellSection {
   padding: 0 10% 0 10%;
 }

 #sellPointImg {
    margin-right: 30px;
  }

  #heading {
    h4.card-title {
    font-size: 24px;
    }
    #sellPoint {
      width: 100%;
      font-size: 22px;
    }
  }
}

@media only screen
and (max-device-width : 767px) {
  .cardLong {
    width: 100%;
  }
 #sellSection {
  padding: 0 0 15px 15px;
}
 #sellPointImg {
    margin-right: 10px;
    width: 65px;
  }
  #heading {
    h4.card-title {
    font-size: 20px;
    }
    #sellPoint {
      width: 100%;
      font-size: 16px;
    }
  }
}
</style>

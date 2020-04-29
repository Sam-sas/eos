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
}

#sellSection {
  display: flex;
  padding-top: 10px;
}

#sellPointImg {
  max-width: 87.1px;
  max-height: 116.1px;
  object-fit: contain;
  margin-right: clamp(20px, 3.5vw, 65px);
}

#heading {
  font-family: 'Poppins', $defaultFont;
  text-align: left;
  h4.card-title {
    font-size: clamp(20px, 3vw, 32px);
    font-weight: bold;
    line-height: 1.5;
    color: #de3b4e;
    margin: 10px 0 10px 0px;
  }

  #sellPoint {
    max-width: 696px;
    font-size: clamp(16px, 3vw , 24px);
    font-weight: normal;
    line-height: 1.46;
    text-align: left;
    color: #212135;
    margin-bottom: 40px;
    margin: 0 0 30px 0px;
  }
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)  {
 #sellSection {
   padding-left: 50px;
 }
}

@media only screen
and (max-device-width : 767px)
and (-webkit-device-pixel-ratio : 3) {
  #sellSection {
   padding-left: 30px;
 }
}
</style>

<template>
    <footer class="footer">
        <p class="copyright"> Copyright &copy; {{ footerInfo.copyright }}</p>
    </footer>
</template>

<script>
export default {
  props: {
    footerInfo: {
      required: false,
      type: Object,
    },
  },
};
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
$defaultFont: sans-serif;
.footer {
  display: flex;
  justify-content: space-between;
  height: 60px;
  color: #fff;
  background-color: #212135;
}

.copyright {
  max-height: 21px;
  font-family: 'Roboto', $defaultFont;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.31;
  text-align: left;
  padding-left: 20px;
  margin: 0;
  align-self: center;
}

@media only screen
and (max-device-width : 375px) {
  .copyright {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>

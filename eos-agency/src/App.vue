<template>
  <div id="app" class="homepage">
    <BaseContact></BaseContact>
    <BaseSplashArea></BaseSplashArea>
    <BaseQuoteForm></BaseQuoteForm>
    <div id="processSection">
      <h2>Our Process is Simple</h2>
      <BaseCardLong></BaseCardLong>
      <BaseCardLong></BaseCardLong>
      <BaseCardLong></BaseCardLong>
    </div>
    <div id="serviceSection">
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
      <BaseCard></BaseCard>
    </div>
    <BaseQuoteForm></BaseQuoteForm>
    <BaseContact></BaseContact>
    <BaseFooter></BaseFooter>
  </div>
</template>
<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';

require('./scss/eos-agency.scss');

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/,
);
// use a lodash method to find global components
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1'),
    ),
  );
  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

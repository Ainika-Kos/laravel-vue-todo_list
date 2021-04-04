require('./bootstrap');

import Vue from 'vue';
import App from './vue/app';
import 'flexboxgrid';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faEdit, faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
    el: '#app',
    components: { App }
});
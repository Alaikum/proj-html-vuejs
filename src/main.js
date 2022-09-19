import Vue from 'vue'
import App from './App.vue'


import "@fontsource/open-sans/500.css"; 
import "@fontsource/roboto"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { faUserSecret,faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faArrowRightLong, faArrowLeftLong)
library.add(faUserSecret,faStar,farStar)





/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

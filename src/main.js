import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Este script define el tema de la página
import '@/script/define-theme.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';

/* add icons to the library */
library.add(faMoon);
library.add(faSun);
library.add(faMagnifyingGlass);
library.add(faBars);
library.add(faCaretDown);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faYoutube);
library.add(faWhatsapp);
library.add(faList);
library.add(faCircleExclamation);
library.add(faArrowRight);
library.add(faArrowLeft);

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.mount('#app');

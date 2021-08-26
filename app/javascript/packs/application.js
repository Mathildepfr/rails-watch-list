// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// All our JS gets loaded from here:
// We want to break up our code...
import 'bootstrap'
console.log("Hello from javascript/packs/application.js")

// components
import { initNavbarScroll } from '../components/navbar'
import { loadDynamicBannerText } from '../components/banner'

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initNavbarScroll();
  loadDynamicBannerText();
});

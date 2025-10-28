<template>
  <div>
    <Header />
    <div class="landing">
      <div class="container">
        <img src="./images/istockphoto-804271176-612x612.jpg" alt="" />
      </div>
    </div>
    <Work />
    <services />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Work from './components/Work.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Start Variables */
:root {
  --main-color: #10cab7;
  --second-color: #2c4755;
  --head-color: #83808070;
}
/* End Variables */

/* Start Global Rules */

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
  border-radius: none;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--main-color);
}

body {
  font-family: 'Work Sans', sans-serif;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

/* Small */

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Medium */

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

/* Large */

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

/* End Global Rules */

/* Start Landing */
.landing .container {
  display: flex;
  justify-content: center;
}
.landing .container img {
  width: 100%;
  height: 400px;
  display: block;
}
@media (min-width: 992px) {
  .landing .container img {
    width: 750px;
  }
}

/* End Landing */
</style>

<template>
  <div class="services" id="Services">
    <div class="container">
      <div class="intro">
        <h1>services</h1>
        <p>Don't be busy, be productive</p>
      </div>
      <div class="content">
        <div class="col1">
          <div class="s1">
            <span class="icon"><i class="fa-solid fa-print"></i></span>
            <h3>Graphic Design</h3>
            <p>
              Graphic design is the process of visual communication and problem-solving using one or
              more typography,photography and illustration.
            </p>
          </div>
          <div class="s3">
            <span class="icon"><i class="fa-solid fa-message"></i></span>
            <h3>UI & UX</h3>
            <p>
              process of enhancing user satisfaction with a product by improving the
              usability,accessibility and pleasure provided in the interaction
            </p>
          </div>
        </div>
        <div class="col2">
          <div class="s2">
            <span class="icon"><i class="fa-solid fa-clapperboard"></i></span>
            <h3>Web Design</h3>
            <p>
              Web design encompasses many different skills and disciplines in the production and
              maintenance of websites.
            </p>
          </div>
          <div class="s4">
            <span class="icon"><i class="fa-solid fa-display"></i></span>
            <h3>Web Development</h3>
            <p>
              Web development is a broad term for the work involved in developing a web site for the
              internet or an intranet
            </p>
          </div>
        </div>

        <div class="image">
          <img src="../images/360_F_180837604_UyJZNTHPluIJNQJjmTkCpE4XLJ03Zott.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
}
</script>

<style>
.services {
  margin-top: 40px;
}

.services .container .intro {
  text-align: center;
}

.services .container .intro h1 {
  color: var(--head-color);
  font-size: 75px;
  margin: 0px;
}

.services .container .intro p {
  margin-top: -30px;
}

.services .container .content {
  padding: 70px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.services .container .content h3 {
  display: inline;
}
.services .container .content div span {
  margin-left: -17px;
}

.services .container .content .image {
  width: 150px;
  height: 400px;
  background-color: var(--second-color);
  position: relative;
  top: 0px;
  right: -200px;
}

.services .container .content .image img {
  width: 100%;
  height: 80%;
  top: 40px;
  left: -50px;
  position: absolute;
}

.services .container .content div span i {
  color: var(--main-color);
}

@media (max-width: 500px) {
  .services .container .content .image {
    right: -45px;
  }
}
</style>

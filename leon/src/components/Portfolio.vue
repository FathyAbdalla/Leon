<template>
  <div class="portfolio" id="Portfolio">
    <div class="container">
      <div class="intro">
        <h1>portfolio</h1>
        <p>If you do it right, it will last forever.</p>
      </div>
      <div class="content">
        <div class="first">
          <div class="image">
            <img src="../images/Web.png" alt="" />
          </div>
          <h3>Project Here</h3>
          <p>
            My creative ability is very difficult to measure because it can manifest in so many
            surprising and.
          </p>
        </div>
        <div class="second">
          <div class="image">
            <img
              src="../images/mountain-landscape-fog-png-favpng-41mjyGimkVR0hibJ0VP1CiYTN.jpg"
              alt=""
            />
          </div>
          <h3>Project Here</h3>
          <p>
            My creative ability is very difficult to measure because it can manifest in so many
            surprising and.
          </p>
        </div>
        <div class="third">
          <div class="image">
            <img src="../images/web-1045994_640.jpg" alt="" />
          </div>
          <h3>Project Here</h3>
          <p>
            My creative ability is very difficult to measure because it can manifest in so many
            surprising and.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
}
</script>

<style>
.portfolio {
  margin-top: 40px;
}

.portfolio .container .intro {
  text-align: center;
}

.portfolio .container .intro h1 {
  color: var(--head-color);
  font-size: 75px;
  margin: 0px;
}

.portfolio .container .intro p {
  margin-top: -30px;
}

.portfolio .container .content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.portfolio .container .content div h3 {
  margin: 10px 0px 0px 0px;
}

.portfolio .container .content div p {
  margin-top: 5px;
}

.portfolio .container .content .image {
  width: 200px;
  height: 200px;
}

.portfolio .container .content .image img {
  width: 100%;
  height: 100%;
}
</style>

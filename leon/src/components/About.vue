<template>
  <div class="about" id="About">
    <div class="container">
      <div class="intro">
        <h1>about</h1>
        <p>Less is more work</p>
      </div>

      <div class="content">
        <div class="image">
          <img src="../images/LBBW-2-MidRes-aspect-ratio-3840-1414-1536x566.jpg" alt="" />
        </div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reiciendis optio qui
            numquam eos. Nesciunt dolorem minima accusantium impedit quibusdam sint excepturi
            voluptate iure amet aliquid, sequi commodi ipsam? Sunt!
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta? Ipsam illum
            unde officia eos incidunt dolore sed omnis ea fugiat, porro hic tempora quae quam
            facilis tempore, quis iusto.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
.about {
  margin-top: 40px;
}

.about .container .intro {
  text-align: center;
}

.about .container .intro h1 {
  color: var(--head-color);
  font-size: 75px;
  margin: 0px;
}

.about .container .intro p {
  margin-top: -30px;
}

.about .container .content {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.about .container .content .image {
  width: 40%;
  position: relative;
  display: flex;
  align-items: flex-end;
}

.about .container .content .image img {
  width: 100%;
  height: 200px;
  position: absolute;
}

.about .container .content .image::before {
  content: '';
  position: absolute;
  background-color: var(--main-color);
  height: 80px;
  width: 100px;
  right: -140px;
}

.about .container .content .image::after {
  content: '';
  position: absolute;
  background-color: var(--main-color);
  width: 80px;
  height: 230px;
  right: -40px;
  z-index: -1;
}

@media (max-width: 500px) {
  .about .container .content .image {
    width: 40%;
    position: relative;
    display: flex;
    align-items: center;
  }
  .about .container .content .image img {
    width: 100%;
    height: 250px;
    position: absolute;
  }

  .about .container .content .image::before {
    content: '';
    position: absolute;
    background-color: var(--main-color);
    height: 80px;
    width: 50px;
    right: -50px;
    bottom: 306px;
  }

  .about .container .content .image::after {
    content: '';
    position: absolute;
    background-color: var(--main-color);
    width: 60px;
    height: 280px;
    right: -30px;
    bottom: 306px;
    z-index: -1;
  }
}
.about .container .content .text {
  width: 40%;
  position: static;
  z-index: 1;
}

.about .container .content .text p:first-child {
  color: var(--second-color);
  font-weight: bold;
}
.about .container .content .text hr {
  border-bottom-color: var(--main-color);
  border-top-color: #4bd7c9;
  width: 50%;
  margin-left: 0px;
}
</style>

<template>
  <div class="work">
    <div class="container">
      <div class="info">
        <div class="first">
          <div class="icon">
            <i class="fa-solid fa-microscope"></i>
          </div>

          <h3>Tell Us Your Idea</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, odio nobis, dolores quod
            pariatur sunt ducimus soluta totam autem, odit rem temporibus? Deserunt officia minima
            sit, quia quas libero eligendi!
          </p>
        </div>
        <div class="second">
          <div class="icon">
            <i class="fa-solid fa-flask"></i>
          </div>

          <h3>We Will Do All The Work</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, odio nobis, dolores quod
            pariatur sunt ducimus soluta totam autem, odit rem temporibus? Deserunt officia minima
            sit, quia quas libero eligendi!
          </p>
        </div>
        <div class="third">
          <div class="icon">
            <i class="fa-solid fa-globe"></i>
          </div>

          <h3>Your Product Is Worldwide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, odio nobis, dolores quod
            pariatur sunt ducimus soluta totam autem, odit rem temporibus? Deserunt officia minima
            sit, quia quas libero eligendi!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
}
</script>

<style>
.work {
  margin-top: 40px;
}

.work .container .info .icon {
  display: flex;
  justify-content: center;
}
.work .container .info i {
  color: var(--main-color);
  font-size: 30px;
}
.work .container .info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.work .container .info h3 {
  color: var(--second-color);
  text-align: center;
}

p {
  line-height: 1.6;
}
</style>

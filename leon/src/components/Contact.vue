<template>
  <div class="contact" id="Contact">
    <div class="container">
      <div class="intro">
        <h1>contact</h1>
        <p>We are born to create</p>
      </div>
      <div class="content">
        <p>Feel free to drop us a line at:</p>
        <p>leonagency@mail.com</p>
        <p>
          Find us on social networks:
          <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://x.com/" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style>
.contact {
  margin-top: 40px;
}

.contact .container .intro {
  text-align: center;
}

.contact .container .intro h1 {
  color: var(--head-color);
  font-size: 75px;
  margin: 0px;
}

.contact .container .intro p {
  margin-top: -30px;
}

.contact .container .content {
  padding: 70px;
}

.contact .container .content p:first-child {
  color: var(--second-color);
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 10px;
}

.contact .container .content p:nth-child(2) {
  color: var(--main-color);
  font-weight: bold;
  font-size: 30px;
  margin-top: -5px;
  margin-left: 40px;
}

.contact .container .content p:nth-child(3) {
  margin-left: 80px;
}

@media (max-width: 500px) {
  .contact .container .content p:nth-child(2) {
    margin-left: -50px;
  }

  .contact .container .content p:nth-child(3) {
    margin-left: -20px !important;
  }
}

a {
  color: black;
}
</style>

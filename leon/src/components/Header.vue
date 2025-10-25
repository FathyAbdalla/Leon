<template>
  <div class="header">
    <div class="container">
      <div class="nav">
        <img src="/src/images/logo.png" alt="" class="logo" />
        <span>
          <span class="f"></span>
          <span class="s"></span>
          <span class="t"></span>
          <ul>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </span>
      </div>

      <h1>Hello There</h1>
      <p>We are Leon - Super Creative & Minimal <br />Agency Web Template</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
/* Start Header */

.header .container .nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  padding: 10px;
}

.header .container .nav .logo {
  height: 30px;
  padding-left: 20px;
}

.header .container .nav ul {
  position: absolute;
  list-style: none;
  padding: 20px;
  right: 10px;
  top: 20px;
  background-color: #eee;
  display: none;
}

.header .container .nav ul a {
  text-decoration: none;
  color: black;
}

.header .container .nav ul li {
  margin-bottom: 10px;
  transition-duration: 0.5s;
}

.header .container .nav span {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 50px;
  height: 30px;
  padding-left: 10px;
}

.header .container .nav span span {
  width: 30px;
  height: 1px;
  background-color: black;
  margin-top: 5px;
}

.header .container .nav span .s {
  width: calc((60 * 30px) / 100);
}

.header .container .nav span:hover ul {
  display: block;
}

.header .container .nav span:hover .s {
  width: 30px;
}
.header .container .nav span li:hover {
  padding-left: 30px;
}

.header .container .nav span li:hover a {
  color: brown;
}

.header .container h1 {
  text-align: center;
  color: var(--main-color);
}

.header .container p {
  text-align: center;
  line-height: 1.6;
}
/* End Header */
</style>

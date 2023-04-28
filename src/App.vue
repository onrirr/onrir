<script setup>
import navbar from './components/navbar.vue'
document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme == "light") { document.querySelector(".presence").innerHTML = `<img src="https://lanyard.cnrad.dev/api/1002526468359864440?bg=:000000&theme=light">` }
    else { document.querySelector(".presence").innerHTML = `<img src="https://lanyard.cnrad.dev/api/1002526468359864440?bg=:000000">` }
  } else {
    document.querySelector(".presence").innerHTML = `<img src="https://lanyard.cnrad.dev/api/1002526468359864440?bg=:000000">`
  }
  document.getElementById("theme-dropdown").addEventListener("click", function () {
    if (!["night", "dracula", "cyberpunk", "light"].includes(event.target.id)) return;
    document.documentElement.setAttribute("data-theme", event.target.id);
    localStorage.setItem("theme", event.target.id);
    if (event.target.id == "light") { document.querySelector(".presence").innerHTML = `<img src="https://lanyard.cnrad.dev/api/1002526468359864440?bg=:000000&theme=light">` }
    else { document.querySelector(".presence").innerHTML = `<img src="https://lanyard.cnrad.dev/api/1002526468359864440?bg=:000000">` }
  })
})
</script>

<template>
  <navbar />
  <div class="hero bg-base-100" style="margin-top: 10px">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Heya, I'm <a class="text-primary">Onrir</a></h1>
        <p class="py-6">I am a primarly front end developer and Highschool student from Türkiye. I often write code for fun, just like this website. <br><br> Is this theme right for you by the way?</p>
        <div class="btn-group">

          <div class="dropdown dropdown-bottom" id="theme-dropdown">
            <label tabindex="0" class="btn m-1" style="color:white"><img style="margin-right: 5px"
                src="https://icongr.am/jam/brush-f.svg?size=32&color=ffffff"> Change theme</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li data-theme="night"><a id="night">Dark</a></li>
              <li data-theme="dracula"><a id="dracula">Dracula</a></li>
              <li data-theme="cyberpunk"><a id="cyberpunk">cyberpunk</a></li>
              <li data-theme="light"><a id="light">light</a></li>
            </ul>
          </div>
          <a href="https://github.com/onrirr" target="_blank" class="btn"><img src="https://icongr.am/jam/github.svg?size=32&color=ffffff"></a>
          <a href="https://www.youtube.com/channel/UCsyxjaAKYCrQfN8UZlCpS0w" target="_blank" class="btn"><img src="https://icongr.am/jam/youtube.svg?size=32&color=ffffff"></a>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center">
    <center>
      <div class="presence"></div>
      <div class="divider">THINGS I KNOW & HOPE TO LEARN</div>
      <ul class="steps steps-vertical">
        <li class="step step-primary"> <img style=""
            src="https://skillicons.dev/icons?i=ts,tailwind,vue,nodejs&theme=light"></li>
        <li class="step step-primary"><img style="margin-top:15px;opacity: 0.6;"
            src="https://skillicons.dev/icons?i=go,bots,deno,express,mongodb&theme=light"></li>
        <li class="step"><img style="margin-top:15px;opacity: 0.2;"
            src="https://skillicons.dev/icons?i=rust,v,nuxtjs,godot,firebase,supabase&theme=light"></li>
      </ul>




      <div class="divider">MY PROJECTS</div>
    </center>
    <div class="projects">
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img
            src="https://camo.githubusercontent.com/b051760c68d5e0a4bc0d7b3988612b7ffcc2fab6832771e8d9923b1de6477f34/68747470733a2f2f692e696d6775722e636f6d2f5552394f6e63392e706e67"
            alt="Feather" /></figure>
        <div class="card-body">
          <h2 class="text-3xl font-bold">Feather Optimizer</h2>
          <p>A windows 10/11 optimizer tool that aims to speed up old hardware. It was written in Nw.js and a lot of batch
            as one of my first proper projects.</p>
          <div class="card-actions justify-center">
            <a target="_blank" href="https://github.com/onrirr/feather-optimizer" class="btn btn-primary">view Code</a>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="/public/volant.png" alt="Feather" /></figure>
        <div class="card-body">
          <h2 class="text-3xl font-bold">Volant.css</h2>
          <p>A minimal and lightweight CSS framework/library written to ensure I don't implement a new grid system every
            webpage. Complete yet undocumented as of yet.</p>
          <div class="card-actions justify-center">
            <a href="http://onrir.me/VolantCSS/" target="_blank" class="btn btn-primary">Check out</a>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="/public/vlang.png" alt="Feather" /></figure>
        <div class="card-body">
          <h2 class="text-3xl font-bold">Vlang-website</h2>
          <p>Website for an up and coming systems programming language called V, also my first attempt at making something
            in Vue. (Very happy with that attempt)</p>
          <div class="card-actions justify-center">
            <a href="http://onrir.me/v-website/" target="_blank" class="btn btn-primary">Check out</a>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="/public/anigold.png" alt="Feather" /></figure>
        <div class="card-body">
          <h2 class="text-3xl font-bold">Anigold</h2>
          <p>An unsucsessful attempt in making an anime streaming platform using Express.js and Pocketbase. One of my
            first website attempts and also a very important experience.</p>
          <div class="card-actions justify-center">
            <a href="https://github.com/onrirr/anigold" target="_blank" class="btn btn-primary">view code</a>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="/public/anka.png" alt="Feather" /></figure>
        <div class="card-body">
          <h2 class="text-3xl font-bold">Anka</h2>
          <p>An unsucsessful attempt in making a localised Turkish programming language in Go.</p>
          <div class="card-actions justify-center">
            <a href="https://github.com/ankalang/anka" target="_blank" class="btn btn-primary">view code</a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 class="text-lg font-bold">MY LINKS</h3>
      <p class="py-4">Everyone has some links, here are some of mine.</p>
      <div class="divider">SOCIAL MEDIA</div>
      <li><a class="text-primary" href="https://www.reddit.com/user/onrir">Reddit</a></li>
      <li><a class="text-primary" href="https://www.youtube.com/@onrir">Youtube</a></li>
      <li><a class="text-primary" href="https://github.com/onrirr">Github</a></li>
    </div>
  </div>

  <footer style="margin-top: 15px" class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>Copyright © 2023 - All rights reserved by Onrir</p>
    </div>
  </footer>

  
</template>
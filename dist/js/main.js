const navSlide=()=>{const e=document.querySelector(".burger"),t=document.querySelector(".header-navigation__list"),n=document.querySelectorAll(".header-navigation__list-item");e.addEventListener("click",()=>{t.classList.toggle("header-navigation__list--active"),n.forEach((e,t)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade 0.5s ease forwards ${t/7+.5}s`}),e.classList.toggle("toggle")})};navSlide();const activeNav=()=>{document.querySelectorAll('a[href="'+document.URL+'"]').forEach(e=>{e.classList.toggle("header-navigation__text--active")})};document.querySelectorAll('a[href="'+document.URL+'"]').forEach(e=>{e.classList.toggle("header-navigation__text--active")});const countDownDate=new Date("Jan 30, 2019 21:37:25").getTime(),x=setInterval(()=>{const e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),i=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);document.querySelector(".counter__time-days").innerHTML=n.toLocaleString(void 0,{minimumIntegerDigits:2}),document.querySelector(".counter__time-hours").innerHTML=o.toLocaleString(void 0,{minimumIntegerDigits:2}),document.querySelector(".counter__time-min").innerHTML=i.toLocaleString(void 0,{minimumIntegerDigits:2}),document.querySelector(".counter__time-sec").innerHTML=a.toLocaleString(void 0,{minimumIntegerDigits:2})},1e3);
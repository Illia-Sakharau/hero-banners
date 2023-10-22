let moveX = 0;
let moveY = 0;
let scroll = 0;


Object.assign(document.documentElement, {
  style: `
  --move-x: ${moveX}deg;
  --move-y: ${moveY}deg;
  --scroll: ${scroll}deg;
  `
})

document.addEventListener('mousemove', (e) => {
  moveX = (e.clientX - window.innerWidth / 2) * -10 / window.innerWidth;
  moveY = (e.clientY - window.innerHeight / 2) * 10 /window.innerHeight;
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${moveX}deg;
    --move-y: ${moveY}deg;
    --scroll: ${scroll}deg;
    `
  })
})

document.addEventListener('scroll', () => {
  scroll = window.scrollY * 80 /window.innerHeight;
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${moveX}deg;
    --move-y: ${moveY}deg;
    --scroll: ${scroll}deg;
    `
  })
})
console.log("Home frontend javascript file");

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    let pad = padding || 0;
    let parentEl = el.parentNode;
    let elOffsetWidth = el.offsetWidth - pad;
    let parentOffsetWidth = parentEl.offsetWidth;
    let ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }

  resize();
  window.addEventListener("resize", resize);
}

var animation = anime
  .timeline({
    easing: "easeInOutExpo",
    direction: "alternate",
    loop: true
  })
  .add(
    {
      targets: ".animate-box ",
      background: "#424242",
      borderRadius: ["10%", "50%"]
    },
    0
  )
  .add({ targets: ".sun-circle", fill: "#e8eaf6" }, 0)
  .add({ targets: ".sun-rays", stroke: "#424242" }, 0)
  .add(
    {
      targets: ".moon-shadow",
      fill: "#424242",
      translateX: [108, 0],
      translateY: [-8, 0],
      scale: [0, 1]
    },
    0
  )
  .add({ targets: ".svg-container", rotate: [40, 0] }, 0)
  .add({ targets: "body", background: "#212121" }, 0)
  ();

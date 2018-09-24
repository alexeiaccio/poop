if (window !== undefined) {
  window.addEventListener("mousemove", e => moveHandler(e));
  window.addEventListener("touchmove", e => moveHandler(e));
}

const Smile = document.getElementById("smile");
const Yuha = document.getElementById("yuha");

const opacityHandler = x => y => (x.style.opacity = y);

const moveHandler = e => {
  const y = (e.touches ? e.touches[0].screenY : e.offsetY) / window.innerHeight;
  opacityHandler(Smile)(y);
  opacityHandler(Yuha)((1 / y) * 0.1);
};

const imagesToLoad = document.querySelectorAll("[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px  50px 0px"
};

function loadImages(image){
  const src = image.getAttribute("data-src");
  if(!src){
    return;
  }

  image.src = src;
}

const imgObserver = new IntersectionObserver((items, observer) => {
  items.forEach((item) => {
    if(!item.isIntersecting) {
      return;
    } else {
      loadImages(item.target);
      observer.unobserve(item.target);
    }
  })
}, imgOptions);

imagesToLoad.forEach(img => {
  imgObserver.observe(img);
});

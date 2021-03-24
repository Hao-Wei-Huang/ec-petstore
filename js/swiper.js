let swiperContent = document.querySelector('.swiper-content');
let swiperSlides = document.querySelectorAll('.swiper-slide');

swiperSlides.forEach(item => {
  item.addEventListener('click',function(){
    let img = this.dataset.image;
    swiperContent.setAttribute("style",`background-image:url(${img});`);
  });
});
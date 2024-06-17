// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position - 100 }, speed, "swing");
  return false;
});

$(function(){
  $('.tab-list-item').on('click', function(){
    let index = $('.tab-list-item').index(this);

    $('.tab-list-item').removeClass('is-btn-active');
    $(this).addClass('is-btn-active');
    $('.tab-contents').removeClass('is-contents-active');
    $('.tab-contents').eq(index).addClass('is-contents-active');
  });
});

$(function(){
  $('.modal_open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          
          // ページ全体のスクロールを禁止
          $('body').css('overflow', 'hidden');

          $(modal).fadeIn();
          return false;
      });
  });
  $('.modal_close').on('click',function(){
      $('.js-modal').fadeOut();

      // ページ全体のスクロールを再開
      $('body').css('overflow', '');

      return false;
  }); 
});

// toggle menu

$(function () {
  $(".js-accordion").on("click", function () {
    // クリックした次の要素(コンテンツ)を開閉
    $(this).next().slideToggle({
      duration: 300,
      easing: 'swing'  // swingはjQueryでデフォルトのイージングです。他のイージングを使用したい場合は、追加のライブラリを導入する必要があります。
    });
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open");
  });
});


// faceItem slide

const CuteSwiper = new Swiper('.cute_swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".face_next",
    prevEl: ".face_prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 39,
      centeredSlides: false
    },
  },
  on: {
    slideChange: function() {
      const currentIndex = this.activeIndex;

      // もし現在のスライドが最初のスライド以外であれば、prevボタンを表示
      if (currentIndex > 0) {
        document.querySelector('.face_prev').style.display = 'block';
      } else {
        document.querySelector('.face_prev').style.display = 'none';
      }

      // もし現在のスライドが最後のスライドであれば、nextボタンを非表示
      if (currentIndex === this.slides.length - 1) {
        document.querySelector('.face_next').style.display = 'none';
      } else {
        document.querySelector('.face_next').style.display = 'block';
      }
    },
    init: function() {
      // Swiperが初期化されたときにもprevボタンの表示を制御
      if (this.activeIndex === 0) {
        document.querySelector('.face_prev').style.display = 'none';
      }
      // Swiperが初期化されたときにもnextボタンの表示を制御
      if (this.activeIndex === this.slides.length - 1) {
        document.querySelector('.face_next').style.display = 'none';
      }
    }
  }
});


const CoolSwiper = new Swiper('.cool_swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".cool_face .face_next",
    prevEl: ".cool_face .face_prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 39,
      centeredSlides: false
    },
  },
  on: {
    slideChange: function() {
      const currentIndex = this.activeIndex;

      // もし現在のスライドが最初のスライド以外であれば、prevボタンを表示
      if (currentIndex > 0) {
        document.querySelector('.cool_face .face_prev').style.display = 'block';
      } else {
        document.querySelector('.cool_face .face_prev').style.display = 'none';
      }

      // もし現在のスライドが最後のスライドであれば、nextボタンを非表示
      if (currentIndex === this.slides.length - 1) {
        document.querySelector('.cool_face .face_next').style.display = 'none';
      } else {
        document.querySelector('.cool_face .face_next').style.display = 'block';
      }
    },
    init: function() {
      // Swiperが初期化されたときにもprevボタンの表示を制御
      if (this.activeIndex === 0) {
        document.querySelector('.cool_face .face_prev').style.display = 'none';
      }
      // Swiperが初期化されたときにもnextボタンの表示を制御
      if (this.activeIndex === this.slides.length - 1) {
        document.querySelector('.cool_face .face_next').style.display = 'none';
      } else {
        document.querySelector('.cool_face .face_next').style.display = 'block';
      }
    }
  }
});


const GenderSwiper = new Swiper('.gender_swiper', {
  slidesPerView:1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".gender_face .face_next",
    prevEl: ".gender_face .face_prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 39,
      centeredSlides:false
    },
  },
  on: {
    slideChange: function() {
      const currentIndex = this.activeIndex;

      // もし現在のスライドが最初のスライド以外であれば、prevボタンを表示
      if (currentIndex > 0) {
        document.querySelector('.gender_face .face_prev').style.display = 'block';
      } else {
        document.querySelector('.gender_face .face_prev').style.display = 'none';
      }

      // もし現在のスライドが最後のスライドであれば、nextボタンを非表示
      if (currentIndex === this.slides.length - 1) {
        document.querySelector('.gender_face .face_next').style.display = 'none';
      } else {
        document.querySelector('.gender_face .face_next').style.display = 'block';
      }
    },
    init: function() {
      // Swiperが初期化されたときにもprevボタンの表示を制御
      if (this.activeIndex === 0) {
        document.querySelector('.gender_face .face_prev').style.display = 'none';
      }
      // Swiperが初期化されたときにもnextボタンの表示を制御
      if (this.activeIndex === this.slides.length - 1) {
        document.querySelector('.gender_face .face_next').style.display = 'none';
      }
    }
  }
});

// products

const productSlides = document.getElementsByClassName("product_item");
const productBreakPoint = 768;
let product;
let productBool;

window.addEventListener(
  "load",
  () => {
    if (productBreakPoint < window.innerWidth) {
      productBool = false;
    } else {
      createProduct();
      productBool = true;
    }
  },
  false
);

window.addEventListener(
  "resize",
  () => {
    if (productBreakPoint < window.innerWidth && productBool) {
      product.destroy(false, true);
      productBool = false;
    } else if (productBreakPoint >= window.innerWidth && !productBool) {
      createProduct();
      productBool = true;
    }
  },
  false
);

const createProduct = () => {
  const swipers = document.querySelectorAll(".swiper");
  swipers.forEach(swiperEl => {
    const prevButton = swiperEl.parentElement.querySelector('.product_prev');
    const nextButton = swiperEl.parentElement.querySelector('.product_next');

    product = new Swiper(swiperEl, {
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: nextButton, // ここで直接要素を指定
        prevEl: prevButton  // ここで直接要素を指定
      },
      on: {
        slideChange: function() {
          const currentIndex = this.activeIndex;

          // もし現在のスライドが最初のスライドであれば、prevボタンを非表示
          if (currentIndex === 0) {
            prevButton.style.display = 'none';
          } else {
            prevButton.style.display = 'block';
          }

          // もし現在のスライドが最後のスライドであれば、nextボタンを非表示
          if (currentIndex === this.slides.length - 1) {
            nextButton.style.display = 'none';
          } else {
            nextButton.style.display = 'block';
          }
        },
        init: function() {
          // Swiperが初期化されたときにもprevボタンの表示を制御
          if (this.activeIndex === 0) {
            prevButton.style.display = 'none';
          }

          // Swiperが初期化されたときにもnextボタンの表示を制御
          if (this.activeIndex === this.slides.length - 1) {
            nextButton.style.display = 'none';
          } else {
            nextButton.style.display = 'block';
          }
        }
      }
    });
  });
};


// Gsap animation

// 初期値を指定
gsap.set('.js-target', {
  opacity: 0,
  y: 50,
});

// batchを使って各要素をアニメーションさせます
ScrollTrigger.batch('.js-target', {
  onEnter: batch => gsap.to(batch, {
    opacity: 1, 
    y: 0, 
    stagger: 0.1,
    overwrite: true,
  }),
  start: 'top 100%',
});

gsap.fromTo(
  ".up", // アニメーションさせる要素
  {
    y: 50, // アニメーション開始前の縦位置(下に100px)
    autoAlpha: 0, // アニメーション開始前は透明
  },
  {
    y: 0, // アニメーション後の縦位置(上に100px)
    autoAlpha: 1, // アニメーション後に出現(透過率0)
    scrollTrigger: {
      trigger: ".up", // アニメーションが始まるトリガーとなる要素
      toggleActions: "play none none reverse", // 上スクロールで戻る
      start: "top center", // アニメーションの開始位置
      markers: false, // マーカー表示
    },
  }
);
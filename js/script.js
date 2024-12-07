$(document).ready(function () {
  $(".unique-features-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 800,
    prevArrow: $(".unique-features-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".unique-features-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".advantages-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: true,
    prevArrow: $(".advantages .slider-navigation .slick-prev"),
    nextArrow: $(".advantages .slider-navigation .slick-next"),
  });

  $(".videos-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: true,
    prevArrow: $(".videos .slider-navigation .slick-prev"),
    nextArrow: $(".videos .slider-navigation .slick-next"),
  });

  $(".our-instagram-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    speed: 900,
  });

  $(".contacts-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    dots: false,
    prevArrow: $(".contacts .slider-navigation .slick-prev"),
    nextArrow: $(".contacts .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".news-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "290px",
    dots: true,
    speed: 800,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  });

  $(".amenities-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    dots: false,
    variableWidth: true,
    speed: 800,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  });

  $(".footcourt-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    dots: false,
    variableWidth: true,
    speed: 800,
    autoplaSpeed: 2200,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  });

  $(".info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
          variableWidth: false,
        },
      },
    ],
  });

  $(".services-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    speed: 800,
    autoplay: true,
    prevArrow: $(".services .slider-navigation .slick-prev"),
    nextArrow: $(".services .slider-navigation .slick-next"),
  });

  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    centerMode: true,
    centerPadding: "100px",
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
          variableWidth: false,
        },
      },
    ],
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  $(".advertiser .next").on("click", function () {
    $(".advertiser-form-wrap").addClass("show");
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $("#application-form").validate({
    errorClass: "error", // Класс для ошибок
    errorPlacement: function (error, element) {
      // Оставляем пустым, чтобы не показывать текст ошибки
    },
    highlight: function (element) {
      $(element).addClass("error");
    },
    unhighlight: function (element) {
      $(element).removeClass("error");
    },
    submitHandler: function (form) {
      // Действия при успешной валидации
      $("#application-form").hide(); // Скрываем первую форму
      $("#second-form").show(); // Показываем вторую форму
    },
  });

  $("#advertiser-form").validate({
    errorClass: "error",
    errorPlacement: function (error, element) {},
  });

  // Кнопка отправки для первой формы
  $("#first-form-submit").on("click", function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение

    // Проверка первой формы
    if ($("#application-form").valid()) {
      $("#application-form").submit(); // Вызываем обработчик при успешной валидации
    }
  });

  $(".tab-link").click(function () {
    const tabId = $(this).data("tab");

    // Активируем текущую вкладку
    $(".tab-link").removeClass("active");
    $(this).addClass("active");

    // Плавно скрываем текущее содержимое
    $(".tab-content.active").removeClass("active");

    // Плавно показываем новое содержимое
    setTimeout(function () {
      $("#" + tabId).addClass("active");
    }, 0);
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });

  $(".top-scroll").smoothScroll({
    speed: 1000,
  });

  $(".shops-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    cssEase: "ease-in-out",
    prevArrow: $("#shops-popup .slider-navigation .slick-prev"),
    nextArrow: $("#shops-popup .slider-navigation .slick-next"),
  });

  $(".popup").magnificPopup({
    type: "inline",
    midClick: true,
    callbacks: {
      open: function () {
        $(".shops-slider").slick("setPosition");
      },
    },
  });

  AOS.init();
});



//-----------------------------------------------------------------
//--------------- STREET MAP FUNCTIONS  ---------------------------
//-----------------------------------------------------------------

let scale = 1;
let panX = 0;
let panY = 0;
let isPanning = false;
let startX, startY;

const mapStreetMapContent = document.querySelector('.map-street-map-content');
const MapSVG = $('.map-street-map-content svg g');
const mapStreetMapContentInfo = $('.map-street-map-content-info');
const mapStreetTabsItem = document.querySelectorAll('.map-street-tabs-item');
const svgTabs = $('.map-street-map-content svg');

mapStreetTabsItem.forEach((item, index) => {
  item.addEventListener('click', function (){
    mapStreetTabsItem.forEach((_el) => _el.classList.remove('active'));

    item.classList.add('active');

    svgTabs.css('display', 'none');

    svgTabs.get(index).style.display = 'block';

    scale = 1;
    panX = 0;
    panY = 0;

    updateTransform()
  })
})

MapSVG.each((index, g) => {
  setPositionTextMap(g)
})


function setPositionTextMap(g){
  const getText = $(g).find('foreignObject');
  const path = g.querySelector('path')?.getBBox();
  const rect = g.querySelector('rect')?.getBBox();
  const fixWidth = +getText.attr('data-width');
  const fixHeight = +getText.attr('data-height');


  const elem = g.getBoundingClientRect();


  getText.attr({
    'width': fixWidth || path?.width || rect?.width,
    'height': fixHeight || path?.height || rect?.height,
  })

  const params = {
    x: path?.x || rect?.x,
    y: path?.y || rect?.y,
    width: elem.width,
    height: elem.height,
  }

  getText.attr({
    'x': params.x,
    'y': params.y
  })
}



MapSVG.on('click', function (){
  const title = this.dataset.title || '';
  const elem = this.getBoundingClientRect();
  const parent = mapStreetMapContent.getBoundingClientRect();
  const getText = $(this).find('.text');
  const fixWidth = +getText.attr('data-width');
  const fixHeight = +getText.attr('data-height');

  const path = this.querySelector('path')?.getBBox();
  const rect = this.querySelector('rect')?.getBBox();

  const params = {
    x: path?.x || rect?.x,
    y: path?.y || rect?.y,
    width: fixWidth || path?.width || rect?.width,
    height: fixHeight || path?.height || rect?.height,
  }

    mapStreetMapContentInfo.css({
      left: params.x + (params.width / 2),
      top: params.y + params.height,
      transform: `translate(-${mapStreetMapContentInfo.width() / 2.2}px, 20px)`
    }).addClass('active');

    mapStreetMapContentInfo.find('.map-street-map-content-info-title').text(title);

    MapSVG.find('path').css({
      fill: '',
      stroke: '',
    })
    MapSVG.find('rect').css({
      fill: '',
      stroke: '',
    })

    $(this).find('path[fill="white"]').css({
      fill: '#f3eeee',
      stroke: 'red',
    })
    $(this).find('rect[fill="white"]').css({
      fill: '#f3eeee',
      stroke: 'red',
    })

})

MapSVG.on('mouseleave', function (){
    mapStreetMapContentInfo.removeClass('active');

    MapSVG.find('path').css({
      fill: '',
      stroke: '',
    })
    MapSVG.find('rect').css({
      fill: '',
      stroke: '',
    })
})

mapStreetMapContentInfo.on('mouseenter', function (){
  mapStreetMapContentInfo.addClass('active');
})
mapStreetMapContentInfo.on('mouseleave', function (){
    mapStreetMapContentInfo.removeClass('active');

    MapSVG.find('path').css({
      fill: '',
      stroke: '',
    })
    MapSVG.find('rect').css({
      fill: '',
      stroke: '',
    })
})

const svg = $(".svg-map");
const zoomInButton = $('.map-street-zoom-plus');
const zoomOutButton = $('.map-street-zoom-minous');


zoomInButton.on("click", () => {
  scale = Math.min(scale * 1.2, 5);
  updateTransform();
});

zoomOutButton.on("click", () => {
  scale = Math.max(scale / 1.2, 0.5);
  updateTransform();
});

function updateTransform() {
  if(window.innerWidth >= 768){
    svg.css('transform', `translate(${panX}px, ${panY}px) scale(${scale})`);
  }
}

svg.on("mousedown", (e) => {
  isPanning = true;
  startX = e.clientX - panX;
  startY = e.clientY - panY;
  svg.css('cursor', "grabbing");
});

svg.on("mousemove", (e) => {
  if (!isPanning) return;
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  updateTransform();
});

svg.on("mouseup", () => {
  isPanning = false;
  svg.css('cursor', "grab");
});

svg.on("mouseleave", () => {
  isPanning = false;
  svg.css('cursor', "grab");
});

svg.on("wheel", (e) => {
  e.preventDefault();
  const delta = e.originalEvent.deltaY > 0 ? 0.9 : 1.1;

  const newScale = Math.min(Math.max(scale * delta, 0.5), 5);
  if (newScale < scale) {
    panX = panX * (newScale / scale);
    panY = panY * (newScale / scale);
  }

  scale = newScale;
  updateTransform();
});
"use strict";

(() => {
  const header = () => {
    const body = document.body;
    const headerMobile = document.querySelector(".header-mobile");
    const headerDesktop = document.querySelector(".header-desktop");
    const burgerBtn = document.querySelector(".header-mobile__burger-btn");
    const burgerLine1 = document.querySelector(
      ".header-mobile__burger-layer-1"
    );
    const burgerLine2 = document.querySelector(
      ".header-mobile__burger-layer-2"
    );
    const burgerLine3 = document.querySelector(
      ".header-mobile__burger-layer-3"
    );
    const burgerLine4 = document.querySelector(
      ".header-mobile__burger-layer-4"
    );
    const burgerLine5 = document.querySelector(
      ".header-mobile__burger-layer-5"
    );

    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    const controlMAinMarginTop = () => {
      const main = document.querySelector(".main");
      const header = document.querySelector(".header");
      const heightHeader = window.getComputedStyle(header).height;
      main.style.marginTop = `${heightHeader}`;
    };

    const toggleBurger = () => {
      if (screenWidth <= 1000) {
        headerMobile.classList.remove("visually-hidden");
        headerDesktop.classList.add("visually-hidden");
      } else {
        headerMobile.classList.add("visually-hidden");
        headerDesktop.classList.remove("visually-hidden");
      }
    };

    let burgerStatus = "close";

    const controlHeightBurgerMenu = () => {
      const menuBuger = document.querySelector(".header-mobile__burger-menu");
      const preview = document.querySelector(".section-preview");
      const heightPreview = Number(
        window.getComputedStyle(preview).height.split("p")[0]
      );
      const header = document.querySelector(".header-mobile");
      const heightHeader = Number(
        window.getComputedStyle(header).height.split("p")[0]
      );
      menuBuger.style.height = `${heightPreview + heightHeader}px`;
      if (screenWidth <= 570) {
        menuBuger.style.width = "100%";
      } else {
        menuBuger.style.width = "250px";
      }

      if (burgerStatus === "close") {
        const widthBurgerMenu = Number(
          window.getComputedStyle(menuBuger).width.split("p")[0]
        );
        menuBuger.style.left = `-${widthBurgerMenu}px`;
      }
    };

    toggleBurger();
    controlMAinMarginTop();
    controlHeightBurgerMenu();
    window.addEventListener("resize", () => {
      // controlMAinMarginTop();
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;

      toggleBurger();
      controlMAinMarginTop();
      controlHeightBurgerMenu();
    });

    burgerBtn.addEventListener("click", () => {
      if (burgerStatus == "close") {
        burgerBtn.classList.add("burger-btn__disable");
        
        setTimeout(() => {
          burgerLine1.classList.add("layer-1-animation");
        }, 0);

        setTimeout(() => {
          burgerLine2.classList.add("layer-2-animation");
        }, 100);

        setTimeout(() => {
          burgerLine3.classList.add("layer-3-animation");
        }, 200);

        setTimeout(() => {
          burgerLine4.classList.add("layer-4-animation");
        }, 350);

        setTimeout(() => {
          burgerLine5.classList.add("layer-5-animation");
        }, 350);

        setTimeout(() => {
          burgerStatus = "open";
          burgerBtn.classList.remove("burger-btn__disable");
        }, 450);

        controlHeightBurgerMenu();

        const menuBuger = document.querySelector(".header-mobile__burger-menu");
        const widthBurgerMenu = Number(
          window.getComputedStyle(menuBuger).width.split("p")[0]
        );
        console.log(screenWidth);
        if (screenWidth >= 570) {
          let leftMax = 0;
          let leftCount = -widthBurgerMenu;
          const animationBurgerMenu = setInterval(() => {
            if (leftCount >= leftMax) {
              clearInterval(animationBurgerMenu);
            }
            ++leftCount;
            ++leftCount;
            menuBuger.style.left = `${leftCount}px`;
          }, 1);
        } else {
          let leftMax = 0;
          let leftCount = -widthBurgerMenu;
          const animationBurgerMenu = setInterval(() => {
            if (leftCount >= leftMax) {
              clearInterval(animationBurgerMenu);
            }
            ++leftCount;
            ++leftCount;
            ++leftCount;
            menuBuger.style.left = `${leftCount}px`;
          }, 1);
        }
      } else {
        burgerBtn.classList.add("burger-btn__disable");
        setTimeout(() => {
          burgerLine4.classList.remove("layer-4-animation");
        }, 0);

        setTimeout(() => {
          burgerLine5.classList.remove("layer-5-animation");
        }, 0);

        setTimeout(() => {
          burgerLine1.classList.remove("layer-1-animation");
        }, 350);

        setTimeout(() => {
          burgerLine2.classList.remove("layer-2-animation");
        }, 200);

        setTimeout(() => {
          burgerLine3.classList.remove("layer-3-animation");
        }, 100);

        setTimeout(() => {
          
          burgerStatus = "close";
          burgerBtn.classList.remove("burger-btn__disable");
        }, 450);

        controlHeightBurgerMenu();

        const menuBuger = document.querySelector(".header-mobile__burger-menu");
        const widthBurgerMenu = Number(
          window.getComputedStyle(menuBuger).width.split("p")[0]
        );
        if (screenWidth >= 570) {
          let leftMax = -widthBurgerMenu;
          let leftCount = 0;
          const animationBurgerMenu = setInterval(() => {
            if (leftCount <= leftMax) {
              clearInterval(animationBurgerMenu);
            }
            --leftCount;
            --leftCount;
            menuBuger.style.left = `${leftCount}px`;
          }, 1);
        } else {
          let leftMax = -widthBurgerMenu;
          let leftCount = 0;
          const animationBurgerMenu = setInterval(() => {
            if (leftCount <= leftMax) {
              clearInterval(animationBurgerMenu);
            }
            --leftCount;
            --leftCount;
            --leftCount;
            menuBuger.style.left = `${leftCount}px`;
          }, 1);
        }
      }
    });
  };

  const animationText = () => {
    var typed = new Typed("#typed-title-preview", {
      strings: ["Разработка сайтов ^60000"],
      typeSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });

    var typed2 = new Typed("#typed-span-preview", {
      strings: [
        "Полный цикл разработки продукта ^3000",
        "Индивидуальный подход к каждому клиенту ^3000",
        "Доработка существующего сайта ^3000",
        "Создание админки ^3000",
        "Создание сайта на wordpress ^3000",
        "Разработка телеграмм-бота для вашего сайта ^3000",
      ],
      typeSpeed: 20,
      loop: true,
      loopCount: Infinity,
    });
  };

  const animationBackgroundPrice = () => {
    VANTA.FOG({
      el: "#price",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xffa300,
      midtoneColor: 0x9b00ff,
      lowlightColor: 0xffb400,
      baseColor: 0xff,
    });
  };

  const main = () => {
    header();
    animationText();
    animationBackgroundPrice();
  };

  main();
})();

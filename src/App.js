import { useEffect, useRef, useState } from "react";
import "./App.css";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    var apearanimations = document.getElementsByClassName(
      "apearanimationobserver"
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("apearanimation");
        }
      });
    });
    Array.from(apearanimations).forEach((apearanimation) => {
      observer.observe(apearanimation);
    });
  });
  const Jiggle = () => {
    const jiggle_container = useRef();
    const jiggle_1_ref = useRef();
    const jiggle_2_ref = useRef();
    const jiggle_3_ref = useRef();
    const jiggle_4_ref = useRef();
    useEffect(() => {
      jiggle_container.current.addEventListener("mousemove", (event) => {
        const mouse_x = event.clientX;
        const mouse_y = event.clientY;
        //-3 to +3 deg
        var windows_width = window.innerWidth;
        var windows_height = window.innerHeight;

        var rotate_z = (mouse_x / windows_width) * 6 - 3;
        var translate_y = ((mouse_y / windows_height) * 6 - 3) * 5;
        jiggle_1_ref.current.style.transform = `translateY(${-translate_y}px) rotateZ(${rotate_z}deg) translateX(${
          rotate_z * 20
        }px)`;
        jiggle_2_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${
          rotate_z * -10
        }px)`;
        jiggle_3_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${rotate_z}deg) translateX(${
          rotate_z * -10
        }px)`;
        jiggle_4_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${
          rotate_z * -10
        }px)`;
      });
      jiggle_container.current.addEventListener("mouseleave", (event) => {
        jiggle_1_ref.current.style.transform =
          "translateY(0px) translateX(0px) rotateZ(0deg)";
        jiggle_2_ref.current.style.transform =
          "translateY(0px) translateX(0px) rotateZ(0deg)";
        jiggle_3_ref.current.style.transform =
          "translateY(0px) translateX(0px) rotateZ(0deg)";
        jiggle_4_ref.current.style.transform =
          "translateY(0px) translateX(0px) rotateZ(0deg)";
      });
      jiggle_container.current.addEventListener("touchmove", (event) => {
        var mouse_x = event.targetTouches[0].clientX;
        var mouse_y = event.targetTouches[0].clientY;
        mouse_x = Math.floor(mouse_x);
        mouse_y = Math.floor(mouse_y);
        //-3 to +3 deg
        var windows_width = window.innerWidth;
        var windows_height = window.innerHeight;

        var rotate_z = (mouse_x / windows_width) * 6 - 3;
        var translate_y = ((mouse_y / windows_height) * 6 - 3) * 5;
        jiggle_1_ref.current.style.transform = `translateY(${-translate_y}px) rotateZ(${rotate_z}deg) translateX(${
          rotate_z * 20
        }px)`;
        jiggle_2_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${
          rotate_z * -10
        }px)`;
        jiggle_3_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${rotate_z}deg) translateX(${
          rotate_z * -10
        }px)`;
        jiggle_4_ref.current.style.transform = `translateY(${translate_y}px) rotateZ(${-rotate_z}deg) translateX(${
          rotate_z * -10
        }px)`;
      });
    }, []);

    return (
      <section className="video_bg2">
        <div ref={jiggle_container} className="pb-32 pt-20  video_bg3">
          <div className="mx-auto apearanimationobserver sm:w-2/3 w-10/12 pb-10 md:pb-16 text-center text-white">
            <h2>
              With Neto Game the boundaries between reality and truth are
              redefined
            </h2>
            <p className="pt-3 text-white">
              At Neto, we believe that the future of gaming lies not only in
              entertainment but also in creating financial and economic
              opportunities for players. By utilizing blockchain technology and
              digital currencies, our company aims to develop games that allow
              players to earn real income while enjoying the game
            </p>
            <button className="my-auto mt-4 rounded-3xl bg-white px-6 py-2 text-lg font-bold text-black transition-all hover:scale-95">
              Visit Website
            </button>
          </div>
          <div className="relative apearanimationobserver mx-auto w-9/12 max-w-4xl">
            <img
              src="sec_5_pic_1.png"
              alt=""
              className="transition ease-out"
              ref={jiggle_1_ref}
            />
            <img
              src="sec_5_pic_2.png"
              alt=""
              className="absolute -right-10 -top-10 w-1/2 rounded-2xl backdrop-blur-lg transition ease-out md:-right-20"
              ref={jiggle_2_ref}
            />
            <img
              src="sec_5_pic_3.png"
              alt=""
              className="absolute -bottom-10 -right-10 w-1/2 transition ease-out md:-right-20"
              ref={jiggle_3_ref}
            />
            <img
              src="sec_5_pic_4.png"
              alt=""
              className="absolute -left-9 top-1/2 w-1/2 -translate-y-1/2 rounded-2xl backdrop-blur-lg transition ease-out md:-left-20"
              ref={jiggle_4_ref}
            />
          </div>
        </div>
      </section>
    );
  };
  const Carousel_2 = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

    let sliderRef = useRef(null);
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "350px",
      centerMode: true,
      slidesToShow: 1,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlideNumber(newIndex);
      },
      customPaging: (i) => (
        <div
          className={
            i === currentSlideNumber
              ? "size-3 rounded-full border bg-white hover:opacity-85"
              : "size-3 rounded-full border hover:bg-slate-400 hover:opacity-85"
          }
        ></div>
      ),

      responsive: [
        {
          breakpoint: 640,
          settings: {
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 1024,
          settings: {
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 1440,
          settings: {
            centerPadding: "250px",
          },
        },
        {
          breakpoint: 1750,
          settings: {
            centerPadding: "250px",
          },
        },
        {
          breakpoint: 1920,
          settings: {
            centerPadding: "500px",
          },
        },
        {
          breakpoint: 4034,
          settings: {
            centerPadding: "600px",
          },
        },
      ],
    };
    return (
      <section>
        <div>
          <div className="relative py-10 video_bg2">
            <div class="absolute top-0 h-1/5 w-full bg-white md:h-1/2"></div>
            <div className="slider-container apearanimationobserver mx-auto video_bg3">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                <div className="w-full">
                  <div className="h-full cursor-pointer rounded-xl px-3 py-8 md:px-0">
                    <div>
                      <img
                        placeholder="blur"
                        src="carousel2_pic_1.png"
                        width={0}
                        height={0}
                        alt=""
                        className={
                          currentSlideNumber === 0
                            ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                            : "w-full rounded-xl transition-all duration-300 md:scale-90"
                        }
                      />
                    </div>

                    <div
                      className={
                        currentSlideNumber === 0
                          ? "relative pt-4 text-center transition-opacity duration-500 md:pt-10"
                          : "relative pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                      }
                    >
                      <div className="relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10">
                        <div className="font-abcgintonord_extrabold pb-5 pt-7 text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                          How To Buy Neto Token
                        </div>
                        <div className="Objectivity_Regular pb-10 text-lg text-white">
                          In the first step, install one of the wallets shown in
                          the image on your phone
                        </div>
                        <a
                          href="/"
                          className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                    <div>
                      <img
                        placeholder="blur"
                        src="carousel2_pic_2.png"
                        width={0}
                        height={0}
                        alt=""
                        className={
                          currentSlideNumber === 1
                            ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                            : "w-full rounded-xl transition-all duration-300 md:scale-90"
                        }
                      />
                    </div>

                    <div
                      className={
                        currentSlideNumber === 1
                          ? "relative pt-4 text-center transition-opacity duration-500 md:pt-10"
                          : "relative pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                      }
                    >
                      <div className="relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10">
                        <div className="">
                          <div className="font-abcgintonord_extrabold pb-5 pt-7 text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                            How To Buy Neto Token
                          </div>
                          <div className="Objectivity_Regular pb-10 text-lg text-white">
                            In this step, switch the network to the Polygon
                            network
                          </div>
                          <a
                            href="/"
                            className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                    <div>
                      <img
                        placeholder="blur"
                        src="carousel2_pic_3.png"
                        width={0}
                        height={0}
                        alt=""
                        className={
                          currentSlideNumber === 2
                            ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                            : "w-full rounded-xl transition-all duration-300 md:scale-90"
                        }
                      />
                    </div>

                    <div
                      className={
                        currentSlideNumber === 2
                          ? "relative  pt-4 text-center transition-opacity duration-500 md:pt-10"
                          : "relative  pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                      }
                    >
                      <div className="relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10">
                        <div className="">
                          <div className="font-abcgintonord_extrabold pb-5 pt-7 text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                            How To Buye Neto Token
                          </div>
                          <div className="Objectivity_Regular pb-10 text-lg text-white">
                            Here, you need to deposit POL tokens
                          </div>
                          <a
                            href="/"
                            className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="h-full cursor-pointer rounded-xl px-3 py-8 pb-8 md:px-0">
                    <div>
                      <img
                        placeholder="blur"
                        src="carousel2_pic_4.png"
                        width={0}
                        height={0}
                        alt=""
                        className={
                          currentSlideNumber === 3
                            ? "w-full rounded-xl transition-all duration-300 md:scale-105"
                            : "w-full rounded-xl transition-all duration-300 md:scale-90"
                        }
                      />
                    </div>

                    <div
                      className={
                        currentSlideNumber === 3
                          ? "relative  pt-4 text-center transition-opacity duration-500 md:pt-10"
                          : "relative  pt-4 text-center opacity-0 transition-opacity duration-500 md:pt-10"
                      }
                    >
                      <div className="relative px-10 pt-4 text-center transition-opacity duration-500 md:pt-10">
                        <div className="">
                          <div className="font-abcgintonord_extrabold pb-5 pt-7 text-2xl uppercase text-white sm:text-3xl xl:text-4xl">
                            How To Buye Neto Token
                          </div>
                          <div className="Objectivity_Regular pb-10 text-lg text-white">
                            Here , you need to Exchange POL With NETO
                          </div>
                          <a
                            href="/"
                            className="my-6 cursor-pointer rounded-2xl bg-white px-3 py-2 text-sm font-bold text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <div className="App">
      <div className="video_bg">
        <img alt="" src="video_main_bg.png" className="hidden" />

        <section>
          <div className="flex justify-between bg-black px-4 py-2">
            <div className="text-lg md:flex">
              <div className="flex items-center font-bold text-white md:mr-6">
                Netoprice
                <div className="loader mx-2 border-white"></div>
              </div>
              <div className="flex items-center font-bold text-white md:mr-6">
                Netoprice
                <div className="loader mx-2 border-white"></div>
              </div>
              <div className="flex items-center font-bold text-white md:mr-6">
                Netoprice
                <div className="loader mx-2 border-white"></div>
              </div>
            </div>
            <button className="my-auto rounded-3xl bg-white px-4 py-2 text-lg font-bold text-black transition-all hover:scale-95 sm:px-6">
              connect wallet
            </button>
          </div>
        </section>

        <section className="apearanimationobserver m-auto max-w-7xl">
          <div>
            <div className="video_bg2 flex flex-col pt-16 md:flex-row-reverse md:items-center">
              <div className="md:w-[60%]">
                <img alt="" src="sec_1.webp" />
              </div>
              <div className="px-10 pt-5 md:w-[40%] md:pl-16 md:pr-0 md:pt-0">
                <div className="font-abcgintonord_extrabold text-center text-3xl uppercase text-white md:text-start xl:text-5xl">
                  join the Neto family <br />
                  with a free initial registration
                </div>
                <div className="Objectivity_Regular py-4 pb-6 text-center text-xl text-white md:text-start xl:text-2xl">
                  If you are among the first 10,000 registrants, you will
                  receive 1,000 Neto tokens as a gift, which you can sell at any
                  time
                </div>
              </div>
            </div>
            <div className="mx-auto flex flex-col justify-center items-center py-5 sm:flex-row">
              <a
                href="https://neto.game/"
                className="mx-2 my-3 w-max cursor-pointer rounded-full bg-[#161CBB] px-7 py-3 text-xl text-white outline-none outline-2 delay-75 hover:bg-[#161CBB] hover:outline-offset-2 hover:outline-[#4c51e2] sm:text-2xl"
              >
                Visit Neto token website
              </a>
              <a
                href="/"
                className="mx-2 my-3 w-max cursor-pointer rounded-full bg-white px-7 py-3 text-xl text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white sm:text-2xl"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </section>

        <section className="video_bg2 py-10">
          <div className="video_bg3 mx-auto max-w-7xl">
            <div className="apearanimationobserver px-5 py-6 md:flex">
              <h2 className="pb-5 px-2 text-center text-white">
                Neto's roadmap includes several gaming, NFT, and Metaverse
                projects
              </h2>
            </div>
            <div>
              <div className="justify-stretch md:flex">
                <div>
                  <div className="h-full p-3">
                    <div className="apearanimationobserver h-full cursor-pointer items-center overflow-hidden rounded-3xl border border-white/20 bg-[#8080804d] text-white backdrop-blur-xl transition-all hover:scale-[98%] md:flex">
                      <div className="px-5 py-5 md:w-1/3">
                        <h3>Be a shareholder in Neto games</h3>
                        <p className="pt-3 text-[#bababa]">
                          Additionally, Neto has also begun activities in
                          producing accessories and products related to the
                          company, each of which has the potential to create
                          significant wealth for Neto's shareholders
                        </p>
                      </div>
                      <img alt="" src="sec_2_pic_1.png" className="md:w-2/3" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="h-1/2 p-3">
                    <div className="apearanimationobserver flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-[#8080804d] text-white backdrop-blur-xl transition-all hover:scale-[98%]">
                      <img
                        alt=""
                        src="sec_2_pic_2.png"
                        className="h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="h-1/2 p-3">
                    <div className="apearanimationobserver flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-[#8080804d] text-white backdrop-blur-xl transition-all hover:scale-[98%]">
                      <img
                        alt=""
                        src="sec_2_pic_3.png"
                        className="h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-stretch md:flex">
                <div className="md:w-1/3">
                  <div className="h-full p-3">
                    <div className="apearanimationobserver relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-[#8080804d] pt-8 text-white backdrop-blur-xl transition-all hover:scale-[98%]">
                      <div className="pl-4 pt-5">
                        <h3 className="px-4 pb-3 text-center text-2xl leading-8 xl:text-[30px]">
                          Neto's first gaming project is the Netoball game
                        </h3>
                        <p className="pt-3 text-[#bababa]">
                          Netoball is an exciting multiplayer
                          <span className="text-nowrap"> soccer-style </span>
                          game that, besides its engaging gameplay, can attract
                          millions of users due to the income generation
                          potential and the popularity of football, creating
                          vast revenue
                        </p>
                      </div>
                      <img
                        alt=""
                        src="sec_2_pic_4.png"
                        className="w-full object-contain object-bottom"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="h-full p-3">
                    <div className="apearanimationobserver h-full cursor-pointer items-center overflow-hidden rounded-3xl border border-white/20 bg-[#8080804d] text-white backdrop-blur-xl transition-all hover:scale-[98%]">
                      <img alt="" src="sec_2_pic_5.png" className="" />
                      <div className="mx-auto sm:w-2/3 w-11/12 px-5 py-5 text-center">
                        <p className="text-2xl text-[#bababa]">
                          It's important to note that all share purchases are
                          conducted in a secure and reliable manner via smart
                          contracts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center px-3">
              <div class="px-1 w-full">
                <div class="my-2 flex flex-col items-center rounded-lg bg-[#80808060] border border-white/20 p-2 py-12 text-white backdrop-blur-xl">
                  <h3 class="text-center text-white">GET REWARD</h3>
                  <div class="flex w-full flex-col items-center py-8 justify-center md:flex-row">
                    <div className="flex flex-col md:flex-row w-9/12 ">
                      <input
                        type="text"
                        class="w-full rounded-md bg-[#808080bd] border border-white/20 p-1 py-2 text-white placeholder:text-white/50"
                        placeholder="Referral"
                      />
                    </div>
                    <a
                      href="/"
                      className="mx-2 my-3 w-max cursor-pointer rounded-lg bg-white px-7 py-2 text-xl text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white "
                    >
                      Connect&nbsp;or&nbsp;Get
                    </a>
                  </div>
                </div>
                <div class="my-2 flex flex-col items-center rounded-lg bg-[#80808060] border border-white/20 p-2 py-12 text-white backdrop-blur-xl">
                  <h3 class="text-center text-white">GET Referral</h3>
                  <h3 className="pt-4 px-4  text-center text-black text-2xl leading-8 xl:text-[30px]">
                    30 MATIC
                  </h3>

                  <div class="flex w-full flex-col items-center py-8 justify-center md:flex-row">
                    <div className="flex flex-col md:flex-row w-9/12 ">
                      <input
                        type="text"
                        class="w-full rounded-md bg-[#808080bd] border border-white/20 p-1 py-2 text-white placeholder:text-white/50"
                        placeholder="Referral"
                      />
                    </div>
                    <a
                      href="/"
                      className="mx-2 my-3 w-max cursor-pointer rounded-lg bg-white px-7 py-2 text-xl text-black outline-none outline-2 delay-75 hover:bg-gray-200 hover:outline-offset-2 hover:outline-white "
                    >
                      Connect&nbsp;or&nbsp;Get
                    </a>
                  </div>
                </div>
              </div>
              <div class="px-1 w-full">
                <div class="my-2 flex flex-col items-center rounded-lg bg-[#80808060] border border-white/20 p-2 py-12 text-white backdrop-blur-xl">
                  <h3 class="text-center text-white">SET TELEGRAM ID FOR TV</h3>

                  <div class="flex w-full flex-col items-center py-8 justify-center md:flex-row">
                    <div className="flex flex-col md:flex-row w-9/12 ">
                      <input
                        type="text"
                        class="w-full rounded-md bg-[#808080bd] border border-white/20 p-1 py-2 text-white placeholder:text-white/50"
                        placeholder="TELEGRAM ID"
                      />
                    </div>
                    <a
                      href="/"
                      className="mx-2 my-3 w-max cursor-pointer rounded-lg bg-black px-7 py-2 text-xl text-white outline-none outline-2 delay-75 hover:bg-gray-800 hover:outline-offset-2 hover:outline-black "
                    >
                      SUBMIT
                    </a>
                  </div>
                </div>
                <div class="my-2 flex flex-col items-center rounded-lg bg-[#80808060] border border-white/20 p-2 py-12 text-white backdrop-blur-xl">
                  <h3 class="text-center text-white">BUY NETO SHARE</h3>
                  <h3 className="pt-4 px-4  text-center text-black text-2xl leading-8 xl:text-[30px]">
                    440 Neto / 660 Neto
                  </h3>

                  <div class="flex w-full flex-col items-center py-8 justify-center md:flex-row">
                    <div className="flex flex-col md:flex-row w-9/12 ">
                      <input
                        type="text"
                        class="w-full rounded-md bg-[#808080bd] border border-white/20 p-1 py-2 text-white placeholder:text-white/50"
                        placeholder="Referral"
                      />
                    </div>
                    <a
                      href="/"
                      className="mx-2 my-3 w-max cursor-pointer rounded-lg bg-black px-7 py-2 text-xl text-white outline-none outline-2 delay-75 hover:bg-gray-800 hover:outline-offset-2 hover:outline-black "
                    >
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="bg-[url('../public/sec_4_bg_1.jpg')] bg-cover py-20">
              <div className="apearanimationobserver mx-auto w-11/12 max-w-6xl py-20 xl:px-20">
                <div>
                  <img
                    alt=""
                    src="sec_4_pic.png"
                    className="rounded-3xl backdrop-blur-2xl"
                  />
                </div>
                <div className="my-5 rounded-2xl bg-[#8080804d] p-5 py-10 text-center text-white backdrop-blur-lg md:py-32 xl:py-20">
                  <h2>Neto Game's Revenue Sources from the Netoball Game</h2>
                  <p className="pt-10 text-white">
                    Neto's income from this game includes in-game ads, in-app
                    purchases, premium version sales, game bundles, hosting
                    online events, and leagues, as well as user payments for
                    buying and selling items in the game's store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="video_bg2 py-10">
            <div className="video_bg3 apearanimationobserver px-8 pt-32 md:px-16">
              <div className="relative mx-auto md:w-fit">
                <div className="relative z-20 max-w-7xl rounded-[40px] border-4 border-white/40 bg-[linear-gradient(135deg,#fff6,#ffffff12)] p-2">
                  <div className="flex flex-col items-center md:flex-row-reverse">
                    <div className="sm:p-8 px-2 py-8 md:w-[40%]">
                      <div className="font-abcgintonord_extrabold text-3xl uppercase text-white xl:text-5xl">
                        Limited Netoball Share Offering
                      </div>
                      <div className="Objectivity_Regular py-4 pb-6 text-xl text-white xl:text-2xl">
                        The presale or initial offering of shares from
                        Netoball's revenue is structured so that each user needs
                        to pay the equivalent of 440,000 Neto tokens for each
                        share. The number of shares is limited, and once it
                        reaches 5,000, no more shares will be available
                      </div>
                    </div>
                    <div className="p-2 md:w-[60%]">
                      <video
                        loop
                        muted
                        autoPlay
                        src="video_sec2_1.mp4"
                        className="rounded-[40px]"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video_bg3 apearanimationobserver px-8 pt-32 md:px-16">
              <div className="relative mx-auto md:w-fit">
                <div className="relative z-20 max-w-7xl rounded-[40px] border-4 border-white/40 bg-[linear-gradient(135deg,#fff6,#ffffff12)] p-2">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="sm:p-8 px-2 py-8 md:w-[40%]">
                      <div className="font-abcgintonord_extrabold text-3xl uppercase text-white xl:text-5xl">
                        Exclusive Neto TV Subscription
                      </div>
                      <div className="Objectivity_Regular py-4 pb-6 text-xl text-white xl:text-2xl">
                        Additionally, you can purchase a 180-day subscription to
                        the Neto TV exclusive Telegram channel for 30 POL . It's
                        worth noting that individuals who purchase this
                        subscription will receive 10% of the payment amount,
                        equivalent to 3 POL , in Neto tokens
                      </div>
                    </div>
                    <div className="p-2 md:w-[60%]">
                      <video
                        loop
                        muted
                        autoPlay
                        src="video_sec2_2.mp4"
                        className="rounded-[40px]"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video_bg3 apearanimationobserver px-8 pt-32 md:px-16">
              <div className="relative mx-auto md:w-fit">
                <div className="relative max-w-7xl rounded-[40px] border-4 border-white/40 bg-[linear-gradient(135deg,#fff6,#ffffff12)] p-2">
                  <div className="flex flex-col items-center md:flex-row-reverse">
                    <div className="sm:p-8 px-2 py-8 md:w-[40%]">
                      <div className="font-abcgintonord_extrabold text-3xl uppercase text-white xl:text-5xl">
                        Earn with Neto Affiliate
                      </div>
                      <div className="Objectivity_Regular py-4 pb-6 text-xl text-white xl:text-2xl">
                        Furthermore, you can obtain your own affiliate code. By
                        providing this code to others for purchasing the
                        subscription, you will receive 30% of the subscription
                        fee, equivalent to 9 MATIC, in Neto tokens at the
                        current price. Importantly, you can share your affiliate
                        code with an unlimited number of users, earning Neto
                        tokens for each subscription sold at the value of 9
                        MATIC
                      </div>
                    </div>
                    <div className="p-2 md:w-[60%]">
                      <video
                        loop
                        muted
                        autoPlay
                        src="video_sec2_3.mp4"
                        className="rounded-[40px]"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video_bg3 apearanimationobserver px-8 pt-32 md:px-16">
              <div className="relative mx-auto md:w-fit">
                <div className="relative z-20 max-w-7xl rounded-[40px] border-4 border-white/40 bg-[linear-gradient(135deg,#fff6,#ffffff12)] p-2">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="sm:p-8 px-2 py-8 md:w-[40%]">
                      <div className="font-abcgintonord_extrabold text-3xl uppercase text-white xl:text-5xl">
                        Accumulate Neto Tokens Easily
                      </div>
                      <div className="Objectivity_Regular py-4 pb-6 text-xl text-white xl:text-2xl">
                        if someone shares their affiliate code on social media
                        and attracts 1,000 new users to Neto, they will receive
                        Neto tokens equivalent to 9,000 POL for those 1,000
                        subscriptions.
                        <br />
                        This method allows you to accumulate a large number of
                        Neto tokens without purchasing them, simply by referring
                        others
                      </div>
                    </div>
                    <div className="p-2 md:w-[60%]">
                      <video
                        loop
                        muted
                        autoPlay
                        src="video_sec2_4.mp4"
                        className="rounded-[40px]"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Carousel_2 />

        <section>
          <div>
            <div className="bg-[url(../public/sec_4_bg.jpg)] bg-cover py-20">
              <div className="apearanimationobserver mx-auto w-11/12 max-w-6xl py-20 xl:px-20">
                <div>
                  <img
                    alt=""
                    src="sec_4_pic.png "
                    className="rounded-3xl backdrop-blur-2xl"
                  />
                </div>
                <div className="my-5 rounded-2xl bg-[#8080804d] p-5 py-10 text-center text-white backdrop-blur-lg md:py-20 xl:py-20">
                  <h2>
                    Increase Neto Token Value with Subscription Fee
                    Contributions
                  </h2>

                  <p className="pt-5 text-white">
                    Additionally, 20% of the subscription fee paid by users,
                    equivalent to 6 POL , is added to the Neto token liquidity
                    pool without creating new tokens, which helps to boost the
                    token's value. The remaining 40% covers the company's
                    project costs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Jiggle />
      </div>
    </div>
  );
}

export default App;

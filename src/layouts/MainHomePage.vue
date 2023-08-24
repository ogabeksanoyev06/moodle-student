<template>
  <div id="home__container">
<div class="main__header">
  <div class="background__posetion__elements">
    <kinesis-container class="posetion-line">
      <kinesis-element>
        <img src="/icons/line.svg"/>

      </kinesis-element>
    </kinesis-container>
    <kinesis-container class="posetion-sfera">
      <kinesis-element>
        <img src="/icons/sfera.svg"/>

      </kinesis-element>
    </kinesis-container>
    <kinesis-container class="posetion-half-sfera">
      <kinesis-element>
        <img src="/icons/halfSfera.svg"/>

      </kinesis-element>
    </kinesis-container>

  </div>
  <div class="front__elements">
    <div class="front-element-inner">
    <div class="navbar">
      <div class="navbar-container">
        <div class="left__side__navbar">
          <div class="logo">
            <img src="/icons/logo.png">
          </div>
        </div>
        <div class="right__side__navbar">
          <div class="language">
            <img src="/icons/earth.svg">
          </div>
          <AppButton
              :font-size="20"
              :weight="500"
              :sides="30"
              height="47"
              width="114"
              class="navbar-button"
          >
            Log in
          </AppButton>
        </div>
      </div>
      <div class="line"></div>

    </div>
    <div class="header">
      <div class="header-container">
        <div class="header__left">
          <div
              class="header-main-title"

          >Toshkent <span>Moliya</span> <br/>
            Institutining</div>
          <AppButton
              :radius="25"
              :width="486"
              :height="86"
              :weight="700"
              class="header-button">
            Moodle tizimi
          </AppButton>
        </div>
        <div class="header__right">
          <div class="header__main__img">
            <img src="/icons/headerImg.svg">
          </div>
          <kinesis-container class="posetion-line">
            <kinesis-element>
              <img src="/icons/line.svg" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container class="posetion-sfera">
            <kinesis-element>
              <img src="/icons/sfera.svg" />
            </kinesis-element>
          </kinesis-container>
          <kinesis-container class="posetion-half-sfera">
            <kinesis-element>
              <img src="/icons/halfSfera.svg" />
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>



    </div>
    </div>
  </div>

  
</div>
<div class="section-about">
  <div class="section-container">
<div class="card" v-for="iteam in this.cards" :key="iteam.id">
  <div class="icon"><img :src="'/icons/'+iteam.icon"/></div>
  <div class="card-content" >
    <div class="card-title">
      <div class="title">{{iteam.title}}</div>
      <div class="subtitle">{{iteam.subTitle}}</div>
      <div class="amount">{{iteam.amout}} ta</div>
    </div>
  </div>
</div>
  </div>
  <kinesis-container class="posetion-line2">
    <kinesis-scroll>
      <img src="/icons/line2.svg">
    </kinesis-scroll>
  </kinesis-container>
</div>
<div class="footer">
  <div class="footer-container">
    <div class="titles">
      <div class="footer-title">
        Biz bilan bog'laning
      </div>
      <div class="footer-title">
        Toshkent moliya instituti
      </div>
      <div class="footer-title">
        Manzil
      </div>
    </div>
    <div class="line"></div>
    <div class="footer-content">
      <div class="footer-content-card">
      <div class="common-info">
        <li>Tel:<a href="#">(998)917381025</a></li>
        <li>Fax:<a href="#">(998)917381025</a></li>
        <li>Email:<a href="#">(998)917381025</a></li>
        <li>Ishonch telfoni:<a href="#">(998)917381025</a></li>
      </div>
      <div class="social-media">
        <div class="footer-title">Ijtimoiy saxifalar</div>
        <div class="icons">
          <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_391_82)">
              <path d="M11.9141 10C11.9141 11.0571 11.0571 11.9141 10 11.9141C8.94287 11.9141 8.08594 11.0571 8.08594 10C8.08594 8.94287 8.94287 8.08594 10 8.08594C11.0571 8.08594 11.9141 8.94287 11.9141 10Z" fill="#002F4B"/>
              <path d="M14.4763 6.61343C14.3843 6.36411 14.2375 6.13843 14.0468 5.95319C13.8615 5.76245 13.636 5.61566 13.3865 5.52365C13.1842 5.44507 12.8802 5.35153 12.3204 5.32605C11.7148 5.29843 11.5332 5.29248 10 5.29248C8.46664 5.29248 8.28506 5.29828 7.6796 5.3259C7.11975 5.35153 6.81564 5.44507 6.61346 5.52365C6.36398 5.61566 6.13831 5.76245 5.95322 5.95319C5.76248 6.13843 5.61569 6.36395 5.52353 6.61343C5.44495 6.81577 5.35141 7.11987 5.32593 7.67972C5.29831 8.28519 5.29236 8.46677 5.29236 10.0001C5.29236 11.5333 5.29831 11.7149 5.32593 12.3205C5.35141 12.8804 5.44495 13.1843 5.52353 13.3867C5.61569 13.6361 5.76233 13.8617 5.95306 14.0469C6.13831 14.2376 6.36383 14.3844 6.61331 14.4764C6.81564 14.5552 7.11975 14.6487 7.6796 14.6742C8.28506 14.7018 8.46649 14.7076 9.99985 14.7076C11.5334 14.7076 11.7149 14.7018 12.3203 14.6742C12.8801 14.6487 13.1842 14.5552 13.3865 14.4764C13.8873 14.2833 14.2831 13.8875 14.4763 13.3867C14.5549 13.1843 14.6484 12.8804 14.6741 12.3205C14.7017 11.7149 14.7075 11.5333 14.7075 10.0001C14.7075 8.46677 14.7017 8.28519 14.6741 7.67972C14.6486 7.11987 14.5551 6.81577 14.4763 6.61343ZM10 12.9486C8.37143 12.9486 7.05124 11.6285 7.05124 9.99997C7.05124 8.3714 8.37143 7.05136 10 7.05136C11.6284 7.05136 12.9486 8.3714 12.9486 9.99997C12.9486 11.6285 11.6284 12.9486 10 12.9486ZM13.0652 7.62387C12.6846 7.62387 12.3761 7.31534 12.3761 6.93478C12.3761 6.55423 12.6846 6.2457 13.0652 6.2457C13.4457 6.2457 13.7543 6.55423 13.7543 6.93478C13.7541 7.31534 13.4457 7.62387 13.0652 7.62387Z" fill="#002F4B"/>
              <path d="M10 0C4.478 0 0 4.478 0 10C0 15.522 4.478 20 10 20C15.522 20 20 15.522 20 10C20 4.478 15.522 0 10 0ZM15.7076 12.3674C15.6798 12.9787 15.5826 13.396 15.4407 13.7613C15.1424 14.5326 14.5326 15.1424 13.7613 15.4407C13.3961 15.5826 12.9787 15.6796 12.3676 15.7076C11.7552 15.7355 11.5596 15.7422 10.0002 15.7422C8.44055 15.7422 8.24509 15.7355 7.6326 15.7076C7.02148 15.6796 6.604 15.5826 6.23886 15.4407C5.85556 15.2965 5.50858 15.0705 5.22171 14.7783C4.92966 14.4916 4.70367 14.1444 4.55948 13.7613C4.41757 13.3961 4.32037 12.9787 4.2926 12.3676C4.26437 11.7551 4.25781 11.5594 4.25781 10C4.25781 8.44055 4.26437 8.24493 4.29245 7.6326C4.32022 7.02133 4.41727 6.604 4.55917 6.23871C4.70337 5.85556 4.9295 5.50842 5.22171 5.22171C5.50842 4.9295 5.85556 4.70352 6.23871 4.55933C6.604 4.41742 7.02133 4.32037 7.6326 4.29245C8.24493 4.26453 8.44055 4.25781 10 4.25781C11.5594 4.25781 11.7551 4.26453 12.3674 4.2926C12.9787 4.32037 13.396 4.41742 13.7613 4.55917C14.1444 4.70337 14.4916 4.9295 14.7784 5.22171C15.0705 5.50858 15.2966 5.85556 15.4407 6.23871C15.5827 6.604 15.6798 7.02133 15.7077 7.6326C15.7356 8.24493 15.7422 8.44055 15.7422 10C15.7422 11.5594 15.7356 11.7551 15.7076 12.3674Z" fill="#002F4B"/>
            </g>
            <defs>
              <clipPath id="clip0_391_82">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </a>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.478 0 0 4.478 0 10C0 15.522 4.478 20 10 20C15.522 20 20 15.522 20 10C20 4.478 15.522 0 10 0ZM14.5659 7.79694C14.5703 7.89536 14.5724 7.99423 14.5724 8.09357C14.5724 11.1266 12.2638 14.624 8.04184 14.6242C6.74561 14.6242 5.5394 14.2442 4.52362 13.5931C4.70322 13.6143 4.88602 13.6249 5.07111 13.6249C6.14655 13.6249 7.13623 13.2581 7.92191 12.6424C6.91711 12.6237 6.06995 11.9601 5.77759 11.0481C5.91751 11.075 6.0614 11.0896 6.20895 11.0896C6.41846 11.0896 6.6214 11.0614 6.81427 11.0088C5.76401 10.7985 4.97284 9.8703 4.97284 8.75885C4.97284 8.74847 4.97284 8.73917 4.97314 8.72955C5.28244 8.90152 5.63614 9.00497 6.01273 9.01657C5.39642 8.60535 4.9913 7.90237 4.9913 7.10602C4.9913 6.68549 5.10498 6.2915 5.30212 5.9523C6.43402 7.34116 8.12561 8.25455 10.0333 8.35052C9.9939 8.18237 9.9736 8.0072 9.9736 7.82715C9.9736 6.56006 11.0016 5.53207 12.2691 5.53207C12.9294 5.53207 13.5257 5.81116 13.9445 6.25732C14.4675 6.15417 14.9585 5.96313 15.4021 5.70023C15.2304 6.23596 14.8666 6.68549 14.3927 6.96976C14.857 6.91422 15.2995 6.79108 15.7108 6.60828C15.4036 7.06863 15.014 7.47299 14.5659 7.79694Z" fill="#002F4B"/>
            </svg>

          </a>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_391_76)">
                <path d="M10 20C15.5242 20 20 15.5242 20 10C20 4.47583 15.5242 0 10 0C4.47583 0 0 4.47583 0 10C0 15.5242 4.47583 20 10 20ZM4.57583 9.78333L14.2175 6.06583C14.665 5.90417 15.0558 6.175 14.9108 6.85167L14.9117 6.85083L13.27 14.585C13.1483 15.1333 12.8225 15.2667 12.3667 15.0083L9.86667 13.1658L8.66083 14.3275C8.5275 14.4608 8.415 14.5733 8.15667 14.5733L8.33417 12.0292L12.9675 7.84333C13.1692 7.66583 12.9225 7.56583 12.6567 7.7425L6.93083 11.3475L4.4625 10.5775C3.92667 10.4075 3.915 10.0417 4.57583 9.78333Z" fill="#002F4B"/>
              </g>
              <defs>
                <clipPath id="clip0_391_76">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>



          </a>
          <a href="#">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_391_76)">
                <path d="M10 20C15.5242 20 20 15.5242 20 10C20 4.47583 15.5242 0 10 0C4.47583 0 0 4.47583 0 10C0 15.5242 4.47583 20 10 20ZM4.57583 9.78333L14.2175 6.06583C14.665 5.90417 15.0558 6.175 14.9108 6.85167L14.9117 6.85083L13.27 14.585C13.1483 15.1333 12.8225 15.2667 12.3667 15.0083L9.86667 13.1658L8.66083 14.3275C8.5275 14.4608 8.415 14.5733 8.15667 14.5733L8.33417 12.0292L12.9675 7.84333C13.1692 7.66583 12.9225 7.56583 12.6567 7.7425L6.93083 11.3475L4.4625 10.5775C3.92667 10.4075 3.915 10.0417 4.57583 9.78333Z" fill="#002F4B"/>
              </g>
              <defs>
                <clipPath id="clip0_391_76">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>

          </a>
        </div>
      </div>
      </div>

          <div class="footer-content-card">
            <div class="common-info">
              <li>Rasmiy website:<a href="#">tfi.uz</a></li>
            </div>
          </div>

          <div class="footer-content-card">
            <div class="yandexMap">
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=69.282639%2C41.324365&mode=search&oid=1724782675&ol=biz&z=18.07"
                width="368"
                height="300"
                frameborder="1"
                allowfullscreen="true"
                style="position: relative; border-radius: 24px; border: none"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="bottom-footer-content">
          Copyright © 1999-2023. Сайтда жойлаштирилган барча маълумотлар
          Ўзбекистон ва халқаро қонунчилик муаллифлик хуқуқлари асосида
          химояланган. <br />
          Сайтдаги маълумотлардан сайт муаллифи рухсатисиз фойдаланиш
          таъқиқланади.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
    AppButton,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          icon: "card1.svg",
          title: "Talabalar",
          subTitle: "Masofaviy Ta’limda ",
          amout: 8456,
        },
        {
          id: 1,
          icon: "card2.svg",
          title: "Professorlar",
          subTitle: "Masofaviy Ta’limda ",
          amout: 100,
        },
        {
          id: 1,
          icon: "card3.svg",
          title: "Mutaxasisliklar",
          subTitle: "Masofaviy Ta’limda ",
          amout: 2130,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
#home__container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  .line{
    width: 90%;
    margin: 0 auto;
    height: 1px;
    flex-shrink: 0;
    stroke-width: 1px;
    background: #00598f;
  }
.main__header{
  width: 100%;
  background: #E2EAFC;
  height: 1024px;
  overflow: hidden;
  position: relative;

  .front__elements{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;

    .front-element-inner{
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
    }
  }
.posetion-line{
  position: absolute;
  top: 583px;
}
  .posetion-sfera{
    position: absolute;
    top: 400px;
    left: 423px;
  }
  .posetion-half-sfera{
    position: absolute;
    top: 800px;
    right: 0;
  }
  .navbar{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    .navbar-container{
      width: 90%;
      height: 102px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left__side__navbar{
        .logo{
          width: 67px;
          height: 67px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .right__side__navbar{
        display: flex;
        align-items: center;
        gap: 48px;
        .navbar-button{
          padding: 10px 30px;
          box-sizing: border-box;
          border-radius: 100px;
          background: #002F4B;
          color: #FFF;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.4px;
        }

      }
    }
    .line{
      width: 90%;
      margin: 0 auto;
      height: 1px;
      flex-shrink: 0;
      stroke-width: 1px;
      background: #00598F;
    }
  }
  .header{

    z-index: 99;
    max-width: 1440px;
    margin: 0 auto;
    .header-container{

      width: 90%;
      margin: 70px auto;
      display: flex;
      align-items: center;
      gap: 15px;
      .header__left{
        .header-main-title{
          color: #000;
          font-style: normal;
          line-height: normal;
          font-weight: 700;
          font-size: 64px;
          span{
            color: #00598F;
          }
        }
        .header-button{
          display: flex;
          padding: 10px;
          justify-content: center;
          align-items: center;
          background: #002F4B;
          margin-top: 60px;
          font-style: normal;
          line-height: normal;
          color: #fff;
          font-size: 48px;
          box-sizing: border-box;
          z-index: 11;
        }
      }
    }
  }
}
 .section-about{
   position: relative;
   width: 100%;
   height: 726px !important;
   .posetion-line2{
     position: absolute;
     z-index: 999;
     top: 324px;
   }
   .section-container{
     padding-top: 144px;

     width: 90%;
     max-width: 1440px;
     display: grid;
     grid-template-columns: repeat(3, minmax(0, 1fr));
     gap: 15px;
     margin: 0 auto;
     box-sizing: border-box;
     .card{
       display: flex;
       border-radius: 24px;
       background: #FFF;
       box-shadow: 0px 0px 30px 0px #A9B9DD;
       width: 403px;
       height: 331px;
       flex-shrink: 0;
       padding: 20px;
       box-sizing: border-box;
     .card-title{
       .title{
         color: #00598F;
         font-family: Inter;
         font-size: 40px;
         font-style: normal;
         font-weight: 600;
         line-height: normal;
       }
       .subtitle{
         color: #BACFFF;
         font-family: Inter;
         font-size: 20px;
         font-style: normal;
         font-weight: 600;
         line-height: normal;
         letter-spacing: -0.4px;
       }
       .amount{
         color: #C5D7FF;
         font-family: Inter;
         font-size: 48px;
         font-style: normal;
         font-weight: 500;
         line-height: normal;
         margin-top: 68px;
       }
     }
     }
   }
 }
  .footer{
    width: 100%;
    background: #e2eafc;
    padding-bottom: 20px;
    .line{
      width: 100% !important;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .footer-container{
      width: 90%;
      max-width: 1440px;
      margin: 0 auto;
      padding-top: 68px;
      box-sizing: border-box;
      .footer-title{
        color: #002F4B;
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.4px;
      }
      .titles{
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 15px;
      }
      .footer-content{
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 15px;

          .yandexMap{
            width: 368px;
            height: 300px;
            flex-shrink: 0;
            border-radius: 24px;
            background: #D9D9D9;
            overflow: hidden !important;

          }
          .footer-content-card{
            .social-media{
              margin-top: 56px;
              .icons{
               display: flex;
                gap: 5px;
                margin-top: 15px;
              }
            }
            .common-info{
              li{
                list-style: none;
                color: #002F4B;
                font-family: Manrope;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                letter-spacing: -0.28px;
              }
            }
          }

      }
      .bottom-footer-content{
        color: #000;
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.2px;
        margin-top: 50px;
        margin-bottom: 15px;
      }
    }
  



@media (max-width: 1287px) {
  .header__main__img {
    width: auto;
    height: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .section-about {
    height: 100% !important;

    .section-container {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }
}

@media (max-width: 1130px) {
  .header-container {
    display: flex;
    flex-direction: column;
  }

  .header__main__img {
    width: auto;
    height: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .header-button {
    font-size: 30px !important;
    width: 300px !important;
  }

  .section-about {
    height: 100% !important;

    .section-container {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }
}

@media (max-width: 973px) {
  .main__header {
    height: 100px;
  }

  .header__left {
    .header-button {
      font-size: 30px;
      width: 300px;
    }
  }
}

@media (max-width: 800px) {
  .section-about {
    height: 100% !important;

    .section-container {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
  }


}
@media (max-width: 853px) {
   .titles {
      display: grid !important;
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
      margin: 0 auto !important;
      .icons{
        display: flex !important;
        flex-direction: row;
      }
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
      
   
      }
      .section-about{
        padding-bottom: 10px;
      }
}
</style>

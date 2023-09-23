import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
// import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mainImg from './images/10-12.jpg'
import mainBg from './images/14.jpg'
import sectionPic1 from './images/15.jpg'
import sectionPic2 from './images/16-17.jpg'
import sectionPic3 from './images/18.jpg'
import sectionPic4 from './images/20-21.jpg'
import sectionPic5 from './images/22.jpg'
import logo from './images/logo.png'
import location from './images/location.png'
import clock from './images/clock.png'
import phone from './images/phone.webp'
import wa from './images/wa.png'
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <a href='javascript:void(0)'><img src={logo} className='header-logo' /></a>
          <div><img src={location} /><p>Бишкек шаары,<br /> Ташкент к., 60</p></div>
          <div><img src={clock} />Пн-Пт: 9:00-18:00</div>
          <div className='contacts'>
            <div>
              <img src={wa} alt='WhatsApp' /><a href='https://wa.me/+996700858812'>WhatsApp</a>
            </div>
            {/* <a href='tel:+996312375095'>0312 375 095</a>
            <a href='tel:+996312375101'>0312 375 101</a>
            <a href='tel:+996700858812'>0700 858 812</a>
            <a href='tel:+996777141098'>0777 141 098</a> */}
          </div>
        </nav>
        {/* <section class="section-top"> */}

        {/* <h1>Издательство Айат</h1> */}
        {/* </section> */}
      </header>
      <div class="line"></div>
      <main>
        {/* <div className='main-cont'> */}
        <section className='main-section'>
          <div className='cont'>
            <div className='main-section-text'>
              <h2>Издательство «Айат»</h2>
              <p>Издательство «Айат» находится на издательско- полиграфическом рынке более 20 лет.</p>
            </div>
            {/* <div className='main-section-img'> */}
            <img src={mainImg} />
            {/* </div> */}
          </div>
        </section>
        <section className='main-swiper'>
          <div className='cont cont-swiper'>
            <Swiper
              slidesPerView={1}
              // spaceBetween={20}
              centeredSlides={false}
              centerInsufficientSlides={true}
              loop={true}
              // loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={mainBg} alt="" /></SwiperSlide>
              <SwiperSlide><img src={sectionPic1} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='section-text'>
          <div className='cont'>
            <p>Имеет в своем распоряжении достаточное количество необходимого оборудования и квалифицированного
              персонала (редакторов, корректоров, дизайнеров, печатников, переплетчиков и.т.д.) для
              профессионального выполнения как издательских, так и полиграфических функций.
            </p>
            <p>
              Компания выпускает многие виды полиграфической продукции: книги, брошюры,
              календари, блокноты, сертификаты, визитки, журналы и другое.
            </p>
          </div>
        </section>
        {/* <section>
            <img src={mainBg} alt="" />
            <p>Издательство «Айат» находится на издательско- полиграфическом рынке более 20 лет.</p>
          </section>
          <section>
            <p>Имеет в своем распоряжении достаточное количество необходимого оборудования и квалифицированного
              персонала (редакторов, корректоров, дизайнеров, печатников, переплетчиков и.т.д.) для
              профессионального выполнения как издательских, так и полиграфических функций.
            </p>
            <img src={sectionPic1} alt="" />
          </section>
          <section style={{ justifyContent: 'start' }}>
            <img src={sectionPic2} alt="" style={{ aspectRatio: '3/4', width: '20%' }} />
            <p style={{ marginLeft: '30px' }}>Компания выпускает многие виды полиграфической продукции: книги, брошюры,
              календари, блокноты, сертификаты, визитки, журналы и другое.</p>
          </section>
          <section style={{ justifyContent: 'start' }}>
            <p style={{ marginLeft: '30px' }}>Издательство «Айат» постоянно находится в курсе новых достижений, и по
              возможности применяет новые технологии в производстве, для повышения качества выпускаемой продукции.
            </p>
            <img src={sectionPic3} alt="" style={{ aspectRatio: '3/4', width: '20%' }} />
          </section>
          <section style={{ justifyContent: 'start' }}>
            <img src={sectionPic4} alt="" style={{ aspectRatio: '3/4', width: '20%' }} />
            <p style={{ marginLeft: '30px' }}>Компания постоянно участвует на республиканских книжных выставках-ярмарках.
            </p>
          </section>
          <section style={{ justifyContent: 'start' }}>
            <p style={{ marginLeft: '30px' }}>За время существования издательства выпущено более 500 названий книг различной
              тематики.</p>
            <img src={sectionPic5} alt="" style={{ aspectRatio: '3/4', width: '20%' }} />
          </section> */}
        {/* </div> */}
      </main>
      <footer>
        <div class="footer-cont">
          <img src={logo} class="logo" />
          <p><img src={location} />Адресс</p>
          <p><img src={clock} />Пн-Пт: 9-18</p>
          <p><img src={phone} />Контакты:</p>
        </div>
      </footer>
    </>
  );
}

export default App;

import "./index.scss";
import Header from "../../components/Header";
import { Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Artist from "../../components/Artist";

const Home = () => {
  return (
    <div className="page page-home">
      <Header/>

      <div className="banner">
        Your NFT Ai<br/>Marketplace
      </div>

      <div className="promoted-nfts">
        Promoted NFT's
        <a className="btn-checkout">Checkout</a>
      </div>

      <div className="paragraph trending-artists">
        <div className="paragraph-title">
          Trending Artists
        </div>

        <Swiper
          spaceBetween={44}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Artist src="./assets/images/dummy_artist.png" verified={true} name="Alex John"/>
          </SwiperSlide>
          <SwiperSlide>
            <Artist src="./assets/images/dummy_artist2.png" verified={false} name="Laura Merit"/>
          </SwiperSlide>
          <SwiperSlide>
            <Artist src="./assets/images/dummy_artist.png" verified={true} name="Brad Smith"/>
          </SwiperSlide>
          <SwiperSlide>
            <Artist src="./assets/images/dummy_artist2.png" verified={true} name="Kelly Kapur"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
};

export default Home;

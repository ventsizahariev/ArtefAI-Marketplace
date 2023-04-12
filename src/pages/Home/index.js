import "./index.scss";
import Header from "../../components/Header";
import { Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Artist from "../../components/Artist";
import {useState} from "react";
import TrendingNFT from "../../components/TrendingNFT";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const Home = () => {
  const [artistList, setArtistList] = useState([{
    name: 'Alex John',
    img: "./assets/images/dummy_artist.png",
    profile_img: '',
    verified: true
  }, {
    name: 'Alex John',
    img: "./assets/images/dummy_artist2.png",
    profile_img: '',
    verified: true
  }, {
    name: 'Alex John',
    img: "./assets/images/dummy_artist.png",
    profile_img: '',
    verified: false
  }, {
    name: 'Alex John',
    img: "./assets/images/dummy_artist2.png",
    profile_img: '',
    verified: true
  }, {
    name: 'Alex John',
    img: "./assets/images/dummy_artist.png",
    profile_img: '',
    verified: true
  }]);

  const [collectionList, setCollectionList] = useState([{
    name: 'Alex John',
    img: "./assets/images/dummy_collection.png",
    profile_img: '',
    verified: true,
    bookmarked: true
  }]);

  const [trendingNftList, setTrendingNftList] = useState([{
    name: 'Alex John',
    nickname: 'Space #4',
    img: "./assets/images/dummy_nft.png",
    profile_img: '',
    verified: true,
    bookmarked: true,
    forward_cnt: 3690,
    follow_cnt: 112,
    highest_offer: 1.6,
    price: 2
  }]);

  return (
    <div className="page page-home">
      <Header/>

      <div className="page-content">
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
            {artistList.map((item, key) =>
              <SwiperSlide key={key}>
                <Artist
                  img={item.img}
                  verified={item.verified}
                  name={item.name}
                  profile_img={item.profile_img}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <div className="paragraph trending-artists">
          <div className="paragraph-title">
            Top Collections
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
            {collectionList.map((item, key) =>
              <SwiperSlide key={key}>
                <Artist
                  img={item.img}
                  profile_img={item.profile_img}
                  verified={item.verified}
                  name={item.name}
                  bookmarked={item.bookmarked}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <div className="paragraph trending-artists">
          <div className="paragraph-title">
            Trending NFTs
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
            {trendingNftList.map((item, key) =>
              <SwiperSlide key={key}>
                <TrendingNFT
                  img={item.img}
                  profile_img={item.profile_img}
                  verified={item.verified}
                  name={item.name}
                  nickname={item.nickname}
                  bookmarked={item.bookmarked}
                  forward_cnt={item.forward_cnt}
                  follow_cnt={item.follow_cnt}
                  highest_offer={item.highest_offer}
                  price={item.price}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      <Footer/>

      <Menu/>
    </div>
  )
};

export default Home;

import Eth from "../icons/Eth";
import Arrow from "../icons/Arrow";
import Avatar from "../icons/Avatar";
import Refresh from "../icons/Refresh";
import Back from "../icons/Back";
import Forward from "../icons/Forward";
import Card from "./Card";
import { PublicKey } from "@solana/web3.js";

import metaplex from "../utils/metaplex";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import "swiper/swiper.min.css";

// Initialize Swiper core with navigation module
SwiperCore.use([Navigation]);

const Dashboard = () => {
  const [nft, setNft] = useState("");
  const swiperRef = useRef(null);

  const handleBackClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleForwardClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // fetch nfts herex
  useEffect(() => {
    const ownerPublicKey = new PublicKey(
      "narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X"
      // "saad8rHQzNJkb3sX3jJZR4qChRPvR94uradmDFJQQuV"
      // "basedj4dGxS3FMTEKhw983wCxE2WyPBTEtnG31zRfD1"
    );
    const fetchData = async () => {
      const myNfts = await metaplex.nfts().findAllByOwner({
        owner: ownerPublicKey,
      });
      setNft(myNfts.slice(1, 4));
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Price and user profile  */}
      <div className="flex justify-between">
        {/* Price  */}
        <div className="mt-6 ml-14 flex space-x-2  p-2 bg-greylevel2 rounded-xl">
          <Eth />
          <span className="text-white">ETH/USDT</span>
          <span className="text-success">1137.62</span>
          <span className="text-success">+2.62%</span>
          <span className="">
            <Arrow />
          </span>
        </div>
        {/* User profile  */}
        <div className="mt-6 mr-14 flex space-x-3 p-2 bg-greylevel2 rounded-xl">
          <span>
            <Avatar />
          </span>
          <span className="text-white">zash</span>
          <span className="text-greylevel3">|</span>
          <span className="text-white">User ID: 11026666</span>
        </div>
      </div>
      {/* Dashboard title and reload button  */}
      <div className="flex justify-between mt-6">
        {/* Price  */}
        <div className="mt-6 ml-14 flex space-x-2 rounded-xl">
          <span className="text-white text-3xl">Dashboard</span>
        </div>
        {/* User profile  */}
        <div className="mt-6 mr-14 flex space-x-3 p-2 bg-greylevel2 rounded-xl">
          <span>
            <Refresh />
          </span>
        </div>
      </div>
      {/* nft listing cards  */}
      <div className="mt-24 ml-12 mb-6 2xl:justify-around">
        {nft.length > 0 ? (
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={0}
            navigation
            loop
            loopedSlides={2}
            className="swiper-container"
            style={{ "--swiper-navigation-color": "transparent" }}
          >
            {nft.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <Card
                  name={item.name}
                  ownerAddress={item.creators[0].address.toBase58()}
                  mintAddress={item.mintAddress.toBase58()}
                  tokenAddress={item.address.toBase58()}
                  URI={item.uri}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-center text-white font-bold text-3xl mb-28">
            Loading . . .
          </div>
        )}
      </div>

      {/* next and previous buttons  */}
      <div
        className="w-1/5 bg-black flex justify-between mx-auto rounded-full"
        style={{ height: "78px" }}
      >
        <button
          className="text-white m-3 px-5  bg-greylevel2 rounded-full"
          onClick={handleBackClick}
        >
          <Back />
        </button>
        <button
          className="text-white m-3 px-5  bg-greylevel2 rounded-full"
          onClick={handleForwardClick}
        >
          <Forward />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

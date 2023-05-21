import Eth from "../icons/Eth";
import Arrow from "../icons/Arrow";
import Avatar from "../icons/Avatar";
import Refresh from "../icons/Refresh";
import Back from "../icons/Back";
import Forward from "../icons/Forward";
import Card from "./Card";
import { PublicKey } from "@solana/web3.js";

import metaplex from "../utils/metaplex";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [nft, setNft] = useState("");
  const [img, setImg] = useState("");

  // fetch nfts here
  useEffect(() => {
    const ownerPublicKey = new PublicKey(
      "narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X"
    );
    const fetchData = async () => {
      const myNfts = await metaplex.nfts().findAllByOwner({
        owner: ownerPublicKey,
      });
      setNft(myNfts);
      console.log(myNfts[1]);
      console.log(myNfts[1].creators[0].address.toBase58());
      console.log(myNfts[1].mintAddress.toBase58());
      console.log(myNfts[1].address.toBase58());
      const image = myNfts[1].uri;
      setImg(image);
    };

    fetchData();
  }, []);

  const array = [1, 2, 3];
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
          <span className="text-white font-bold text-3xl">Dashboard</span>
        </div>
        {/* User profile  */}
        <div className="mt-6 mr-14 flex space-x-3 p-2 bg-greylevel2 rounded-xl">
          <span>
            <Refresh />
          </span>
        </div>
      </div>
      {/* nft listing cards  */}
      <div className="mt-24 ml-14 flex mb-6 2xl:justify-around">
        {/* Render cards here*/}
        {nft &&
          array.map((i) => {
            return (
              <Card
                key={i}
                name={nft[i].name}
                ownerAddress={nft[i].creators[0].address.toBase58()}
                mintAddress={nft[i].mintAddress.toBase58()}
                tokenAddress={nft[i].address.toBase58()}
                image={img}
              />
            );
          })}
      </div>
      {/* next and previous buttons  */}
      <div
        className="w-1/5 bg-black flex justify-between mx-auto rounded-full"
        style={{ height: "78px" }}
      >
        <button className="text-white m-3 px-5  bg-greylevel2 rounded-full">
          <Back />
        </button>
        <button className="text-white m-3 px-5  bg-greylevel2 rounded-full">
          <Forward />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

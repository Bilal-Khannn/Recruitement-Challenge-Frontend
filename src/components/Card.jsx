import Option from "../icons/Option";
// import nft1 from "../assets/nft1.png";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

const Card = ({ name, ownerAddress, mintAddress, tokenAddress, URI }) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const fetchImageData = async () => {
      const uri = URI;
      const data = await fetch(uri);
      const parsed = await data.json();
      const image = parsed.image;
      setImgSrc(image);
    };

    fetchImageData();
  }, [URI]);

  // shorten the addressess for display
  let address = ownerAddress;
  let firstFive = address.substring(0, 5);
  let lastThree = address.substring(address.length - 3);
  const ownerAddShort = `${firstFive}...${lastThree}`;

  address = mintAddress;
  firstFive = address.substring(0, 5);
  lastThree = address.substring(address.length - 3);
  const mintAddressShort = `${firstFive}...${lastThree}`;

  address = tokenAddress;
  firstFive = address.substring(0, 5);
  lastThree = address.substring(address.length - 3);
  const tokenAddressShort = `${firstFive}...${lastThree}`;

  return (
    <div
      className=" mr-8 bg-black px-1 rounded-2xl flex flex-col justify-center items-center"
      style={{ width: "388px", height: "600px" }}
    >
      {/* title and options  */}
      <div
        className="flex justify-between mt-2"
        style={{ width: "364px", height: "32px" }}
      >
        <h1 className="text-white ml-3">{name}</h1>
        <Option />
      </div>
      {/* image  */}
      <div>
        <img
          src={imgSrc}
          alt=""
          style={{ height: "364px", width: "364px" }}
          className="rounded-2xl"
        />
      </div>
      {/* details  */}
      <div
        style={{ width: "364px", height: "168px" }}
        className="bg-greylevel2 mt-4 rounded-xl"
      >
        <div className="flex justify-between mx-2 mt-2 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white text-sm">Owner</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4">{ownerAddShort}</span>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-3 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white text-sm">Mint address</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4">{mintAddressShort}</span>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-3 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white text-sm">Token address</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4">{tokenAddressShort}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: propTypes.string.isRequired,
  ownerAddress: propTypes.string.isRequired,
  mintAddress: propTypes.string.isRequired,
  tokenAddress: propTypes.string.isRequired,
  URI: propTypes.string.isRequired,
};

export default Card;

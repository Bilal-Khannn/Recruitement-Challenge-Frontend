import Option from "../icons/Option";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

const Card = ({ name, ownerAddress, mintAddress, tokenAddress, URI }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [ownerAddShort, setOwnerAddShort] = useState("");
  const [mintAddressShort, setMintAddressShort] = useState("");
  const [tokenAddressShort, setTokenAddressShort] = useState("");

  // fetch the image from the URI provided
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

  // shorten the addresses for display
  useEffect(() => {
    shorten(ownerAddress);
    shorten(mintAddress);
    shorten(tokenAddress);
  }, []);

  const shorten = (address) => {
    // grab the first 5 and last 3 characters from the address
    const firstFive = address.substring(0, 5);
    const lastThree = address.substring(address.length - 3);
    const short = `${firstFive}...${lastThree}`;

    if (address === ownerAddress) {
      setOwnerAddShort(short);
    } else if (address === tokenAddress) {
      setTokenAddressShort(short);
    } else if (address === mintAddress) {
      setMintAddressShort(short);
    }
  };

  return (
    <div
      id={tokenAddress}
      className=" mr-8 bg-black px-1 rounded-2xl flex flex-col justify-center items-center transition delay-100"
      style={{ width: "388px", height: "600px" }}
    >
      {/* title and options  */}
      <div
        className="flex justify-between mt-1"
        style={{ width: "364px", height: "32px" }}
      >
        <h1 className="text-white ml-3">{name}</h1>
        <Option />
      </div>
      {/* image  */}
      {imgSrc ? (
        <div>
          <img
            src={imgSrc}
            alt=""
            style={{ height: "364px", width: "364px" }}
            className="rounded-2xl"
          />
        </div>
      ) : (
        <div
          className="text-white text-3xl flex justify-center items-center"
          style={{ height: "364px", width: "364px" }}
        >
          Loading...
        </div>
      )}
      {/* details  */}
      <div
        style={{ width: "364px", height: "160px" }}
        className="bg-greylevel2 mt-4 rounded-xl"
      >
        <div className="flex justify-between mx-2 mt-2 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white text-sm">Owner</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4 ml-1">{ownerAddShort}</span>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-3 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white text-sm">Mint address</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4 ml-1">{mintAddressShort}</span>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-3 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white text-sm">Token address</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4 ml-1">{tokenAddressShort}</span>
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

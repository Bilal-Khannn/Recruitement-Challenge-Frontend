import Option from "../icons/Option";
import nft1 from "../assets/nft1.png";

const Card = (props) => {
  return (
    <div
      className=" mr-8 bg-black px-1 rounded-2xl flex flex-col justify-center items-center"
      style={{ width: "388px", height: "600px" }}
    >
      {/* title and options  */}
      <div
        className="flex justify-between"
        style={{ width: "364px", height: "32px" }}
      >
        <h1 className="text-white ml-3">Cyberlinx #2551</h1>
        <Option />
      </div>
      {/* image  */}
      <div>
        <img src={nft1} alt="" style={{ height: "364px", width: "364px" }} />
      </div>
      {/* details  */}
      <div
        style={{ width: "364px", height: "168px" }}
        className="bg-greylevel2 mt-4 rounded-xl"
      >
        <div className="flex justify-between mx-2 mt-2 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white">Owner</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4">72UGr...YdD</span>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-3 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white">Mint address</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4">72UGr...YdD</span>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-3 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white">Token address</span>
          <span className="text-greylevel3">
            | <span className="text-greylevel4">72UGr...YdD</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

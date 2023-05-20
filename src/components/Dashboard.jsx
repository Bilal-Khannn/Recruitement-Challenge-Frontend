import Eth from "../icons/Eth";
import Arrow from "../icons/Arrow";
import Avatar from "../icons/Avatar";
import Refresh from "../icons/Refresh";
import Back from "../icons/Back";
import Forward from "../icons/Forward";

import Card from "./Card";
const Dashboard = () => {
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
      <div className="mt-24 ml-14 flex mb-10 2xl:justify-around">
        {/* Render cards here*/}
        {array.map((i) => {
          return <Card key={i} />;
        })}
      </div>
      {/* next and previous buttons  */}
      <div
        className="w-1/6 bg-black flex justify-between mx-auto rounded-full"
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

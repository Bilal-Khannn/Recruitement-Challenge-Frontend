import Eth from "../icons/Eth";
import Arrow from "../icons/Arrow";
// import Avatar from "../icons/Avatar";
const Dashboard = () => {
  return (
    <div>
      {/* Price and user profile  */}
      <div className="flex justify-between">
        {/* Price  */}
        <div className="mt-6 ml-14 flex space-x-2 p-2 bg-greylevel1 rounded-xl">
          <Eth />
          <span className="text-white">ETH/USDT</span>
          <span className="text-success">1137.62</span>
          <span className="text-success">+2.62%</span>
          <span className="-mr-2">
            <Arrow />
          </span>
        </div>
        {/* User profile  */}
        <div className="mt-6 mr-14 flex space-x-2 p-2 bg-greylevel1 rounded-xl">
          <span className="text-white">zash</span>
          <span className="text-greylevel4">|</span>
          <span className="text-white">User ID: 11026666</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

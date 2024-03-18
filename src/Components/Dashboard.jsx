import React from 'react';
import logo from "../Assets/moptro.png";
import logo2 from '../Assets/Group.png';

const Dashboard = ({ setCurrentUrl }) => {
  const productivityData = [
    { day: 'Monday', percentage: 4 },
    { day: 'Tuesday',percentage: 92 },
    { day: 'Wednesday', percentage: 122 },
    { day: 'Thursday', percentage: 93 },
    { day: 'Friday', percentage: 89 },
    { day: 'Saturday', percentage: 98 }
  ];

  const handleDashboardClick = () => {
    setCurrentUrl('/dashboard');
  };

  const handleContactClick = () => {
    setCurrentUrl('/contact');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col ">
    <div className="max-w-md w-full mx-auto rounded-xl shadow-xl">
        <div className="p-8">
          <img className="h-20 w-auto ml-auto "  src={logo2} alt="Workflow" />
          <div className="text-center ml-20 mt-10 relative whitespace-nowrap">
            <div className="absolute inset-0   flex items-center justify-center">
              <div className="h-10 w-10 bg-gray-400   rounded-full shadow-2xl"></div>
            </div>
            <h2 className="text-white relative z-10">4</h2>
          </div>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Workflow" />
        
          <div className="shadow-xl z-50 p-2 rounded-2xl text-center text-gray-100 font-mulish text-xs leading-6 mt-10" style={{ backgroundColor: "#0F2323" }}>
            <h2>Employee Productivity Dashboard</h2>
          </div>

          <div className="rounded-md  bg-gray-700 bg-opacity-50 shadow-2xl -space-y-px mt-auto whitespace-nowrap">
            {productivityData.map((data, index) => (
              <div key={index} className="py-4 px-5 grid grid-cols-2 gap-4">
                <div className="text-white  font-mulish text-xs  leading-6">
                  Productivity on {data.day}
                </div>
                <div className="font-mulish font-normal text-right text-xs  leading-6 text-green-500">
                  {data.percentage}%
                </div>
                <div className=" bg-transparent  h-2 rounded-full">
                  <div
                    style={{ width: `${data.percentage}%` }}
                    className="bg-green-400 h-2 border border-green-600   sm:text-sm rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 gap-20 flex justify-center space-x-4 rounded-2xl py-4 px-5 text-center text-white" style={{ backgroundColor: "#0F2323" }}>
        <button className="flex items-center" onClick={handleDashboardClick}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
        </button>
        <button className="flex items-center" onClick={handleContactClick}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3 3 0 100 6 3 3 0 000-6zm0 8a8 8 0 00-6 3.2c.01 1.74 3.29 2.8 6 2.8s5.99-1.06 6-2.8c-1.29-1.55-3.81-2.52-6-2.8z"
    />
  </svg>
</button>

      </div>
    </div>
  );
};

export default Dashboard;

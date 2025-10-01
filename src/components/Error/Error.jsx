import React from 'react';

const Error = () => {
  return (
   <>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center px-6">
      <h1 className="text-[120px] font-extrabold text-blue-600 drop-shadow-lg">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-gray-500 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>



      <div className="mt-12 w-40 h-40 rounded-full bg-blue-50 border-4 border-blue-200 flex items-center justify-center shadow-inner">
        <span className="text-5xl">🚀</span>
      </div>
    </div>
   </>
  );
};

export default Error;
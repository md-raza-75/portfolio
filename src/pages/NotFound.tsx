import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * NotFound Component
 * Displays a 404 error page when user accesses a non-existent route
 */
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:", 
      location.pathname
    );
    
    // Optional: Log to analytics service
    // analytics.track('404_Error', { path: location.pathname });
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md w-full">
        {/* Error Icon/Illustration */}
        <div className="mb-8">
          <div className="mx-auto h-32 w-32 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-6xl text-red-500">⚠️</span>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        
        {/* Error Message */}
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        
        <p className="mb-8 text-lg text-gray-600 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page{" "}
          <span className="font-mono text-gray-800 bg-gray-200 px-2 py-1 rounded">
            {location.pathname}
          </span>{" "}
          doesn't exist or may have been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            ← Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm"
          >
            Go to Homepage
          </button>
        </div>

        {/* Additional Help */}
        <p className="mt-8 text-sm text-gray-500">
          If you believe this is an error, please{" "}
          <a 
            href="/contact" 
            className="text-blue-500 hover:text-blue-700 underline"
          >
            contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
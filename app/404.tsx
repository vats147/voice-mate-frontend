import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Error Badge */}
      <div className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
        404 error
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page not found</h1>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mb-6">
        We’re sorry, but the page you’re looking for could not be found. It may
        have been moved, deleted, or never existed in the first place.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link href="/">
          <button className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
            <span className="text-xl">🏠</span>
            <span>Back to Home</span>
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-gray-800 border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

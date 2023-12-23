import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-pink-300">
      <div className="text-center text-gray-800">
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <h2 className="text-3xl mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="mt-4">
          Return to the <Link to="/" className="text-blue-500">homepage</Link>.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

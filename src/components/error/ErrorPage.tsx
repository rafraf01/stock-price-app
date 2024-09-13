const ErrorPage = () => {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4 text-sm my-3 rounded-md"
      role="alert"
    >
      <p className="font-bold">Opps!</p>
      <p>The data you're looking for is either non-existent or invalid. Please try again.</p>
    </div>
  );
};

export default ErrorPage;

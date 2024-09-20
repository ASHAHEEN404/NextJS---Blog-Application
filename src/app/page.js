export default function Home({ params = [] }) {
  console.log(params);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">Home Page</h1>

      {/* If there are route segments, show them */}
      {params.length > 0 ? (
        <div>
          <h2 className="mb-4 text-2xl font-semibold">URL Segments:</h2>
          <ul className="pl-5 space-y-2 list-disc">
            {params.map((segment, index) => (
              <li
                key={index}
                className="p-2 text-lg text-gray-800 bg-white rounded shadow-sm"
              >
                {segment}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-xl text-gray-600">
          No URL segments! Youre on the home page.
        </p>
      )}
    </div>
  );
}

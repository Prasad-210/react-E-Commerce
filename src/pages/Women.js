import CompA from "../context/CompA";

const Women = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Women Page</h1>
        <img
          className="max-w-full h-auto rounded-lg shadow-lg"
          src="https://img.freepik.com/free-photo/three-african-woman-choosing-clothes-store-shopping-day_627829-753.jpg"
          alt="women fashion"
        />
        <CompA/>
      </div>
    );
  };
  
  export default Women;
  
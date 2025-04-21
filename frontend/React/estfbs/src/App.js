// src/App.js
import ProductsPage from './Pages/ProductsPage.jsx';

// src/App.js
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nom = "Youssef"; 
  const time = new Date().toLocaleDateString() ;
  const nbArticle = 6 ;
  let remise = 0 ;
  if (nbArticle >= 5) {
    remise = 2 ;
  }

  const age = 19 ;



  return (
<div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
  {/* Header/Card Container */}
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 space-y-6">
    {/* Greeting Section */}
    <div className="text-center">
      <h1 className="text-3xl font-bold text-indigo-700">Salut <span className="text-indigo-900">{nom}</span>!</h1>
      <p className="text-gray-500 mt-1">Today is <span className="font-medium text-indigo-600">{time}</span></p>
    </div>

    {/* Discount Section */}
    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
      <h2 className="text-xl font-semibold text-indigo-800">Remise</h2>
      <p className="text-lg mt-1 text-indigo-600">
        Votre remise est de <span className="font-bold">{remise}%</span> 🎉
      </p>
    </div>

    {/* User Info Section */}
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">Informations</h2>
      <div className="flex items-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <p className="text-gray-700">Age : <span className="font-medium">{age}</span></p>
      </div>
    </div>

    {/* Optional Footer */}
    <p className="text-center text-sm text-gray-400 mt-6">
      Merci pour votre visite !
    </p>
  </div>
</div>
  );
}


export default App;
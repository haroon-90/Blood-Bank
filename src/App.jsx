import './App.css'
import Navbar from './components/Navbar'
import Record from './components/Record'
import AddRecord from './components/AddRecord'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Welcome to the Blood Bank Storage System</h1>
        <p className="text-center text-gray-700">Manage blood donations efficiently.</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Record/>
      </div>
      {/* <div className="container p-4">
        <AddRecord/>
      </div> */}
      <Footer />
    </>
  )
}

export default App

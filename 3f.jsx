App.jsx: 
function App() {
 // Create an Date object
 const currentDate = new Date();
 return (
 <div>
 <h1>Current Date and Time</h1>
 <hr />
 <p>Date : {currentDate.toLocaleDateString()}</p>  <p>Time : {currentDate.toLocaleTimeString()}</p>  <h4>vinayak (T029)</h4>
 </div>
 );
}
export default App;

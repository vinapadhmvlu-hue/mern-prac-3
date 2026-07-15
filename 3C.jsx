function App() {
 const maths = 85;
 const sci = 90;
 function calculate(mark1, mark2) {
 return mark1 + mark2;
 }
 return (
 <div>
 <h1>Student Marks</h1>
 <hr />
 <p>Mathematics Marks : {maths}</p>
 <p>Science Marks : {sci}</p>
 <hr />
 <h2>Total Marks : {calculate(maths, sci)}</h2>  <h4>vinayak (T029)</h4>
 </div>
 );
}
export default App;



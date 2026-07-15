function App() {
 const studentName = "vinayak";
 const totalClasses = 60;
 const attendedClasses = 55;
 const attendance = (attendedClasses / totalClasses) * 100;
 return (
 <div>
 <h1>Attendance Dashboard</h1>
 <hr />
 <p>Name : {studentName}</p>
 <p>Total Classes : {totalClasses}</p>
 <p>Classes Attended : {attendedClasses}</p>
 <p>Attendance : {attendance.toFixed(2)}%</p>
 <h3>
 Status : {attendance >= 75 ? "Eligible for Exam" : "Not Eligible"}
 </h3>
 <h4>vinayak (T029)</h4>
 </div>
 );
}
export default App

let prevstudents = localStorage.getItem("students");
let students = prevstudents ? JSON.parse(prevstudents) : [];
function providestudents() {
    let std = {
        Name:prompt("Enter your name"),
        Fathername:prompt("Enter your father name"),
        Cnic:+prompt("Enter your cnic"),
        Class:prompt ("Enter your class"),
        Phone:+prompt ("Enter your phone number"),
    }
    students.push(std);
    console.log(students);
    let stringify = JSON.stringify(students);
    localStorage.setItem("students",stringify);
}
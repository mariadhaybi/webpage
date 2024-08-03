function getStudents(){
    fetch('https://api-n1hn.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))
}
getStudents();
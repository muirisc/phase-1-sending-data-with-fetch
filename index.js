// Add your code here
const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  })

};
fetch("http://localhost:3000/dogs", configurationObject)
.then(function (response) {
  return response.json();
})
.then(function (object) {
  console.log(object);
})

// SUBMIT DATA
function submitData(name, email){
// const submittedInfo = {name, email}
const configureObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }, 
  body: JSON.stringify({name, email})
}
return fetch("http://localhost:3000/users", configureObject)
.then(response => response.json())
  .then(idObtain)
  .catch(Errored)


    function idObtain(response){
document.body.innerHTML = response.id
    }}

    function Errored(errorResponse){
      document.body.innerHTML = errorResponse.message
      alert("Unauthorized Access")
    }






// Add your code here

function submitData (name, email) {
    const formData = {
        name: "Steve",
        email: "steve@steve.com",
      };

      let message = 'Unauthorized Access';
     



    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };

    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object)

      document.body.innerHTML = object[ "id" ];
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      document.body.innerHTML = message;
      console.log(error.message);
    });
}

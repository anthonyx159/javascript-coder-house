// USAR AJAX JQUERY PARA HACER UN POST
$(document).ready(function () {
  let data;
  const APIURL = 'https://jsonplaceholder.typicode.com/posts'
  const object = {
    name: 'Anthony',
    course: 'Javascript',
    email: 'anthony@email.com',
  };
  
      $.ajax({
          async: false,
          url: APIURL,
          data: object,
          method: "POST",
          success: function (response) {
              data = response
          }
      })
      
      console.log(data)
      alert(`Los datos enviados por metodo post son: ${data.name}, ${data.course} y ${data.email}; la cual genera un id nuevo: ${data.id}`)

})








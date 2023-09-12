function submitForm(e) {
    e.preventDefault();
   
   var myform =    document.getElementById("DRform");
    
    var formData = new FormData(DRform);
  
    fetch("https://show.ratufa.io/json", {
      method: "POST",
      body: formData,
    })
      .then(response => {
      if (!response.ok) {
        throw new Error('network returns error');
      }
      return response.json();
    })
      .then((resp) => {
        let respdiv = document.createElement("pre");
        respdiv.innerHTML = JSON.stringify(resp, null, 2);
        myform.replaceWith(respdiv);
        console.log("resp from server ", resp);
      })
      .catch((error) => {
        // Handle error
        console.log("error ", error);
      });
  }
  
  var myform = document.getElementById("DRform");
  
  myform.addEventListener("submit", submitForm);
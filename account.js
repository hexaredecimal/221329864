
function createAccount() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let streetaddress = document.getElementById('streetaddress').value;
    let streetaddress2 = document.getElementById('streetaddress2').value;
    let province = document.getElementById('province').value
    let zip = document.getElementById('zip').value; 
    let country = document.getElementById('country').value;
    let phone = document.getElementById('phone').value;

    let error_element = document.getElementById('error_space'); 
    let error_message = "Error: Please enter/select a valid "; 

    if (firstname.length == 0 ) {
        error_element.innerText = error_message +  "firstname"; 
        return; 
    }

    if (lastname.length == 0) {
        error_element.innerText = error_message +  "lastname"; 
        return;
    }

    if (streetaddress.length == 0 ) {
        error_element.innerText = error_message +  "streetaddress"; 
        return;
    }

    if (streetaddress2.length == 0) { 
        error_element.innerText = error_message +  "streetaddress (2)"; 
        return;
    }

    if (province.length == 0) {
        error_element.innerText = error_message +  "province"; 
        return;
    }
    
    if (zip.length == 0) {
        error_element.innerText = error_message +  "zip"; 
        return;
    }

    if (country.length == 0) {
        error_element.innerText = error_message +  "country"; 
        return;
    }
    
    if (phone.length == 0) {
        error_element.innerText = error_message +  "phone"; 
        return;
    }

    let message = 
    `
      First Name: ${firstname}
      Last Name: ${lastname}
      Street Address: ${streetaddress}
      Street Address (2): ${streetaddress2}
      Province: ${province}
      Zip/Postal Code: ${zip}
      Country: ${country}
      Phone: ${phone}

    `; 

    alert(message);

    let body_message = 
    `
    <div id="info">
      <h1>Information</h1>
      <p>First Name: ${firstname} </p>
      <p>Last Name: ${lastname} </p>
      <p>Street Address: ${streetaddress} </p>
      <p>Street Address (2): ${streetaddress2} </p>
      <p>Province: ${province} </p>
      <p>Zip/Postal Code: ${zip} </p>
      <p>Country: ${country} </p>
      <p>Phone: ${phone} </p>
    </div>
    `; 

    document.body.innerHTML = body_message;
}
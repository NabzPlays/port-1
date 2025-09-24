function validateForm() {

    const method = document.getElementById("contactMethod").value;
    const form = document.getElementById("contactForm");
    const phone = document.getElementById("phone").value;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from submitting

        //Check using emails
        if (method === "1") {

          if (!checkEmails()) {
            alert("Email addresses do not match.");
            form.reset();
            return false;
          }

          if (!checkDate()) {
            alert("Select a date in the future");
            form.reset();
            return false;
          } 
          
          else {
            alert("Successfully Submitted Form");
            form.reset();
            return true;
          }
        }

        //Check using phone number
        if (method === "2") {
            
            const phonePattern = /^0\d{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Phone number must be 11 digits starting with 0.");
                return false;
            }
          
          if (!checkDate()) {
            alert("Please select a date in the future");
            form.reset();
            return false;
          }

          else {
            alert("Successfully Submitted Form");
            form.reset();
            return true;
          }
        }

        else {
          alert("Please select a contact method");
          form.reset();
          return false;
        }
    });
}

function checkEmails() {

    //Get both email inputs
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    const regExpression = /^[a-zA-Z0-9._%+-]+@aston\.ac\.uk$/;
    if (!regExpression.test(email)) {

        alert("Email must be a valid @aston.ac.uk domain.");
        return false;
    }

    //Check if they match
    if (email !== confirmEmail) {
        return false;
    }

    else {
        return true;
    }
}

function checkDate() {
    //Get the date input and today's date and convert
    let appointmentDate = document.getElementById("date").value;
    let today = new Date();
    var selectedDate = new Date(appointmentDate);
    
    //Check if the selected date is in the future
    if (selectedDate <= today) {
        return false;
    }
    else { 
        return true;
    }
}

function toggleInputFields() {

    //Get the selected contact method and the input fields
    const method = document.getElementById("contactMethod").value;
    const emailField = document.getElementById("emailField");
    const phoneField = document.getElementById("phoneField");
    const confirmEmailField = document.getElementById("confirmEmailField");

    // Show the selected one
    if (method === "1") {
        emailField.style.display = "block";
        confirmEmailField.style.display = "block";
        document.getElementById("email").required = true;
        document.getElementById("confirmEmail").required = true;
        document.getElementById("phone").required = false;
        phoneField.style.display = "none";
    } 
    
    else if (method === "2") {
        phoneField.style.display = "block";
        document.getElementById("phone").required = true;
        document.getElementById("email").required = false;
        document.getElementById("confirmEmail").required = false;
        emailField.style.display = "none";
        confirmEmailField.style.display = "none";
    }
}
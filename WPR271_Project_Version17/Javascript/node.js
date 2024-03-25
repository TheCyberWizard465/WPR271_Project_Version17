function submission() 
{
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email_id = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var phone_number = document.getElementById("phone").value;
    var reference_code = document.getElementById("reference_code").value;

    var userData = [first_name, last_name, email_id, username, country , state, city, phone_number, reference_code];

     //To capture data to new page.
    localStorage.setItem("userData", userData);

}   

        // First name validation functions:
        function validFirstNameFunctionFocus() 
        {
        var first_name = document.getElementById("first_name").value; 
        var letters = /^[A-Za-z]+$/;           
        if(first_name.match(letters))
        {var firstNameValid = true
        document.getElementById("first_name").style.borderBottomColor = "#50a4ec"
        return true;}
        else if (first_name = " ")
        {document.getElementById("first_name").style.borderBottomColor = "grey"
        return false;}

        }

        function validFirstNameFunctionFocusOut() 
        {
            var first_name = document.getElementById("first_name").value; 
        var letters = /^[A-Za-z]+$/;           
        if(first_name.match(letters))
        {var firstNameValid = true
        document.getElementById("first_name").style.borderBottomColor = "green"
        return true;}
        else if (first_name = " ")
        {document.getElementById("first_name").style.borderBottomColor = "red"
        confirm("Please enter a First Name with no numbers")
        return false;}
        }   
        // First name validation functions



        // Last name validation functions:
        function validLastNameFunctionFocus() 
        {
        var last_name = document.getElementById("last_name").value; 
        var letters = /^[A-Za-z]+$/;           
        if(last_name.match(letters))
        {var lastNameValid = true
        document.getElementById("last_name").style.borderBottomColor = "#50a4ec"
        return true;}
        else if (last_name = " ")
        {document.getElementById("last_name").style.borderBottomColor = "grey"
        return false;}
        }

        function validLastNameFunctionFocusOut() 
        {
        var last_name = document.getElementById("last_name").value; 
        var letters = /^[A-Za-z]+$/;           
        if(last_name.match(letters))
        {var lastNameValid = true
        document.getElementById("last_name").style.borderBottomColor = "green"
        return true;}
        else if (last_name = " ")
        {document.getElementById("last_name").style.borderBottomColor = "red"
        confirm("Please enter a Last Name with no numbers")
        return false;}
        }
        // Last name validation functions


        // Reference Code validation functions        
        function validReferenceCodeFunctionFocus() 
        {
            var reference_code = document.getElementById("reference_code").value;           
            if(reference_code.length > 0) 
            {
            document.getElementById("reference_code").style.borderBottomColor = "#50a4ec"
            return true;}
        }

        function validReferenceCodeFunctionFocusOut() 
        {
            var reference_code = document.getElementById("reference_code").value;           
            if(reference_code.length > 0)
            {
            document.getElementById("reference_code").style.borderBottomColor = "green"
            return true;}
            else 
            {document.getElementById("reference_code").style.borderBottomColor = "red"
            confirm("Please enter a Reference Code")
            return false;}
        }
        // Reference Code validation functions


        // Email validation functions
        function validEmailFunctionFocus() 
        {
        var email_id = document.getElementById("email").value;            
        if(email_id === "")
        {
        document.getElementById("email").style.borderBottomColor = "#50a4ec"
        return true;}
        else if (email_id === "")
        {document.getElementById("email").style.borderBottomColor = "grey"
        return false;}
        }

        function validEmailFunctionFocusOut() 
        {
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email_id = document.getElementById("email").value;            
        if(email_id.match(emailFormat))
        {
        document.getElementById("email").style.borderBottomColor = "green";
        document.getElementById("checkIcon").style.color = "green";
        return true;}
        else
        {document.getElementById("email").style.borderBottomColor = "red"
        document.getElementById("checkIcon").style.color = "red"
        confirm("Please enter an Email in the correct format seperated by an @.")
        return false;}
        }
        // Email validation functions




        // Username validation functions:        
        function validUsernameFocus() 
        {
        var username = document.getElementById("username").value;           
        if(username.length > 0) 
        {
        document.getElementById("username").style.borderBottomColor = "#50a4ec"
        return true;}
        }

        function validUsernameFocusOut() 
        {
        var username = document.getElementById("username").value;           
        if(username.length > 0)
        {
        document.getElementById("username").style.borderBottomColor = "green"
        return true;}
        else 
        {document.getElementById("username").style.borderBottomColor = "red"
        confirm("Please enter a UserID")
        return false;}
        }
        // Username validation functions




        // Country validation functions:
        function validCountryFocus() 
        {
        var country = document.getElementById("country").value;       
        if(country === "None")
        {var countryValid = true
        document.getElementById("country").style.borderBottomColor = "#50a4ec"
        return true;}
        else
        {document.getElementById("country").style.borderBottomColor = "grey"
        return false;}
        }

        function validCountryFocusOut() 
        {   
        var country = document.getElementById("country").value;         
        if(country === "None")
        {
        document.getElementById("country").style.borderBottomColor = "red"
        return false;
        }
        else
        {
        var countryValid = true
        document.getElementById("country").style.borderBottomColor = "green"
        return true;}
        }
       // Country validation functions


       
        // State validation functions:
        function validStateFocus() 
        {
        var state = document.getElementById("state").value;        
        if(state != "None")
        {
        document.getElementById("state").style.borderBottomColor = "#50a4ec"
        return true;}
        else
        {document.getElementById("state").style.borderBottomColor = "grey"
        return false;}
        }

        function validStateFocusOut() 
        {
        var state = document.getElementById("state").value;         
        if(state != "None")
        {
        document.getElementById("state").style.borderBottomColor = "green"
        return true;}
        else
        {document.getElementById("state").style.borderBottomColor = "red"
        return false;}
        }
        // State validation functions


        
        // City validation functions:        
        function validCityFocus() 
        {
        var city = document.getElementById("city").value;        
        if(city != "None")
        {
        document.getElementById("city").style.borderBottomColor = "#50a4ec"
        return true;}
        else
        {document.getElementById("city").style.borderBottomColor = "grey"
        return false;}
        }

        function validCityFocusOut() 
        {
        var city = document.getElementById("city").value;         
        if(city != "None")
        {
        document.getElementById("city").style.borderBottomColor = "green"
        return true;}
        else
        {document.getElementById("city").style.borderBottomColor = "red"
        return false;}
        }
        // City validation functions       


        // Phone number validation functions:
        function validPhoneNumberFunctionFocus() 
        {
        var phone_number = document.getElementById("phone").value;
        let phoneLength =  Number(phone_number.length);      
        if (phoneLength == 10)
        {var phoneValid = true
        document.getElementById("phone").style.borderBottomColor = "#50a4ec";
        return true;}
        else
        {   var phoneValid = false
            document.getElementById("phone").style.borderBottomColor = "grey"
            return false;}
        }

        function validPhoneNumberFunctionFocusOut() 
        {
            var phone_number = document.getElementById("phone").value;
        let phoneLength =  Number(phone_number.length);      
        if (phoneLength == 10)
        {var phoneValid = true
        document.getElementById("phone").style.borderBottomColor = "green";
        return true;}
        else
        {   var phoneValid = false
            document.getElementById("phone").style.borderBottomColor = "red"
            confirm("Phone number must be 10 characters long")
            return false;}
        } 
        // Phone number validation functions


        //Country options
        const countrySelect = document.getElementById("country");
        const stateSelect = document.getElementById("state");
        const citySelect = document.getElementById("city");

        // Define state and city data
        const stateData = {
        USA: ["New York", "California", "Texas"],
        UK: ["London", "Manchester", "Edinburgh"],
        Canada: ["Toronto", "Vancouver", "Montreal"]
        };

        const cityData = {
        "New York": ["New York City", "Buffalo"],
        California: ["Los Angeles", "San Francisco"],
        Texas: ["Houston", "Austin"],
        London: ["Central London", "East London"],
        Manchester: ["Manchester City", "Salford"],
        Edinburgh: ["Edinburgh City"],
        Toronto: ["Downtown Toronto", "Scarborough"],
        Vancouver: ["Downtown Vancouver", "Richmond"],
        Montreal: ["Montreal City"]
        };

        countrySelect.addEventListener("change", function () {
            const selectedCountry = countrySelect.value;
            stateSelect.innerHTML = "<option value='None'>Select State</option>";
            citySelect.innerHTML = "<option value='None'>Select City</option>";

            if (selectedCountry !== "None") {
            stateData[selectedCountry].forEach(function (state) {
                const option = document.createElement("option");
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
        });


       
        stateSelect.addEventListener("change", function () {
        const selectedState = stateSelect.value;
        citySelect.innerHTML = "<option value='None'>Select City</option>";

        if (selectedState !== "None") {
            cityData[selectedState].forEach(function (city) {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });



//to display on the new page.
function redirectToDisplayPage() {
    let firstNameValid = validFirstNameFunctionFocusOut();
    let lastNameValid = validLastNameFunctionFocusOut();
    let referenceCodeValid = validReferenceCodeFunctionFocusOut();
    let usernameValid = validUsernameFocusOut();
    let emailValid = validEmailFunctionFocusOut();
    let countryValid = validCountryFocusOut();
    let stateValid = validStateFocusOut();
    let cityValid = validCityFocusOut();
    let phoneValid = validPhoneNumberFunctionFocusOut();
    let validatedArray = new Array (firstNameValid, lastNameValid, referenceCodeValid, emailValid, usernameValid, countryValid, stateValid, cityValid, phoneValid)
    check = validatedArray.every(checkValid)
    
    function checkValid(ifValid) {
      return ifValid === true;
    }

    if (check === true)
    {
        window.location.href = "Summury.html"; 
    } 
    else
    {
        confirm("There are still invalid fields")
    }

};

document.addEventListener("DOMContentLoaded", function() {
    var userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        document.getElementById("firstName").textContent = userData.first_name;
        document.getElementById("lastName").textContent = userData.last_name;
        document.getElementById("Email").textContent = userData.email_id;
        document.getElementById("userName").textContent = userData.username;
        document.getElementById("Country").textContent = userData.country;
        document.getElementById("State").textContent = userData.state;
        document.getElementById("City").textContent = userData.city;
        document.getElementById("phoneNumber").textContent = userData.phone_number;
        document.getElementById("referenceCode").textContent = userData.reference_code;
    }
});
  

document.addEventListener('DOMContentLoaded', function() {
    
    // Function to handle input focus
    function handleInputFocus(event) {
        event.target.previousElementSibling.classList.add('active');
    }

    function handleInputBlur(event) {
        if (!event.target.value) {
            event.target.previousElementSibling.classList.remove('active');
        }
    }

    const inputFields = document.querySelectorAll('.form-group input');
    inputFields.forEach((input) => {
        input.addEventListener('focus', handleInputFocus);
        input.addEventListener('blur', handleInputBlur);
    });

    // Function to handle dropdown focus
    function handleDropdownFocus(event) {
        event.target.previousElementSibling.classList.add('active');
    }

    function handleDropdownBlur(event) {
        if (!event.target.value) {
            event.target.previousElementSibling.classList.remove('active');
        }
    }

    const dropdowns = document.querySelectorAll('.form-group select');
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('focus', handleDropdownFocus);
        dropdown.addEventListener('blur', handleDropdownBlur);
    });

});








document.addEventListener("DOMContentLoaded", function() {
    const reportForm = document.getElementById("reportForm");

    // Add event listeners for input fields to validate in real-time
    const locationInput = document.getElementById("location");
    const issueTypeInput = document.getElementById("issueType");
    const descriptionInput = document.getElementById("description");
    const photoInput = document.getElementById("photo");

    locationInput.addEventListener("input", validateLocation);
    issueTypeInput.addEventListener("change", validateIssueType);
    descriptionInput.addEventListener("input", validateDescription);
    photoInput.addEventListener("change", validatePhoto);

    // Function to validate location
    function validateLocation() {
        const locationValue = locationInput.value.trim();
        if (!locationValue) {
            setErrorFor(locationInput, "Location cannot be empty");
        } else {
            setSuccessFor(locationInput);
        }
    }

    // Function to validate issue type
    function validateIssueType() {
        const issueTypeValue = issueTypeInput.value;
        if (issueTypeValue === "") {
            setErrorFor(issueTypeInput, "Please select an issue type");
        } else {
            setSuccessFor(issueTypeInput);
        }
    }

    // Function to validate description
    function validateDescription() {
        const descriptionValue = descriptionInput.value.trim();
        if (!descriptionValue) {
            setErrorFor(descriptionInput, "Description cannot be empty");
        } else {
            setSuccessFor(descriptionInput);
        }
    }

    // Function to validate photo
    function validatePhoto() {
        const photoValue = photoInput.value;
        const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
        const fileExtension = photoValue.split(".").pop().toLowerCase();
        if (photoValue && !allowedExtensions.includes(fileExtension)) {
            setErrorFor(photoInput, "Please upload a valid image file");
        } else {
            setSuccessFor(photoInput);
        }
    }

    // Function to set error message
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector(".error-message");
        errorMessage.innerText = message;
        formControl.classList.remove("success");
        formControl.classList.add("error");
    }

    // Function to set success style
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        const errorMessage = formControl.querySelector(".error-message");
        errorMessage.innerText = "";
        formControl.classList.remove("error");
        formControl.classList.add("success");
    }

    reportForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate all fields before submitting
        validateLocation();
        validateIssueType();
        validateDescription();
        validatePhoto();

        // Check if any field has error class
        const hasError = reportForm.querySelectorAll(".error").length > 0;
        if (!hasError) {
            submitForm();
        }
    });

    // Function to submit form data
    function submitForm() {
        const formData = new FormData(reportForm);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_report.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("Report submitted successfully!");
                reportForm.reset();
            } else {
                alert("Error submitting report. Please try again later.");
            }
        };
        xhr.onerror = function() {
            alert("Error submitting report. Please try again later.");
        };
        xhr.send(formData);
    }
});

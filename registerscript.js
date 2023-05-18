document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Redirect to scheduler page
  window.location.href = "taskScheduler.html";
});

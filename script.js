// Select the counter paragraph and the increment button
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

// Initialize the counter value
let counterValue = 0;

// Add an event listener to the button
incrementBtn.addEventListener("click", () => {
  // Display the un-incremented value in an alert
  alert(`Current value: ${counterValue}`);
  
  // Increment the counter value
  counterValue++;

  // Update the counter paragraph
  counterElement.textContent = counterValue;
});

// function createChip() {
//     const colors = ['#f44336', '#3f51b5', '#009688', '#ff9800'];
//     const chipTexts = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
  
//     const chip = document.createElement('div');
//     chip.classList.add('chip');
//     chip.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//     chip.textContent = chipTexts[Math.floor(Math.random() * chipTexts.length)];
  
//     const container = document.getElementById('chips-container');
//     container.appendChild(chip);
  
//     setTimeout(() => {
//       chip.remove();
//     }, 5000);
//   }
  

// // Start the animation
// const intervalId = setInterval(createChip, 1000);

// // Function to stop the animation
// function stopAnimation() {
//   clearInterval(intervalId);
// }

// // Event listener for scroll event
// window.addEventListener("scroll", stopAnimation);


// // Function to create a new chip element
// function createChip() {
//     const colors = ['#f44336', '#3f51b5', '#009688', '#ff9800'];
//     const chipTexts = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
//     // Create a new chip element
//     const chip = document.createElement("div");
//     chip.classList.add("chip");
  
//     // Set random position for the chip
//     const randomX = Math.random() * (window.innerWidth - 100);
//     const randomY = Math.random() * (window.innerHeight - 100);
//     chip.style.position = "fixed";
//     chip.style.left = randomX + "px";
//     chip.style.top = randomY + "px";
//     chip.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//     chip.textContent = chipTexts[Math.floor(Math.random() * chipTexts.length)];
  
//     // Set random velocity for the chip
//     const velocityX = (Math.random() - 0.5) * 10; // Adjust the velocity range as needed
//     const velocityY = (Math.random() - 0.5) * 10; // Adjust the velocity range as needed
  
//     // Function to update chip position
//     function updatePosition() {
//       const chipRect = chip.getBoundingClientRect();
//       const chipWidth = chipRect.width;
//       const chipHeight = chipRect.height;
//       const windowWidth = window.innerWidth;
//       const windowHeight = window.innerHeight;
//       const currentX = parseFloat(chip.style.left);
//       const currentY = parseFloat(chip.style.top);
  
//       // Check if the chip is going out of the screen boundaries
//       if (currentX <= 0 || currentX >= windowWidth - chipWidth) {
//         velocityX *= -1; // Reverse the horizontal velocity
//       }
//       if (currentY <= 0 || currentY >= windowHeight - chipHeight) {
//         velocityY *= -1; // Reverse the vertical velocity
//       }
  
//       // Update chip position based on velocity
//       const newX = currentX + velocityX;
//       const newY = currentY + velocityY;
//       chip.style.left = newX + "px";
//       chip.style.top = newY + "px";
  
//       // Call the updatePosition function recursively
//       requestAnimationFrame(updatePosition);
//     }
  
//     // Start updating chip position
//     updatePosition();
  
//     // Append the chip to the document body
//     document.body.appendChild(chip);

//     setTimeout(() => {
//               chip.remove();
//             }, 5000);
//   }
  
//   // Call the createChip function every 1 second
//   const interval = setInterval(createChip, 1000);
  
//   // Function to stop the chip animation when scrolling
//   function stopAnimation() {
//     clearInterval(interval);
//   }
  
//   // Add scroll event listener to stop the animation on scroll
//   window.addEventListener("scroll", stopAnimation);
  

// Fadeaway
function createChip() {
  const chip = document.createElement("div");
  chip.classList.add("chip");

  // Set random position for the chip
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 100);
  chip.style.position = "fixed";
  chip.style.left = randomX + "px";
  chip.style.top = randomY + "px";
  const colors = ['#1D267D','#5C469C','#4E31AA','#66347F','#f44336','#79018C', '#3f51b5', '#009688', '#ff9800'];
  const chipTexts = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
  chip.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  chip.textContent = chipTexts[Math.floor(Math.random() * chipTexts.length)];
  chip.style.opacity = "50";

  // Set random duration for fading away
  const fadeDuration = Math.random() * 3000 + 2000; // Random duration between 2-5 seconds

  // Set random content for the chip (example)
  const chipContent = document.createElement("span");
  // chipContent.textContent = "Chip ";
  chip.appendChild(chipContent);

  // Append the chip to the document body
  document.body.appendChild(chip);

  // Fade away after a certain duration
  setTimeout(() => {
    chip.style.opacity = "0";
    setTimeout(() => {
      chip.remove();
    }, 2000); // Remove the chip from the DOM after the fade out animation
  }, fadeDuration);
}

// Call the createChip function every 1 second
  const interval = setInterval(createChip, 1000);


  function stopAnimation() {
    clearInterval(interval);
  }

window.addEventListener("scroll", stopAnimation);

new mdb.Carousel(document.getElementById("carouselMultiItemExample"), {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: false // Set to true if you want the carousel to auto-play
});


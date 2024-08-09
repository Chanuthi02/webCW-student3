document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  showStep(currentStep);

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  document.querySelectorAll(".next-btn").forEach(button => {
    button.addEventListener("click", function() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  document.querySelectorAll(".prev-btn").forEach(button => {
    button.addEventListener("click", function() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });
  document.querySelector('.submit-btn').addEventListener('click', function() {
      alert('Submitted successfully');
    });
});

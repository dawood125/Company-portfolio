 const nextBtns = document.querySelectorAll('.next-btn');
  const steps = document.querySelectorAll('.form-step');
  const indicators = document.querySelectorAll('.step');
  const progressFills = document.querySelectorAll('.progress-fill');

  let currentStep = 0;

  nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        indicators[currentStep].classList.remove('active');
        progressFills[currentStep].style.width = '100%';

        currentStep++;
        steps[currentStep].classList.add('active');
        indicators[currentStep].classList.add('active');
      }
    });
  });

  // FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function () {
    const item = btn.closest('.faq-item');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});
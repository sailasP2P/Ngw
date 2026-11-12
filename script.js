// Replace these two lines with your actual Telegram username and WhatsApp number
const TELEGRAM_USERNAME = "YourTelegramUsername";
const WHATSAPP_NUMBER = "255784517407";

const loanAmountInput = document.getElementById('loanAmount');
const amountDisplay = document.getElementById('amountDisplay');

loanAmountInput.addEventListener('input', (e) => {
  amountDisplay.textContent = Number(e.target.value).toLocaleString('en-US');
});

function showStep(stepId) {
  document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
  document.getElementById(stepId).classList.add('active');
}

function goToStep1() {
  showStep('step1');
}

function goToStep2() {
  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();
  const amount = Number(document.getElementById('loanAmount').value).toLocaleString('en-US');
  const purpose = document.getElementById('loanPurpose').value;

  if (!name || !phone || !purpose) {
    alert("Please fill in all fields before continuing.");
    return;
  }

  document.getElementById('reviewName').textContent = name;
  document.getElementById('reviewPhone').textContent = phone;
  document.getElementById('reviewAmount').textContent = amount;
  document.getElementById('reviewPurpose').textContent = purpose;

  showStep('step2');
}

function getFormattedMessage() {
  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();
  const amount = Number(document.getElementById('loanAmount').value).toLocaleString('en-US');
  const purpose = document.getElementById('loanPurpose').value;

  return `*NEW LOAN APPLICATION*%0A` +
         `*Name:* ${encodeURIComponent(name)}%0A` +
         `*Phone:* ${encodeURIComponent(phone)}%0A` +
         `*Amount:* ${encodeURIComponent(amount)}%0A` +
         `*Purpose:* ${encodeURIComponent(purpose)}`;
}

function submitToTelegram() {
  const msg = getFormattedMessage();
  document.getElementById('finalAmount').textContent = document.getElementById('reviewAmount').textContent;
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg}`, '_blank');
  showStep('step3');
}

function submitToWhatsApp() {
  const msg = getFormattedMessage();
  document.getElementById('finalAmount').textContent = document.getElementById('reviewAmount').textContent;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  showStep('step3');
}

function resetForm() {
  document.getElementById('fullName').value = '';
  document.getElementById('phoneNumber').value = '';
  document.getElementById('loanPurpose').value = '';
  showStep('step1');
}

document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('.drawer');
  const drawerBtn = document.querySelector('.drawer-handle button');

  drawerBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    document.querySelector('.drawer-overlay').classList.toggle('show')
  });
  document.querySelector('.drawer-overlay').addEventListener('click', () => {
    drawer.classList.remove('open');
    document.querySelector('.drawer-overlay').classList.remove('show')
  });
});

function showCode() {
  // Hiển thị overlay và container chứa mã
  document.querySelector('#show-code-button').classList.add('hidden')
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("codeContainer").classList.remove("hidden");
  
  // Đếm ngược thời gian
  let countdown = 60;
  const countdownElement = document.getElementById("countdown");
  const codeElement = document.getElementById("code");
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown === 0) {
      clearInterval(countdownInterval);
      codeElement.textContent = "LD99VIP"; // Thay thế mã ở đây
    }
  }, 1000);
}

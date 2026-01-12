// زر هل تتزوجيني؟
const proposalBtn = document.getElementById('proposalBtn');
const surprise = document.getElementById('surprise');

proposalBtn.addEventListener('click', () => {
  surprise.classList.toggle('hidden');
});

// زر تشغيل/إيقاف الموسيقى
const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('romanticAudio');

musicBtn.addEventListener('click', () => {
  if(audio.paused) {
    audio.play();
    musicBtn.textContent = 'إيقاف الموسيقى 🎵';
  } else {
    audio.pause();
    musicBtn.textContent = 'تشغيل الموسيقى 🎵';
  }
});

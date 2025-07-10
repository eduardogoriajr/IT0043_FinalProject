const parts = document.querySelectorAll('.part');
const slots = document.querySelectorAll('.slot, .slot2, .slot3');

parts.forEach(part => {
  part.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', part.id);
  });
});

slots.forEach(slot => {
  slot.addEventListener('dragover', e => {
    e.preventDefault();
    slot.style.backgroundColor = '#b2f2bb';
  });

  slot.addEventListener('dragleave', () => {
    slot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  });

  slot.addEventListener('drop', e => {
    e.preventDefault();
    const partId = e.dataTransfer.getData('text/plain');
    const part = document.getElementById(partId);

    if (slot.id.includes(partId)) {
        const clone = part.querySelector('img').cloneNode();
        clone.style.width = '100%';
        clone.style.height = '100%';
        clone.style.objectFit = 'contain';
        slot.innerHTML = '';
        slot.appendChild(clone);
      part.style.display = 'none';
      slot.style.backgroundColor = 'transparent';
    } else {
      alert('❌ Wrong slot!');
      slot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }
  });
});

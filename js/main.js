const fields = document.querySelectorAll('[contenteditable="true"]');

fields.forEach((el, i) => {
    const saved = localStorage.getItem(`cv_field_${i}`);
    if (saved) el.innerHTML = saved;

    el.addEventListener('input', () => {
        localStorage.setItem(`cv_field_${i}`, el.innerHTML);
    });
});

document.addEventListener('mousedown', (e) => {
    const target = e.target.closest('.card, button');
    if (!target) return;

    const circle = document.createElement('span');
    const d = Math.max(target.clientWidth, target.clientHeight);
    const rect = target.getBoundingClientRect();

    circle.style.width = circle.style.height = `${d}px`;
    circle.style.left = `${e.clientX - rect.left - d/2}px`;
    circle.style.top = `${e.clientY - rect.top - d/2}px`;
    circle.classList.add('wave');

    target.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
});

document.getElementById('download-btn').addEventListener('click', () => {
    window.print();
});

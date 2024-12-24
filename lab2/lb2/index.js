function showAlert(sectionName) {
    alert(`Раздел "${sectionName}" недоступен!`);
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            showAlert(item.textContent);
        });
    });
});
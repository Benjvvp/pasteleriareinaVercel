export default function SucessAlert(message) {
  const pattern = document.querySelectorAll(".informationSection");
  pattern.forEach((element) => {
    const alert = document.createElement("div");
    alert.innerHTML = `
            <div class="alert alert-success" role="alert">
            ${message}
            </div>
            `;
    element.prepend(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  });
}

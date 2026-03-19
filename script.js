// Configuración básica de interacción para la landing page.
// Por ahora el envío es simulado para dejar lista la UI para una integración futura.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("name-form");
  const customNameInput = document.getElementById("custom-name");
  const messageBox = document.getElementById("form-message");
  const yearNode = document.getElementById("year");

  // Inserta el año actual de forma automática en el footer.
  yearNode.textContent = new Date().getFullYear();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selected = form.querySelector('input[name="nombre"]:checked');
    const customName = customNameInput.value.trim();

    if (!selected && !customName) {
      messageBox.textContent =
        "Elige un nombre sugerido o escribe uno propio antes de enviar.";
      return;
    }

    const chosenName = customName || selected.value;

    // Simulación de envío exitoso.
    messageBox.textContent = `¡Gracias! Registramos tu propuesta: “${chosenName}”.`;
    form.reset();
  });
});

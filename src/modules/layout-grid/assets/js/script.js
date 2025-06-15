
document.addEventListener("DOMContentLoaded", () => {
  const layoutsContainer = document.getElementById("layouts");
  const botonesContainer = document.getElementById("botonesGrids");
  const layoutNameDisplay = document.createElement("div");
  layoutNameDisplay.className = "text-center fw-bold mt-2";
  botonesContainer.parentNode.insertBefore(layoutNameDisplay, botonesContainer.nextSibling);

  const layouts = layoutsContainer.querySelectorAll("div[id^='layout-']");
  layouts.forEach((layoutDiv) => {
    const id = layoutDiv.id;
    const numero = id.split("-")[1];
    const btn = document.createElement("div");
    btn.className = "grid-option";
    btn.setAttribute("data-id", id);
    btn.innerHTML = `
      <img src="assets/img/${id}.png" alt="Layout ${numero}">
      <p>Layout ${numero}</p>
    `;
    btn.onclick = () => {
      mostrarLayout(id);
      marcarSeleccionado(btn, `Layout ${numero}`);
    };
    botonesContainer.appendChild(btn);
  });

  function marcarSeleccionado(elemento, nombre) {
    document.querySelectorAll(".grid-option").forEach(e => e.classList.remove("seleccionado"));
    elemento.classList.add("seleccionado");
    layoutNameDisplay.textContent = `✅ Seleccionado: ${nombre}`;
  }
});

function mostrarLayout(id) {
  const layout = document.getElementById(id);
  if (!layout) return alert("❌ Layout no encontrado");
  document.getElementById("salidaHTML").value = layout.innerHTML.trim();
}

function copiarHTML() {
  const textarea = document.getElementById("salidaHTML");
  const cleaned = textarea.value
    .replace(/<tbody>/gi, "")
    .replace(/<\/tbody>/gi, "");

  navigator.clipboard.writeText(cleaned)
    .then(() => alert("✅ HTML copiado sin tbody"))
    .catch(() => alert("❌ Error al copiar"));
}


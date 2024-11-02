const URLinput = document.getElementById("longUrl");
const buttonForm = document.getElementById("submit");
const resultDiv = document.getElementById("input-container");
const resultInput = document.getElementById("shortUrl");

buttonForm.addEventListener("click", (e) => {
  e.preventDefault();

  const apiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(
    URLinput.value
  )}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      resultInput.value = data.shorturl; // Mostrar la URL acortada en la vista del usuario
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultInput.value = "Error al generar la URL"; // Mensaje de error en caso de fallo
    });
});

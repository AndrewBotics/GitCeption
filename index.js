const fileInput = document.getElementById('fileInput');
const iframe = document.getElementById('preview');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && file.type === "text/html") {
    const reader = new FileReader();
    reader.onload = () => {
      const blob = new Blob([reader.result], { type: 'text/html' });
      iframe.src = URL.createObjectURL(blob);
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a valid HTML file.");
  }
}
);

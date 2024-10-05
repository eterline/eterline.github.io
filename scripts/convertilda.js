const sendForm = document.getElementById('form');
const fileInput = document.getElementById('file-conv');
const targFormat = document.getElementById('dropdown');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (fileInput.files.length === 0) {
        alert("Пожалуйста, выберите файл.");
        return;
    }
    const formData = new FormData();
    const selectedFile = fileInput.files[0];
    const selectedTarget = dropdown.value;

    formData.append('file', selectedFile);
    const res = apiRequest(formData, '', selectedTarget)
});

async function apiRequest(formData, api, target) {
    const res = await fetch(api, {
        method: 'POST',
        headers: {
            'target': target
        },
        body: formData
    });
    if (!res.ok) {
        throw new Error(`Server error: ${res.status} - ${res.statusText}`);
        alert(`Server error: ${res.status} - ${res.statusText}`)
    }
    const data = await res.json();
    const fileURL = data['URL']
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = '';  // Optionally set a filename here, e.g., 'document.docx'
    document.body.appendChild(link);
    link.click();  // Trigger the download
    document.body.removeChild(link);
}
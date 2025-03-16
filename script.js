const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const countButton = document.getElementById('countButton');

countButton.addEventListener('click', () => {
    const text = textInput.value;
    const words = text.trim().split(/\s+/).filter(Boolean);
    wordCount.textContent = words.length;
    charCount.textContent = text.length;
});
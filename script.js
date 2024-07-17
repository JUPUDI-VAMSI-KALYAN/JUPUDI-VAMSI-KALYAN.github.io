document.addEventListener('DOMContentLoaded', function() {
    const text = "Trojan | Ex-IBMer | Programmer";
    const element = document.getElementById('typing-text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});

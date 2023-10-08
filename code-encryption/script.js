// Inisialisasi Prism.js
document.addEventListener("DOMContentLoaded", function() {
    Prism.highlightAll();
    });
    // Inisialisasi Clipboard.js
    var clipboard = new ClipboardJS('.copy-button', {
    text: function(trigger) {
    // Mendapatkan kode yang ada di dalam .code-container
    var codeContainer = document.querySelector(trigger.getAttribute('data-clipboard-target'));
    var codeText = getCodeText(codeContainer);
    return codeText;
    }
    });
    clipboard.on('success', function(e) {
    showCopySuccessNotification(e.trigger);
    });
    clipboard.on('error', function(e) {
    showCopyErrorNotification();
    });
    // Fungsi untuk mendapatkan teks kode dari elemen .code-container
    function getCodeText(codeContainer) {
    var codeElement = codeContainer.querySelector('.language-javascript');
    var codeLines = codeElement.innerText.split('\n');
    var cleanedCodeLines = [];
    for (var i = 0; i < codeLines.length; i++) {
    var line = codeLines[i].trim();
    if (line) {
    cleanedCodeLines.push(line);
    }
    }
    return cleanedCodeLines.join('\n');
    }
    // Fungsi untuk menampilkan notifikasi pop-up ketika kode berhasil disalin
    function showCopySuccessNotification(button) {
    var copiedButton = document.querySelector('.copied-button');
    copiedButton.style.display = 'inline-block';
    button.style.display = 'none';
    setTimeout(function() {
    copiedButton.style.display = 'none';
    button.style.display = 'inline-block';
    }, 2000);
    }
    // Fungsi untuk menampilkan notifikasi pop-up ketika ada kesalahan dalam menyalin kode
    function showCopyErrorNotification() {
    Swal.fire({
    icon: 'error',
    title: 'Gagal Menyalin Kode',
    text: 'Terjadi kesalahan saat menyalin kode.',
    });
}

let link = document.createElement ('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'style.css';

document.querySelector('head').appendChild(link);
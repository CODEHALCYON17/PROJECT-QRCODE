const input = document.getElementById('qr-text');
const btn = document.getElementById('generate-btn');
const divi = document.getElementsByClassName('qr-part');
let isGenerated = false;
let prevData = null;
divi[0].classList.add('hidden');

btn.addEventListener('click', () => {
    const data = input.value.trim();
    let qrSrc = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    if (data.length > 0) {
        if (prevData == null) {
            prevData = data;
        }
        if (data == prevData && isGenerated) {
            alert("Qr already generated for this text");
        } else {
            divi[0].classList.remove('hidden');
            divi[0].innerHTML = '';
            qrSrc += data;
            const qrimg = document.createElement('img');
            qrimg.src = qrSrc;
            qrimg.alt = "QR Code";
            divi[0].appendChild(qrimg);
            const downBtn = document.createElement('button');
            downBtn.textContent = "Download";
            downBtn.id = "download-btn";
            divi[0].appendChild(downBtn);

            // Gradually increase opacity for the elements
            setTimeout(() => {
                qrimg.style.opacity = 1;
                btn.style.opacity = 1;
                downBtn.style.opacity = 1;
            }, 100);

            previousData = data;
            isGenerated = true;
        }
    } else {
        alert("please enter some text to generate");
    }
});

input.addEventListener('keyup', () => {
    if (input.value.length === 0) {
        // Add the 'hidden' class to hide .qr-part when text is cleared
        divi[0].classList.add('hidden');
        divi[0].innerHTML = '';
        isGenerated = false;
    }
});

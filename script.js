document.getElementById('amount').addEventListener('input', generateQRCode);

// Create initial QR code with default amount
window.onload = generateQRCode;

function generateQRCode() {
    const amount = document.getElementById('amount').value || '0.00'; // Default to '0.00' if no amount is provided
    const promptpayPayload = generatePromptPayPayload(amount);
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, {
        text: promptpayPayload,
        width: 256,
        height: 256
    });
}

function generatePromptPayPayload(amount) {
    const promptpayID = "1101100083542"; // Replace with your PromptPay ID
    let payload = `00020101021129370016A00000067701011101130066${promptpayID}53037645802TH${amount}5802TH6304`;
    const crc = calculateCRC16(payload);
    payload += crc;
    return payload;
}

function calculateCRC16(payload) {
    let crc = 0xFFFF;
    const polynom = 0x1021;

    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ polynom;
            } else {
                crc = crc << 1;
            }
            crc &= 0xFFFF;
        }
    }

    return crc.toString(16).toUpperCase().padStart(4, '0');
}

function saveQRCode() {
    const qrcodeContainer = document.getElementById('qrcode').querySelector('img');
    const link = document.createElement('a');
    link.href = qrcodeContainer.src;
    link.download = 'qrcode.png';
    link.click();
}
            // Copy account number to clipboard 
function copyToClipboard(elementId) {
            var copyText = document.getElementById(elementId).textContent;
            var tempInput = document.createElement("input");
            document.body.appendChild(tempInput);
            tempInput.value = copyText;
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            var copiedMessage = document.getElementById('copied-' + elementId.split('-')[2]);
            copiedMessage.classList.add('show');
            setTimeout(function() {
                copiedMessage.classList.remove('show');
            }, 2000);
        }
/*script connect button link web site*/
function youtube() { 
            window.open("https://www.youtube.com/");
            }
function instagram() { 
            window.open("https://www.instagram.com/");
            }
function facebook() { 
            window.open("https://www.facebook.com/");
            }
function shopee() { 
            window.open("https://shopee.co.th/");
            }
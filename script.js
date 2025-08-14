document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.querySelector('.message-input');
    const sendButton = document.querySelector('.send-button');
    const sendText = document.querySelector('.send-text');

    // Handle send button click
    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
            messageInput.value = '';
        }
    });

    // Handle Enter key press
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message) {
                sendMessage(message);
                messageInput.value = '';
            }
        }
    });

    // Send message function
    function sendMessage(message) {
        console.log('送信されたメッセージ:', message);
        
        // Add visual feedback
        sendText.textContent = '送信中...';
        sendButton.style.opacity = '0.7';
        
        // Simulate sending (replace with actual API call)
        setTimeout(() => {
            sendText.textContent = '送信完了!';
            setTimeout(() => {
                sendText.textContent = '送信';
                sendButton.style.opacity = '1';
            }, 1000);
        }, 1500);
        
        // Here you would typically make an API call to your backend
        // Example:
        // fetch('/api/send-message', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ message: message })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    }

    // Add focus effects to input
    messageInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    messageInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });

    // Add loading animation on page load
    const elements = document.querySelectorAll('.title-main, .subtitle, .input-container, .send-button');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

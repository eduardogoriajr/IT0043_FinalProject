function getStarted() {
    alert("Redirecting to Modules page...");
    window.location.href = "Modules.html"; 
}

function learnMore() {
    alert("Learn more about us");
    window.location.href = "About.html"; 
}

function contacts() {
    alert("Loading contact informations.");
    window.location.href = "Contact.html"; 
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = loginForm.querySelector('input[type="text"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value.trim();
            if (!username || !password) {
                alert('Please enter both username and password.');
            } else {
                localStorage.setItem('username', username);
                alert(`Welcome back, ${username}!`);
                window.location.href = "Home.html";
            }
        });
    }

    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = registerForm.querySelector('input[type="text"]').value.trim();
            const email = registerForm.querySelector('input[type="email"]').value.trim();
            const password = registerForm.querySelector('input[type="password"]').value.trim();
            if (!username || !email || !password) {
                alert('Please fill in all registration fields.');
            } else if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
            } else {
                alert(`Registration successful! Welcome, ${username}!`);
            }
        });
    }

    const profileUsername = document.getElementById('profile-username');
    const statusDiv = document.getElementById('user-status');
    const premiumBtn = document.getElementById('become-premium-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const paymentModal = document.getElementById('payment-modal');
    const paymentForm = document.getElementById('payment-form');
    const cancelPayment = document.getElementById('cancel-payment');

    if (profileUsername && statusDiv && premiumBtn && logoutBtn) {
        profileUsername.textContent = localStorage.getItem('username') || 'Username';
        let isPremium = localStorage.getItem('isPremium') === 'true';

        function updateStatus() {
            if (isPremium) {
                statusDiv.textContent = 'Premium User';
                statusDiv.className = 'user-status premium';
                premiumBtn.style.display = 'none';
            } else {
                statusDiv.textContent = 'Free User';
                statusDiv.className = 'user-status free';
                premiumBtn.style.display = 'inline-block';
            }
        }

        premiumBtn.addEventListener('click', function() {
            paymentModal.style.display = 'flex';
        });

        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('username');
                localStorage.removeItem('isPremium');
                window.location.href = 'LandingPage.html';
            }
        });

        updateStatus();
    }

    if (premiumBtn && paymentModal && paymentForm && cancelPayment) {
        cancelPayment.addEventListener('click', function() {
            paymentModal.style.display = 'none';
        });

        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            paymentModal.style.display = 'none';
            if (confirm('Are you sure you want to become a Premium User?')) {
                localStorage.setItem('isPremium', 'true');
                alert('Payment successful! You are now a Premium User.');
                window.location.reload();
            }
        });
    }
});
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
    /*
        REGISTER-LOGIN PAGE
    */
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

    /*
        MODULES PAGE AND EXERCISE PAGE
    */
    const moduleBtns = document.querySelectorAll('.premium-module');
    const popup = document.getElementById('premium-popup');
    const okBtn = document.getElementById('premium-ok-btn');

    moduleBtns.forEach(button => 
        button.onclick = (event) => {
            console.log('Button clicked:', button.textContent);
            // Check if 'isPremium' is in localStorage
            if (!localStorage.getItem('isPremium')) {
            event.preventDefault(); // Stop navigating to new page
            popup.classList.remove('hidden'); // Show pop up modal
            
            // Add click handler to button
            okBtn.addEventListener('click', () => {
                window.location.href = '/profile.html'; // Replace with your target URL
            });
        };
    });

   const quizBtns = document.querySelectorAll('.premium-quiz');

    quizBtns.forEach(button => 
        button.onclick = (event) => {
            console.log('Button clicked:', button.textContent);
            // Check if 'isPremium' is in localStorage
            if (!localStorage.getItem('isPremium')) {
            event.preventDefault(); // Stop navigating to new page
            popup.classList.remove('hidden'); // Show pop up modal

            // Add click handler to button
            okBtn.addEventListener('click', () => {
                window.location.href = '/profile.html'; // Replace with your target URL
            });
        };
    });

    /*
        PROFILE PAGE
    */
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

document.addEventListener('DOMContentLoaded', () => {

    const quizForm1 = document.getElementById('quizForm1');
    const questions1 = [
        { name: 'q1_answer', correctAnswer: 'B' },
        { name: 'q2_answer', correctAnswer: 'D' },
        { name: 'q3_answer', correctAnswer: 'A' },
        { name: 'q4_answer', correctAnswer: 'C' },
        { name: 'q5_answer', correctAnswer: 'B' },
        { name: 'q6_answer', correctAnswer: 'C' },
        { name: 'q7_answer', correctAnswer: 'B' },
        { name: 'q8_answer', correctAnswer: 'D' },
        { name: 'q9_answer', correctAnswer: 'D' },
        { name: 'q10_answer', correctAnswer: 'B' }
    ];

    if (quizForm1) {
        quizForm1.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission initially

            // Add confirmation dialog
            if (confirm("Are you sure you want to submit the quiz? You cannot change your answers after submission.")) {
                let score = 0;
                const results = [];
                const totalQuestions = questions1.length;

                questions1.forEach((q, index) => {
                    const selectedOptionValue = quizForm1.elements[q.name]?.value;
                    const questionNumber = index + 1;

                    if (selectedOptionValue) {
                        if (selectedOptionValue === q.correctAnswer) {
                            score++;
                            results.push(`<li class="correct">Question ${questionNumber}: Correct!</li>`);
                        } else {
                            results.push(`<li class="incorrect">Question ${questionNumber}: Incorrect. Your answer: "${selectedOptionValue}", Correct answer: "${q.correctAnswer}"</li>`);
                        }
                    } else {
                        results.push(`<li class="no-answer">Question ${questionNumber}: No answer selected.</li>`);
                    }
                });

                localStorage.setItem('quiz1Score', score);
                displayResults(score, totalQuestions, results, 'quizResults1');
            }
        });
    }

    const quizForm2 = document.getElementById('quizForm2');
    const questions2 = [
        { name: 'q1_2_answer', correctAnswer: 'B' },
        { name: 'q2_2_answer', correctAnswer: 'D' },
        { name: 'q3_2_answer', correctAnswer: 'A' },
        { name: 'q4_2_answer', correctAnswer: 'C' },
        { name: 'q5_2_answer', correctAnswer: 'B' },
        { name: 'q6_2_answer', correctAnswer: 'C' },
        { name: 'q7_2_answer', correctAnswer: 'B' },
        { name: 'q8_2_answer', correctAnswer: 'D' },
        { name: 'q9_2_answer', correctAnswer: 'A' },
        { name: 'q10_2_answer', correctAnswer: 'B' }
    ];

    if (quizForm2) {
        quizForm2.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission initially

            // Add confirmation dialog
            if (confirm("Are you sure you want to submit the quiz? You cannot change your answers after submission.")) {
                let score = 0;
                const results = [];
                const totalQuestions = questions2.length;

                questions2.forEach((q, index) => {
                    const selectedOptionValue = quizForm2.elements[q.name]?.value;
                    const questionNumber = index + 1;

                    if (selectedOptionValue) {
                        if (selectedOptionValue === q.correctAnswer) {
                            score++;
                            results.push(`<li class="correct">Question ${questionNumber}: Correct!</li>`);
                        } else {
                            results.push(`<li class="incorrect">Question ${questionNumber}: Incorrect. Your answer: "${selectedOptionValue}", Correct: "${q.correctAnswer}"</li>`);
                        }
                    } else {
                        results.push(`<li class="no-answer">Question ${questionNumber}: No answer selected.</li>`);
                    }
                });

                localStorage.setItem('quiz2Score', score);
                displayResults(score, totalQuestions, results, 'quizResults2');
            }
        });
    }

    const quizForm3 = document.getElementById('quizForm3');
    const questions3 = [
        { name: 'q3_1_answer', correctAnswer: ['POWER SUPPLY UNIT', 'PSU'] },
        { name: 'q3_2_answer', correctAnswer: ['GPU'] },
        { name: 'q3_3_answer', correctAnswer: ['PC CASE'] },
        { name: 'q3_4_answer', correctAnswer: ['COOLING FANS', 'HEATSINKS'] },
        { name: 'q3_5_answer', correctAnswer: ['MOTHERBOARD'] },
        { name: 'q3_6_answer', correctAnswer: ['CENTRAL PROCESSING UNIT', 'PROCESSOR', 'CPU'] },
        { name: 'q3_7_answer', correctAnswer: ['RAM','MEMORY'] },
        { name: 'q3_8_answer', correctAnswer: ['STORAGE DRIVE'] },
    ];

    if (quizForm3) {
        quizForm3.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission initially

            // Add confirmation dialog
            if (confirm("Are you sure you want to submit the quiz? You cannot change your answers after submission.")) {
                let score3 = 0;
                let totalQuestions3 = questions3.length;
                const results3 = [];

                questions3.forEach((question, index) => {
                    const inputElement = quizForm3.elements[question.name];
                    const questionNumber = index + 1;
                    
                    if (inputElement) {
                        const userAnswer = inputElement.value.trim(); 
                        const formattedUserAnswer = userAnswer.toLowerCase(); 
                        let formattedCorrectAnswers = [];
                        if (Array.isArray(question.correctAnswer)) {
                            formattedCorrectAnswers = question.correctAnswer.map(ans => String(ans).toLowerCase());
                        } else {
                            formattedCorrectAnswers = [String(question.correctAnswer).toLowerCase()];
                        }

                        if (formattedCorrectAnswers.some(correct => formattedUserAnswer.includes(correct) || correct.includes(formattedUserAnswer)) ) {
                            score3++;
                            results3.push(`<li class="correct">Question ${questionNumber}: Correct!</li>`);
                        } else {
                            results3.push(`<li class="incorrect">Question ${questionNumber}: Incorrect. Your answer: "${userAnswer}", Correct answer(s): "${Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' or ') : question.correctAnswer}"</li>`);
                        }
                    } else {
                        results3.push(`<li class="no-answer">Question ${questionNumber}: No answer provided.</li>`);
                    }
                });

                localStorage.setItem('quiz3Score', score3);
                displayResults(score3, totalQuestions3, results3, 'quizResults3');
            }
        });
    }

    function displayResults(score, totalQuestions, results, resultsContainerId) {
        let resultContainer = document.getElementById(resultsContainerId);
        if (!resultContainer) {
            console.error(`Results container with ID '${resultsContainerId}' not found. Attempting to create.`);
            const quizForm = document.getElementById(resultsContainerId.replace('quizResults', 'quizForm'));
            if (quizForm) {
                resultContainer = document.createElement('div');
                resultContainer.id = resultsContainerId;
                quizForm.parentNode.insertBefore(resultContainer, quizForm.nextSibling);
            } else {
                console.error(`Could not find a place to insert results for '${resultsContainerId}'`);
                return;
            }
        }
        resultContainer.classList.add('quiz-results');

        resultContainer.innerHTML = `
            <h2>Quiz Results</h2>
            <p>You scored ${score} out of ${totalQuestions}!</p>
            <ul>
                ${results.join('')} 
            </ul>
            <button id="retakeQuiz_${resultsContainerId}" class="retake-button">Retake Quiz</button>
        `;

        document.getElementById(`retakeQuiz_${resultsContainerId}`).addEventListener('click', () => {
            const currentQuizFormId = resultsContainerId.replace('quizResults', 'quizForm'); 
            const currentQuizForm = document.getElementById(currentQuizFormId);

            if (currentQuizForm) {
                currentQuizForm.reset();
            }
            resultContainer.innerHTML = '';
            if (currentQuizForm) {
                currentQuizForm.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const quiz1Txt = document.getElementById('quiz1-txt');
    const quiz2Txt = document.getElementById('quiz2-txt');
    const quiz3Txt = document.getElementById('quiz3-txt');

    let quiz1Score = localStorage.getItem('quiz1Score');
    let quiz2Score = localStorage.getItem('quiz2Score');
    let quiz3Score = localStorage.getItem('quiz3Score');

    if(quiz1Score) {
        quiz1Txt.innerText = quiz1Score + '/10';
    }

    if(quiz2Score) {
        quiz2Txt.innerText = quiz2Score + '/10';
    }

    if(quiz3Score) {
        quiz3Txt.innerText = quiz3Score + '/8';
    }
});
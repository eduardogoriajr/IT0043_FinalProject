function getStarted() {
    alert("Redirecting to Modules page...");
    window.location.href = "Modules.html"; 
}

function learnMore() {
    alert("Learn more about how to build your own PC.");
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
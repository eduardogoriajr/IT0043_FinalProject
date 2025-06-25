function getStarted() {
    alert("Redirecting to Modules page...");
    window.location.href = "modules.html"; 
}

function learnMore() {
    alert("Learn more about how to build your own PC.");
    window.location.href = "about.html"; 
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});
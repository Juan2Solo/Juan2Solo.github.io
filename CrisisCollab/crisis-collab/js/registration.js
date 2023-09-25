button.addEventListener("click", handleClick)
function redirectToAnotherPage() {
    var redirectToURL = "/html/community-form.html";

    window.location.href = redirectToURL;
}

var redirectButton = document.getElementById('redirect-button');
redirectButton.addEventListener('click', redirectToAnotherPage);
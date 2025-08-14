// Add this code to the very top of your script.js file

(function() {
    // This is the "password" or token that must be in the URL.
    const accessKey = 'token';
    const accessValue = 'comptia-access-granted';

    // The URL to redirect users to if they don't have access.
    const redirectUrl = 'https://nas.io/comptia_bootcamp/courses/keut';

    // Create a URLSearchParams object to easily read the URL's query parameters.
    const urlParams = new URLSearchParams(window.location.search);

    // Check 1: Does the user already have a valid session?
    // sessionStorage is temporary storage that clears when the browser tab is closed.
    if (sessionStorage.getItem('hasCompTIAAccess') === 'true') {
        // If they have access from a previous page view in this session, do nothing.
        return;
    }

    // Check 2: Is the correct token in the URL?
    if (urlParams.get(accessKey) === accessValue) {
        // If the token is correct, grant access and save it to the session.
        sessionStorage.setItem('hasCompTIAAccess', 'true');
        // Then, do nothing and let the user see the page.
        return;
    }
    
    // If both checks fail, the user does not have access. Redirect them.
    // We use window.location.replace so the "back" button doesn't lead to a loop.
    window.location.replace(redirectUrl);

})();

// The rest of your existing JavaScript code in script.js goes below this.
// ...


document.addEventListener('DOMContentLoaded', function() {
    // This script is intentionally left empty as per your request
    // No additional functionality will be added beyond the basic interactive elements
});

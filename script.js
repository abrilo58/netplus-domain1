// Add this code to the very top of your script.js file

(function() {
    // The official URL of your course page. This is the only page
    // that is allowed to be the referrer.
    const allowedReferrer = 'https://nas.io/comptia_bootcamp/courses/keut';
    
    // The URL to redirect users to if they are not coming from the allowed page.
    const redirectUrl = 'https://nas.io/comptia_bootcamp/courses/keut';

    // Get the referrer of the current page. The referrer is the URL
    // of the page that linked to this one.
    const referrer = document.referrer;

    // Check if the referrer starts with the allowed URL.
    // We use startsWith to account for any extra URL parameters that might be added.
    // If the user came from your nas.io page, the referrer will match.
    // If they typed the URL directly or came from another site, it will not match.
    if (!referrer || !referrer.startsWith(allowedReferrer)) {
        // If the referrer is not the allowed one, redirect the user.
        // We use window.location.replace so the user can't click the "back" button
        // to get to the protected page.
        window.location.replace(redirectUrl);
    }
})();

// The rest of your existing JavaScript code in script.js goes below this.
// ...


document.addEventListener('DOMContentLoaded', function() {
    // This script is intentionally left empty as per your request
    // No additional functionality will be added beyond the basic interactive elements
});

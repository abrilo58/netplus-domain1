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

    // Debug logging (remove in production)
    console.log('Current URL:', window.location.href);
    console.log('Document referrer:', referrer);
    console.log('Allowed referrer:', allowedReferrer);
    
    // Additional check: prevent redirect loop
    const currentUrl = window.location.href;
    const isAlreadyOnAllowedPage = currentUrl.startsWith(allowedReferrer);
    
    console.log('Is already on allowed page:', isAlreadyOnAllowedPage);

    // Check if the referrer starts with the allowed URL.
    // We use startsWith to account for any extra URL parameters that might be added.
    // If the user came from your nas.io page, the referrer will match.
    // If they typed the URL directly or came from another site, it will not match.
    const hasValidReferrer = referrer && referrer.startsWith(allowedReferrer);
    
    console.log('Has valid referrer:', hasValidReferrer);
    
    // Only redirect if:
    // 1. User doesn't have a valid referrer AND
    // 2. User is not already on the allowed page (prevent redirect loops)
    if (!hasValidReferrer && !isAlreadyOnAllowedPage) {
        console.log('Redirecting to:', redirectUrl);
        
        // Add a small delay to ensure console logs are visible
        setTimeout(() => {
            // Use window.location.replace so the user can't click the "back" button
            // to get to the protected page.
            window.location.replace(redirectUrl);
        }, 100);
    } else {
        console.log('Access allowed - valid referrer or already on allowed page');
    }
})();

// Additional safety check for modern browsers
// Some browsers may not populate document.referrer in certain scenarios
(function() {
    // Check if this is a direct navigation (no referrer and not from allowed domain)
    if (!document.referrer && 
        !window.location.href.startsWith('https://nas.io/comptia_bootcamp/courses/keut')) {
        
        // Check session storage for a flag indicating legitimate access
        const hasLegitAccess = sessionStorage.getItem('legitAccess');
        
        if (!hasLegitAccess) {
            console.log('No referrer and no session flag - potential direct access');
            
            // You might want to show a warning or redirect here too
            // Uncomment the next lines if you want strict enforcement
            /*
            setTimeout(() => {
                window.location.replace('https://nas.io/comptia_bootcamp/courses/keut');
            }, 100);
            */
        }
    } else if (document.referrer && 
               document.referrer.startsWith('https://nas.io/comptia_bootcamp/courses/keut')) {
        // Set a session flag for legitimate access
        sessionStorage.setItem('legitAccess', 'true');
    }
})();

// The rest of your existing JavaScript code goes below this.

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced error handling for DOM content
    try {
        console.log('DOM fully loaded and parsed');
        
        // Check if critical elements are present
        const criticalElements = document.querySelectorAll('details, summary');
        console.log('Found', criticalElements.length, 'interactive elements');
        
        // Add error handling for details/summary elements
        const detailsElements = document.querySelectorAll('details');
        detailsElements.forEach((detail, index) => {
            detail.addEventListener('toggle', function() {
                console.log(`Details element ${index} toggled:`, this.open);
            });
            
            // Check for missing summary elements
            const summary = detail.querySelector('summary');
            if (!summary) {
                console.warn(`Details element ${index} is missing a summary element`);
            }
        });
        
        // This script is intentionally left empty as per your request
        // No additional functionality will be added beyond the basic interactive elements
        
    } catch (error) {
        console.error('Error in DOMContentLoaded handler:', error);
    }
});

// Global error handler
window.addEventListener('error', function(event) {
    console.error('Global error caught:', event.error);
    console.error('Error details:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
    });
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});

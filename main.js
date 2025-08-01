// Main application bootstrap
console.log('NeuroAI Brain Explorer initializing...');

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting NeuroAI Brain Explorer');
    
    // Initialize 3D brain visualization
    if (typeof init3DBrain === 'function') {
        init3DBrain();
    } else {
        console.warn('3D brain initialization function not found');
    }
    
    // Add keyboard support for chat
    const input = document.getElementById('input');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                askAgent();
            }
        });
    }
    
    console.log('NeuroAI Brain Explorer initialized successfully');
});
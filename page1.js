// Congratulations! 🎉🎉🎉
// You made it to the Sources tab!
// To continue the exercise,
// press <code>Ctrl+Shift+S</code>


// Exercise 1: Inspector & Source Tab Detection
// This script detects when the user opens DevTools and navigates through the exercise

class Exercise1Controller {
    constructor() {
        this.currentStep = 1;
        this.devToolsOpen = false;
        this.sourcesTabVisited = false;
        this.exerciseComplete = false;
        
        this.init();
    }

    init() {
        console.log('🚀 Exercise 1 initialized! Open DevTools to continue.');
        
        // Start monitoring for DevTools
        this.startDevToolsDetection();
        
        // Set up keyboard shortcut detection
        this.setupKeyboardDetection();
        
        // Update progress
        this.updateProgress();
        
        // Add some data to make the file tree more interesting
        this.createExampleData();
    }

    startDevToolsDetection() {
        // Method 1: Console detection
        let devtools = {
            open: false,
            orientation: null
        };

        const threshold = 160;
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    this.onDevToolsOpened();
                }
            } else {
                if (devtools.open) {
                    devtools.open = false;
                }
            }
        }, 500);

        // Method 2: Console API detection
        let element = new Image();
        let consoleOpened = false;
        
        Object.defineProperty(element, 'id', {
            get: function() {
                if (!consoleOpened) {
                    consoleOpened = true;
                    setTimeout(() => {
                        if (!devtools.open) {
                            devtools.open = true;
                            this.onDevToolsOpened();
                        }
                    }, 100);
                }
                return 'devtools-detector';
            }
        });

        // Trigger the detection
        setInterval(() => {
            console.clear();
            console.log('%c🔍 DevTools Detection Active', 'color: blue; font-size: 12px;');
            console.log(element);
        }, 1000);
    }

    onDevToolsOpened() {
        if (!this.devToolsOpen) {
            console.log('🎉 Great! Developer Tools are now open!');
            console.log('👉 Now click on the "Sources" tab and press Ctrl+Shift+S (Cmd+Shift+S on Mac)');
            
            this.devToolsOpen = true;
            this.moveToStep(2);
        }
    }

    setupKeyboardDetection() {
        document.addEventListener('keydown', (event) => {
            // Detect Ctrl+Shift+S or Cmd+Shift+S
            if (event.shiftKey && event.key === 'S' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (this.currentStep === 2 && this.devToolsOpen) {
                    this.onSourcesTabVisited();
                }
            }
        });
    }

    onSourcesTabVisited() {
        if (!this.sourcesTabVisited) {
            console.log('🎯 Perfect! You found the Sources tab!');
            console.log('📚 Take a moment to explore the interface as described on the page.');
            
            this.sourcesTabVisited = true;
            this.moveToStep(3);
            
            // Complete the exercise after a short delay
            setTimeout(() => {
                this.completeExercise();
            }, 3000);
        }
    }

    moveToStep(stepNumber) {
        // Hide current step
        const currentStepElement = document.getElementById(`step${this.currentStep}`);
        if (currentStepElement) {
            currentStepElement.style.display = 'none';
        }

        // Show new step
        this.currentStep = stepNumber;
        const newStepElement = document.getElementById(`step${this.currentStep}`);
        if (newStepElement) {
            newStepElement.style.display = 'block';
            newStepElement.classList.add('fade-in');
        }

        this.updateProgress();
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        const progress = (this.currentStep / 3) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step ${this.currentStep} of 3`;
    }

    completeExercise() {
        if (!this.exerciseComplete) {
            console.log('🎊 Exercise 1 Complete! Well done!');
            console.log('🚀 Ready for Exercise 2? Learn about breakpoints next!');
            
            this.exerciseComplete = true;
            
            // Show success message
            const successBox = document.getElementById('successBox');
            successBox.style.display = 'block';
            successBox.classList.add('fade-in');
            
            // Enable next button
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.style.opacity = '1';
            nextBtn.style.pointerEvents = 'auto';
            nextBtn.classList.add('pulse');
            
            // Update progress to 100%
            const progressFill = document.getElementById('progressFill');
            progressFill.style.width = '100%';
            
            const progressText = document.getElementById('progressText');
            progressText.textContent = 'Exercise Complete! 🎉';
        }
    }

    createExampleData() {
        // Add some dummy data to make the Sources tab more interesting
        window.exampleData = {
            users: [
                { id: 1, name: 'Alice', role: 'developer' },
                { id: 2, name: 'Bob', role: 'designer' },
                { id: 3, name: 'Charlie', role: 'manager' }
            ],
            config: {
                apiUrl: 'https://api.example.com',
                timeout: 5000,
                retries: 3
            }
        };

        // Add a sample function that users can explore
        window.sampleFunction = function(input) {
            const result = input * 2 + 1;
            console.log(`Sample function called with ${input}, result: ${result}`);
            return result;
        };

        // Create some console output for interesting debugging
        console.log('📊 Example data loaded:', window.exampleData);
        console.log('🔧 Sample function available: window.sampleFunction(5)');
    }
}

// Initialize the exercise when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const exercise = new Exercise1Controller();
    
    // Make it globally available for debugging
    window.exercise1 = exercise;
});

// Debug helpers - users can call these in the console to test
window.debugHelpers = {
    checkDevTools: () => {
        console.log('DevTools open:', window.exercise1.devToolsOpen);
        console.log('Current step:', window.exercise1.currentStep);
        console.log('Exercise complete:', window.exercise1.exerciseComplete);
    },
    
    forceNext: () => {
        console.log('🚀 Forcing next step...');
        window.exercise1.moveToStep(window.exercise1.currentStep + 1);
    },
    
    completeExercise: () => {
        console.log('🎯 Completing exercise...');
        window.exercise1.completeExercise();
    }
};
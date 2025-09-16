// Exercise 4: Event Listener Breakpoints
// This script teaches students about event debugging and variable scope

class Exercise4Controller {
    constructor() {
        this.currentStep = 0;
        this.eventBreakpointSet = false;
        this.eventBreakpointHit = false;
        this.clickCount = 0;
        this.resumeCount = 0;
        this.exerciseComplete = false;
        this.clickStartTime = null;
        
        // Variables at different scope levels for demonstration
        this.clickCounter = 0; // Closure scope variable
        
        this.init();
    }

    init() {
        console.log('🚀 Exercise 4: Event Listener Breakpoints');
        console.log('🎯 Set a mouseup event listener breakpoint in the Sources tab');
    
        this.setupInteractiveButton();
        this.startEventDetection();
        
        // Create global scope variables for demonstration
        window.globalClickData = {
            sessions: [],
            totalInteractions: 0
        };
    }

    setupInteractiveButton() {
        const btn = document.getElementById('interactiveBtn');
        if (btn) {
            // Add mousedown to track click duration
            btn.addEventListener('mousedown', (event) => {
                this.clickStartTime = Date.now();
                console.log('🖱️ Mouse down detected at:', this.clickStartTime);
            });

            // The main mouseup handler that students will debug
            btn.addEventListener('mouseup', (event) => {
                // Local scope variables
                const clickEndTime = Date.now();
                const clickDuration = this.clickStartTime ? clickEndTime - this.clickStartTime : 0;
                
                if (clickDuration > 3000) {
                    this.onEventBreakpointHit();
                    this.completeExercise();
                }
            });
        }
    }

    onEventBreakpointHit() {
        if (!this.eventBreakpointHit) {
            console.log('🎯 Event listener breakpoint hit on mouseup!');
            console.log('👀 You successfully set up an event listener breakpoint!');
            console.log('💡 This is useful for debugging user interactions');
            
            this.eventBreakpointHit = true;
            
            // Complete the exercise after a short delay
            setTimeout(() => {
                this.completeExercise();
            }, 2000);
        }
    }

    updateClickDisplay(clickTime, duration) {
        const clickCountElement = document.getElementById('clickCount');
        const lastClickTimeElement = document.getElementById('lastClickTime');
        const clickDurationElement = document.getElementById('clickDuration');
        
        if (clickCountElement) {
            clickCountElement.textContent = this.clickCount;
        }
        
        if (lastClickTimeElement) {
            lastClickTimeElement.textContent = new Date(clickTime).toLocaleTimeString();
        }
        
        if (clickDurationElement) {
            clickDurationElement.textContent = duration ? `${duration}ms` : 'N/A';
        }
    }

    startEventDetection() {
        // Monitor for long gaps that might indicate breakpoint pauses
        let lastActivityTime = Date.now();
        
        setInterval(() => {
            const now = Date.now();
            const timeSinceActivity = now - lastActivityTime;
            
            // If there's been a long pause after a click, assume breakpoint was hit
            if (timeSinceActivity > 5000 && this.clickCount > 0 && !this.eventBreakpointHit) {
                this.onEventBreakpointHit();
            }
            
            lastActivityTime = now;
        }, 1000);
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
        
        const progress = 100; // Single step exercise, always 100% when step 1 is active
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step 1 of 1`;
    }

    completeExercise() {
        if (!this.exerciseComplete) {
            console.log('🎊 Exercise 4 Complete! You mastered event debugging!');
            console.log('🔥 Final challenge: Watch and fix code in real-time!');
            
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
}

// Global variables for scope demonstration
let globalCounter = 0;
const globalConfig = {
    debugMode: true,
    version: '1.0.0'
};

// Function with different scope levels for demonstration
function demonstrateScopeChain() {
    const outerVariable = 'I am in the outer scope';
    let outerCounter = 0;
    
    return function innerFunction(parameter) {
        const localVariable = 'I am local to this function';
        outerCounter++; // Accessing closure variable
        globalCounter++; // Accessing global variable
        
        console.log('Scope demonstration:');
        console.log('- Local:', { parameter, localVariable });
        console.log('- Closure:', { outerVariable, outerCounter });
        console.log('- Global:', { globalCounter, globalConfig });
        
        return {
            local: localVariable,
            closure: outerVariable,
            global: globalConfig.version
        };
    };
}

// Create the demonstration function
window.scopeDemo = demonstrateScopeChain();

// Initialize the exercise when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const exercise = new Exercise4Controller();
    
    // Make it globally available
    window.exercise4 = exercise;
    
    // Auto-advance simulation after delays
    setTimeout(() => {
        if (exercise.currentStep === 1) {
            exercise.eventBreakpointSet = true;
        }
    }, 3000);
});

// Debug helpers for testing
window.debugHelpers4 = {
    status: () => {
        console.log('=== Exercise 4 Status ===');
        console.log('Current step:', window.exercise4.currentStep);
        console.log('Event breakpoint set:', window.exercise4.eventBreakpointSet);
        console.log('Event breakpoint hit:', window.exercise4.eventBreakpointHit);
        console.log('Click count:', window.exercise4.clickCount);
        console.log('Resume count:', window.exercise4.resumeCount);
        console.log('Exercise complete:', window.exercise4.exerciseComplete);
    },
    
    simulateEventBreakpoint: () => {
        console.log('🔧 Simulating event breakpoint hit...');
        window.exercise4.onEventBreakpointHit();
    },
    
    simulateResume: () => {
        console.log('🔧 Simulating resume from breakpoint...');
        window.exercise4.onResumeFromBreakpoint();
    },
    
    triggerClick: () => {
        console.log('🔧 Simulating button click...');
        const btn = document.getElementById('interactiveBtn');
        if (btn) {
            btn.click();
        }
    },
    
    showScopeDemo: () => {
        console.log('🔧 Running scope demonstration...');
        return window.scopeDemo('test parameter');
    },
    
    forceComplete: () => {
        console.log('🔧 Forcing exercise completion...');
        window.exercise4.completeExercise();
    }
};

// Add helpful console messages
console.log('📋 Exercise 4 loaded!');
console.log('🎯 Goal: Set mouseup event listener breakpoint and explore scope');
console.log('🛠️ Use debugHelpers4.status() to check progress');
console.log('💡 Try debugHelpers4.showScopeDemo() to see scope in action!');
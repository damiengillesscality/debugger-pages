
// Global function that students will debug (appears in Sources tab)
async function strangeFunction(whatIsMyAge) {
    const before = Date.now();
    const pauseMe = 1 + whatIsMyAge; // ← STUDENTS: Set breakpoint here!
    const after = Date.now();

    if (after - before > 100) {
        window.exercise.onBreakpointSet();
    }
}

// Exercise 2: Line-of-Code Breakpoints
// This script demonstrates breakpoint usage and call stack inspection

class Exercise2Controller {
    constructor() {
        this.currentStep = 1;
        this.breakpointSet = false;
        this.breakpointHit = false;
        this.resumeCount = 0;
        this.exerciseComplete = false;
        this.timerId = null;
        this.lastBreakpointTime = 0;
        
        // Initialize counter
        window.counterValue = 0;
        
        this.init();
    }

    init() {
        console.log('🚀 Exercise 2: Line-of-Code Breakpoints');
        console.log('📍 Set a breakpoint on line 3 of strangeFunction function');
        
        this.updateProgress();
        this.startCounterLoop();
        
        // Initial display update
        this.updateDisplay();
    }

    startCounterLoop() {
        // Main counter loop that students will debug
        this.timerId = setInterval(async () => {
            await strangeFunction(Math.round(Math.random() * 100)); // Pass a random age to vary the computation time
        }, 1000);
    }

    updateDisplay() {
        const lastUpdateElement = document.getElementById('lastUpdate');
        const statusElement = document.getElementById('status');
        
        if (lastUpdateElement) {
            lastUpdateElement.textContent = new Date().toLocaleTimeString();
        }
        
        if (statusElement) {
            statusElement.textContent = this.breakpointHit ? 'Paused at breakpoint' : 'Running...';
        }
    }

    onBreakpointSet() {
        if (!this.breakpointSet) {
            console.log('✅ Breakpoint detected!');
            console.log('⏰ Wait for the next counter update to hit your breakpoint...');
            
            this.breakpointSet = true;
            this.moveToStep(2);
            this.completeExercise();
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
        
        const progress = (this.currentStep / 4) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step ${this.currentStep} of 4`;
    }

    completeExercise() {
        if (!this.exerciseComplete) {
            console.log('🎊 Exercise 2 Complete! You mastered breakpoints!');
            console.log('🔥 Next: Learn about step controls for precise debugging!');
            
            this.exerciseComplete = true;
            
            // Clear the timer
            if (this.timerId) {
                clearInterval(this.timerId);
            }
            
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
            
            // Final status update
            const statusElement = document.getElementById('status');
            if (statusElement) {
                statusElement.textContent = 'Exercise Complete!';
            }
        }
    }
}

// Initialize the exercise when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.exercise = new Exercise2Controller();
    
    // Make it globally available
    window.exercise2 = exercise;

    setInterval(() => {}, 1); // Keep event loop active reduce chance to pause without line breakpoint at the good place
});

// Debug helpers for testing
window.debugHelpers2 = {
    status: () => {
        console.log('=== Exercise 2 Status ===');
        console.log('Current step:', window.exercise2.currentStep);
        console.log('Breakpoint set:', window.exercise2.breakpointSet);
        console.log('Breakpoint hit:', window.exercise2.breakpointHit);
        console.log('Resume count:', window.exercise2.resumeCount);
        console.log('Counter value:', window.counterValue);
        console.log('Exercise complete:', window.exercise2.exerciseComplete);
    },
    
    simulateBreakpoint: () => {
        console.log('🔧 Simulating breakpoint hit...');
        window.exercise2.onBreakpointHit();
    },
    
    simulateResume: () => {
        console.log('🔧 Simulating resume...');
        window.exercise2.onResume();
    },
    
    forceComplete: () => {
        console.log('🔧 Forcing exercise completion...');
        window.exercise2.completeExercise();
    }
};

// Add some console logs to help students understand execution flow
console.log('📋 Exercise 2 loaded!');
console.log('🎯 Goal: Set a breakpoint on line with "const before = window.counterValue;"');
console.log('🛠️ Use debugHelpers2.status() to check progress');
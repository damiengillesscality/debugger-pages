// Exercise 5: Watch and Fix
// This script demonstrates the classic "5" + "1" bug and teaches watch expressions

class Exercise5Controller {
    constructor() {
        this.currentStep = 1;
        this.bugTriggered = false;
        this.exerciseComplete = false;
        this.bugFixed = false;
        
        // Global variable that students will watch
        window.sum = null;
        
        this.init();
    }

    init() {
        console.log('🚀 Exercise 5: Watch and Fix');
        console.log('🐛 Debug the classic "5" + "1" = "51" problem');
        
        this.updateProgress();
        this.setupTriggerButton();
        this.setupTestButton();
        
        // Create the buggy function that students will fix
        this.setupBuggyFunction();
    }

    setupTriggerButton() {
        const triggerBtn = document.getElementById('triggerBugBtn');
        if (triggerBtn) {
            triggerBtn.addEventListener('click', () => {
                this.triggerBuggyCalculation();
            });
        }
    }

    setupTestButton() {
        const testBtn = document.getElementById('testFixBtn');
        if (testBtn) {
            testBtn.addEventListener('click', () => {
                this.testCalculation();
            });
        }
    }

    setupBuggyFunction() {
        // The buggy function that students need to fix
        window.calculateSum = function(a, b) {
            debugger; // Automatic breakpoint for investigation
            window.sum = a + b; // mmmm... bug?
            console.log(`Calculation: ${a} + ${b} = ${window.sum}`);
            return window.sum;
        };
    }

    triggerBuggyCalculation() {
        console.log('🧮 Triggering buggy calculation...');
        console.log('📍 You should hit the debugger statement now');
        console.log('🔍 Add a watch expression: typeof window.sum');
        
        try {
            const result = window.calculateSum("5", "1");
            this.updateResultDisplay("5", "1", result, false);
            
            if (!this.bugTriggered) {
                this.bugTriggered = true;
                this.moveToStep(2);
            }
        } catch (error) {
            console.error('Error in calculation:', error);
        }
    }

    testCalculation() {
        console.log('🧪 Testing calculation...');
        
        try {
            const result = window.calculateSum("5", "1");
            const isFixed = (result === 6);
            
            this.updateResultDisplay("5", "1", result, isFixed);
            
            if (isFixed && !this.exerciseComplete) {
                this.bugFixed = true;
                setTimeout(() => {
                    this.completeExercise();
                }, 1000);
            }
        } catch (error) {
            console.error('Error in test:', error);
        }
    }

    updateResultDisplay(inputA, inputB, result, isCorrect) {
        const elements = {
            inputA: document.getElementById('inputA'),
            inputB: document.getElementById('inputB'),
            result: document.getElementById('result'),
            status: document.getElementById('status')
        };

        if (elements.inputA) elements.inputA.textContent = `"${inputA}" (string)`;
        if (elements.inputB) elements.inputB.textContent = `"${inputB}" (string)`;
        if (elements.result) elements.result.textContent = result;
        if (elements.status) {
            elements.status.textContent = isCorrect ? '✅ Bug fixed!' : '❌ Bug not fixed';
            elements.status.style.color = isCorrect ? 'green' : 'red';
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
        
        const progress = (this.currentStep / 2) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step ${this.currentStep} of 2`;
    }

    completeExercise() {
        if (!this.exerciseComplete) {
            console.log('🎊 Exercise 5 Complete! You fixed the bug!');
            console.log('🏆 Congratulations on completing all debugging exercises!');
            
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
            progressText.textContent = 'All Exercises Complete! 🎉';
        }
    }
}

// Initialize the exercise when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const exercise = new Exercise5Controller();
    
    // Make it globally available
    window.exercise5 = exercise;
});

// Debug helpers for testing
window.debugHelpers5 = {
    status: () => {
        console.log('=== Exercise 5 Status ===');
        console.log('Current step:', window.exercise5.currentStep);
        console.log('Bug triggered:', window.exercise5.bugTriggered);
        console.log('Bug fixed:', window.exercise5.bugFixed);
        console.log('Exercise complete:', window.exercise5.exerciseComplete);
        console.log('Current sum value:', window.sum);
        console.log('Sum type:', typeof window.sum);
    },
    
    triggerBug: () => {
        console.log('🔧 Triggering bug...');
        window.exercise5.triggerBuggyCalculation();
    },
    
    testFix: () => {
        console.log('🔧 Testing fix...');
        window.exercise5.testCalculation();
    },
    
    showFixHint: () => {
        console.log('💡 Fix hint: Change "a + b" to "Number(a) + Number(b)" in calculateSum function');
    },
    
    forceComplete: () => {
        console.log('🔧 Forcing exercise completion...');
        window.exercise5.completeExercise();
    }
};

// Add helpful console messages
console.log('📋 Exercise 5 loaded!');
console.log('🐛 Goal: Fix the "5" + "1" = "51" bug using watch expressions');
console.log('🛠️ Use debugHelpers5.status() to check progress');
console.log('💡 Try debugHelpers5.showFixHint() for the solution!');
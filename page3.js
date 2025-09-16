function processData(input) {
    debugger; // ← Automatic breakpoint here!
    const result = calculateResult(input);
    return finalizeResult(result);
}

function transformValue(value) {
    const startDate = new Date();
    const result = value * 2;
    const endDate = new Date();
    const duration = endDate - startDate;

    if (duration > 100) {
        document.getElementById('nextBtn').style = '';
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        const progress = 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step 2 of 2`;
    }

    return result;
}

function calculateResult(input) {
    const processed = transformValue(input);
    return processed + 10;
}

function finalizeResult(result) {
    console.log(`Final result: ${result}`);
    return result;
}

setInterval(() => {
    const randomInput = Math.floor(Math.random() * 100);
    window.counterValue = randomInput; // Expose to global for inspection
    processData(randomInput);
}, 100);
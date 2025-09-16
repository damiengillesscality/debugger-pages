# 🐛 Browser Debugger Learning Exercises

An interactive web-based course that teaches browser debugging skills through hands-on exercises.

## 🎯 Course Overview

This course teaches you how to master the browser's debugging tools through 5 progressive exercises:

1. **Inspector Introduction** - Learn to navigate the Sources tab structure
2. **Line Breakpoints** - Master breakpoint setting and call stack inspection  
3. **Step Controls** - Practice Step Over, Step Into, and Step Out
4. **Event Breakpoints** - Debug user interactions and understand variable scope
5. **Watch & Fix** - Use watch expressions to fix the classic "5" + "1" bug

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)
Visit the live course at: `https://[your-username].github.io/debugger-pages`

### Option 2: Local Development
1. Clone this repository
2. Open `index.html` in your browser
3. Open Developer Tools (F12 or Cmd+Opt+I)
4. Navigate to the Sources tab
5. Start with Exercise 1

## 📚 What You'll Learn

- **Sources Tab Navigation**: Understanding file trees, code editor, and debugger panels
- **Breakpoint Mastery**: Line-of-code and event listener breakpoints
- **Step Debugging**: Precise execution control with step over/into/out
- **Scope Understanding**: Local, closure, and global variable scope
- **Watch Expressions**: Monitoring variables and expressions in real-time
- **Live Code Editing**: Fixing bugs directly in the debugger
- **Call Stack Analysis**: Understanding function call hierarchies

## 🛠️ Technical Features

Each exercise includes:
- **Automatic Detection**: Monitors your debugging actions
- **Progressive Guidance**: Step-by-step instructions
- **Interactive Elements**: Real code to debug and fix
- **Visual Feedback**: Progress indicators and success animations
- **Debug Helpers**: Console utilities for testing and validation

## 📱 Browser Compatibility

Works in all modern browsers with Developer Tools:
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## 🎮 Exercise Structure

Each exercise follows this pattern:
1. **Setup**: Explanation of the concept and tools
2. **Practice**: Hands-on debugging with real code
3. **Validation**: Automatic detection of correct actions
4. **Progress**: Move to next exercise or step

## 🔧 Development

### File Structure
```
debugger-pages/
├── index.html          # Course landing page
├── styles.css          # Global styles
├── page1.html/.js      # Exercise 1: Inspector intro
├── page2.html/.js      # Exercise 2: Line breakpoints
├── page3.html/.js      # Exercise 3: Step controls
├── page4.html/.js      # Exercise 4: Event breakpoints
├── page5.html/.js      # Exercise 5: Watch and fix
└── README.md           # This file
```

### Debug Helpers
Each exercise includes debug helpers accessible via console:
```javascript
// Check exercise progress
debugHelpers1.status()
debugHelpers2.status()
// ... etc

// Force completion (for testing)
debugHelpers1.forceComplete()

// Simulate user actions
debugHelpers3.simulateStepOver()
debugHelpers4.triggerClick()
```

## 🎯 Learning Objectives

By completing this course, you will:
- Navigate the browser's Sources tab confidently
- Set and manage breakpoints effectively
- Use step controls for precise debugging
- Understand JavaScript variable scope
- Debug event-driven code
- Use watch expressions for variable monitoring
- Edit and test code fixes in real-time

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional exercises for advanced debugging techniques
- More browser-specific debugging features
- Enhanced visual feedback and animations
- Mobile device debugging exercises

## 📄 License

MIT License - feel free to use for educational purposes.

## 🎉 Acknowledgments

Created to make browser debugging more accessible and interactive for developers at all levels.

---

**Happy Debugging!** 🐛✨
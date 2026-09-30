# 🎓 Learning Management System (LMS) & Assessment Portal

A modern, responsive, and feature-packed **Learning Management System (LMS) and Student Evaluation Portal** crafted with vanilla HTML5, CSS3, and JavaScript. Designed for students, educators, and evaluators to manage assignments, take interactive multi-subject quizzes, curate questions, calculate grades, and record evaluations.

---

## 🎨 Theme & Design Aesthetics

- **Color Palette**: Light pastel aesthetic using soothing **Light Blue** (`#3b82f6`, `#eff6ff`) and **Light Pink / Rose** (`#ec4899`, `#fdf2f8`) gradients with crisp white card surfaces and dark slate typography.
- **Typography**:
  - **Headings**: `Outfit` (clean geometric standard font)
  - **Body Text**: `Plus Jakarta Sans` (highly legible modern standard typography)
  - **Scores / Codes**: `JetBrains Mono`
- **UI Elements**: Sturdy, tactile buttons with bold borders, responsive flex/grid layouts, smooth hover transitions, and mobile-friendly layouts.

---

## 🚀 Key Modules & Features

### 1. 🏠 Home Page (`home.html`)
- **Portal Overview**: Introduction to the platform, purpose, and key learning features.
- **System Statistics Banner**: Real-time snapshot of active assignments, quiz challenges, and integrated modules.
- **Module Showcase**: Deep-dive cards with feature lists and direct navigation links to each sub-portal.

### 2. 📚 Student Assignments (`index.html`)
- **Assignments Roster**: 10 comprehensive web development, JavaScript, Git, and database assignments.
- **Status Filters**: Quickly filter between **All**, **Pending**, and **Submitted** assignments.
- **Submission Workspace**: View rubrics, due dates, maximum marks, detailed instructions, and submit solutions via an answer box with a live character counter.

### 3. ⏱️ Interactive Online Quiz (`quiz.html`)
- **5 Selectable Subjects**:
  1. 📄 **HTML (HyperText Markup Language)**
  2. 🎨 **CSS (Cascading Style Sheets)**
  3. ⚡ **JavaScript (JS)**
  4. 🗄️ **DBMS & SQL**
  5. 🌐 **Full Stack Web Development**
- **Dynamic Subject Switching**: Switch between subjects on the fly to test specific knowledge domains.
- **Instant Tabulation**: Calculates total questions, correct answers, wrong answers, score, and percentage.
- **WhatsApp Sharing**: 1-click button to share quiz results and scores with friends or mentors via WhatsApp.
- **Quiz Retake**: Reset and restart any quiz challenge with a single click.

### 4. 🗂️ Question Bank Generator (`question.html`)
- **CRUD Question Management**: Add, view, edit, and delete questions dynamically.
- **Supports Both Question Formats**:
  - **MCQ**: 4 options (A-D) with correct answer designation.
  - **Descriptive**: Open-ended conceptual and coding questions.
- **Live Filtering**: Filter questions by type (All, MCQ Only, Descriptive Only).
- **Persistence**: Questions are stored in the browser's `localStorage` for continuity across sessions.

### 5. 📊 Result Portal & Analytics (`result.html`)
- **Assessment Weight Calculation**: Real-time calculation across Assignment Marks, Quiz Marks, and Final Assessment scores.
- **Visual Analytics**: Dynamic color-coded progress bar and automatic `PASSED` / `FAILED` status badge.
- **WhatsApp Result Sharing**: Share a formatted, professional report card summary directly on WhatsApp.

### 6. 📝 Faculty Evaluation Dashboard (`evaluation.html`)
- **Submission Queue**: Review student submissions with live statuses.
- **Instructor Review**: Inspect student answer texts side-by-side with maximum mark allowances.
- **Scoring & Feedback**: Assign grades, provide constructive feedback, and persist records in `localStorage`.

---

## 📁 Project Structure

```plaintext
assessment/
├── home.html         # Portal Landing Page & LMS Introduction
├── index.html        # Student Assignments Portal
├── quiz.html         # Interactive Multi-Subject Quiz (HTML, CSS, JS, DBMS, Web Dev)
├── question.html     # Question Bank & Assessment Generator (MCQ / Descriptive)
├── result.html       # Result Portal, Grade Calculator & WhatsApp Share
├── evaluation.html   # Faculty Evaluation & Feedback Dashboard
├── style.css         # Complete Unified Design System (Light Blue/Pink Theme)
├── script.js         # Interactive Logic, LocalStorage, Quizzes, & WhatsApp APIs
└── README.md         # Project Documentation
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible forms, and navigation |
| **CSS3** | Vanilla CSS custom properties (variables), Flexbox, CSS Grid, animations |
| **JavaScript (ES6+)** | Dynamic DOM manipulation, modular architecture, local storage |
| **Google Fonts** | `Outfit`, `Plus Jakarta Sans`, and `JetBrains Mono` |
| **WhatsApp API** | Web intent URL encoding for 1-click instant message sharing |

---

## 💻 How to Run Locally

No build tools, bundlers, or servers required!

1. **Clone or Download** the project repository.
2. Open any `.html` file (e.g. `home.html` or `index.html`) in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
3. Alternatively, launch with **Live Server** in VS Code / Antigravity IDE:
   - Right click on `home.html` and select **Open with Live Server**.

---

## 📱 WhatsApp Sharing Format

### Quiz Result Format:
```text
⚡ *JavaScript (JS) Programming Quiz*
🎯 *Learning Management System (LMS)*
━━━━━━━━━━━━━━━━━━━━
📝 Total Questions: 10
✅ Correct Answers: 9
❌ Wrong Answers: 1
━━━━━━━━━━━━━━━━━━━━
🏆 My Score: 9 / 10
📊 Accuracy Percentage: 90%
━━━━━━━━━━━━━━━━━━━━
Take the challenge yourself on the LMS Portal! 🚀
```

### Result Portal Format:
```text
🎓 *Learning Management System (LMS)*
📋 *Assessment Result Card*
━━━━━━━━━━━━━━━━━━━━
👤 Student: Rishab Sharma
📝 Assignment Marks: 18 / 20
⏱️ Quiz Marks: 9 / 10
🎯 Final Assessment: 42 / 50
━━━━━━━━━━━━━━━━━━━━
🏆 Total Score: 69 / 80
📊 Percentage: 86.25%
🎖️ Result Status: PASSED 🎓
━━━━━━━━━━━━━━━━━━━━
Shared via LMS Student Portal ✨
```

---

## 📄 License & Credits

- **Project**: Learning Management System (LMS)
- **Organization**: SpireX Foundation
- Designed for modern educational evaluation and student engagement.

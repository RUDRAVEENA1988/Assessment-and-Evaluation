const assignments = [
    {
        id: 1,
        title: "HTML Basics",
        subject: "Web Development",
        description:
            "Create a webpage using HTML with headings, paragraphs, lists and links.",
        dueDate: "30 September 2026",
        maxMarks: 20,
        status: "submitted",
        answer: "",
        instructions: [
            "Use proper HTML5 structure.",
            "Add at least two headings.",
            "Add a paragraph and an ordered or unordered list.",
            "Add at least one hyperlink.",
            "Write your HTML code or explanation in the answer box."
        ]
    },

    {
        id: 2,
        title: "CSS Layout Design",
        subject: "Web Development",
        description:
            "Design a responsive webpage using CSS Flexbox or Grid.",
        dueDate: "5 October 2026",
        maxMarks: 25,
        status: "submitted",
        answer: "",
        instructions: [
            "Use an external CSS file.",
            "Use Flexbox or CSS Grid.",
            "Use suitable colors and spacing.",
            "The page should be responsive.",
            "Explain your design in the answer."
        ]
    },

    {
        id: 3,
        title: "JavaScript Fundamentals",
        subject: "JavaScript",
        description:
            "Explain JavaScript variables, data types and functions with examples.",
        dueDate: "10 October 2026",
        maxMarks: 30,
        status: "pending",
        answer:
            "JavaScript provides let, const and var for declaring variables. Functions are reusable blocks of code.",
        instructions: [
            "Explain let, const and var.",
            "Mention common JavaScript data types.",
            "Write one function example.",
            "Keep your answer clear and concise."
        ]
    },

    {
        id: 4,
        title: "Responsive Web Design",
        subject: "Web Design",
        description:
            "Explain responsive web design and the use of media queries.",
        dueDate: "15 October 2026",
        maxMarks: 20,
        status: "pending",
        answer: "",
        instructions: [
            "Define responsive web design.",
            "Explain why responsiveness is important.",
            "Give one CSS media query example.",
            "Explain mobile-first design."
        ]
    },

    {
        id: 5,
        title: "Introduction to React",
        subject: "Frontend Development",
        description:
            "Write a short note about React components, props and state.",
        dueDate: "20 October 2026",
        maxMarks: 25,
        status: "pending",
        answer:
            "React is a JavaScript library used for building component-based user interfaces.",
        instructions: [
            "Explain what React is.",
            "Define a React component.",
            "Explain props.",
            "Explain state.",
            "Give a simple example."
        ]
    },

    {
        id: 6,
        title: "Web Accessibility",
        subject: "Web Development",
        description:
            "Explain the importance of accessibility in modern websites.",
        dueDate: "25 October 2026",
        maxMarks: 15,
        status: "pending",
        answer: "",
        instructions: [
            "Define web accessibility.",
            "Mention the importance of alt text.",
            "Explain semantic HTML.",
            "Give two accessibility best practices."
        ]
    },
    {
        id: 7,
        title: "DOM Manipulation & Events",
        subject: "JavaScript",
        description:
            "Explain how to manipulate HTML DOM elements dynamically using JavaScript event listeners and methods.",
        dueDate: "28 October 2026",
        maxMarks: 25,
        status: "pending",
        answer: "",
        instructions: [
            "Explain getElementById and querySelector.",
            "Demonstrate how to attach addEventListener.",
            "Provide code for creating and appending an element dynamically.",
            "Explain the difference between event bubbling and capturing."
        ]
    },
    {
        id: 8,
        title: "Asynchronous JavaScript & APIs",
        subject: "JavaScript",
        description:
            "Discuss Promises, async/await, and fetching remote data using the Fetch API.",
        dueDate: "2 November 2026",
        maxMarks: 30,
        status: "submitted",
        answer: "Async/await provides syntactic sugar over JavaScript Promises for handling asynchronous HTTP requests cleanly with try/catch error handling.",
        instructions: [
            "Explain what a Promise is and its three states.",
            "Write a snippet using fetch() with async and await.",
            "Explain error handling with try...catch.",
            "Contrast synchronous vs asynchronous execution."
        ]
    },
    {
        id: 9,
        title: "Git & Version Control Workflow",
        subject: "Software Engineering",
        description:
            "Explain standard Git workflows, branch strategies, and resolving merge conflicts.",
        dueDate: "7 November 2026",
        maxMarks: 20,
        status: "pending",
        answer: "",
        instructions: [
            "Explain git init, git add, git commit and git push.",
            "What is feature branching and why is it recommended?",
            "How do you resolve a Git merge conflict?",
            "Explain the difference between git merge and git rebase."
        ]
    },
    {
        id: 10,
        title: "Database Fundamentals & SQL Queries",
        subject: "Database Management",
        description:
            "Explain relational database concepts, primary/foreign keys, and essential SQL queries.",
        dueDate: "12 November 2026",
        maxMarks: 25,
        status: "pending",
        answer: "",
        instructions: [
            "Define primary key and foreign key with real-world examples.",
            "Write standard SELECT, INSERT, UPDATE, and DELETE queries.",
            "Explain INNER JOIN vs LEFT JOIN with a diagram or explanation.",
            "What is database normalization and why is 3NF used?"
        ]
    }
];

// ========================================================
// 1. ASSIGNMENTS MODULE
// ========================================================
const assignmentList = document.getElementById("assignmentList");
const detailsSection = document.getElementById("assignmentDetails");
const pageHeading = document.querySelector(".page-heading");
const filters = document.querySelector(".filters");
const answerBox = document.getElementById("answerBox");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const totalAssignmentsElem = document.getElementById("totalAssignments");
let selectedAssignment = null;

if (totalAssignmentsElem) {
    totalAssignmentsElem.textContent = assignments.length;
}

function displayAssignments(filter = "all") {
    if (!assignmentList) return;
    assignmentList.innerHTML = "";

    const filteredAssignments =
        filter === "all"
            ? assignments
            : assignments.filter(assignment => assignment.status === filter);

    filteredAssignments.forEach(assignment => {
        const card = document.createElement("div");
        card.className = "assignment-card";
        card.innerHTML = `
            <p class="subject">${assignment.subject}</p>
            <h3>${assignment.title}</h3>
            <p class="card-description">${assignment.description}</p>
            <div class="card-info">
                <span>📅 ${assignment.dueDate}</span>
                <span>${assignment.maxMarks} Marks</span>
            </div>
            <span class="status ${assignment.status}">
                ${assignment.status === "submitted" ? "Submitted" : "Pending"}
            </span>
            <br><br>
            <button class="view-btn" onclick="openAssignment(${assignment.id})">
                View Assignment
            </button>
        `;
        assignmentList.appendChild(card);
    });

    if (filteredAssignments.length === 0) {
        assignmentList.innerHTML = "<p>No assignments found.</p>";
    }
}

function openAssignment(id) {
    if (!assignmentList || !detailsSection) return;
    selectedAssignment = assignments.find(assignment => assignment.id === id);

    assignmentList.classList.add("hidden");
    if (pageHeading) pageHeading.classList.add("hidden");
    if (filters) filters.classList.add("hidden");
    detailsSection.classList.remove("hidden");

    document.getElementById("detailSubject").textContent = selectedAssignment.subject;
    document.getElementById("detailTitle").textContent = selectedAssignment.title;
    document.getElementById("detailDueDate").textContent = selectedAssignment.dueDate;
    document.getElementById("detailMarks").textContent = selectedAssignment.maxMarks;
    document.getElementById("detailDescription").textContent = selectedAssignment.description;

    const statusElement = document.getElementById("detailStatus");
    statusElement.textContent = selectedAssignment.status === "submitted" ? "Submitted" : "Pending";
    statusElement.className = `status ${selectedAssignment.status}`;

    const instructionsList = document.getElementById("detailInstructions");
    instructionsList.innerHTML = "";
    selectedAssignment.instructions.forEach(instruction => {
        const li = document.createElement("li");
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    answerBox.value = selectedAssignment.answer;
    message.textContent = "";
    updateCharacterCount();

    if (selectedAssignment.status === "submitted") {
        answerBox.disabled = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "Already Submitted";
    } else {
        answerBox.disabled = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Assignment";
    }
}

const backBtn = document.getElementById("backBtn");
if (backBtn) {
    backBtn.addEventListener("click", function () {
        detailsSection.classList.add("hidden");
        assignmentList.classList.remove("hidden");
        if (pageHeading) pageHeading.classList.remove("hidden");
        if (filters) filters.classList.remove("hidden");
        displayAssignments();
    });
}

if (answerBox) {
    answerBox.addEventListener("input", updateCharacterCount);
}

function updateCharacterCount() {
    const wordCount = document.getElementById("wordCount");
    if (wordCount && answerBox) {
        wordCount.textContent = answerBox.value.length + " characters";
    }
}

if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        const answer = answerBox.value.trim();
        if (answer === "") {
            message.textContent = "Please write your answer before submitting.";
            message.style.color = "#dc2626";
            return;
        }

        selectedAssignment.answer = answer;
        selectedAssignment.status = "submitted";

        message.textContent = "Assignment submitted successfully!";
        message.style.color = "#16a34a";

        const statusElement = document.getElementById("detailStatus");
        statusElement.textContent = "Submitted";
        statusElement.className = "status submitted";

        answerBox.disabled = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "Already Submitted";
    });
}

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        displayAssignments(this.dataset.filter);
    });
});

if (assignmentList) {
    displayAssignments();
}

// ========================================================
// 2. QUESTION BANK MODULE
// ========================================================
let questions = JSON.parse(localStorage.getItem("qb_questions") || "null") || [
    {
        id: 1,
        text: "What is the Virtual DOM in React?",
        type: "MCQ",
        marks: 5,
        subject: "Frontend Development",
        optA: "A lightweight in-memory representation of the real DOM",
        optB: "A browser extension for Chrome",
        optC: "A direct link to SQL databases",
        optD: "A server side rendering tool",
        correct: "A"
    },
    {
        id: 2,
        text: "Explain CSS Flexbox layout and its core alignment properties.",
        type: "Descriptive",
        marks: 10,
        subject: "Web Design",
        optA: "", optB: "", optC: "", optD: "", correct: ""
    },
    {
        id: 3,
        text: "Which keyword declares a block-scoped variable in modern JavaScript?",
        type: "MCQ",
        marks: 5,
        subject: "JavaScript",
        optA: "var",
        optB: "let",
        optC: "def",
        optD: "dim",
        correct: "B"
    }
];

function saveQuestionsToStorage() {
    localStorage.setItem("qb_questions", JSON.stringify(questions));
}

function changeType() {
    const qType = document.getElementById("qType");
    const mcqSection = document.getElementById("mcqSection");
    if (!qType || !mcqSection) return;
    mcqSection.style.display = qType.value === "MCQ" ? "block" : "none";
}

function renderQuestions() {
    const list = document.getElementById("questionList");
    const total = document.getElementById("totalQ");
    const filterSelect = document.getElementById("filterType");
    const filter = filterSelect ? filterSelect.value : "All";
    if (!list) return;

    const filtered = filter === "All" ? questions : questions.filter(q => q.type === filter);
    if (total) total.textContent = filtered.length;

    if (filtered.length === 0) {
        list.innerHTML = `<p style="color:#6b7280; font-size:14px;">No questions found.</p>`;
        return;
    }

    list.innerHTML = filtered.map(q => `
        <div class="q-item">
            <div class="q-item-header">
                <div>
                    <span class="badge ${q.type === 'MCQ' ? 'b-mcq' : 'b-desc'}">${q.type}</span>
                    <span style="font-size:12px; color:#6b7280; margin-left:6px;">${q.subject || 'General'} &bull; ${q.marks} Marks</span>
                </div>
                <div>
                    <button class="btn btn-sm btn-edit" onclick="editQuestion(${q.id})">Edit</button>
                    <button class="btn btn-sm btn-del" onclick="deleteQuestion(${q.id})">Delete</button>
                </div>
            </div>
            <h4>${q.text}</h4>
            ${q.type === 'MCQ' ? `
                <ul class="opt-list">
                    <li><strong>A:</strong> ${q.optA}</li>
                    <li><strong>B:</strong> ${q.optB}</li>
                    <li><strong>C:</strong> ${q.optC}</li>
                    <li><strong>D:</strong> ${q.optD}</li>
                </ul>
                <p class="correct-ans">&#10003; Correct Answer: Option ${q.correct}</p>
            ` : ''}
        </div>
    `).join("");
}

function saveData() {
    const qText = document.getElementById("qText");
    const qType = document.getElementById("qType");
    const qMarks = document.getElementById("qMarks");
    const qSubject = document.getElementById("qSubject");
    const editIdElem = document.getElementById("editId");

    if (!qText || !qType) return;
    const text = qText.value.trim();
    const type = qType.value;
    const marks = parseInt(qMarks ? qMarks.value : 5, 10) || 5;
    const subject = qSubject ? qSubject.value.trim() : "";
    const editId = editIdElem ? editIdElem.value : "";

    if (!text) {
        alert("Please enter question text.");
        return;
    }

    const optA = document.getElementById("optA") ? document.getElementById("optA").value.trim() : "";
    const optB = document.getElementById("optB") ? document.getElementById("optB").value.trim() : "";
    const optC = document.getElementById("optC") ? document.getElementById("optC").value.trim() : "";
    const optD = document.getElementById("optD") ? document.getElementById("optD").value.trim() : "";
    const correct = document.getElementById("qCorrect") ? document.getElementById("qCorrect").value : "";

    if (type === "MCQ" && (!optA || !optB || !correct)) {
        alert("For MCQ, please provide options and select the correct answer.");
        return;
    }

    if (editId) {
        const item = questions.find(q => q.id === parseInt(editId, 10));
        if (item) {
            Object.assign(item, { text, type, marks, subject, optA, optB, optC, optD, correct });
        }
    } else {
        questions.push({
            id: Date.now(),
            text, type, marks, subject, optA, optB, optC, optD, correct
        });
    }

    saveQuestionsToStorage();
    resetForm();
    renderQuestions();
}

function editQuestion(id) {
    const q = questions.find(item => item.id === id);
    if (!q) return;

    document.getElementById("editId").value = q.id;
    document.getElementById("qText").value = q.text;
    document.getElementById("qType").value = q.type;
    document.getElementById("qMarks").value = q.marks;
    document.getElementById("qSubject").value = q.subject || "";
    document.getElementById("formHead").textContent = "Edit Question";

    if (q.type === "MCQ") {
        if (document.getElementById("optA")) document.getElementById("optA").value = q.optA || "";
        if (document.getElementById("optB")) document.getElementById("optB").value = q.optB || "";
        if (document.getElementById("optC")) document.getElementById("optC").value = q.optC || "";
        if (document.getElementById("optD")) document.getElementById("optD").value = q.optD || "";
        if (document.getElementById("qCorrect")) document.getElementById("qCorrect").value = q.correct || "";
    }
    changeType();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteQuestion(id) {
    if (confirm("Are you sure you want to delete this question?")) {
        questions = questions.filter(q => q.id !== id);
        saveQuestionsToStorage();
        renderQuestions();
    }
}

function resetForm() {
    const editId = document.getElementById("editId");
    if (editId) editId.value = "";
    const qText = document.getElementById("qText");
    if (qText) qText.value = "";
    const formHead = document.getElementById("formHead");
    if (formHead) formHead.textContent = "Add New Question";
    changeType();
}

// ========================================================
// 3. STUDENT RESULT & EVALUATION MODULE
// ========================================================
class ResultCalculator {
    constructor() {
        this.inputs = {
            name: document.getElementById('studentName'),
            assignment: document.getElementById('assignment'),
            quiz: document.getElementById('quiz'),
            finalAssessment: document.getElementById('finalAssessment')
        };

        this.displays = {
            name: document.getElementById('displayName'),
            assignment: document.getElementById('displayAssignment'),
            quiz: document.getElementById('displayQuiz'),
            final: document.getElementById('displayFinal'),
            total: document.getElementById('displayTotal'),
            percentage: document.getElementById('displayPercentage'),
            progressBar: document.getElementById('progressBar'),
            statusBadge: document.getElementById('statusBadge')
        };

        this.maxMarks = {
            assignment: 20,
            quiz: 10,
            finalAssessment: 50
        };

        if (this.inputs.name && this.displays.name) {
            this.init();
        }
    }

    init() {
        Object.values(this.inputs).forEach(input => {
            if (input) input.addEventListener('input', () => this.calculateAndRender());
        });
        this.calculateAndRender();
    }

    calculateAndRender() {
        const name = (this.inputs.name && this.inputs.name.value.trim()) || 'Student';
        const assignment = Math.min(Math.max(parseFloat(this.inputs.assignment.value) || 0, 0), this.maxMarks.assignment);
        const quiz = Math.min(Math.max(parseFloat(this.inputs.quiz.value) || 0, 0), this.maxMarks.quiz);
        const finalAssessment = Math.min(Math.max(parseFloat(this.inputs.finalAssessment.value) || 0, 0), this.maxMarks.finalAssessment);

        const totalObtained = assignment + quiz + finalAssessment;
        const totalMaximum = this.maxMarks.assignment + this.maxMarks.quiz + this.maxMarks.finalAssessment;
        const percentage = (totalObtained / totalMaximum) * 100;

        if (this.displays.name) this.displays.name.textContent = name;
        if (this.displays.assignment) this.displays.assignment.textContent = `${assignment} / ${this.maxMarks.assignment}`;
        if (this.displays.quiz) this.displays.quiz.textContent = `${quiz} / ${this.maxMarks.quiz}`;
        if (this.displays.final) this.displays.final.textContent = `${finalAssessment} / ${this.maxMarks.finalAssessment}`;
        if (this.displays.total) this.displays.total.textContent = `${totalObtained} / ${totalMaximum}`;
        if (this.displays.percentage) this.displays.percentage.textContent = `${percentage.toFixed(2)}%`;

        if (this.displays.progressBar) {
            this.displays.progressBar.style.width = `${Math.min(percentage, 100)}%`;
            this.displays.progressBar.style.background = percentage >= 40 ? '#10b981' : '#ef4444';
        }

        if (this.displays.statusBadge) {
            if (percentage >= 40) {
                this.displays.statusBadge.textContent = 'PASSED';
                this.displays.statusBadge.className = 'status-badge badge-pass';
            } else {
                this.displays.statusBadge.textContent = 'FAILED';
                this.displays.statusBadge.className = 'status-badge badge-fail';
            }
        }

        // Cache for WhatsApp share
        window.latestResult = {
            name: name,
            assignment: `${assignment} / ${this.maxMarks.assignment}`,
            quiz: `${quiz} / ${this.maxMarks.quiz}`,
            final: `${finalAssessment} / ${this.maxMarks.finalAssessment}`,
            total: `${totalObtained} / ${totalMaximum}`,
            percentage: `${percentage.toFixed(2)}%`,
            status: percentage >= 40 ? 'PASSED 🎓' : 'NEEDS IMPROVEMENT 📚'
        };
    }
}

// ========================================================
// 4. EVALUATION DASHBOARD MODULE
// ========================================================
let evalSubmissions = JSON.parse(localStorage.getItem("eval_submissions") || "null") || [
    {
        id: 1,
        student: "Rahul Sharma",
        assignment: "HTML Basics",
        answer: "HTML is a markup language used to create the structure of web pages. It uses elements and tags such as headings, paragraphs, images, and links.",
        totalMarks: 20,
        marks: "",
        feedback: "",
        status: "Pending"
    },
    {
        id: 2,
        student: "Priya Singh",
        assignment: "CSS Layout Design",
        answer: "CSS is used to style web pages. It controls colors, fonts, spacing and layout. Flexbox and CSS Grid provide responsive structure.",
        totalMarks: 25,
        marks: "",
        feedback: "",
        status: "Pending"
    },
    {
        id: 3,
        student: "Aman Kumar",
        assignment: "JavaScript Fundamentals",
        answer: "JavaScript is a programming language used to make web pages interactive. It uses variables, functions and events to respond to user actions.",
        totalMarks: 30,
        marks: "",
        feedback: "",
        status: "Pending"
    },
    {
        id: 4,
        student: "Neha Gupta",
        assignment: "Responsive Web Design",
        answer: "Responsive web design allows websites to adjust dynamically according to different screen sizes using CSS media queries.",
        totalMarks: 20,
        marks: "",
        feedback: "",
        status: "Pending"
    }
];

let currentEval = null;

function saveSubmissionsToStorage() {
    localStorage.setItem("eval_submissions", JSON.stringify(evalSubmissions));
}

function showSubmissionsList() {
    const listElem = document.getElementById("list");
    if (!listElem) return;
    listElem.innerHTML = "";

    evalSubmissions.forEach(s => {
        const row = document.createElement("tr");
        const isEval = s.status === "Evaluated";
        row.innerHTML = `
            <td><strong>${s.student}</strong></td>
            <td>${s.assignment}</td>
            <td><span class="badge ${isEval ? 'b-mcq' : 'b-desc'}">${s.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="openSubmission(${s.id})">
                    ${isEval ? 'View Evaluation' : 'Evaluate'}
                </button>
            </td>
        `;
        listElem.appendChild(row);
    });
}

function openSubmission(id) {
    currentEval = evalSubmissions.find(s => s.id === id);
    if (!currentEval) return;

    const evalBox = document.getElementById("evalBox");
    const sName = document.getElementById("sName");
    const aName = document.getElementById("aName");
    const maxMarks = document.getElementById("maxMarks");
    const maxMarks2 = document.getElementById("maxMarks2");
    const status = document.getElementById("status");
    const answer = document.getElementById("answer");
    const marksInput = document.getElementById("marks");
    const feedbackInput = document.getElementById("feedback");
    const errorBox = document.getElementById("error");
    const formPart = document.getElementById("formPart");
    const resultPart = document.getElementById("resultPart");

    if (sName) sName.textContent = currentEval.student;
    if (aName) aName.textContent = currentEval.assignment;
    if (maxMarks) maxMarks.textContent = currentEval.totalMarks;
    if (maxMarks2) maxMarks2.textContent = currentEval.totalMarks;

    if (status) {
        status.textContent = currentEval.status;
        status.className = `badge ${currentEval.status === 'Evaluated' ? 'b-mcq' : 'b-desc'}`;
    }

    if (answer) {
        answer.textContent = currentEval.answer.trim() || "No answer provided by the student.";
    }

    if (marksInput) marksInput.value = currentEval.marks || "";
    if (feedbackInput) feedbackInput.value = currentEval.feedback || "";
    if (errorBox) errorBox.textContent = "";

    if (evalBox) {
        evalBox.style.display = "block";
        evalBox.scrollIntoView({ behavior: "smooth" });
    }

    if (currentEval.status === "Evaluated") {
        if (formPart) formPart.style.display = "none";
        showEvalResult();
    } else {
        if (formPart) formPart.style.display = "block";
        if (resultPart) resultPart.style.display = "none";
    }
}

function submitEvaluation() {
    if (!currentEval) return;

    const marksInput = document.getElementById("marks");
    const feedbackInput = document.getElementById("feedback");
    const errorBox = document.getElementById("error");
    const formPart = document.getElementById("formPart");
    const status = document.getElementById("status");

    const marks = marksInput ? marksInput.value.trim() : "";
    const feedback = feedbackInput ? feedbackInput.value.trim() : "";

    if (marks === "") {
        if (errorBox) errorBox.textContent = "Marks cannot be empty.";
        return;
    }

    const numMarks = Number(marks);
    if (isNaN(numMarks) || numMarks < 0) {
        if (errorBox) errorBox.textContent = "Marks cannot be less than 0.";
        return;
    }

    if (numMarks > currentEval.totalMarks) {
        if (errorBox) errorBox.textContent = `Marks cannot exceed maximum marks (${currentEval.totalMarks}).`;
        return;
    }

    if (feedback === "") {
        if (errorBox) errorBox.textContent = "Feedback is required.";
        return;
    }

    currentEval.marks = numMarks;
    currentEval.feedback = feedback;
    currentEval.status = "Evaluated";

    saveSubmissionsToStorage();

    if (errorBox) errorBox.textContent = "";
    if (status) {
        status.textContent = currentEval.status;
        status.className = "badge b-mcq";
    }

    if (formPart) formPart.style.display = "none";
    showEvalResult();
    showSubmissionsList();
}

function showEvalResult() {
    if (!currentEval) return;
    const rName = document.getElementById("rName");
    const rAssign = document.getElementById("rAssign");
    const rMarks = document.getElementById("rMarks");
    const rFeedback = document.getElementById("rFeedback");
    const rStatus = document.getElementById("rStatus");
    const resultPart = document.getElementById("resultPart");

    if (rName) rName.textContent = currentEval.student;
    if (rAssign) rAssign.textContent = currentEval.assignment;
    if (rMarks) rMarks.textContent = `${currentEval.marks} / ${currentEval.totalMarks}`;
    if (rFeedback) rFeedback.textContent = currentEval.feedback;
    if (rStatus) rStatus.textContent = currentEval.status;

    if (resultPart) resultPart.style.display = "block";
}

// ========================================================
// 5. MULTI-SUBJECT QUIZ MODULE (HTML, CSS, JS, DBMS, WEB DEV)
// ========================================================
const quizSubjects = {
    html: {
        title: "HTML (HyperText Markup Language) Quiz",
        badge: "HTML",
        questions: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyper Tool Markup Language",
                    "Home Tool Markup Language"
                ],
                answer: 0
            },
            {
                question: "Which HTML tag is used to create the largest heading?",
                options: ["<h6>", "<head>", "<h1>", "<header>"],
                answer: 2
            },
            {
                question: "Which tag is used to insert an image in HTML?",
                options: ["<image>", "<img>", "<pic>", "<src>"],
                answer: 1
            },
            {
                question: "Which attribute specifies the destination URL of a hyperlink in an <a> tag?",
                options: ["src", "link", "href", "target"],
                answer: 2
            },
            {
                question: "Which HTML element represents an unordered bulleted list?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                answer: 1
            },
            {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["<break>", "<lb>", "<br>", "<hr>"],
                answer: 2
            },
            {
                question: "Which HTML5 element is used to specify a footer for a document or section?",
                options: ["<bottom>", "<footer>", "<section-end>", "<foot>"],
                answer: 1
            },
            {
                question: "Which HTML tag is used to define an internal stylesheet?",
                options: ["<script>", "<css>", "<style>", "<link>"],
                answer: 2
            },
            {
                question: "Which attribute is used to provide an alternative text for an image if it cannot be displayed?",
                options: ["title", "description", "alt", "caption"],
                answer: 2
            },
            {
                question: "Which doctype declaration is correct for modern HTML5 documents?",
                options: [
                    "<!DOCTYPE html>",
                    "<!DOCTYPE HTML5>",
                    "<!DOCTYPE html PUBLIC>",
                    "<html version='5'>"
                ],
                answer: 0
            }
        ]
    },
    css: {
        title: "CSS (Cascading Style Sheets) Quiz",
        badge: "CSS",
        questions: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Cascading Style Sheets",
                    "Colorful Style Sheets",
                    "Computer Style Syntax",
                    "Creative Styling System"
                ],
                answer: 0
            },
            {
                question: "Which CSS property is used to change the background color of an element?",
                options: ["color", "bgcolor", "background-color", "surface-color"],
                answer: 2
            },
            {
                question: "Which symbol is used to select elements with a specific class in CSS?",
                options: [". (dot)", "# (hash)", "* (asterisk)", "@ (at)"],
                answer: 0
            },
            {
                question: "Which symbol is used to select elements with a specific ID in CSS?",
                options: [". (dot)", "# (hash)", "& (ampersand)", "$ (dollar)"],
                answer: 1
            },
            {
                question: "Which CSS property controls the text size of an element?",
                options: ["font-size", "text-size", "font-style", "text-scale"],
                answer: 0
            },
            {
                question: "What is the default value of the 'position' property in CSS?",
                options: ["relative", "absolute", "static", "fixed"],
                answer: 2
            },
            {
                question: "Which CSS display property turns a container into a flexible one-dimensional layout?",
                options: ["display: flex", "display: grid", "display: block", "display: inline-block"],
                answer: 0
            },
            {
                question: "In the CSS Box Model, which layer surrounds the padding and content?",
                options: ["Margin", "Border", "Outline", "Box-shadow"],
                answer: 1
            },
            {
                question: "Which property is used to add space outside of an element's border?",
                options: ["padding", "margin", "spacing", "gap"],
                answer: 1
            },
            {
                question: "Which CSS at-rule is used to apply different styles for different media types or screen sizes?",
                options: ["@media", "@screen", "@responsive", "@viewport"],
                answer: 0
            }
        ]
    },
    js: {
        title: "JavaScript (JS) Programming Quiz",
        badge: "JavaScript",
        questions: [
            {
                question: "Which keyword is used to declare a block-scoped variable that can be reassigned?",
                options: ["var", "let", "const", "def"],
                answer: 1
            },
            {
                question: "Which method is used to output diagnostic information to the browser web console?",
                options: ["console.log()", "print()", "document.write()", "alert()"],
                answer: 0
            },
            {
                question: "What is the return type of typeof null in JavaScript?",
                options: ["'null'", "'undefined'", "'object'", "'boolean'"],
                answer: 2
            },
            {
                question: "Which operator checks for both value and type equality in JavaScript?",
                options: ["==", "===", "=", "!="],
                answer: 1
            },
            {
                question: "Which built-in method converts a JavaScript object into a JSON string?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.toText()", "JSON.encode()"],
                answer: 1
            },
            {
                question: "How do you select an HTML element by its ID using JavaScript?",
                options: [
                    "document.getElementById()",
                    "document.queryId()",
                    "document.selectId()",
                    "window.findId()"
                ],
                answer: 0
            },
            {
                question: "Which array method creates a new array with all elements that pass a test function?",
                options: ["map()", "filter()", "forEach()", "reduce()"],
                answer: 1
            },
            {
                question: "Which keyword is used to handle exceptions in JavaScript alongside try?",
                options: ["catch", "except", "error", "rescue"],
                answer: 0
            },
            {
                question: "What is a Promise in JavaScript?",
                options: [
                    "An object representing the eventual completion or failure of an asynchronous operation",
                    "A variable that cannot be changed",
                    "A function that executes continuously in an infinite loop",
                    "A CSS animation handler"
                ],
                answer: 0
            },
            {
                question: "Which method is used to attach an event handler to a DOM element without overwriting existing handlers?",
                options: ["addEventListener()", "attachEvent()", "on()", "bindEvent()"],
                answer: 0
            }
        ]
    },
    dbms: {
        title: "Database Management (DBMS & SQL) Quiz",
        badge: "DBMS & SQL",
        questions: [
            {
                question: "What does SQL stand for?",
                options: [
                    "Structured Question Language",
                    "Structured Query Language",
                    "Simple Query Logic",
                    "Sequential Query Language"
                ],
                answer: 1
            },
            {
                question: "Which SQL clause is used to filter records from a table?",
                options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
                answer: 2
            },
            {
                question: "Which key uniquely identifies each record in a database table?",
                options: ["Foreign Key", "Primary Key", "Secondary Key", "Composite Key"],
                answer: 1
            },
            {
                question: "Which SQL statement is used to insert new records into a table?",
                options: ["ADD RECORD", "INSERT INTO", "UPDATE", "PUT INTO"],
                answer: 1
            },
            {
                question: "What does ACID stand for in DBMS transactions?",
                options: [
                    "Atomicity, Consistency, Isolation, Durability",
                    "Access, Control, Integrity, Data",
                    "Automatic, Compact, Indexed, Distributed",
                    "Action, Commit, Inspect, Done"
                ],
                answer: 0
            },
            {
                question: "Which command is used to permanently remove a table and its structure from a database?",
                options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
                answer: 2
            },
            {
                question: "Which SQL function is used to find the total count of rows?",
                options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
                answer: 2
            },
            {
                question: "What type of join returns all matching records from both tables?",
                options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
                answer: 2
            },
            {
                question: "What is the process of organizing database fields and tables to reduce redundancy called?",
                options: ["Indexing", "Normalization", "Denormalization", "Sharding"],
                answer: 1
            },
            {
                question: "Which SQL constraint ensures that a column cannot contain NULL values?",
                options: ["UNIQUE", "NOT NULL", "CHECK", "DEFAULT"],
                answer: 1
            }
        ]
    },
    webdev: {
        title: "Full Stack Web Development Quiz",
        badge: "Web Dev",
        questions: [
            {
                question: "Which protocol is the foundation of data communication for the World Wide Web?",
                options: ["HTTP", "FTP", "SMTP", "SSH"],
                answer: 0
            },
            {
                question: "Which HTTP status code indicates that a requested resource was successfully found and returned?",
                options: ["200 OK", "404 Not Found", "500 Internal Error", "301 Moved"],
                answer: 0
            },
            {
                question: "What does API stand for in software and web development?",
                options: [
                    "Application Programming Interface",
                    "Automated Protocol Interaction",
                    "Applied Process Integration",
                    "App Page Index"
                ],
                answer: 0
            },
            {
                question: "Which web architecture style uses standard HTTP methods like GET, POST, PUT, and DELETE?",
                options: ["REST", "SOAP", "RPC", "CORBA"],
                answer: 0
            },
            {
                question: "What is the role of client-side JavaScript in web architecture?",
                options: [
                    "Directly hosting database engines",
                    "Enhancing browser interactivity and dynamic DOM updates",
                    "Managing operating system memory kernels",
                    "Routing network cables"
                ],
                answer: 1
            },
            {
                question: "What is CORS in web applications?",
                options: [
                    "Cross-Origin Resource Sharing",
                    "Central Operating Routing System",
                    "Client Offline Request Service",
                    "Cascading Online Rendering Sheets"
                ],
                answer: 0
            },
            {
                question: "Which format is most commonly used for transmitting structured data between client and server?",
                options: ["JSON", "YAML", "CSV", "Binary Blob"],
                answer: 0
            },
            {
                question: "What is the purpose of LocalStorage in web browsers?",
                options: [
                    "Storing key-value data persistently in the client's browser with no expiration date",
                    "Running backend server scripts",
                    "Compressing video files",
                    "Encrypting local hardware"
                ],
                answer: 0
            },
            {
                question: "Which CSS property is used to create multi-column grid layouts with rows and tracks?",
                options: ["display: grid", "display: inline", "display: table-cell", "display: float"],
                answer: 0
            },
            {
                question: "What is responsive web design?",
                options: [
                    "Making web pages render well on a variety of devices, window and screen sizes",
                    "Building websites that respond to voice only",
                    "A site that only works on desktop PCs",
                    "Writing code without styles"
                ],
                answer: 0
            }
        ]
    }
};

function initQuizModule() {
    const questionElement = document.getElementById("question");
    if (!questionElement) return;

    const quizTitle = document.getElementById("quiz-title");
    const subjectSelect = document.getElementById("quizSubjectSelect");
    const questionNumber = document.getElementById("question-number");
    const optionsContainer = document.getElementById("options");
    const previousButton = document.getElementById("previous-btn");
    const nextButton = document.getElementById("next-btn");
    const submitButton = document.getElementById("submit-btn");
    const resultContainer = document.getElementById("result-container");
    const totalQuestionsElement = document.getElementById("total-questions");
    const correctAnswersElement = document.getElementById("correct-answers");
    const wrongAnswersElement = document.getElementById("wrong-answers");
    const scoreElement = document.getElementById("score");
    const percentageElement = document.getElementById("percentage");
    const restartButton = document.getElementById("restart-btn");
    const quizCard = document.querySelector(".quiz-card");

    let currentSubjectKey = (subjectSelect && subjectSelect.value) || "webdev";
    let activeSubject = quizSubjects[currentSubjectKey] || quizSubjects.webdev;
    let quizQuestions = activeSubject.questions;
    let currentQuestion = 0;
    let selectedAnswers = new Array(quizQuestions.length).fill(null);

    function setSubject(subjectKey) {
        if (!quizSubjects[subjectKey]) return;
        currentSubjectKey = subjectKey;
        activeSubject = quizSubjects[subjectKey];
        quizQuestions = activeSubject.questions;
        currentQuestion = 0;
        selectedAnswers = new Array(quizQuestions.length).fill(null);

        if (quizTitle) {
            quizTitle.textContent = activeSubject.title;
        }
        if (resultContainer) resultContainer.style.display = "none";
        if (quizCard) quizCard.style.display = "block";

        displayQuestion();
    }

    if (subjectSelect) {
        subjectSelect.addEventListener("change", (e) => {
            setSubject(e.target.value);
        });
    }

    function displayQuestion() {
        const current = quizQuestions[currentQuestion];
        if (questionNumber) {
            questionNumber.textContent = `${activeSubject.badge} • Question ${currentQuestion + 1} of ${quizQuestions.length}`;
        }
        if (questionElement) {
            questionElement.textContent = current.question;
        }

        if (optionsContainer) {
            optionsContainer.innerHTML = "";
            current.options.forEach((option, index) => {
                const button = document.createElement("button");
                button.classList.add("quiz-option");
                button.textContent = option;

                if (selectedAnswers[currentQuestion] === index) {
                    button.classList.add("selected");
                }

                button.addEventListener("click", () => {
                    selectedAnswers[currentQuestion] = index;
                    displayQuestion();
                });

                optionsContainer.appendChild(button);
            });
        }

        if (previousButton) {
            previousButton.disabled = currentQuestion === 0;
        }

        if (nextButton) {
            if (currentQuestion === quizQuestions.length - 1) {
                nextButton.style.display = "none";
            } else {
                nextButton.style.display = "inline-block";
            }
        }
    }

    function calculateResult() {
        let correctAnswers = 0;
        quizQuestions.forEach((q, index) => {
            if (selectedAnswers[index] === q.answer) {
                correctAnswers++;
            }
        });

        const totalQuestions = quizQuestions.length;
        const wrongAnswers = totalQuestions - correctAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);

        if (totalQuestionsElement) totalQuestionsElement.textContent = totalQuestions;
        if (correctAnswersElement) correctAnswersElement.textContent = correctAnswers;
        if (wrongAnswersElement) wrongAnswersElement.textContent = wrongAnswers;
        if (scoreElement) scoreElement.textContent = `${correctAnswers} / ${totalQuestions}`;
        if (percentageElement) percentageElement.textContent = `${percentage}%`;

        if (resultContainer) resultContainer.style.display = "block";
        if (quizCard) quizCard.style.display = "none";

        // Cache for WhatsApp share
        window.latestQuizResult = {
            subject: activeSubject.title,
            total: totalQuestions,
            correct: correctAnswers,
            wrong: wrongAnswers,
            score: `${correctAnswers} / ${totalQuestions}`,
            percentage: `${percentage}%`
        };
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (currentQuestion < quizQuestions.length - 1) {
                currentQuestion++;
                displayQuestion();
            }
        });
    }

    if (previousButton) {
        previousButton.addEventListener("click", () => {
            if (currentQuestion > 0) {
                currentQuestion--;
                displayQuestion();
            }
        });
    }

    if (submitButton) {
        submitButton.addEventListener("click", calculateResult);
    }

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            currentQuestion = 0;
            selectedAnswers = new Array(quizQuestions.length).fill(null);
            if (resultContainer) resultContainer.style.display = "none";
            if (quizCard) quizCard.style.display = "block";
            displayQuestion();
        });
    }

    // Initialize first display
    displayQuestion();
}

// Auto-initialize modules on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("questionList")) {
        changeType();
        renderQuestions();
    }
    if (document.getElementById("list")) {
        showSubmissionsList();
        const evalSubmitBtn = document.getElementById("submitBtn");
        if (evalSubmitBtn) {
            evalSubmitBtn.addEventListener("click", submitEvaluation);
        }
    }
    if (document.getElementById("assignment") || document.getElementById("studentName")) {
        new ResultCalculator();
    }
    initQuizModule();
});

// ========================================================
// 6. WHATSAPP RESULT SHARING HANDLERS
// ========================================================
function shareResultOnWhatsApp() {
    const res = window.latestResult || {
        name: document.getElementById('displayName')?.textContent || 'Student',
        assignment: document.getElementById('displayAssignment')?.textContent || 'N/A',
        quiz: document.getElementById('displayQuiz')?.textContent || 'N/A',
        final: document.getElementById('displayFinal')?.textContent || 'N/A',
        total: document.getElementById('displayTotal')?.textContent || 'N/A',
        percentage: document.getElementById('displayPercentage')?.textContent || 'N/A',
        status: document.getElementById('statusBadge')?.textContent || 'PASSED'
    };

    const text = 
`🎓 *Learning Management System (LMS)*
📋 *Assessment Result Card*
━━━━━━━━━━━━━━━━━━━━
👤 *Student:* ${res.name}
📝 *Assignment Marks:* ${res.assignment}
⏱️ *Quiz Marks:* ${res.quiz}
🎯 *Final Assessment:* ${res.final}
━━━━━━━━━━━━━━━━━━━━
🏆 *Total Score:* ${res.total}
📊 *Percentage:* ${res.percentage}
🎖️ *Result Status:* ${res.status}
━━━━━━━━━━━━━━━━━━━━
_Shared via LMS Student Portal_ ✨`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
}

function shareQuizOnWhatsApp() {
    const q = window.latestQuizResult || {
        subject: document.getElementById('quiz-title')?.textContent || 'Online Quiz',
        total: document.getElementById('total-questions')?.textContent || '10',
        correct: document.getElementById('correct-answers')?.textContent || '0',
        wrong: document.getElementById('wrong-answers')?.textContent || '0',
        score: document.getElementById('score')?.textContent || '0/10',
        percentage: document.getElementById('percentage')?.textContent || '0%'
    };

    const text = 
`⚡ *${q.subject || 'Online Assessment Quiz'}*
🎯 *Learning Management System (LMS)*
━━━━━━━━━━━━━━━━━━━━
📝 *Total Questions:* ${q.total}
✅ *Correct Answers:* ${q.correct}
❌ *Wrong Answers:* ${q.wrong}
━━━━━━━━━━━━━━━━━━━━
🏆 *My Score:* ${q.score}
📊 *Accuracy Percentage:* ${q.percentage}
━━━━━━━━━━━━━━━━━━━━
Take the challenge yourself on the LMS Portal! 🚀`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
}
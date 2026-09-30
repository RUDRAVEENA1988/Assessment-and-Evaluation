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
    }
}

// Auto-initialize modules on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("questionList")) {
        changeType();
        renderQuestions();
    }
    new ResultCalculator();
});
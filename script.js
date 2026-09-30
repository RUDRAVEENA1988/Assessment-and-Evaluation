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


const assignmentList =
    document.getElementById("assignmentList");

const detailsSection =
    document.getElementById("assignmentDetails");

const pageHeading =
    document.querySelector(".page-heading");

const filters =
    document.querySelector(".filters");

const answerBox =
    document.getElementById("answerBox");

const submitBtn =
    document.getElementById("submitBtn");

const message =
    document.getElementById("message");

let selectedAssignment = null;


document.getElementById("totalAssignments").textContent =
    assignments.length;


function displayAssignments(filter = "all") {

    assignmentList.innerHTML = "";

    const filteredAssignments =
        filter === "all"
            ? assignments
            : assignments.filter(
                assignment => assignment.status === filter
            );


    filteredAssignments.forEach(assignment => {

        const card = document.createElement("div");

        card.className = "assignment-card";


        card.innerHTML = `
            <p class="subject">
                ${assignment.subject}
            </p>

            <h3>
                ${assignment.title}
            </h3>

            <p class="card-description">
                ${assignment.description}
            </p>

            <div class="card-info">
                <span>
                    📅 ${assignment.dueDate}
                </span>

                <span>
                    ${assignment.maxMarks} Marks
                </span>
            </div>

            <span class="status ${assignment.status}">
                ${
                    assignment.status === "submitted"
                    ? "Submitted"
                    : "Pending"
                }
            </span>

            <br><br>

            <button
                class="view-btn"
                onclick="openAssignment(${assignment.id})">
                View Assignment
            </button>
        `;

        assignmentList.appendChild(card);
    });


    if (filteredAssignments.length === 0) {

        assignmentList.innerHTML =
            "<p>No assignments found.</p>";
    }
}


function openAssignment(id) {

    selectedAssignment =
        assignments.find(
            assignment => assignment.id === id
        );


    assignmentList.classList.add("hidden");

    pageHeading.classList.add("hidden");

    filters.classList.add("hidden");

    detailsSection.classList.remove("hidden");


    document.getElementById("detailSubject").textContent =
        selectedAssignment.subject;

    document.getElementById("detailTitle").textContent =
        selectedAssignment.title;

    document.getElementById("detailDueDate").textContent =
        selectedAssignment.dueDate;

    document.getElementById("detailMarks").textContent =
        selectedAssignment.maxMarks;

    document.getElementById("detailDescription").textContent =
        selectedAssignment.description;


    const statusElement =
        document.getElementById("detailStatus");

    statusElement.textContent =
        selectedAssignment.status === "submitted"
            ? "Submitted"
            : "Pending";

    statusElement.className =
        `status ${selectedAssignment.status}`;


    const instructionsList =
        document.getElementById("detailInstructions");

    instructionsList.innerHTML = "";

    selectedAssignment.instructions.forEach(
        instruction => {

            const li =
                document.createElement("li");

            li.textContent = instruction;

            instructionsList.appendChild(li);
        }
    );


    answerBox.value =
        selectedAssignment.answer;


    message.textContent = "";

    updateCharacterCount();


    if (selectedAssignment.status === "submitted") {

        answerBox.disabled = true;

        submitBtn.disabled = true;

        submitBtn.textContent =
            "Already Submitted";

    } else {

        answerBox.disabled = false;

        submitBtn.disabled = false;

        submitBtn.textContent =
            "Submit Assignment";
    }
}


document.getElementById("backBtn")
    .addEventListener("click", function () {

        detailsSection.classList.add("hidden");

        assignmentList.classList.remove("hidden");

        pageHeading.classList.remove("hidden");

        filters.classList.remove("hidden");

        displayAssignments();
    });


answerBox.addEventListener(
    "input",
    updateCharacterCount
);

function updateCharacterCount() {

    document.getElementById("wordCount").textContent =
        answerBox.value.length +
        " characters";
}


submitBtn.addEventListener(
    "click",
    function () {

        const answer =
            answerBox.value.trim();


        if (answer === "") {

            message.textContent =
                "Please write your answer before submitting.";

            message.style.color =
                "#dc2626";

            return;
        }


        selectedAssignment.answer =
            answer;

        selectedAssignment.status =
            "submitted";


        message.textContent =
            "Assignment submitted successfully!";

        message.style.color =
            "#16a34a";


        const statusElement =
            document.getElementById("detailStatus");

        statusElement.textContent =
            "Submitted";

        statusElement.className =
            "status submitted";


        answerBox.disabled =
            true;

        submitBtn.disabled =
            true;

        submitBtn.textContent =
            "Already Submitted";
    }
);


document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                this.classList.add("active");

                displayAssignments(
                    this.dataset.filter
                );
            }
        );
    });


// First load

displayAssignments();
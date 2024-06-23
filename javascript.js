document.addEventListener('DOMContentLoaded', () => {
    const addStudentForm = document.getElementById('addStudentForm');
    const studentContainer = document.getElementById('student-container');

    addStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = addStudentForm.name.value.trim();
        const age = addStudentForm.age.value;
        const grade = addStudentForm.grade.value.trim();

        if (name && age && grade) {
            addStudent(name, age, grade);
            addStudentForm.reset();
            closeForm();
        }
    });

    function addStudent(name, age, grade) {
        const studentEntry = document.createElement('div');
        studentEntry.classList.add('student-entry');

        studentEntry.innerHTML = `
            <span>Name: ${name}</span>
            <span>Age: ${age}</span>
            <span>Grade: ${grade}</span>
            <button class="delete-btn">Delete</button>
        `;

        studentEntry.querySelector('.delete-btn').addEventListener('click', () => {
            studentEntry.remove();
        });

        studentContainer.appendChild(studentEntry);
    }
});

function openForm() {
    document.getElementById("studentForm").style.display = "block";
}

function closeForm() {
    document.getElementById("studentForm").style.display = "none";
}

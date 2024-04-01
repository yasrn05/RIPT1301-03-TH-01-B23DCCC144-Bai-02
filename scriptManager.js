let students = [
    { STT: 1, Tên: "Nguyễn", Tuổi: 18, 'Địa chỉ': "Hà Nội", SDT: "0123456789", Email: "nguyen@gmail.com", 'Lớp học': "04" },
    { STT: 2, Tên: "Trần", Tuổi: 18, 'Địa chỉ': "Hà Nội", SDT: "0987654321", Email: "tran@gmail.com", 'Lớp học': "03" }
];

function renderStudents() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        Object.values(student).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        const editButton = document.createElement("button");
        editButton.textContent = "Sửa";
        editButton.addEventListener("click", () => editStudent(student.STT));
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", () => deleteStudent(student.STT));
        const actionCell = document.createElement("td");
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });
}

function editStudent(studentIndex) {
    const student = students.find(student => student.STT === studentIndex);
    document.getElementById("name").value = student['Tên'];
    document.getElementById("age").value = student['Tuổi'];
    document.getElementById("address").value = student['Địa chỉ'];
    document.getElementById("phone").value = student['SDT'];
    document.getElementById("email").value = student['Email'];
    document.getElementById("class").value = student['Lớp học'];
    document.getElementById("studentIndex").value = studentIndex;
    document.getElementById("updateButton").style.display = "inline";
    document.querySelector("button[type='submit']").style.display = "none";
}

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const studentIndex = form.querySelector("#studentIndex").value;
    if (studentIndex) {
        updateStudent(studentIndex);
    } else {
        addStudent();
    }
    form.reset();
});

function addStudent() {
    const newStudent = {
        STT: students.length + 1,
        Tên: document.getElementById("name").value,
        Tuổi: document.getElementById("age").value,
        'Địa chỉ': document.getElementById("address").value,
        SDT: document.getElementById("phone").value,
        Email: document.getElementById("email").value,
        'Lớp học': document.getElementById("class").value
    };
    students.push(newStudent);
    renderStudents();
}

function updateStudent(studentIndex) {
    const student = students.find(student => student.STT === parseInt(studentIndex));
    student['Tên'] = document.getElementById("name").value;
    student['Tuổi'] = document.getElementById("age").value;
    student['Địa chỉ'] = document.getElementById("address").value;
    student['SDT'] = document.getElementById("phone").value;
    student['Email'] = document.getElementById("email").value;
    student['Lớp học'] = document.getElementById("class").value;
    renderStudents();
    document.getElementById("updateButton").style.display = "none";
    document.querySelector("button[type='submit']").style.display = "inline";
}

function deleteStudent(studentIndex) {
    students = students.filter(student => student.STT !== studentIndex);
    renderStudents();
}

renderStudents();
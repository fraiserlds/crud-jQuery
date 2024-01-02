if (localStorage.getItem('students') != undefined && localStorage.getItem('students') != null) {
    var students = JSON.parse(localStorage.getItem('students'));
} else {
    var students = [];
}
if (students.length > 0) {
    var html = '';
    for (var student of students) {
        if (student.gender == "female") {
            var gender = "Female";
        } else if (student.gender == "male") {
            var gender = "Male";
        } else {
            var gender = "Other"
        }

        html += `
        <tr>
            <td>${student.name}</td>
            <td>${gender}</td>
            <td>${student.email}</td>
            <td>${student.dob}</td>
            <td>${student.className}</td>
            <td align="center">
                <i class="fa-solid fa-pen-to-square text-primary mr-2" onclick="editStudent('${student.email}')" style="cursor: pointer;"></i>
                <i class="fa-solid fa-trash-can text-danger" onclick="deleteStudent('${student.email}')" style="cursor: pointer;"></i>
            </td>
        </tr>
    `;
    }
} else {
    var html = `
    <tr align="center">
        <td colspan="6">There's no one yet</td>
    </tr>`;
}

$('#students').html(html);

function deleteStudent(email) {
    var isConfirm = confirm("Are you sure you want to delete this student ?");
    if (isConfirm) {
        var newStudents = students.filter(function (obj) {
            return obj.email != email
        });
        localStorage.setItem('students', JSON.stringify(newStudents));
        alert('Deleted Successfully !');
        window.location.href = 'index.html';
    }
}

function editStudent(email) {
    var student = students.filter(function (obj) {
        return obj.email == email
    });
    localStorage.setItem('student', JSON.stringify(student));
    window.location.href = 'update.html';
}

$('#searchBtn').click(function () {
    var key = $('#searchInput').val();
    var studentsSearchResult = students.filter(function (obj) {
        if (obj.gender == 'male') {
            obj.formatGender = "Male";
        } else if (obj.gender == 'female') {
            obj.formatGender = "Female";
        } else {
            obj.formatGender = "Other";
        }

        return obj.dob.indexOf(key) != -1
            || obj.className.indexOf(key) != -1
            || obj.email.indexOf(key) != -1
            || obj.formatGender.indexOf(key) != -1
            || obj.name.indexOf(key) != -1; // tìm ra được dữ liệu chứa từ khóa đó
    });

    if (studentsSearchResult.length > 0) {
        var html = '';
        for (var student of studentsSearchResult) {
            if (student.gender == "male") {
                var gender = "Male";
            } else if (student.gender == "female") {
                var gender = "Female";
            } else {
                var gender = "Other";
            }

            html += `
        <tr>
            <td>${student.name}</td>
            <td>${gender}</td>
            <td>${student.email}</td>
            <td>${student.dob}</td>
            <td>${student.className}</td>
            <td align="center">
                <i class="fa-solid fa-pen-to-square text-primary mr-2" onclick="editStudent('${student.email}')" style="cursor: pointer;"></i>
                <i class="fa-solid fa-trash-can text-danger" onclick="deleteStudent('${student.email}')" style="cursor: pointer;"></i>
            </td>
        </tr>
    `;
        }
    } else {
        var html = `
    <tr align="center">
        <td colspan="6">There's no one yet</td>
    </tr>`;
    }

    $('#students').html(html);
});
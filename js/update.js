var student = JSON.parse(localStorage.getItem('student')) [0];
$('#name').val(student.name);
$('#gender').val(student.gender);
$('#email').val(student.email);
$('#dob').val(student.dob);
$('#className').val(student.className);

$('#updateStudent').click(function() {
    var name = $('#name').val();
    var gender = $('#gender').val();
    var email = $('#email').val();
    var dob = $('#dob').val();
    var className = $('#className').val();

    if (!name) {
        alert('Please enter your name !');
        return;
    }

    if (!gender) {
        alert('Please select your gender !');
        return;
    }

    if (!email) {
        alert('Please enter your email !');
        return;
    }

    if (!dob) {
        alert('Please enter your date of birth !');
        return;
    }

    if (!className) {
        alert('Please enter your class !');
        return;
    }

    if (localStorage.getItem('students') != undefined && localStorage.getItem('students') != null) {
        var students = JSON.parse(localStorage.getItem('students'));
        for (var x in students) {
            if (students[x].email == student.email) {
                students[x].name = name;
                students[x].gender = gender;
                students[x].email = email;
                students[x].dob = dob;
                students[x].className = className;
            }
        }
    }

    localStorage.setItem('students', JSON.stringify(students));
    alert('Updated successfully !');
    window.location.href = 'index.html';
});

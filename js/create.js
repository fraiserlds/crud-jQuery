$(document).ready(function() {
    $('#createBtn').click(function() {
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

        var student = {
            'name': name,
            'gender': gender,
            'email': email,
            'dob': dob,
            'className': className,
        };

        if (localStorage.getItem('students') != undefined && localStorage.getItem('students') != null) {
            var students = JSON.parse(localStorage.getItem('students'));
            var checkExistEmail = students.filter(function(obj) {
                return obj.email == student.email
            });

            if (checkExistEmail.length > 0) {
                alert('This email is used already !');
                return; 
            }
        } else {
            var students = [];
        }

        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));
        alert('Added successfully !');
        window.location.href = 'index.html';
    });
    
})
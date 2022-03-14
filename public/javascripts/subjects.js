const select = document.querySelector('#deparment');
const submit = document.querySelector('#submit');


// Get all departments
var settings = {
    "url": "http://localhost:5000/department/getAll",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    response.forEach(element => {
        select.innerHTML += `<option value="${element.departmentid}">${element.name}</option>`;
    });
});


submit.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const code = document.querySelector('#code').value;
    const department = select.options[select.selectedIndex].value;

    console.log(name, code, department);

    var settings = {
        "url": "http://localhost:5000/subject",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "name": name,
            "code": code,
            "department": department
        }
    };

    $.ajax(settings).done(function (response) {
        try {
            alert(response.message);
        } catch {
            alert('Error');
            console.log(response);
        }

        document.querySelector('#name').value = '';
        document.querySelector('#code').value = '';
        select.selectedIndex = 0;
    });
});

let employeeArray = [];

function newEmployee(fNameInput, lNameInput, empIdInput, jobTitleInput, annSalaryInput){ 
    console.log('in new employee');
const employeeObj = {
    firstName: fNameInput,
    lastName: lNameInput,
    employeeId: empIdInput,
    employeeTitle: jobTitleInput,
    employeeSalary: annSalaryInput,
}
employeeArray.push(employeeObj);
return true;
}

$(document).ready(submit)
function submit() {
$('#submitButton').on('click',(submitButton));
}
    //gather input values 
    function submitButton() {
        let firstName = $('#fNameInput').val(); 
        let lastName = $('#lNameInput').val();
        let employeeId= $('#empIdInput').val()
        let employeeTitle= $('#jobTitleInput').val()
        let employeeSalary= $('#annSalaryInput').val()
        newEmployee (firstName, lastName, employeeId, employeeTitle, employeeSalary)
    $('#firstNameRow').append(`<tr><td>${firstName}</td></tr>`);
    $('#lastNameRow').append(`<tr><td>${lastName}</td></tr>`);
    $('#empIdRow').append(`<tr><td>${employeeId}</td></tr>`);
    $('#empTitleRow').append(`<tr><td>${employeeTitle}</td></tr>`);
    $('#annSalaryRow').append(`<tr><td>${employeeSalary}</td></tr>`);
    }

    // console.log(firstName);
    // console.log(lastName);
    // console.log(employeeId);
    // console.log(employeeTitle);
    // console.log(employeeSalary);
    
    


// console.log(employeeArray)
//initialize empty array for storing employees
let employeeArray = [];

// start newEmployee function to take inputs and create object and send to array
function newEmployee(fNameInput, lNameInput, empIdInput, jobTitleInput, annSalaryInput){ 
    console.log('in new employee', fNameInput, lNameInput, empIdInput, jobTitleInput, annSalaryInput);
const employeeObj = {
    first: fNameInput,
    last: lNameInput,
    id: empIdInput,
    title: jobTitleInput,
    salary: annSalaryInput,
}
employeeArray.push(employeeObj);
totalMonthlyCostAdder();
console.log(employeeArray);
}
//start Jquery and activate submit button
$(document).ready(submit)
function submit() {
$('#submitButton').on('click',(submitButton));
}
    //gather input values function
    function submitButton() {
        let firstName = $('#fNameInput').val(); 
        let lastName = $('#lNameInput').val();
        let employeeId= $('#empIdInput').val();
        let employeeTitle= $('#jobTitleInput').val();
        let employeeSalary= $('#annSalaryInput').val();
        newEmployee (firstName, lastName, employeeId, employeeTitle, employeeSalary);
        $('#fNameInput').val(''); 
        $('#lNameInput').val('');
        $('#empIdInput').val('');
        $('#jobTitleInput').val('');
        $('#annSalaryInput').val('');
     //append values to DOM

    $('#firstNameRow').append(`<tr><td>${firstName}</td></tr>`);
    $('#lastNameRow').append(`<tr><td>${lastName}</td></tr>`);
    $('#empIdRow').append(`<tr><td>${employeeId}</td></tr>`);
    $('#empTitleRow').append(`<tr><td>${employeeTitle}</td></tr>`);
    $('#annSalaryRow').append(`<tr><td>${employeeSalary}</td></tr>`);
    $('#delete').append('<tr><td><button id="deleteButton" type="button">Delete</button></td></tr>');
    $('#tableData').on('click', '#deleteButton', deleteClick); 
    }
    //attempt to delete one row, 
    function deleteClick(){
        console.log(this);
        $(this).parents('tr').remove(); 
        // $('#lastNameRow').remove()
        // $('#empIdRow').remove()
        // $('#empTitleRow').remove()
        // $('#annSalaryRow').remove()
        // $('#deleteButton').remove()
    }

    // add up employee salaries and divide to monthly 
    function totalMonthlyCostAdder(){
        console.log('in total monthly cost adder');
        let totalMonthlyCost = 0;
        for (let i = 0; i < employeeArray.length; i++){
            totalMonthlyCost += Number(employeeArray[i].salary)/ 12; 
        }     
        console.log(totalMonthlyCost);
        $('#total').text(`${totalMonthlyCost}`);
        if (totalMonthlyCost >= 20000) {
            $('#goRed').css('background-color', 'red') 
        }
    }



let employeeArray = [];

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
totalMonthlyCostAdder()
console.log(employeeArray);

}

$(document).ready(submit)
function submit() {
$('#submitButton').on('click',(submitButton));

}
    //gather input values 
    function submitButton() {
        let firstName = $('#fNameInput').val(); 
        let lastName = $('#lNameInput').val();
        let employeeId= $('#empIdInput').val();
        let employeeTitle= $('#jobTitleInput').val();
        let employeeSalary= $('#annSalaryInput').val();
        newEmployee (firstName, lastName, employeeId, employeeTitle, employeeSalary);
       

    $('#firstNameRow').append(`<tr><td>${firstName}</td></tr>`);
    $('#lastNameRow').append(`<tr><td>${lastName}</td></tr>`);
    $('#empIdRow').append(`<tr><td>${employeeId}</td></tr>`);
    $('#empTitleRow').append(`<tr><td>${employeeTitle}</td></tr>`);
    $('#annSalaryRow').append(`<tr><td>${employeeSalary}</td></tr>`);
    $('#delete').append('<tr><td><button id="deleteButton" type="button">Delete</button></td></tr>');
    $('#deleteButton').on('click', (deleteClick)); 
    }
    function deleteClick(){
        
    }


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

    

    
 

    // function deleteClick(){
    //     console.log('in delete click');
        
    //     console.log('what is', this);
        
    //     $(this).remove()


        // $('#firstNameRow').val();
        // $('#lastNameRow').val();
        // $('#empIdRow').val();
        // $('#empTitleRow').val();
        // $('#annSalaryRow').val();
        // $('#delete').val(); 
    // }


$(document).ready(readyNow);

function readyNow(){
    console.log('JqueryWorks');
    $('#submitButton').on('click',(submitButton));
}
    function submitButton(){
    //gather input values 
    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let employeeId= $('#empId').val();
    let employeeTitle= $('#title').val();
    let employeeSalary= $('#salary').val();
    
    
}






function submit(){
    //gather input values
    let year =$('#yearInput').val();
    let make =$('#makeInput').val();
    let model =$('#modelInput').val();
    //send values to newCar function
    newCar ( year, make, model );
    //append new car values to unordered list
      $('#garageList').append(`<li>${year} ${make} ${model}</li>`);


      function submit(){
        //gather input values
        let year =$('#yearInput').val();
        let make =$('#makeInput').val();
        let model =$('#modelInput').val();
        //send values to newCar function
        newCar ( year, make, model );
        //append new car values to unordered list
          $('#garageList').append(`<li>${year} ${make} ${model}</li>`);
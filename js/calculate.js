function calculateGrade() 
{
  // Get the subject inputs from the user
  const subject1 = parseInt(document.getElementById("subject1").value);
  const subject2 = parseInt(document.getElementById("subject2").value);
  const subject3 = parseInt(document.getElementById("subject3").value);
  const subject4 = parseInt(document.getElementById("subject4").value);
  const subject5 = parseInt(document.getElementById("subject5").value);
  const subject6 = parseInt(document.getElementById("subject6").value);
  const subject7 = parseInt(document.getElementById("subject7").value);

  // Calculate the average grade
  let averageGrade = (subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7) / 7;

  // Determine the descriptor and remarks based on the average grade
  let descriptor = "";
  let remarks = "";
  
  if (averageGrade > 100) {
    descriptor = "DOES NOT EXIST";
    remarks = "DOES NOT EXIST";
  }else if (averageGrade >= 90 && averageGrade <= 100) {
    descriptor = "OUTSTANDING";
    remarks = "PASSED";
  } else if (averageGrade >= 85 && averageGrade <= 89) {
    descriptor = "VERY SATISFACTORY";
    remarks = "PASSED";
  } else if (averageGrade >= 80 && averageGrade <= 84) {
    descriptor = "SATISFACTORY";
    remarks = "PASSED";
  } else if (averageGrade >= 75 && averageGrade <= 79) {
    descriptor = "FAIRLY SATISFACTORY";
    remarks = "PASSED";
  } else if(averageGrade >= 0 && averageGrade <= 74){
    descriptor = "DID NOT MEET EXPECTATIONS";
    remarks = "FAILED";
  } else {
    averageGrade= "";
    descriptor = "";
    remarks = "";
    alert('please Enter Your marks, Then click Calculate button');
  }

  document.getElementById("result").innerHTML =`${averageGrade.toFixed(2)}`;
  document.getElementById("descriptor").innerHTML =`${descriptor}`;
  document.getElementById("remarks").innerHTML = `${remarks}`;
}
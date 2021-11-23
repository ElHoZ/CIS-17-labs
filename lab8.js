// initialize the counter and the array
var numbernames=0;
var info = new Array();

function DisplayInfo() {
   // Get the info from the text field
   firstName=document.myForm.firstName.value;
   lastName=document.myForm.lastName.value;
   crnCode=document.myForm.crnCode.value;
   profName=document.myForm.profName.value;
   // Add the name to the array
   names[numbernames]=firstName;
   names[numbernames]=lastName;
   names[numbernames]=crnCode;
   names[numbernames]=profName;
   // Increment the counter
   numbernames++;
   // Sort the array
   names.sort();
   document.myForm.outputArea.value+=firstnames+("\n");

}


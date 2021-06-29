 var date1 = new Date("06/30/2019"); 
var date2 = new Date("07/30/2019"); 

var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result)
document.write("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days); 

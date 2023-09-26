document.getElementById('score').onclick = function () { score(); };
function score() {

   let hw = parseInt(document.forms["grades"].elements["hw"].value);
   let midterm = parseInt(document.forms["grades"].elements["midterm"].value);
   let final = parseInt(document.forms["grades"].elements["final"].value);
   let participation = parseInt(document.forms["grades"].elements["participation"].value);

   if (Number.isNaN(hw) || Number.isNaN(midterm) ||
      Number.isNaN(final) || Number.isNaN(participation)) {
      console.log("user entered NaN. Final grade not calculated.");
      document.forms["grades"].elements["termGrade"].value = "You must enter numbers";
   } else {

      let finalGrade = (.5 * hw) + (.2 * midterm) + (.2 * final) + (.1 * participation);
      let letterGrade = "F";
      let retake = true;

      if (finalGrade >= 90) {
         letterGrade = "A"
         retake = false;
      } else if (finalGrade >= 80) {
         letterGrade = "B"
         retake = false;
      } else if (finalGrade >= 70) {
         letterGrade = "C"
         retake = false;
      } else if (finalGrade >= 60) {
         letterGrade = "D"
      }

      if (retake) {
         document.forms["grades"].elements["termGrade"].value = `Your letter grade for the semester is: ${letterGrade}. You must retake this course to receive credit.`;
      } else
         document.forms["grades"].elements["termGrade"].value = `Your letter grade for the semester is: ${letterGrade}.`;

   }
}

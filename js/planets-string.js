(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?



     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsArray1 = planetsArray.join('<br>');
    console.log(planetsArray1);

    // bonus

    function arrayAdd(array) {
    var sum = array.reduce(function(accumulator, currentValue) {
            return (accumulator + currentValue);
        });
        return sum;
    }

    console.log(arrayAdd([1,2,3,4,5,8]));


var emptyList = new Array();
var add = confirm("Did you want to add a student?");
if (add){
    var studentName = prompt("Enter student name");
    emptyList.unshift(studentName);
    alert("Student list: \n" + emptyList);
}
var deleteStudent= confirm("Did you want to delete a student?");
if(deleteStudent) {
    var studentDel = prompt("Enter students name to delete: ");
    delete emptyList[studentDel];
    alert("Student list: \n" + emptyList);

}


})();

function makeNewNumbers() {
  var input = document.getElementById("people").value;

  if (input == 0)
  {
    alert("You chose 0 people");
  }

  var num1 = Math.floor(Math.random()*input+1);
  var num2 = Math.floor(Math.random()*input+1);

  while (num1 == num2)
  {
    num2 = Math.floor(Math.random()*input+1);
  }

  var eval = "Evaluator test 1";
  var evalee = "Evaluatee test 2";


    function changeNames(num, namex, show) {

      if (num == 1) {
        namex = document.getElementById("name1").value;
      } else if (num == 2) {
        namex = document.getElementById("name2").value;
      } else if (num == 3) {
        namex = document.getElementById("name3").value;
      } else if (num == 4) {
        namex = document.getElementById("name4").value;
      } else if (num == 5) {
        namex = document.getElementById("name5").value;
      } else if (num == 6) {
        namex = document.getElementById("name6").value;
      } else if (num == 7) {
        namex = document.getElementById("name7").value;
      } else {
        num = namex;
      }


        document.getElementById(show).value = namex;

    }

      changeNames(num1, eval, "p1");
      changeNames(num2, evalee, "p2");

    document.getElementById("selectedEval").innerHTML = document.getElementById("p1").value;
    document.getElementById("selectedEvalee").innerHTML = document.getElementById("p2").value;
}

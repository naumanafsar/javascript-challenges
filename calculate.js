function sumNums()
  {
    x = document.getElementById("n1").value;
    y = document.getElementById("n2").value;

    result = document.getElementById('res');
    res.innerHTML = x+y;
  }
function subNums()
    {
      x = document.getElementById("n1").value;
      y = document.getElementById("n2").value;

      result = document.getElementById("res");
      res.innerHTML = x-y;
    }

function mulNums()
    {
      x = document.getElementById("n1").value;
      y = document.getElementById("n2").value;
      result = document.getElementById("res");
      res.innerHTML = x*y;
    }
function divNums()
{
  x = document.getElementById("n1").value;
  y = document.getElementById("n2").value;

  document.getElementById("res");
  res.innerHTML = x/y;
}

// Make a new file name with the index.html and paste the following code from line 36 to line 64 there to see the results!
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="calculate.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>calculate</title>
</head>
<body>
  <form>
    <label> Enter First number: </label>
      <br>
    <input id="n1" type="text">
      <br>
    <label> Enter Second number: </lable>
      <br>
    <input id="n2" type="text">
      <br>
    <input onClick="sumNums()" type="button" value="Add">
    <input onClick="subNums()" type="button" value="Subtract">
      <br>
    <input onClick="mulNums()" type="button" value="Multiply">
    <input onClick="divNums()" type="button" value="Divide">
  </form>
  <p> The Result is: </p>
  <span id="res"></span>
</body>
</html>
*/

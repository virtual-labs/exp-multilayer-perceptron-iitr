let createTruthTable = document.getElementById("create-Truth-table");
let compute = document.getElementById("compute");
let analyze = document.getElementById("analyze");
compute.disabled = true;
analyze.disabled = true;

compute.style.cursor = `not-allowed`;
analyze.style.cursor = `not-allowed`;

var initialHide = document.getElementById("initial-hide");
var lrCount = 0;
var checkCount = 0;
var epochNum = document.querySelector(".epochNumber");
epochNum.innerText = "Z₁";
var weightOneVal, weightTwoVal;
var oldWeight1, oldWeight2, updatedWeight1, updatedWeight2, oldBias, newBias;
initialHide.style.display = "none";
let selectNumber = document.querySelector(".select-number");
let analyzeDiv = document.querySelector(".analyze-div");

let numberSelected = document.querySelector(".number-selected");
let forTwoInput = document.querySelector(".for-two-input");

let networkCanvaOne = document.querySelector(".network-canva-one");
let networkTab = document.querySelector(".network");

let secCon = document.querySelector(".sec-con");
let controlTab = document.querySelector(".control");
let secConSecRow = document.querySelector(".sec-con-sec-row");
let networkCanvaWithOneBall = document.querySelector("#network-canva-one");
let networkCanvaWithOneBallContext = networkCanvaWithOneBall.getContext("2d");
let networkCanvaTwo = document.querySelector(".network-canva-two");
let networkCanvaWithTwoBall = document.querySelector(
  ".network-canva-two-canva"
);
// let networkCanvaWithTwoBall = document.querySelector("#network-canva-two");
let networkCanvaWithTwoBallContext = networkCanvaWithTwoBall.getContext("2d");
let networkCanvaWithTwoBallAnalyze = document.querySelector(
  ".network-canva-analyze"
);
let networkCanvaWithTwoBallAnalyzeContext =
  networkCanvaWithTwoBallAnalyze.getContext("2d");
let networkCanvaThree = document.querySelector(".network-canva-three");
let networkCanvaWithThreeBall = document.querySelector("#network-canva-three");
let networkCanvaWithThreeBallContext =
  networkCanvaWithThreeBall.getContext("2d");
var observationTableOne = document.querySelector(".observation-table");
var observationTableTwo = document.querySelector(".observation-table-2");
var observationTableThree = document.querySelector(".observation-table-3");
var printBtn = document.querySelector(".print-btn");
var plotBtn = document.querySelector(".plot-btn");

printBtn.disabled = true;
plotBtn.addEventListener("click", () => {
  printBtn.disabled = false;
  plotBtn.disabled = true;
});
var summationInput;
var putInOne = true;
var putInTwo = false;
var putInThree = false;
var putInFour = false;
var putInFive = false;
var flag;
var one = "1";
var one_one = "11";
var one_two = "12";
var two_one = "21";
var two_two = "22";
var two = "2";
var zero = "0";
var Vone ="1";
var Vtwo = "2";
var Zone ="1";
var Ztwo = "2";
var x = "X";
var w = "w";
var x1 = x;
var x2 = x;
var w11 = w;
var w21 = w;
var w12 = w;
var w22 = w;
var w0 = w;
var z11= "Z"
var z22= "Z"
var V1= "V"
var V2= "V"
var color1="#004E86";
var color2="#004E86";
var color3="#004E86";
var summation = "Σ";
var activation = "O";
var biasCenter = true;

var weightZero = document.querySelector("#weight-zero");
var weightOne = document.querySelector("#weight-one");
var weightTwo = document.querySelector("#weight-two");
var variableOne = document.querySelector("#variable-one");
var variableTwo = document.querySelector("#variable-two");
var rowCount = 0;
var generateWeight = document.querySelector("#generateWeight");
var submit = document.querySelector("#submit");
var reset = document.querySelector("#reset");
var check = document.querySelector("#check");
var update = document.querySelector("#update");
var graph = document.querySelector("#graph");
var button = document.querySelector("button");
var btns = document.querySelector(".btns");
var activationBtn = document.querySelector("#activation");
var xorGatePic = document.querySelector(".xor-gate-pic");

xorGatePic.style.display = "none";

var summationOne, summationTwo, summationThree, summationFour;
var terminologyDiv = document.querySelector(".terminology");
var MultiLevelPerceptron = document.querySelector("#multi-level-perceptron");
var holllow = document.querySelector(".hollow");

var newWeightOneDiv = document.querySelector("#new-weight-one-div");
var newWeightOneValue = document.querySelector("#new-weight-one-value");
var newWeightTwoDiv = document.querySelector("#new-weight-two-div");
var newWeightTwoValue = document.querySelector("#new-weight-two-value");

var newWeightOneDiv2 = document.querySelector("#new-weight-one-div2");
var newWeightOneValue2 = document.querySelector("#new-weight-one-value2");
var newWeightTwoDiv2 = document.querySelector("#new-weight-two-div2");
var newWeightTwoValue2 = document.querySelector("#new-weight-two-value2");

var oldWeightOne = document.querySelector("#old-weight-one");
var targetVal = document.querySelector("#target-one");
var inputOne = document.querySelector("#input-one");
var inputX1 = document.querySelector("#input-x1");

var oldWeightTwo = document.querySelector("#old-weight-two");
var targetValTwo = document.querySelector("#target-two");
var inputTwo = document.querySelector("#input-two");
var inputX2 = document.querySelector("#input-x2");

//cal div for Z2
var oldWeight2One = document.querySelector("#old-weight2-one");
var target2Val = document.querySelector("#target2-one");
var input2One = document.querySelector("#input2-one");
var input2X1 = document.querySelector("#input2-x1");

var oldWeight2Two = document.querySelector("#old-weight2-two");
var targetVal2Two = document.querySelector("#target2-two");
var input2Two = document.querySelector("#input2-two");
var input2X2 = document.querySelector("#input2-x2");

var z2=false;
var outputLayer=false;

var showGraph = document.querySelector(".show-plot");
var showGraphBtn = document.querySelector(".show-graph-btn");
showGraph.style.display = "none";
showGraphBtn.addEventListener("click", () => {
  showGraph.style.display = "block";
});
var singleLPCount = 0;
var multiLPCount = 0;
var sNo = 0;
var rowNum = 1;
var computeNumber = 1;
var calculationDiv = document.querySelector(".calculation-div");
var calculationDiv2 = document.querySelector(".calculation2-div");
calculationDiv.style.display = "none";
calculationDiv2.style.display = "none";
MultiLevelPerceptron.style.cursor = "pointer";
MultiLevelPerceptron.addEventListener("click", () => {
  singleLPCount = singleLPCount + 1;
  multiLPCount = 0;
  if (singleLPCount == 1) {

    initialHide.style.display = "block";
    MultiLevelPerceptron.style.color = "#004E86";
    MultiLevelPerceptron.style.backgroundColor = "#ffd964";
    document.getElementById('selectimg').src='images/create1.png';
    document.getElementById('aim').style.display="none"
    document.querySelector('.container').style.backgroundImage = 'none';
    networkCanvaOne.style.display = "block";
    holllow.style.display = "none";
    terminologyDiv.style.display = "block";
    askTruthTable();
  }
 
});


function alerts1(icon,title,html)
{
  Swal.fire({
    icon: icon,
    title:title,
    html: html,
    allowOutsideClick: false,
    customClass: {
      container: "swal2-container",
      popup: "swal-popup",
title: "swal-title",
content: "swal-content",
    },
  });
}



createTruthTable.addEventListener("click", () => {

  var table = document.getElementById("Truth-Table");
  var rows = table.getElementsByTagName("tr");
  var flag=[false,false,false,false]
  for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var result = parseInt(cells[2].innerHTML);
        if(i==1)
        {
          if(result==0)
          {
            flag[0]=true;
            cells[2].style.border = "2px solid #004E86";
          }
          else{
            cells[2].style.border = "2px solid red";
          }
        }
        if(i==2)
        {
          if(result==1)
          {
            flag[1]=true;
            cells[2].style.border = "2px solid #004E86";
          }
          else{
            cells[2].style.border = "2px solid red";
          }
        }
        if(i==3)
        {
          if(result==1)
          {
            flag[2]=true;
            cells[2].style.border = "2px solid #004E86";
          }
          else{
            cells[2].style.border = "2px solid red";
          }
        }
        if(i==4)
        {
          if(result==0)
          {
            flag[3]=true;
            cells[2].style.border = "2px solid #004E86";
          }
          else{
            cells[2].style.border = "2px solid red";
          }
        }
      
  }

  if(flag[0]==true && flag[1]==true && flag[2]==true && flag[3]==true)
  {
    alerts1('success','Dataset created!!','Click on <b style="color:#004E86">COMPUTE</b> to start your computation.');
    createTruthTable.disabled = true;
  }
else if(flag[0]==false || flag[1]==false || flag[2]==false || flag[3]==false)
{
  alerts1('error','Enter the correct value in the highlighted cell of the table.','Then, click on <b style="color:#004E86">SUBMIT</b> to create dataset.');
  return;
}
  else{
    alerts1('error','Enter the correct value.','Then, click on <b style="color:#004E86">SUBMIT</b> to create dataset.');
    return;
  }
  
  //editable disable
  var cells = document.querySelectorAll('td[contenteditable="true"]');
    
  cells.forEach(function(cell) {
      cell.contentEditable = false;
  });

  MultiLevelPerceptron.disabled = true;
  MultiLevelPerceptron.style.cursor = `not-allowed`;
  compute.disabled = false;
  compute.style.cursor = "pointer";
 
  selectNumber.style.display = "block";
  compute.addEventListener("click", () => {
    if (computeNumber == "1") {
      computeNumber = 2;
      networkCanvaTwo.style.display = "block";
      networkCanvaOne.style.display = "none";
      networkCanvaThree.style.display = "none";

      MultiLevelPerceptron.style.color = "#FFC000";
      MultiLevelPerceptron.style.backgroundColor = "#004E86";

    document.getElementById('selectimg').src='images/create.png';

      compute.style.color = "#004E86";
      compute.style.backgroundColor = "#ffd964";
      document.getElementById('calimg').src='images/calculator.png';
      selectNumber.style.display = "none";
      numberSelected.style.display = "block";
      forTwoInput.style.display = "block";
      terminologyDiv.style.display = "none";
      secConSecRow.style.display = "block";
     
        xorGatePic.style.display = "block";
        document.getElementById("div-heading").innerText = "CONTROLS";
        document.getElementById("network-header").innerText = "XOR NETWORK";
        const data = [
          { A: 0, B: 0, Y: 0 },
          { A: 0, B: 1, Y: 1 },
          { A: 1, B: 0, Y: 1 },
          { A: 1, B: 1, Y: 0 },
        ];

        // Separate data points for 0 and 1 outputs
        const dataZero = data.filter((point) => point.Y === 0);
        const dataPlus1 = data.filter((point) => point.Y === 1);

        // Create traces for 0 and 1 outputs
        const traceZero = {
          x: dataZero.map((point) => point.A),
          y: dataZero.map((point) => point.B),
          mode: "markers",
          type: "scatter",
          name: "Y = 0",
          marker: { color: "blue" },
        };

        const tracePlus1 = {
          x: dataPlus1.map((point) => point.A),
          y: dataPlus1.map((point) => point.B),
          mode: "markers",
          type: "scatter",
          name: "Y = 1",
          marker: { color: "red",symbol:"diamond" },
        };

        // Create the line separating the points
        const line1 = {
          x: [-1, 1.7],
          y: [1.7, -1],
          mode: "lines",
          type: "scatter",
          name: "Separating Line",
          line: { color: "black", dash: "dash" },
          
        };

        const line2 = {
          x: [-1, 2.2],
          y: [2.2, -1],
          mode: "lines",
          type: "scatter",
          name: "Separating Line",
          line: { color: "black", dash: "dash" },
        };

        // Layout for the graph
        const layout = {
           
          xaxis: { title: "X₁" ,range: [-1.5, 1.5]},
          yaxis: { title: "X₂",  range: [-1.5, 1.5]}, // Reverse Y-axis to match the observation table
          margin: { l: 60, r: 30, b: 60, t: 30 },
          legend: { x: 0.5, xanchor: 'right',  y: 1.15},
        };

        // Combine all traces
       // const dataTraces = [traceZero, tracePlus1];
        
        const dataTraces = [traceZero, tracePlus1, line1,line2];
        // Plot the graph
        Plotly.newPlot("plot", dataTraces, layout, {
          displaylogo: false, // Set the displaylogo option to false to remove the logo from icons
          displayModeBar: false, // Hide the mode bar
        });
      
    }
  });
});
async function askTruthTable() {
  const { value: gate } = await  Swal.fire({
    title:'Complete the Truth Table for an XOR gate!',
    html: 'Click on the highlighted cell in the table, enter a value for each row one by one, and, finally, click the <b style="color:#004E86">SUBMIT</b> button.',
    icon: "info",
    allowOutsideClick: false,
    customClass: {
      container: "swal2-container",
      popup: "swal-popup",
title: "swal-title",
content: "swal-content",
    },
  
  });
  selectNumber.style.display = "block";
}

function restartCalculation()
{
  if (putInOne) {
    for (let i = 0; i < sNo; i++) {
      table = document.getElementById("myTable");
      deleteLastRow();
    }
    
    variableOne.disabled=false;
    variableTwo.disabled=false;
    sNo = 0;
    rowNum=1;
    lrCount=0;
    
  activationRowOne = true;
  activationRowTwo = false;
  activationRowThree = false;
  activationRowFour = false;
  

  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;
 
  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;

  if(z2==true)
  {
    one="1"
    two = "2";
    one_two = "12";
    two_two = "22";
    w = "w";
    w12 = w;
    w22 = w;
    x = "X";
    x1 = x;
    x2 = x;
    color1="#80dff4"
    color2="#004E86"
  }
  else{
    one = "1";
    two = "2";
    one_one = "11";  
    two_one = "21";  
    x = "X";
    w = "w";
    x1 = x;
    x2 = x;
    w11 = w;
    w21 = w;
    color1="#004E86";
    color2="#004E86";
  }
  reDrawCanva();
  }
}

//reset button
reset.addEventListener("click", () => {

  if(z2==false && outputLayer==true)
  {
    putInOne=false;
    putInTwo=true;
    console.log("OLreset")
    one="1"
    two = "2";
    Zone="1";
    Ztwo="2";
    Vone="1";
    Vtwo="2"
    V1="V"
    V2="V"
    
    z11="Z";
    z22="Z";

    x = "X";
    x1 = x;
    x2 = x;
    color1="#80dff4";
    color2="#80dff4";
    color3="#004E86";
    epochNum.innerText = "Y";
  }
  else if(z2==true)
  {
    outputLayer=false;
    console.log("resestssss")
    one="1"
    two = "2";
    one_two = "12";
    two_two = "22";
    w = "w";
    w12 = w;
    w22 = w;
    x = "X";
    x1 = x;
    x2 = x;
    color1="#80dff4";
    color2="#004E86";

    epochNum.innerText = "Z₂";
  newWeightOneDiv2.style.display = "block";
  newWeightOneValue2.innerText = "";

  newWeightTwoDiv2.style.display = "block";
  newWeightTwoValue2.innerText = "";

  oldWeightOne.value = "";
  target2Val.value = "";
  input2One.value = "";
  input2X1.value= "";
  oldWeight2Two.value = "";
  targetVal2Two.value = "";
  input2Two.value = "";
  input2X2.value= "";

  oldWeight2One.disabled = false;
  target2Val.disabled = false;
  input2One.disabled = false;
  input2X1.disabled = false;
  
  }
  else
  {
    one = "1";
    two = "2";
    zero = "0";
    one_one = "11";  
    two_one = "21";  
    x = "X";
    w = "w";
    x1 = x;
    x2 = x;
    w11 = w;
    w21 = w;
    w0 = w;
    epochNum.innerText = "Z₁";
    color1="#004E86";
    color2="#004E86";

  newWeightOneDiv.style.display = "block";
  newWeightOneValue.innerText = "";

  console.log(newWeightOneDiv.style.display, newWeightOneValue.innerText);

  newWeightTwoDiv.style.display = "block";
  newWeightTwoValue.innerText = "";

  oldWeightOne.value = "";
  targetVal.value = "";
  inputOne.value = "";
  inputX1.value= "";
  oldWeightTwo.value = "";
  targetValTwo.value = "";
  inputTwo.value = "";
  inputX2.value= "";

  oldWeightOne.disabled = false;
  targetVal.disabled = false;
  inputOne.disabled = false;
  inputX1.disabled = false;

  }

  clearInputs();

  variableOne.disabled=false;
  variableTwo.disabled=false;
  updateOne = false;
  updateTwo = false;
  updateThree = false;
  updateFour = false;
  weightOneVal = "";
  weightTwoVal = "";
  
  i = 1;
  weightOne.disabled = false;
  weightTwo.disabled = false;

  generateWeight.disabled = false;

  graph.disabled = true;

  activationRowOne = true;
  activationRowTwo = false;
  activationRowThree = false;
  activationRowFour = false;
  

  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;
 
  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;
  reDrawCanva();
  lrCount = 0;
  rowNum=1;
  calculationDiv.style.display = "none";
  calculationDiv2.style.display = "none";
  if (putInOne) {
    for (let i = 0; i < sNo; i++) {
      table = document.getElementById("myTable");
      deleteLastRow();
    }
    sNo = 0;
  }

  if (putInTwo) {
    for (let i = 0; i < sNo; i++) {
      table = document.getElementById("myTable2");
      deleteLastRow();
    }
    sNo = 0;
  }
  activationBtn.disabled = true;
  update.disabled = true;
  check.disabled = true;
  submit.disabled = false;
  
  secConSecRow.style.display = "block";
  selectNumber.style.display = "none";
 
});

//submit button
submit.addEventListener("click", () => {
  if (
    
    variableOne.value == "" ||
    variableTwo.value == "" 
    
  ) {
    alerts1('error','An input value is missing!!!','Please select the value for both X<sub>1</sub> and X<sub>2</sub>.'); 
    
  }else if(weightOne.value == "" ||
  weightTwo.value == "" )
  {
    alerts1('error','Initialize weight.','Begin by clicking <b style="color:#004E86">INITIALIZE WEIGHT</b>, and then proceed to click the <b style="color:#004E86">SUBMIT</b> button.'); 
   
  } else {
 if(z2!=true && outputLayer!=true)
 {
  (w11 = Number(weightOne.value)),
  (w21 = Number(weightTwo.value)),
  (x1 = variableOne.value),
  (x2 = variableTwo.value);
one_one = "";
two_one = "";
zero = "";
one = "";
two = "";
color1="#80dff4";
color2="#004E86";
    weightOneVal = w11;
    weightTwoVal = w21;
    biasCenter = false;
    reDrawCanva();
   
    alerts1('info','','Now, click on <b style="color:#004E86">Z₁</b> cell of the current row and enter the value.');

    submit.disabled = true;
    addRow();

 }
    
    if(z2==true)
    {
      w12 = Number(weightOne.value);
      w22 = Number(weightTwo.value);
      x1 = variableOne.value;
      x2 = variableTwo.value;
      one_two = "";
      two_two = "";
      one = "";
      two = "";
      color1="#80dff4";
      color2="#80dff4";
      weightOneVal = w12;
      weightTwoVal = w22;
      biasCenter = false;
      reDrawCanva();
      
      alerts1('info','','Now, click on <b style="color:#004E86">Z₂</b> cell of the current row and enter the value.');
  
      submit.disabled = true;
      addRow();
  
    }

    if(outputLayer==true)
    {
      V1 = weightOne.value;
      V2 = weightTwo.value;
      x1 = variableOne.value;
      x2 = variableTwo.value;
      if(x1==1 && x1==x2)
      {
        z11 = 0;
        z22 = 0;
        Zone="";
        Ztwo="";
      }
      else{
        z11 = variableOne.value;
        z22 = variableTwo.value;
        Zone="";
        Ztwo="";
      }
      one = "";
      two = "";
      Vone = "";
      Vtwo = "";
      color1="#80dff4";
      color2="#80dff4";
      color3="#e6bce6";
      weightOneVal = V1;
      weightTwoVal = V2;
      
      reDrawCanva();
      
      alerts1('info','','Now, click on <b style="color:#004E86">Y</b> cell of the current row and enter the value.');
      putInOne=false;
      putInTwo=true;
      submit.disabled = true;
      addRow();
  
    }

   
    if (rowCount == 4) {
      submit.disabled = true;
    }
  }
});

//check
var checkedOne, checkedTwo, checkedThree, checkedFour;
checkedOne = false;
checkedTwo = false;
checkedThree = false;
checkedFour = false;
var checkedOneEqual, checkedTwoEqual, checkedThreeEqual, checkedFourEqual;
checkedOneEqual = false;
checkedTwoEqual = false;
checkedThreeEqual = false;
checkedFourEqual = false;
const learningRate = document.getElementsByClassName("learning-rate");
const learningRate2 = document.getElementsByClassName("learning-rate2");
var learningValue;


var updateOne, updateTwo, updateThree, updateFour;
updateOne = false;
updateTwo = false;
updateThree = false;
updateFour = false;
var table;
var table2;
var checkNumber = 0;

//check button
check.addEventListener("click", () => {
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfCheck();
  }

  if (putInTwo) {
    table2 = document.getElementById("myTable2");
    partOfCheck2();
  }

  if(outputLayer==true)
  {
    var table2 = document.getElementById("myTable2");
    var rowCount = table2.rows.length;
    var matchedColumns = 0;
    for (var i = 1; i < rowCount; i++) {
      var row = table2.rows[i];
      var cells = row.cells;
      var target = Number(cells[5].innerHTML);
      var actual = Number(cells[7].innerHTML);
      if (target == actual) {
        matchedColumns = matchedColumns + 1;
      }
    }
  }
  else{
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    var matchedColumns = 0;
    for (var i = 1; i < rowCount; i++) {
      var row = table.rows[i];
      var cells = row.cells;
      var target = Number(cells[3].innerHTML);
      var actual = Number(cells[5].innerHTML);
      if (target == actual) {
        matchedColumns = matchedColumns + 1;
      }
    }
  }
  
  console.log(matchedColumns, rowNum);
  if (matchedColumns == 4) {
    graph.disabled = false;
    if(z2!=true && outputLayer!=true)
    {
      alerts1('success','Z₁ has successfully executed.','Now, click on <b style="color:#004E86">NEXT</b> button to calculate Z₂.');
      variableOne.disabled=true;
      variableTwo.disabled=true;
    }
   else if(z2){
      outputLayer=true;      
      alerts1('success','Z₂ has successfully executed.','Now, click on <b style="color:#004E86">NEXT</b> button to calculate O.');
      variableOne.disabled=true;
      variableTwo.disabled=true;
    }
    else{
      alerts1('success','Y has successfully executed.','Now, click on <b style="color:#004E86">ANALYZE</b>.');
    
      analyze.style.cursor = "pointer";
  
      graph.disabled = true;
      analyze.addEventListener("click", () => {
        secCon.style.display = "none";
      
        document.getElementById('calimg').src="images/calculator1.png";
        compute.style.color = "#FFC000";
        compute.style.backgroundColor = "#004E86";
        analyze.style.color = "#004E86";
        analyze.style.backgroundColor = "#ffd964";
        document.getElementById('anaimg').src="images/mlp.png";
        analyzeDiv.style.display = "block";
        compute.disabled = true;
        compute.style.cursor = "not-allowed";
        MultiLevelPerceptron.disabled = true;
      });
    }
    
  }
 
});

var analyzeOT = [];
var analyzeOT2 = [];

//check for input & hidden layer
function partOfCheck() {
  var rowCount = table.rows.length;

  for (var i = 1; i < rowCount; i++) {
    var row = table.rows[i];
    var cells = row.cells;
    var w1 = Number(weightOneVal);
    var w2 = Number(weightTwoVal);

    var expected = Number(cells[3].innerHTML);
    var actual = Number(cells[5].innerHTML);

    if (!checkedOne) {
      if (expected !== actual && i == 1) {
        checkedOne = true;
        analyzeOT = [];
        console.log(analyzeOT);
if(z2==true)
{
  alerts1('error','X₁\'.X₂ != f(Z<sub>2</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
}
else{
  alerts1('error','X₁.X₂\' != f(Z<sub>1</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.');
}
       
        
        cells[3].style.border = "2px solid red";
        cells[5].style.border = "2px solid red";
        update.disabled = false;
        
        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedTwo) {
      if (expected !== actual && i == 2) {
        checkedTwo = true;
        analyzeOT = [];
        console.log(analyzeOT);
        
        if(z2==true)
        {
          alerts1('error','X₁\'.X₂ != f(Z<sub>2</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
        }
        else{
          alerts1('error','X₁.X₂\' != f(Z<sub>1</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.');
        }
        cells[3].style.border = "2px solid red";
        cells[5].style.border = "2px solid red";
        update.disabled = false;
        
        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedThree) {
      if (expected !== actual && i == 3) {
        checkedThree = true;
        analyzeOT = [];
        console.log(analyzeOT);
        if(z2==true)
{
  alerts1('error','X₁\'.X₂ != f(Z<sub>2</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
}
else{
  alerts1('error','X₁.X₂\' != f(Z<sub>1</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.');
}
        cells[3].style.border = "2px solid red";
        cells[5].style.border = "2px solid red";
        update.disabled = false;
     
        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedFour) {
      if (expected !== actual && i == 4) {
        checkedFour = true;
        analyzeOT = [];
        console.log(analyzeOT);
        if(z2==true)
{
  alerts1('error','X₁\'.X₂ != f(Z<sub>2</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
}
else{
  alerts1('error','X₁.X₂\' != f(Z<sub>1</sub>)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.');
}
        cells[3].style.border = "2px solid red ";
        cells[5].style.border = "2px solid red";
        update.disabled = false;
       
        updateOne = false;
        updateTwo = false;
        updateThree = false;
        updateFour = false;
        checkedOneEqual = false;
        checkedTwoEqual = false;
        checkedThreeEqual = false;
        checkedFourEqual = false;
        checkedOne = false;
        checkedTwo = false;
        checkedThree = false;
        checkedFour = false;
        console.log(i, "checked fro !=");
        break;
      }
    }

    if (!checkedOneEqual) {
      if (expected == actual && i == 1) {
        checkedOneEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        if(z2==true)
{
  alerts1('success','X₁\'.X₂ == f(Z<sub>2</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.'); 
}
else{
  alerts1('success','X₁.X₂\' == f(Z<sub>1</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');
}
variableOne.disabled=false;
variableTwo.disabled=false;
       
        console.log(learningValue, expected, actual);
        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = weightOneVal;
        cells[9].innerHTML = weightTwoVal;
       
        weightOne.value = weightOneVal;
        weightTwo.value = weightTwoVal;
        activationBtn.disabled = true;  
        check.disabled = true; 
        update.disabled = true;
        submit.disabled = false;
     
        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          yin: cells[4].innerHTML || "",
          t: cells[3].innerHTML,
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          nw1: cells[8].innerHTML,
          nw2: cells[9].innerHTML,
        });
        console.log(analyzeOT);
        console.log(i, "checked fro =");
      
      }
    }
    if (!checkedTwoEqual) {
      if (expected == actual && i == 2) {
        checkedTwoEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        if(z2==true)
        {
          alerts1('success','X₁\'.X₂ == f(Z<sub>2</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.'); 
        }
        else{
          alerts1('success','X₁.X₂\' == f(Z<sub>1</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');
        }
        variableOne.disabled=false;
variableTwo.disabled=false;
        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = w1;
        cells[9].innerHTML = w2;
        
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
      
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;
       
        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          yin: cells[4].innerHTML || "",
          t: cells[3].innerHTML,
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          nw1: cells[8].innerHTML,
          nw2: cells[9].innerHTML,
        });
        console.log(analyzeOT);
        console.log(i, "checked fro =");
        
      }
    }
    if (!checkedThreeEqual) {
      if (expected == actual && i == 3) {
        checkedThreeEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        if(z2==true)
        {
          alerts1('success','X₁\'.X₂ == f(Z<sub>2</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.'); 
        }
        else{
          alerts1('success','X₁.X₂\' == f(Z<sub>1</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');
        }
        variableOne.disabled=false;
        variableTwo.disabled=false;
        console.log(learningValue, expected, actual);
     
        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = w1;
        cells[9].innerHTML = w2;
   
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
      
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;
    
        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          yin: cells[4].innerHTML || "",
          x2: cells[2].innerHTML,
          t: cells[3].innerHTML,
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          nw1: cells[8].innerHTML,
          nw2: cells[9].innerHTML,
        });
        console.log(analyzeOT);
        console.log(i, "checked fro =");
       
      }
    }
    if (!checkedFourEqual) {
      if (expected == actual && i == 4) {
        checkedFourEqual = true;
        rowNum = 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);

        if(z2==true)
        {
          alerts1('success','X₁\'.X₂ == f(Z<sub>2</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.'); 
        }
        else{
          alerts1('success','X₁.X₂\' == f(Z<sub>1</sub>)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');
        }
        variableOne.disabled=false;
        variableTwo.disabled=false;
        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = w1;
        cells[9].innerHTML = w2;
        
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
       
        graph.disabled = false;
       
       
        check.disabled = true;
      
      
        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          t: cells[3].innerHTML,
          yin: cells[4].innerHTML || "",
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          nw1: cells[8].innerHTML,
          nw2: cells[9].innerHTML,
        });

        console.log(analyzeOT, analyzeOT.length);
        if (analyzeOT.length < 4) {
          analyzeOT = [];
        }
        console.log(analyzeOT);
        showAnalyzeTable();
        analyzeCanva();
        console.log(i, "checked fro =");
      }
    }
  }

  check.disabled = true;

}

//check for output layer
function partOfCheck2() {
  var rowCount = table2.rows.length;

  for (var i = 1; i < rowCount; i++) {

    var row = table2.rows[i];
    var cells = row.cells;
    var w1 = Number(weightOneVal);
    var w2 = Number(weightTwoVal);

    var expected = Number(cells[5].innerHTML);
    var actual = Number(cells[7].innerHTML);

    if (!checkedOne) {
      if (expected !== actual && i == 1) {
        checkedOne = true;
        analyzeOT2 = [];
        console.log(analyzeOT2);

        alerts1('error','Z₁+Z₂ != f(Y)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 

        cells[5].style.border = "2px solid red";
        cells[7].style.border = "2px solid red";
        update.disabled = false;
        
        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedTwo) {
      if (expected !== actual && i == 2) {
        checkedTwo = true;
        analyzeOT = [];
        console.log(analyzeOT);
        
        alerts1('error','Z₁+Z₂ != f(Y)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
        cells[5].style.border = "2px solid red";
        cells[7].style.border = "2px solid red";
        update.disabled = false;
        
        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedThree) {
      if (expected !== actual && i == 3) {
        checkedThree = true;
        analyzeOT = [];
        console.log(analyzeOT);
        alerts1('error','Z₁+Z₂ != f(Y)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
        cells[5].style.border = "2px solid red";
        cells[7].style.border = "2px solid red";
        update.disabled = false;
     
        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedFour) {
      if (expected !== actual && i == 4) {
        checkedFour = true;
        analyzeOT2 = [];
        console.log(analyzeOT2);
        alerts1('error','Z₁+Z₂ != f(Y)','Click on <b style="color:#004E86">UPDATE</b> button to update the values for Weights.'); 
        cells[5].style.border = "2px solid red  ";
        cells[7].style.border = "2px solid red";
        update.disabled = false;
       
        updateOne = false;
        updateTwo = false;
        updateThree = false;
        updateFour = false;
        checkedOneEqual = false;
        checkedTwoEqual = false;
        checkedThreeEqual = false;
        checkedFourEqual = false;
        checkedOne = false;
        checkedTwo = false;
        checkedThree = false;
        checkedFour = false;
        console.log(i, "checked fro !=");
        break;
      }
    }

    if (!checkedOneEqual) {
      if (expected == actual && i == 1) {
        checkedOneEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);

         alerts1('success','Z₁+Z₂ == f(Y)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');   
         variableOne.disabled=false;
         variableTwo.disabled=false;
        console.log(learningValue, expected, actual);
        cells[5].style.border = "2px solid green";
        cells[7].style.border = "2px solid green";
        cells[8].innerHTML = 0;
        cells[9].innerHTML = 0;
        cells[10].innerHTML = weightOneVal;
        cells[11].innerHTML = weightTwoVal;
       
        weightOne.value = weightOneVal;
        weightTwo.value = weightTwoVal;
        activationBtn.disabled = true;  
        check.disabled = true; 
        update.disabled = true;
        submit.disabled = false;
     
        analyzeOT2.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          z1: cells[3].innerHTML,
          z2: cells[4].innerHTML,
          t: cells[5].innerHTML || "",
          y: cells[6].innerHTML,
          fy: cells[7].innerHTML,
          dv1: cells[8].innerHTML,
          dv2: cells[9].innerHTML,
          nv1: cells[10].innerHTML,
          nv2: cells[11].innerHTML,
        });
        console.log(analyzeOT2);
        console.log(i, "checked fro =");
      
      }
    }
    if (!checkedTwoEqual) {
      if (expected == actual && i == 2) {
        checkedTwoEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        alerts1('success','Z₁+Z₂ == f(Y)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');   
        variableOne.disabled=false;
        variableTwo.disabled=false;
        console.log(learningValue, expected, actual);
        cells[5].style.border = "2px solid green";
        cells[7].style.border = "2px solid green";
        cells[8].innerHTML = 0;
        cells[9].innerHTML = 0;
        cells[10].innerHTML = weightOneVal;
        cells[11].innerHTML = weightTwoVal;
        
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
      
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;
       
        analyzeOT2.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          z1: cells[3].innerHTML,
          z2: cells[4].innerHTML,
          t: cells[5].innerHTML || "",
          y: cells[6].innerHTML,
          fy: cells[7].innerHTML,
          dv1: cells[8].innerHTML,
          dv2: cells[9].innerHTML,
          nv1: cells[10].innerHTML,
          nv2: cells[11].innerHTML,
        });
        console.log(analyzeOT2);
        console.log(i, "checked fro =");
        
      }
    }
    if (!checkedThreeEqual) {
      if (expected == actual && i == 3) {
        checkedThreeEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        alerts1('success','Z₁+Z₂ == f(Y)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');   
        variableOne.disabled=false;
        variableTwo.disabled=false;
        console.log(learningValue, expected, actual);
        cells[5].style.border = "2px solid green";
        cells[7].style.border = "2px solid green";
        cells[8].innerHTML = 0;
        cells[9].innerHTML = 0;
        cells[10].innerHTML = weightOneVal;
        cells[11].innerHTML = weightTwoVal;
   
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
      
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;
    
        analyzeOT2.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          z1: cells[3].innerHTML,
          z2: cells[4].innerHTML,
          t: cells[5].innerHTML || "",
          y: cells[6].innerHTML,
          fy: cells[7].innerHTML,
          dv1: cells[8].innerHTML,
          dv2: cells[9].innerHTML,
          nv1: cells[10].innerHTML,
          nv2: cells[11].innerHTML,
        });
        console.log(analyzeOT2);
        console.log(i, "checked fro =");
        // weightOne.disabled = false;
        // weightTwo.disabled = true;
      }
    }
    if (!checkedFourEqual) {
      if (expected == actual && i == 4) {
        checkedFourEqual = true;
        rowNum = 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        alerts1('success','Z₁+Z₂ == f(Y)','As the expected and computed values are equal, please select a different combination for X₁ and X₂, then click the <b style="color:#004E86">SUBMIT</b> button.');   
       
        console.log(learningValue, expected, actual);
        cells[5].style.border = "2px solid green";
        cells[7].style.border = "2px solid green";
        cells[8].innerHTML = 0;
        cells[9].innerHTML = 0;
        cells[10].innerHTML = weightOneVal;
        cells[11].innerHTML = weightTwoVal;
        
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
       
        graph.disabled = false;
       
       
        check.disabled = true;
      
      
        analyzeOT2.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          z1: cells[3].innerHTML,
          z2: cells[4].innerHTML,
          t: cells[5].innerHTML || "",
          y: cells[6].innerHTML,
          fy: cells[7].innerHTML,
          dv1: cells[8].innerHTML,
          dv2: cells[9].innerHTML,
          nv1: cells[10].innerHTML,
          nv2: cells[11].innerHTML,
        });

        console.log(analyzeOT2, analyzeOT2.length);
        if (analyzeOT2.length < 4) {
          analyzeOT2 = [];
        }
        console.log(analyzeOT2);
        showAnalyzeTable();
        analyzeCanva();
        console.log(i, "checked fro =");
      }
    }
  }

  check.disabled = true;

}


//update button
update.addEventListener("click", () => {
  
  lrCount = lrCount + 1;
  checkCount = checkCount + 1;
  if (lrCount == 1 && z2==true) {
    Swal.fire({
      icon:'info',
      title: "Learning rate (α)",
      text:'The learning rate is set at a constant value of 1.5.',
      allowOutsideClick: false,
      confirmButtonText: "SUBMIT",
      customClass: {
        container: "swal2-container",
        popup: "swal-popup",
  title: "swal-title",
  content: "swal-content",
      },
  
    }).then((result) => {
      if(result.isConfirmed)
  {
          learningRate2[0].innerHTML = 1.5;
          learningRate2[1].innerHTML = 1.5;
          learningValue = 1.5;
  }
  });
  }
  else if (lrCount == 1) {
    Swal.fire({
      icon:'info',
      title: "Learning rate (α)",
      text:'The learning rate is set at a constant value of 1.5.',
      allowOutsideClick: false,
      confirmButtonText: "SUBMIT",
      customClass: {
        container: "swal2-container",
        popup: "swal-popup",
  title: "swal-title",
  content: "swal-content",
      },
  
    }).then((result) => {
      if(result.isConfirmed)
  {
          learningRate[0].innerHTML = 1.5;
          learningRate[1].innerHTML = 1.5;
          learningValue = 1.5;
  }
  });
  }
  
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfUpdate();
  }
  if (putInTwo) {
    table2 = document.getElementById("myTable2");
    partOfUpdate();
  }
});



function partOfUpdate() {
  console.log("working thre");
  update.disabled = true;
 
  console.log(rowNum);
  var row = table.rows[rowNum];
  var cells = row.cells;
  var x1 = Number(cells[1].innerHTML);
  var x2 = Number(cells[2].innerHTML);
  var w1 = Number(weightOneVal);
  var w2 = Number(weightTwoVal);
  var t = Number(cells[3].innerHTML);
  var a = Number(cells[5].innerHTML);
  var parentElement = document.getElementById("superscript");
  parentElement.innerHTML = "";
  var submitNewWeight = document.querySelector("#calculate-new-weight");
  var resetWeight = document.querySelector("#reset-input-values");

  var submitNewWeightz2 = document.querySelector("#calculate-new-weight-z2");
  var resetWeightz2 = document.querySelector("#reset-input-values-z2");

  var oldWeightOne = document.querySelector("#old-weight-one");
  var targetVal = document.querySelector("#target-one");
  var inputOne = document.querySelector("#input-one");
  var inputX1 = document.querySelector("#input-x1");

  var oldWeightTwo = document.querySelector("#old-weight-two");
  var targetValTwo = document.querySelector("#target-two");
  var inputTwo = document.querySelector("#input-two");
  var inputX2 = document.querySelector("#input-x2");
 

  var newWeightOneDiv = document.querySelector("#new-weight-one-div");
  var newWeightOneValue = document.querySelector("#new-weight-one-value");
  var newWeightTwoDiv = document.querySelector("#new-weight-two-div");
  var newWeightTwoValue = document.querySelector("#new-weight-two-value");

  var newWeightOneDiv2 = document.querySelector("#new-weight-one-div2");
  var newWeightOneValue2 = document.querySelector("#new-weight-one-value2");
  var newWeightTwoDiv2 = document.querySelector("#new-weight-two-div2");
  var newWeightTwoValue2 = document.querySelector("#new-weight-two-value2");

  oldWeightTwo.disabled = true;
  targetValTwo.disabled = true;
  inputTwo.disabled = true;
  inputX2.disabled = true;


  oldWeightOne.style.cursor = `pointer`;
  targetVal.style.cursor = `pointer`;
  inputOne.style.cursor = `pointer`;
  inputX1.style.cursor = `pointer`;

  oldWeightTwo.style.cursor = `not-allowed`;
  targetValTwo.style.cursor = `not-allowed`;
  inputTwo.style.cursor = `not-allowed`;
  inputX2.style.cursor = `not-allowed`;


  var checkWeightOne, checkWeightTwo;
  checkWeightOne = true;
  checkWeightTwo = false;

 
  if(z2==true)
  {
    oldWeight2Two.disabled = true;
    targetVal2Two.disabled = true;
    input2Two.disabled = true;
    input2X2.disabled = true;

    oldWeight2One.style.cursor = `pointer`;
    target2Val.style.cursor = `pointer`;
    input2One.style.cursor = `pointer`;
    input2X1.style.cursor = `pointer`;
  
    oldWeight2Two.style.cursor = `not-allowed`;
    targetVal2Two.style.cursor = `not-allowed`;
    input2Two.style.cursor = `not-allowed`;
    input2X2.style.cursor = `not-allowed`;
  
    calculationDiv2.style.display = "block";
    console.log(calculationDiv2.style.display);
  }
  else{
    calculationDiv.style.display = "block";
    console.log(calculationDiv.style.display);
  }
   
  resetWeight.addEventListener("click", () => {
    console.log("ok");
  
    if (checkWeightTwo) {
      oldWeightTwo.value = "";
      targetValTwo.value = "";
      inputTwo.value = "";
      inputX2.value = "";
      oldWeightTwo.style.border = "1px solid black";
      targetValTwo.style.border = "1px solid black";
      inputTwo.style.border = "1px solid black";
      inputX2.style.border = "1px solid black";
    }
    if (checkWeightOne) {
      oldWeightOne.value = "";
      targetVal.value = "";
      inputOne.value = "";
      inputX1.value = "";
      oldWeightOne.style.border = "1px solid black";
      targetVal.style.border = "1px solid black";
      inputOne.style.border = "1px solid black";
      inputX1.style.border = "1px solid black";
    }
  });

  resetWeightz2.addEventListener("click", () => {
    console.log("ok");
  
    if (checkWeightTwo) {
      oldWeight2Two.value = "";
      targetVal2Two.value = "";
      input2Two.value = "";
      input2X2.value = "";
      oldWeight2Two.style.border = "1px solid black";
      targetVal2Two.style.border = "1px solid black";
      input2Two.style.border = "1px solid black";
      input2X2.style.border = "1px solid black";
    }
    if (checkWeightOne) {
      oldWeight2One.value = "";
      target2Val.value = "";
      input2One.value = "";
      input2X1.value = "";
      oldWeight2One.style.border = "1px solid black";
      target2Val.style.border = "1px solid black";
      input2One.style.border = "1px solid black";
      input2X1.style.border = "1px solid black";
    }
  });

  submitNewWeight.addEventListener("click", () => {
    

    if (checkWeightTwo) {
      if (oldWeightTwo.value != w2) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.')
        oldWeightTwo.style.border = "1px solid red";
        // return;
      }
      if (targetValTwo.value != t) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.')
        targetValTwo.style.border = "1px solid red";
        // return;
      }
      if (inputTwo.value != a) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.')
        inputTwo.style.border = "1px solid red";
        // return;
      }
      if (inputX2.value != x2) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.')
        inputX2.style.border = "1px solid red";
        // return;
      }
      if (oldWeightTwo.value == w2) {
        oldWeightTwo.style.border = "1px solid black";
        // return;
      }
      if (targetValTwo.value == t) {
        targetValTwo.style.border = "1px solid black";
        // return;
      }
      if (inputTwo.value == a) {
        inputTwo.style.border = "1px solid black";
        // return;
      }
      if (inputX2.value == x2) {
        inputX2.style.border = "1px solid black";
        // return;
      }

      if (
        oldWeightTwo.value == "" ||
        targetValTwo.value == "" ||
        inputTwo.value == "" || 
        inputX2.value == ""
      ) {
        alerts1('info','','Please provide the necessary value in the highlighted input box.');

        if (oldWeightTwo.value == "") {
          oldWeightTwo.style.border = "1px solid red";
          // return;
        }
        if (targetValTwo.value == "") {
          targetValTwo.style.border = "1px solid red";
          // return;
        }
        if (inputTwo.value == "") {
          inputTwo.style.border = "1px solid red";
          // return;
        }
        if (inputX2.value == "") {
          inputX2.style.border = "1px solid red";
          // return;
        }
        return;
      }

      if (
        oldWeightTwo.value == w2 &&
        targetValTwo.value == t &&
        inputTwo.value == a && 
        inputX2.value == x2
      ) {
        cells[7].innerHTML = learningValue * (t - a) * x2;
        updatedWeight2 = Number(w2 + learningValue * (t - a) * x2);
        cells[9].innerHTML = updatedWeight2.toFixed(2);
        weightTwo.value = updatedWeight2.toFixed(2);
        oldWeightTwo.disabled = true;
        targetValTwo.disabled = true;
        inputTwo.disabled = true;
        inputX2.disabled = true;
        
        checkWeightTwo = false;

        newWeightTwoDiv.style.display = "none";
        newWeightTwoValue.innerText = updatedWeight2.toFixed(2);

        oldWeightOne.value = "";
        targetVal.value = "";
        inputOne.value = "";
        inputX1.value = "";
        oldWeightTwo.value = "";
        targetValTwo.value = "";
        inputTwo.value = "";
        inputX2.value = "";
        
        oldWeightOne.disabled = false;
        targetVal.disabled = false;
        inputOne.disabled = false;
        inputX1.disabled = false;
        oldWeightTwo.disabled = true;
        targetValTwo.disabled = true;
        inputTwo.disabled = true;
        inputX2.disabled = false;

        oldWeightOne.style.border = "1px solid black";
        targetVal.style.border = "1px solid black";
        inputOne.style.border = "1px solid black";
        inputX1.style.border = "1px solid black";
        oldWeightTwo.style.border = "1px solid black";
        targetValTwo.style.border = "1px solid black";
        inputTwo.style.border = "1px solid black";
        inputX2.style.border = "1px solid black";

        calculationDiv.style.display = "none";
        calculationDiv2.style.display = "none";
        newWeightOneDiv.style.display = "block";
        newWeightOneValue.innerText = "";
        newWeightTwoDiv.style.display = "block";
        newWeightTwoValue.innerText = "";
        submit.disabled = false;
      
        updateOne = true;
        if (rowNum == 4) {
          console.log(rowNum);
          graph.disabled = false;
      
          rowNum = 1;
          alerts1('info','','This epoch has been successfully completed.<br>Now, click on <b style="color:#004E86">NEXT</b> button to start new epoch.');
          
        } else {
          console.log(rowNum);
 
            alerts1('success','Weights updated!!','Begin the computation again with the updated weights.<br> Select a value for X<sub>1</sub> and X<sub>2</sub> and click on <b style="color:#004E86">SUBMIT</b> button.');
            restartCalculation();
        }
        rowNum = rowNum + 1;

        console.log(updateOne);
        return;
       
      }
    }
    if (checkWeightOne) {
      if (
        oldWeightOne.value == "" ||
        targetVal.value == "" ||
        inputOne.value == "" || 
        inputX1.value == ""
      ) {
        alerts1('info','','Kindly fill the values for the highlighted inputs.');

        if (oldWeightOne.value == "") {
          oldWeightOne.style.border = "1px solid red";
         
        }
        if (targetVal.value == "") {
          targetVal.style.border = "1px solid red";
        }
        if (inputOne.value == "") {
          inputOne.style.border = "1px solid red";
        }
        if (inputX1.value == "") {
          inputX1.style.border = "1px solid red";
        }
               
        return;
      }

      if (oldWeightOne.value != w1) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
      
        oldWeightOne.style.border = "1px solid red";

      }
      if (inputX1.value != x1) {
       
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        inputX1.style.border = "1px solid red";

      }
      if (targetVal.value != t) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        targetVal.style.border = "1px solid red";

      }
      if (inputOne.value != a) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        inputOne.style.border = "1px solid red";

      }
      if (oldWeightOne.value == w1) {
        oldWeightOne.style.border = "1px solid black";

      }
      if (targetVal.value == t) {
        targetVal.style.border = "1px solid black";

      }
      if (inputOne.value == a) {
        inputOne.style.border = "1px solid black";
      }
      if (inputX1.value == x1) {
        inputX1.style.border = "1px solid black";
      }

      if (
        oldWeightOne.value == w1 &&
        targetVal.value == t &&
        inputOne.value == a && 
        inputX1.value == x1
      ) {
        cells[6].innerHTML = learningValue * (t - a)* x1;
        updatedWeight1 = Number(w1 + learningValue * (t - a) * x1);
        cells[8].innerHTML = updatedWeight1.toFixed(2);
        weightOne.value = updatedWeight1.toFixed(2);
        oldWeightTwo.disabled = false;
        targetValTwo.disabled = false;
        inputTwo.disabled = false;
        inputX2.disabled = false;
        oldWeightOne.disabled = true;
        targetVal.disabled = true;
        inputOne.disabled = true;
        inputX1.disabled = true;
        oldWeightOne.style.cursor = `not-allowed`;
        targetVal.style.cursor = `not-allowed`;
        inputOne.style.cursor = `not-allowed`;
        inputX1.style.cursor = `not-allowed`;
        oldWeightTwo.style.cursor = `pointer`;
        targetValTwo.style.cursor = `pointer`;
        inputTwo.style.cursor = `pointer`;
        inputX2.style.cursor = `pointer`;
    
        reDrawCanva();
        checkWeightOne = false;
        checkWeightTwo = true;
        newWeightOneDiv.style.display = "none";
        newWeightOneValue.innerText = updatedWeight1.toFixed(2);
        return;
      }
    }

    return;
  });

  submitNewWeightz2.addEventListener("click", () => {
    

    if (checkWeightTwo) {
      if (oldWeight2Two.value != w2) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        oldWeight2Two.style.border = "1px solid red";
        // return;
      }
      if (targetVal2Two.value != t) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        targetVal2Two.style.border = "1px solid red";
   
      }
      if (input2Two.value != a) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        input2Two.style.border = "1px solid red";
     
      }
      if (input2X2.value != x2) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        input2X2.style.border = "1px solid red";
  
      }
      if (oldWeight2Two.value == w2) {
        oldWeight2Two.style.border = "1px solid black";
 
      }
      if (targetVal2Two.value == t) {
        targetVal2Two.style.border = "1px solid black";

      }
      if (input2Two.value == a) {
        input2Two.style.border = "1px solid black";
  
      }
      if (input2X2.value == x2) {
        input2X2.style.border = "1px solid black";

      }

      if (
        oldWeight2Two.value == "" ||
        targetVal2Two.value == "" ||
        input2Two.value == "" || 
        input2X2.value == ""
      ) {
        alerts1('info','','Please provide the necessary value in the highlighted input box.');

        if (oldWeight2Two.value == "") {
          oldWeight2Two.style.border = "1px solid red";
   
        }
        if (targetVal2Two.value == "") {
          targetVal2Two.style.border = "1px solid red";

        }
        if (input2Two.value == "") {
          input2Two.style.border = "1px solid red";
 
        }
        if (input2X2.value == "") {
          input2X2.style.border = "1px solid red";
        
        }
        return;
      }

      if (
        oldWeight2Two.value == w2 &&
        targetVal2Two.value == t &&
        input2Two.value == a && 
        input2X2.value == x2
      ) {
        cells[7].innerHTML = learningValue * (t - a) * x2;
        updatedWeight2 = Number(w2 + learningValue * (t - a) * x2);
        cells[9].innerHTML = updatedWeight2.toFixed(2);
        weightTwo.value = updatedWeight2.toFixed(2);
        oldWeight2Two.disabled = true;
        targetVal2Two.disabled = true;
        input2Two.disabled = true;
        input2X2.disabled = true;
        
        checkWeightTwo = false;

        newWeightTwoDiv2.style.display = "none";
        newWeightTwoValue2.innerText = updatedWeight2.toFixed(2);

        oldWeight2One.value = "";
        target2Val.value = "";
        input2One.value = "";
        input2X1.value = "";
        oldWeight2Two.value = "";
        targetVal2Two.value = "";
        input2Two.value = "";
        input2X2.value = "";
        
        oldWeight2One.disabled = false;
        target2Val.disabled = false;
        input2One.disabled = false;
        input2X1.disabled = false;
        oldWeight2Two.disabled = true;
        targetVal2Two.disabled = true;
        input2Two.disabled = true;
        input2X2.disabled = false;

        oldWeight2One.style.border = "1px solid black";
        target2Val.style.border = "1px solid black";
        input2One.style.border = "1px solid black";
        input2X1.style.border = "1px solid black";
        oldWeight2Two.style.border = "1px solid black";
        targetVal2Two.style.border = "1px solid black";
        input2Two.style.border = "1px solid black";
        input2X2.style.border = "1px solid black";

        calculationDiv.style.display = "none";
        calculationDiv2.style.display = "none";
        newWeightOneDiv2.style.display = "block";
        newWeightOneValue2.innerText = "";
        newWeightTwoDiv2.style.display = "block";
        newWeightTwoValue2.innerText = "";
        
        submit.disabled = false;
      
        updateOne = true;
        if (rowNum == 4) {
          console.log(rowNum);
          graph.disabled = false;
      
          rowNum = 1;
          alerts1('info','','This epoch has been successfully completed.<br>Now, click on <b style="color:#004E86">NEXT</b> button to start new epoch.');
          
        } else {
          console.log(rowNum);
           
            alerts1('success','Weights updated!!','Begin the computation again with the updated weights.<br> Select a value for X<sub>1</sub> and X<sub>2</sub> and click on <b style="color:#004E86">SUBMIT</b> button.');
            restartCalculation();
        }
        rowNum = rowNum + 1;

        console.log(updateOne);
        return;
       
      }
    }
    if (checkWeightOne) {
      if (
        oldWeight2One.value == "" ||
        target2Val.value == "" ||
        input2One.value == "" || 
        input2X1.value == ""
      ) {
        alerts1('info','','Kindly fill the values for the highlighted inputs.');

        if (oldWeight2One.value == "") {
          oldWeight2One.style.border = "1px solid red";
         
        }
        if (target2Val.value == "") {
          target2Val.style.border = "1px solid red";
        }
        if (input2One.value == "") {
          inputO2ne.style.border = "1px solid red";
        }
        if (input2X1.value == "") {
          input2X1.style.border = "1px solid red";
        }
               
        return;
      }

      if (oldWeight2One.value != w1) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        oldWeight2One.style.border = "1px solid red";
      }
      if (input2X1.value != x1) {
       
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        input2X1.style.border = "1px solid red";
      }
      if (target2Val.value != t) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        target2Val.style.border = "1px solid red";
      }
      if (input2One.value != a) {
        alerts1('error','','Kindly fill the correct inputs in the highlighted input box.');
        input2One.style.border = "1px solid red";
      }
      if (oldWeight2One.value == w1) {
        oldWeight2One.style.border = "1px solid black";
      }
      if (target2Val.value == t) {
        target2Val.style.border = "1px solid black";
      }
      if (input2One.value == a) {
        input2One.style.border = "1px solid black";
      }
      if (input2X1.value == x1) {
        input2X1.style.border = "1px solid black";
      }

      if (
        oldWeight2One.value == w1 &&
        target2Val.value == t &&
        input2One.value == a && 
        input2X1.value == x1
      ) {
        cells[6].innerHTML = learningValue * (t - a)* x1;
        updatedWeight1 = Number(w1 + learningValue * (t - a) * x1);
        cells[8].innerHTML = updatedWeight1.toFixed(2);
        weightOne.value = updatedWeight1.toFixed(2);
        oldWeight2Two.disabled = false;
        targetVal2Two.disabled = false;
        input2Two.disabled = false;
        input2X2.disabled = false;
        oldWeight2One.disabled = true;
        target2Val.disabled = true;
        input2One.disabled = true;
        input2X1.disabled = true;
        oldWeight2One.style.cursor = `not-allowed`;
        target2Val.style.cursor = `not-allowed`;
        input2One.style.cursor = `not-allowed`;
        input2X1.style.cursor = `not-allowed`;
        oldWeight2Two.style.cursor = `pointer`;
        targetVal2Two.style.cursor = `pointer`;
        input2Two.style.cursor = `pointer`;
        input2X2.style.cursor = `pointer`;
        
        reDrawCanva();
        checkWeightOne = false;
        checkWeightTwo = true;
        newWeightOneDiv2.style.display = "none";
        newWeightOneValue2.innerText = updatedWeight1.toFixed(2);
        return;
      }
    }

    return;
  });

  if (rowNum == 1) {
    var calHeader = document.querySelector(".calculation-header");
    var superScript = document.createElement("sup");
    superScript.textContent = "st";
    var parentElement = document.getElementById("superscript");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;
  }
  if (rowNum == 2) {
    var calHeader = document.querySelector(".calculation-header");
    var superScript = document.createElement("sup");
    superScript.textContent = "nd";
    var parentElement = document.getElementById("superscript");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;
  }
  if (rowNum == 3) {
    var calHeader = document.querySelector(".calculation-header");
    var superScript = document.createElement("sup");
    superScript.textContent = "rd";
    var parentElement = document.getElementById("superscript");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;
  }
  if (rowNum == 4) {
    var calHeader = document.querySelector(".calculation-header");
    var superScript = document.createElement("sup");
    superScript.textContent = "th";
    var parentElement = document.getElementById("superscript");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;

    graph.disabled = false;
   
  }


  if (rowNum == 1 && z2==true) {
    var calHeader = document.querySelector(".calculation-header2");
    var superScript = document.createElement("sup");
    superScript.textContent = "st";
    var parentElement = document.getElementById("superscript2");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;
  }
  if (rowNum == 2 && z2==true) {
    var calHeader = document.querySelector(".calculation-header2");
    var superScript = document.createElement("sup");
    superScript.textContent = "nd";
    var parentElement = document.getElementById("superscript2");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;
  }
  if (rowNum == 3 && z2==true) {
    var calHeader = document.querySelector(".calculation-header2");
    var superScript = document.createElement("sup");
    superScript.textContent = "rd";
    var parentElement = document.getElementById("superscript2");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;
  }
  if (rowNum == 4 && z2==true) {
    var calHeader = document.querySelector(".calculation-header2");
    var superScript = document.createElement("sup");
    superScript.textContent = "th";
    var parentElement = document.getElementById("superscript2");
    parentElement.appendChild(superScript);
    calHeader.innerText = "For " + rowNum;

    graph.disabled = false;
   
  }

  update.disabled = true;
  check.disabled = true;
  activationBtn.disabled = true;
 
}

//next button
graph.addEventListener("click", () => {
  if (putInOne) {
    for (let i = 0; i < sNo; i++) {
      table = document.getElementById("myTable");
      deleteLastRow();
    }
  }
  variableOne.disabled=false;
  variableTwo.disabled=false;
  if(outputLayer==false)
  {
    table = document.getElementById("myTable");
    var row = table.rows[0];
    var cells = row.cells;
    cells[3].innerHTML = 'X₁\'.X₂';
    cells[4].innerHTML = 'Z₂';
    cells[5].innerHTML = 'f(Z₂)';
    cells[6].innerHTML = 'ΔW₁₂';
    cells[7].innerHTML = 'ΔW₂₂';
    cells[8].innerHTML = 'W₁₂';
    cells[9].innerHTML = 'W₂₂';
  
    document.getElementById("weight1").innerHTML=" &nbsp; &nbsp;W<sub>12</sub>:";
    document.getElementById("weight2").innerHTML=" &nbsp; &nbsp;W<sub>22</sub>:";
  
    z2=true;
    x1 = "X";
    x2 = "X";
    one="1"
    two = "2";
    epochNum.innerText ="Z₂" ;
  }


  if(outputLayer==true)
  {
    z2=false;
    document.getElementById("myTable").style.display="none";
    document.getElementById("myTable2").style.display="block";

    document.getElementById("weight1").innerHTML=" &nbsp; &nbsp;V<sub>1</sub>:";
    document.getElementById("weight2").innerHTML=" &nbsp; &nbsp;V<sub>2</sub>:";
  
    x1 = "X";
    x2 = "X";
    one="1"
    two = "2";
    epochNum.innerText = "Y";
  }

  weightOne.value = "";
  weightTwo.value = "";

  weightOne.disabled = false;
  weightTwo.disabled = false;
  generateWeight.disabled = false;

  weightOneVal = "";
  weightTwoVal = "";
  putInOne = true;

  activationBtn.disabled = true;
  check.disabled = true;
  update.disabled = true;
  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;

  // var checkedOneEqual, checkedTwoEqual, checkedThreeEqual, checkedFourEqual;
  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;
  submit.disabled = false;


  updateOne = false;
  updateTwo = false;
  updateThree = false;
  updateFour = false;
  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;
  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;
  activationRowOne = true;
  activationRowTwo = false;
  activationRowThree = false;
  activationRowFour = false;
  sNo = 0;
  rowNum = 1;

  graph.disabled = true;
  reDrawCanva();
  
});

//generate
generateWeight.addEventListener("click", () => {
 
  weightOne.value = 1;
  weightTwo.value = 1;

  weightOne.disabled = true;
  weightTwo.disabled = true;
  //biasInput.disabled = true;
  generateWeight.disabled = true;
  
});

//activation
var activeOne, activeTwo, activeThree, activeFour;
(activeOne = false),
  (activeTwo = false),
  (activeThree = false),
  (activeFour = false);
activationBtn.addEventListener("click", () => {
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfActivation();
  }

  if (putInTwo) {
    table2 = document.getElementById("myTable2");
    partOfActivation();
  }
});

var activationRowOne, activationRowTwo, activationRowThree, activationRowFour;
activationRowOne = true;
activationRowTwo = false;
activationRowThree = false;
activationRowFour = false;

function findActivationValue(x1 , w1,  x2 , w2)
{
  var sum = x1 * w1 + x2 * w2;
  console.log(x1, x2, w1, w2, sum);
  if(z2==true)
  {
    Swal.fire({
      title: "Here, the threshold value is set to 1 for the step activation function.",
      confirmButtonText: "OK",
      allowOutsideClick: false,       
      html: `<img src="images/stepf2.png" style="width:35%"> <br><br> Now, click on <b style="color:#004E86">CHECK</b> button.`,
      showCancelButton: false,
      customClass: {
        container: "swal2-container",
        popup: "swal-popup",
  title: "swal-title",
  content: "swal-content",
      },
    });
  }
  else{
    Swal.fire({
      title: "Here, the threshold value is set to 1 for the step activation function.",
      confirmButtonText: "OK",
      allowOutsideClick: false,       
      html: `<img src="images/stepf.png" style="width:35%"> <br><br> Now, click on <b style="color:#004E86">CHECK</b> button.`,
      showCancelButton: false,
      customClass: {
        container: "swal2-container",
        popup: "swal-popup",
  title: "swal-title",
  content: "swal-content",
      },
    });
  }
 
 return sum;
}

function partOfActivation() {
  check.disabled = false;

  if(outputLayer==true)
  {
    var rowCount = table2.rows.length;
  console.log(rowCount);

  for (var i = 1; i < rowCount; i++) {
    if (i == 1) {
      if (activationRowOne) {
        var row = table2.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[3].innerHTML);
        var x2 = parseInt(cells[4].innerHTML);
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
       
        var sum = x1 * w1 + x2 * w2;
        console.log(x1, x2, w1, w2, sum);
                
          Swal.fire({
            title: "Here, the threshold value is set to 1 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,       
            html: `<img src="images/stepOL.png" style="width:35%"> <br><br> Now, click on <b style="color:#004E86">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal2-container",
              popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
            },
          });
        
       
        var threshold = 1;
        if (sum < threshold) {  
          cells[7].innerHTML = 0;
          cells[7].style.border = "2px solid #80dff4";
        }
        if (sum >= threshold) {
          cells[7].innerHTML = 1;
          cells[7].style.border = "2px solid #80dff4";
        }
        
        activationRowOne = false;
        activationRowTwo = true;
      }
    }
    if (i == 2) {
      if (activationRowTwo) {
        var row = table2.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[3].innerHTML);
        var x2 = parseInt(cells[4].innerHTML);
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
      
        var sum = x1 * w1 + x2 * w2;
        console.log(x1, x2, w1, w2, sum);
     
          Swal.fire({
            title: "Here, the threshold value is set to 1 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,       
            html: `<img src="images/stepOL.png" style="width:35%"> <br><br> Now, click on <b style="color:#004E86">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal2-container",
              popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
            },
          });
      
        var threshold = 1;
        if (sum < threshold) {
          
          cells[7].innerHTML = 0;
          cells[7].style.border = "2px solid #80dff4";
        }
        if (sum >= threshold) {
          
          cells[7].innerHTML = 1;
          cells[7].style.border = "2px solid #80dff4";
        }
       
        activationRowTwo = false;
        activationRowThree = true;
      }
    }
    if (i == 3) {
      if (activationRowThree) {
        var row = table2.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[3].innerHTML);
        var x2 = parseInt(cells[4].innerHTML);
        
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
       
        var sum = x1 * w1 + x2 * w2;
        console.log(x1, x2, w1, w2, sum);
        
          Swal.fire({
            title: "Here, the threshold value is set to 1 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,       
            html: `<img src="images/stepOL.png" style="width:35%"> <br><br> Now, click on <b style="color:#004E86">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal2-container",
              popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
            },
          });
       
        var threshold = 1;
        if (sum < threshold) {
          
          cells[7].innerHTML = 0;
          cells[7].style.border = "2px solid #80dff4";
        }
        if (sum >= threshold) {
          
          cells[7].innerHTML = 1;
          cells[7].style.border = "2px solid #80dff4";
        }
      
        activationRowThree = false;
        activationRowFour = true;
      }
    }
    if (i == 4) {
      if (activationRowFour) {
        var row = table2.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[3].innerHTML);
        var x2 = parseInt(cells[4].innerHTML);
        
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
        
        var sum = x1 * w1 + x2 * w2;
        console.log(x1, x2, w1, w2, sum);
       
          Swal.fire({
            title: "Here, the threshold value is set to 1 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,       
            html: `<img src="images/stepOL.png" style="width:35%"> <br><br> Now, click on <b style="color:#004E86">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal2-container",
              popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
            },
          });
       
        var threshold = 1;
        if (sum < threshold) {
          
          cells[7].innerHTML = 0;
          cells[7].style.border = "2px solid #80dff4";
        }
        if (sum >= threshold) {
          
          cells[7].innerHTML = 1;
          cells[7].style.border = "2px solid #80dff4";
        }
       
      }
    }
  }
  }

  else{
    var rowCount = table.rows.length;
    console.log(rowCount);
  
    for (var i = 1; i < rowCount; i++) {
      if (i == 1) {
        if (activationRowOne) {
          var row = table.rows[i];
          var cells = row.cells;
          var x1 = parseInt(cells[1].innerHTML);
          var x2 = parseInt(cells[2].innerHTML);
          var w1 = Number(weightOneVal);
          var w2 = Number(weightTwoVal);
         
          var sum=findActivationValue(x1 , w1,  x2 , w2);
         
          var threshold = 1;
          if (sum < threshold) {  
            cells[5].innerHTML = 0;
            cells[5].style.border = "2px solid #80dff4";
          }
          if (sum >= threshold) {
            cells[5].innerHTML = 1;
            cells[5].style.border = "2px solid #80dff4";
          }
          
          activationRowOne = false;
          activationRowTwo = true;
        }
      }
      if (i == 2) {
        if (activationRowTwo) {
          var row = table.rows[i];
          var cells = row.cells;
          var x1 = parseInt(cells[1].innerHTML);
          var x2 = parseInt(cells[2].innerHTML);
          var w1 = Number(weightOneVal);
          var w2 = Number(weightTwoVal);
        
          var sum=findActivationValue(x1 , w1,  x2 , w2);
          var threshold = 1;
          if (sum < threshold) {
            
            cells[5].innerHTML = 0;
            cells[5].style.border = "2px solid #80dff4";
          }
          if (sum >= threshold) {
            
            cells[5].innerHTML = 1;
            cells[5].style.border = "2px solid #80dff4";
          }
         
          activationRowTwo = false;
          activationRowThree = true;
        }
      }
      if (i == 3) {
        if (activationRowThree) {
          var row = table.rows[i];
          var cells = row.cells;
          var x1 = parseInt(cells[1].innerHTML);
          var x2 = parseInt(cells[2].innerHTML);
          
          var w1 = Number(weightOneVal);
          var w2 = Number(weightTwoVal);
         
          var sum=findActivationValue(x1 , w1,  x2 , w2);
          var threshold = 1;
          if (sum < threshold) {
            
            cells[5].innerHTML = 0;
            cells[5].style.border = "2px solid #80dff4";
          }
          if (sum >= threshold) {
            
            cells[5].innerHTML = 1;
            cells[5].style.border = "2px solid #80dff4";
          }
        
          activationRowThree = false;
          activationRowFour = true;
        }
      }
      if (i == 4) {
        if (activationRowFour) {
          var row = table.rows[i];
          var cells = row.cells;
          var x1 = parseInt(cells[1].innerHTML);
          var x2 = parseInt(cells[2].innerHTML);
          
          var w1 = Number(weightOneVal);
          var w2 = Number(weightTwoVal);
          
          var sum=findActivationValue(x1 , w1,  x2 , w2);
          var threshold = 1;
          if (sum < threshold) {
            
            cells[5].innerHTML = 0;
            cells[5].style.border = "2px solid #80dff4";
          }
          if (sum >= threshold) {
            
            cells[5].innerHTML = 1;
            cells[5].style.border = "2px solid #80dff4";
          }
         
        }
      }
    }
  }
  
  activationBtn.disabled = true;

}

function clearInputs() {

    (weightOne.value = ""),
    (weightTwo.value = ""),
    (variableOne.value = ""),
    (variableTwo.value = "");
}

function addRow() {
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfAddRow();
  }
  if (putInTwo) {
    table2 = document.getElementById("myTable2");
    partOfAddRow2();
  }
}
function partOfAddRow() {
  var x1 = document.getElementById("variable-one").value;
  var x2 = document.getElementById("variable-two").value;
  var w1 = document.getElementById("weight-one").value;
  var w2 = document.getElementById("weight-two").value;

  var rowC = table.rows.length;

console.log(rowC)

  for (var i = 1; i < rowC; i++) {
    var row = table.rows[i];
    var cells = row.cells;
    var existingX1 = cells[1].innerHTML;
    var existingX2 = cells[2].innerHTML;

    
    cells[3].style.border = "1px solid #6EC3FF";
    cells[5].style.border = "1px solid #6EC3FF";
    
    
    if (x1 === existingX1 && x2 === existingX2) {
    
      submit.disabled = false;
      activationBtn.disabled = true;

      Swal.fire({
        title: "Ooops....combination already exist.",
        html:'Please select a different combination for X<sub>1</sub> and X<sub>2</sub>.',
        icon: "error",
        customClass: {
          container: "swal2-container",
          popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
        },
      });
    
      return;
    }
  }

  variableOne.disabled=true;
  variableTwo.disabled=true;

  
  clearInputs();
  var row = table.insertRow(-1);
  var cell0 = row.insertCell(0);

  cell0.innerHTML = ++sNo;

  var cell1 = row.insertCell(1);
  cell1.innerHTML = x1;

  var cell2 = row.insertCell(2);
  cell2.innerHTML = x2;

  var cell3 = row.insertCell(3);

    if (x1 == 0 && x2 == 0) {
      cell3.innerHTML = "0";
      
    }
    if (x1 == 0 && x2 == 1) {
      cell3.innerHTML = "0";
     
    }
    if (x1 == 1 && x2 == 0) {
      cell3.innerHTML = "1";
    
    }
    if (x1 == 1 && x2 == 1) {
      cell3.innerHTML = "0";
    
    }
    if(z2==true)
    {
      if (x1 == 0 && x2 == 0) {
        cell3.innerHTML = "0";
      }
      if (x1 == 0 && x2 == 1) {
        cell3.innerHTML = "1";
      }
      if (x1 == 1 && x2 == 0) {
        cell3.innerHTML = "0";
      }
      if (x1 == 1 && x2 == 1) {
        cell3.innerHTML = "0";
      }
    }

  


  function yin(a,w1,d,w2)
  {
    if(z2!=true)
    {
      Swal.fire({
        title: "Please input your calculated value for Z₁.",
        input: "text",
        confirmButtonText: "SUBMIT",
  
        allowOutsideClick: false,
       a:a,
       d:d,
        html:
          "Z₁ : " +
          "(" +
          a +
          ")" +
          "*" +
          "(" +
          w1 +
          ")" +
          " + " +
          "(" +
          d +
          ")" +
          "*" +
          "(" +
          w2 +
          ")" ,
     
  
        showCancelButton: false,
        customClass: {
          container: "swal2-container",
          popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
        },
        inputValidator: (value) => {
          if (!value) {
            return "Please provide your calculated Z₁ value.";
          } else {
            guessedValue = value;
            actualSum =
              Number(cell1.innerHTML) * Number(w1) +
              Number(cell2.innerHTML) * Number(w2) ;
  
            console.log(actualSum,cell1.innerHTML,w1,cell2.innerHTML,w2);
            var xx = actualSum.toFixed(2);
            if (Number(guessedValue) == Number(xx)) {
              Swal.fire({
                title: 'Now, apply activation function on the summation value.',
                html: 'To apply, click on the <b style="color:#004E86">ACTIVATION FUNCTION</b> button.',
                icon:'info',
                customClass: {
                  container: "swal2-container",
                  popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
                },
            });
           
              cell4.innerText = xx;
              activationBtn.disabled = false;
             
            } else {
              return "Please fill the correct value up to two decimal place";
            }
          }
        },
      });
    }
   

    if(z2==true)
    {
      Swal.fire({
        title: "Please input your calculated value for Z₂.",
        input: "text",
        confirmButtonText: "SUBMIT",
  
        allowOutsideClick: false,
       a:a,
       d:d,
        html:
          "Z₂ : " +
          "(" +
          a +
          ")" +
          "*" +
          "(" +
          w1 +
          ")" +
          " + " +
          "(" +
          d +
          ")" +
          "*" +
          "(" +
          w2 +
          ")" ,
     
  
        showCancelButton: false,
        customClass: {
          container: "swal2-container",
          popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
        },
        inputValidator: (value) => {
          if (!value) {
            return "Please provide your calculated Z₂ value.";
          } else {
            guessedValue = value;
            actualSum =
              Number(cell1.innerHTML) * Number(w1) +
              Number(cell2.innerHTML) * Number(w2) ;
  
            console.log(actualSum,cell1.innerHTML,w1,cell2.innerHTML,w2);
            var xx = actualSum.toFixed(2);
            if (Number(guessedValue) == Number(xx)) {
              Swal.fire({
                title: 'Now, apply activation function on the summation value.',
                html: 'To apply, click on the <b style="color:#004E86">ACTIVATION FUNCTION</b> button.',
                icon:'info',
                customClass: {
                  container: "swal2-container",
                  popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
                },
            });
           
              cell4.innerText = xx;
              activationBtn.disabled = false;
             
            } else {
              return "Please fill the correct value up to two decimal place";
            }
          }
        },
      });
    }
}

  var cell4 = row.insertCell(4);
  var guessedValue, actualSum;
  cell4.classList.add("summation-input-" + rowC);
  cell4.style.border = "2px solid #004E86";

  if (rowC == 1) {
    summationOne = document.querySelector(".summation-input-1");

    summationOne.addEventListener("click", () => {
      cell4.style.border = "1px solid #6EC3FF";
      console.log(cell4.innerText);
      if (cell4.innerText == "") {
        yin(cell1.innerHTML,w1,cell2.innerHTML,w2);

      }
    });
  }

  if (rowC == 2) {
    summationTwo = document.querySelector(".summation-input-2");
    summationTwo.addEventListener("click", () => {
      cell4.style.border = "1px solid #6EC3FF";
      if (cell4.innerText == "") {
        yin(cell1.innerHTML,w1,cell2.innerHTML,w2);

           }
    });
  }
  if (rowC == 3) {
    summationThree = document.querySelector(".summation-input-3");
    summationThree.addEventListener("click", () => {
      cell4.style.border = "1px solid #6EC3FF";
      if (cell4.innerText == "") {
        yin(cell1.innerHTML,w1,cell2.innerHTML,w2);
     
      }
    });
  }
  if (rowC == 4) {
    summationFour = document.querySelector(".summation-input-4");
    summationFour.addEventListener("click", () => {
      cell4.style.border = "1px solid #6EC3FF";
      if (cell4.innerText == "") {
        yin(cell1.innerHTML,w1,cell2.innerHTML,w2);
 
      }
    });
  }
  var cell5 = row.insertCell(5);
  cell5.innerHTML = "";
  var cell6 = row.insertCell(6);
  cell6.innerHTML = "";
  var cell7 = row.insertCell(7);
  cell7.innerHTML = "";
  var cell8 = row.insertCell(8);
  cell8.innerHTML = "";
  var cell9 = row.insertCell(9);
  cell9.innerHTML = "";
}


function partOfAddRow2() {
  var x1 = document.getElementById("variable-one").value;
  var x2 = document.getElementById("variable-two").value;
  var w1 = document.getElementById("weight-one").value;
  var w2 = document.getElementById("weight-two").value;

   var rowC2 = table2.rows.length;

console.log(rowC2)

  for (var i = 1; i < rowC2; i++) {
    var row = table2.rows[i];
    var cells = row.cells;
    var existingX1 = cells[1].innerHTML;
    var existingX2 = cells[2].innerHTML;

    
    cells[5].style.border = "1px solid #6EC3FF";
    cells[7].style.border = "1px solid #6EC3FF";
    
    
    if (x1 === existingX1 && x2 === existingX2) {
    
      submit.disabled = false;
      activationBtn.disabled = true;

      Swal.fire({
        title: "Ooops....combination already exist.",
        html:'Please select a different combination for X<sub>1</sub> and X<sub>2</sub>.',
        icon: "error",
        customClass: {
          container: "swal2-container",
          popup: "swal-popup",
    title: "swal-title",
    content: "swal-content",
        },
      });
    
      return;
    }
  }

  variableOne.disabled=true;
  variableTwo.disabled=true;

  clearInputs();
  var row = table2.insertRow(-1);
  var cell0 = row.insertCell(0);

  cell0.innerHTML = ++sNo;

  var cell1 = row.insertCell(1);
  cell1.innerHTML = x1;

  var cell2 = row.insertCell(2);
  cell2.innerHTML = x2;

  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
   
    if(outputLayer==true)
    {
      if (x1 == 0 && x2 == 0) {
        cell3.innerHTML = "0";
        cell4.innerHTML = "0";
        cell5.innerHTML = "0";
      }
      if (x1 == 0 && x2 == 1) {
        cell3.innerHTML = "0";
        cell4.innerHTML = "1";
        cell5.innerHTML = "1";
      }
      if (x1 == 1 && x2 == 0) {
        cell3.innerHTML = "1";
        cell4.innerHTML = "0";
        cell5.innerHTML = "1";
      }
      if (x1 == 1 && x2 == 1) {
        cell3.innerHTML = "0";
        cell4.innerHTML = "0";
        cell5.innerHTML = "0";
      }
    }
  


  function yin(a,w1,d,w2)
  {
    
      Swal.fire({
        title: "Please input your calculated value for Y.",
        input: "text",
        confirmButtonText: "SUBMIT",
  
        allowOutsideClick: false,
       a:a,
       d:d,
        html:
          "O : " +
          "(" +
          a +
          ")" +
          "*" +
          "(" +
          w1 +
          ")" +
          " + " +
          "(" +
          d +
          ")" +
          "*" +
          "(" +
          w2 +
          ")" ,
     
  
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Please provide your calculated Z₁ value.";
          } else {
            guessedValue = value;
            actualSum =
              Number(cell3.innerHTML) * Number(w1) +
              Number(cell4.innerHTML) * Number(w2) ;
  
            console.log(actualSum,cell3.innerHTML,w1,cell4.innerHTML,w2);
            var xx = actualSum.toFixed(2);
            if (Number(guessedValue) == Number(xx)) {
              Swal.fire({
                title: 'Now, apply activation function on the summation value.',
                html: 'To apply, click on the <b style="color:#004E86">ACTIVATION FUNCTION</b> button.',
                icon:'info',
                customClass: {
                  container: "swal2-container",
                  popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
                },
            });
           
              cell6.innerText = xx;
              activationBtn.disabled = false;
             
            } else {
              return "Please fill the correct value up to two decimal place";
            }
          }
        },
      });
    
   
}
  var cell6 = row.insertCell(6);
  var guessedValue, actualSum;
  cell6.classList.add("summation-input2-" + rowC2);
  cell6.style.border = "2px solid #004E86";

  if (rowC2 == 1) {
    summationOne = document.querySelector(".summation-input2-1");

    summationOne.addEventListener("click", () => {
      cell6.style.border = "1px solid #6EC3FF";
      console.log(cell6.innerText);
      if (cell6.innerText == "") {
        yin(cell3.innerHTML,w1,cell4.innerHTML,w2);

      }
    });
  }

  if (rowC2 == 2) {
    summationTwo = document.querySelector(".summation-input2-2");
    summationTwo.addEventListener("click", () => {
      cell6.style.border = "1px solid #6EC3FF";
      if (cell6.innerText == "") {
        yin(cell3.innerHTML,w1,cell4.innerHTML,w2);

           }
    });
  }
  if (rowC2 == 3) {
    summationThree = document.querySelector(".summation-input2-3");
    summationThree.addEventListener("click", () => {
      cell6.style.border = "1px solid #6EC3FF";
      if (cell6.innerText == "") {
        yin(cell3.innerHTML,w1,cell4.innerHTML,w2);
     
      }
    });
  }
  if (rowC2 == 4) {
    summationFour = document.querySelector(".summation-input2-4");
    summationFour.addEventListener("click", () => {
      cell6.style.border = "1px solid #6EC3FF";
      if (cell6.innerText == "") {
        yin(cell3.innerHTML,w1,cell4.innerHTML,w2);
 
      }
    });
  }

  var cell7 = row.insertCell(7);
  cell7.innerHTML = "";
  var cell8 = row.insertCell(8);
  cell8.innerHTML = "";
  var cell9 = row.insertCell(9);
  cell9.innerHTML = "";
  var cell10 = row.insertCell(10);
  cell10.innerHTML = "";
  var cell11 = row.insertCell(11);
  cell11.innerHTML = "";
}


function deleteLastRow() {
  var rowCount = table.rows.length;

  if (rowCount >= 1) {
    table.deleteRow(rowCount - 1);
    rowCount--;
  }
}


function displays() {

  forTwoInput.style.display = "none";
  selectNumber.style.display = "none";
  networkCanvaOne.style.display = "none";
  networkCanvaTwo.style.display = "none";
  networkCanvaThree.style.display = "none";
  secConSecRow.style.display = "none";
  terminologyDiv.style.display = "none";
  activationBtn.disabled = true;
  check.disabled = true;
  update.disabled = true;
  graph.disabled = true;
  
}
displays();

function generalDiagram() {

  networkCanvaWithOneBallContext.clearRect(0,0,networkCanvaWithOneBall.width,networkCanvaWithOneBall.height); // Clear the canvas

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 38, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#80dff4";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("Input Layer", 10, 255);
  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("X", 32, 45);
  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("1", 45, 50);

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 130, 33);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("11", 142, 37);
  drawArrow(networkCanvaWithOneBallContext, 58, 40, 215, 40, 2, "#004E86");

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 115, 64);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("12", 127, 68);
  drawArrow(networkCanvaWithOneBallContext, 58, 40, 218, 110, 2, "#004E86");

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 62, 72);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("1n", 74, 76);
  drawArrow(networkCanvaWithOneBallContext, 58, 40, 222, 200, 2, "#004E86");

  // second ball
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 120, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#80dff4";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("X", 30, 127);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("2", 45, 132);

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.rotate(-30 * Math.PI / 180);
  networkCanvaWithOneBallContext.fillText("w", 15, 128);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("21", 27, 132);
  networkCanvaWithOneBallContext.rotate(30 * Math.PI / 180);

  drawArrow(networkCanvaWithOneBallContext, 58, 120, 218, 47, 2, "#004E86");

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 112, 133);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("22", 124, 137);

  drawArrow(networkCanvaWithOneBallContext, 58, 120, 215, 120, 2, "#004E86");

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 75, 152);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("2n", 87, 156);

  drawArrow(networkCanvaWithOneBallContext, 58, 120, 218, 209, 2, "#004E86");

  
   
  //dots
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 150, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#80dff4";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.arc(40, 168, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#80dff4";
  networkCanvaWithOneBallContext.fill();
  networkCanvaWithOneBallContext.arc(40, 188, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#80dff4";
  networkCanvaWithOneBallContext.fill();

  // third ball of networkCanvaWithTwoBallContext
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 215, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#80dff4";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("X", 32, 220);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("n", 45, 225);

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";

  networkCanvaWithOneBallContext.rotate(-30 * Math.PI / 180);
  networkCanvaWithOneBallContext.fillText("w", -30, 196);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("n1", -18, 200);
  networkCanvaWithOneBallContext.rotate(30 * Math.PI / 180);

  drawArrow(networkCanvaWithOneBallContext, 58, 215, 222, 54, 2, "#004E86");

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 115, 196);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("n2", 127, 200);

  drawArrow(networkCanvaWithOneBallContext, 58, 215, 218, 130, 2, "#004E86");

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 130, 230);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("nn", 142, 234);

  drawArrow(networkCanvaWithOneBallContext, 58, 215, 215, 215, 2, "#004E86");


  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.rect(17, 15, 43, 224);
  networkCanvaWithOneBallContext.strokeStyle = "#80dff4";
  networkCanvaWithOneBallContext.stroke();

  //hidden layer
  //1st ball
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(235, 38, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#e6bce6";
  networkCanvaWithOneBallContext.fill();
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("Hidden Layer", 190, 255);
  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("H", 225, 45);
  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("1", 235, 50);

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 310, 50);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("11", 322, 54);

  drawArrow(networkCanvaWithOneBallContext, 253, 40, 365, 70, 2, "#004E86");

  networkCanvaWithOneBallContext.beginPath();

  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
 
  networkCanvaWithOneBallContext.rotate(30 * Math.PI / 180);
  networkCanvaWithOneBallContext.fillText("w", 260, -70);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("12", 272, -66);
  networkCanvaWithOneBallContext.rotate(-30 * Math.PI / 180);
  drawArrow(networkCanvaWithOneBallContext, 253, 40, 369, 156, 2, "#004E86");

  //2nd ball

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(235, 120, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#e6bce6";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("H", 225, 127);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("2", 235, 132);

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 310, 84);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("21", 322, 88);

  drawArrow(networkCanvaWithOneBallContext, 253, 120, 365, 80, 2, "#004E86");

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 285, 130);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("22", 297, 134);

  drawArrow(networkCanvaWithOneBallContext, 253, 120, 365, 170, 2, "#004E86");

  //dots
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(235, 150, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#e6bce6";
  networkCanvaWithOneBallContext.fill();
 
  networkCanvaWithOneBallContext.arc(235, 168, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#e6bce6";
  networkCanvaWithOneBallContext.fill();
  networkCanvaWithOneBallContext.arc(235, 188, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#e6bce6";
  networkCanvaWithOneBallContext.fill();

  //3rd ball
   networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(235, 215, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#e6bce6";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("H", 225, 220);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("n", 235, 225);

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.rotate(-34 * Math.PI / 180);
  networkCanvaWithOneBallContext.fillText("w", 120, 300);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("n1", 132, 304);
  networkCanvaWithOneBallContext.rotate(34 * Math.PI / 180);
 
  drawArrow(networkCanvaWithOneBallContext, 253, 215, 367, 90, 2, "#004E86");

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 300, 213);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("n2", 312, 217);

  drawArrow(networkCanvaWithOneBallContext, 253, 215, 367, 180, 2, "#004E86");

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.rect(215, 15, 41, 224);
  networkCanvaWithOneBallContext.strokeStyle = "#e6bce6";
  networkCanvaWithOneBallContext.stroke();

//output layer
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(385, 80, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#f6c511";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("O", 375, 85);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("1", 388, 90);

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(385, 170, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#f6c511";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("O", 375, 175);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("2", 388, 180);

  // output

  drawArrow(networkCanvaWithOneBallContext, 403, 80, 440, 80, 2, "#004E86");
  networkCanvaWithOneBallContext.fillStyle = "#f6c511";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("Output Layer", 340, 240);
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "24px Arial";
  networkCanvaWithOneBallContext.fillText("Y", 445, 88);
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("1", 455, 94);

  drawArrow(networkCanvaWithOneBallContext, 403, 170, 440, 170, 2, "#004E86");
  networkCanvaWithOneBallContext.fillStyle = "#004E86";
  networkCanvaWithOneBallContext.font = "24px Arial";
  networkCanvaWithOneBallContext.fillText("Y", 445, 178);
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("2", 455, 184);

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.rect(365, 55, 41, 140);
  networkCanvaWithOneBallContext.strokeStyle = "#f6c511";
  networkCanvaWithOneBallContext.stroke();

 

}
generalDiagram();

function reDrawCanva() {
  //first ball of networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.clearRect(
    0,
    0,
    networkCanvaWithTwoBall.width,
    networkCanvaWithTwoBall.height
  ); // Clear the canvas

  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(40, 45, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  if (x1 == "X") {
    networkCanvaWithTwoBallContext.fillText(x1, 25, 55);
  } else {
    networkCanvaWithTwoBallContext.fillText(x1, 32, 55);
  }

  networkCanvaWithTwoBallContext.font = "16px Arial";
  networkCanvaWithTwoBallContext.fillText(one, 43, 60);

  networkCanvaWithTwoBallContext.fillStyle = color1;
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(w11, 125, 35);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(one_one, 138, 43);

  drawArrow(networkCanvaWithTwoBallContext, 68, 45, 205, 45, 3, color1);


  networkCanvaWithTwoBallContext.fillStyle = color2;
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(w12, 105, 80);

  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(one_two, 118, 88);

  drawArrow(networkCanvaWithTwoBallContext, 68, 45, 205, 200, 3, color2);
 
  // second ball of networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(40, 205, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";

  if (x2 == "X") {
    networkCanvaWithTwoBallContext.fillText(x2, 25, 215);
  } else {
    networkCanvaWithTwoBallContext.fillText(x2, 32, 215);
  }

  networkCanvaWithTwoBallContext.font = "16px Arial";
  networkCanvaWithTwoBallContext.fillText(two, 45, 220);

  networkCanvaWithTwoBallContext.fillStyle = color1;
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(w21, 115, 175);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(two_one, 128, 181);

  drawArrow(networkCanvaWithTwoBallContext, 68, 205, 205, 49, 3, color1);

  networkCanvaWithTwoBallContext.fillStyle = color2;
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(w22, 125, 222);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(two_two, 138, 228);

  drawArrow(networkCanvaWithTwoBallContext, 68, 205, 205, 205, 3, color2);

  
  //hidden layer circle of networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(235, 45, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#e6bce6";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText(z11, 225, 55);
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(Zone, 237, 60);

  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(235, 205, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#e6bce6";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText(z22, 225, 215);
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(Ztwo, 237, 220);

  //arrows from hidden to output
  drawArrow(networkCanvaWithTwoBallContext, 263, 45, 360, 115, 3, color3);
  networkCanvaWithTwoBallContext.fillStyle = color3;
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(V1, 295, 95);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(Vone, 307, 100);

  drawArrow(networkCanvaWithTwoBallContext, 263, 205, 360, 120, 3, color3);
  networkCanvaWithTwoBallContext.fillStyle = color3;
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(V2, 295, 195);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(Vtwo, 307, 200);

   
  //activation
  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(390, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#f6c511";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText(activation, 385, 127);

  // output

  drawArrow(networkCanvaWithTwoBallContext, 418, 120, 460, 120, 3, "#004E86");
  networkCanvaWithTwoBallContext.fillStyle = "#004E86";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText("Y", 465, 127);
}
reDrawCanva();


function analyzeCanva() {
  //first ball of networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.clearRect(0,0,networkCanvaWithTwoBall.width,networkCanvaWithTwoBall.height); // Clear the canvas

  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(40, 45, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
 
  networkCanvaWithTwoBallAnalyzeContext.fillText("X", 25, 55);
  networkCanvaWithTwoBallAnalyzeContext.font = "16px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText("1", 43, 60);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(w11, 125, 35);
  networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(one_one, 138, 43);

  drawArrow(networkCanvaWithTwoBallAnalyzeContext, 68, 45, 205, 45, 3, "#80dff4");

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(w12, 105, 80);

  networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(one_two, 118, 88);

  drawArrow(networkCanvaWithTwoBallAnalyzeContext, 68, 45, 205, 200, 3, "#80dff4");

  // second ball of networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(40, 205, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
  
  networkCanvaWithTwoBallAnalyzeContext.fillText("X", 25, 215);
  networkCanvaWithTwoBallAnalyzeContext.font = "16px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText("2", 43, 220);


  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallAnalyzeContext.fillText(w21, 115, 175);
  networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(two_one, 128, 181);

  drawArrow(networkCanvaWithTwoBallAnalyzeContext, 68, 205, 205, 49, 3, "#80dff4");

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#80dff4";
  networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(w22, 120, 220);
  networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(two_two, 133, 226);

  drawArrow(networkCanvaWithTwoBallAnalyzeContext, 68, 205, 205, 205, 3, "#80dff4");

//hidden layer circle of networkCanvaWithTwoBallContext
networkCanvaWithTwoBallAnalyzeContext.beginPath();
networkCanvaWithTwoBallAnalyzeContext.arc(235, 45, 28, 0, 2 * Math.PI);

networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#e6bce6";
networkCanvaWithTwoBallAnalyzeContext.fill();

networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText("Z", 225, 55);
networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText("1", 237, 60);

networkCanvaWithTwoBallAnalyzeContext.beginPath();
networkCanvaWithTwoBallAnalyzeContext.arc(235, 205, 28, 0, 2 * Math.PI);

networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#e6bce6";
networkCanvaWithTwoBallAnalyzeContext.fill();

networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText("Z", 225, 215);
networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText("2", 237, 220);

//arrows from hidden to output
drawArrow(networkCanvaWithTwoBallAnalyzeContext, 263, 45, 360, 115, 3, "#e6bce6");
networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#e6bce6";
networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText(V1, 295, 95);
networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText(one, 307, 100);

drawArrow(networkCanvaWithTwoBallAnalyzeContext, 263, 205, 360, 120, 3, "#e6bce6");
networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#e6bce6";
networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText(V2, 295, 195);
networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText(two, 307, 200);

 
//activation
networkCanvaWithTwoBallAnalyzeContext.beginPath();
networkCanvaWithTwoBallAnalyzeContext.arc(390, 120, 28, 0, 2 * Math.PI);

networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#f6c511";
networkCanvaWithTwoBallAnalyzeContext.fill();

networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText(activation, 385, 127);

// output

drawArrow(networkCanvaWithTwoBallAnalyzeContext, 418, 120, 460, 120, 3, "#004E86");
networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#004E86";
networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
networkCanvaWithTwoBallAnalyzeContext.fillText("Y", 465, 127);
}
// analyzeCanva();
function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color) {
  //variables to be used when creating the arrow
  var headlen = 10;
  var angle = Math.atan2(toy - fromy, tox - fromx);

  ctx.save();
  ctx.strokeStyle = color;

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctx.lineTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //draws the paths created above
  ctx.stroke();
  ctx.restore();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function showAnalyzeTable() {
  const data = [...analyzeOT2];

  // Function to generate the table HTML with inline CSS
  function generateTable(data) {
   
    let tableHTML =
      '<table id="myTable2" style="width: 80%; margin-top: 16px; ">';
    tableHTML += "<tr>";
    tableHTML +=
      '<th style="width: 12%; border: 1px solid #6EC3FF;  background-color: #6EC3FF;color:black;">S No</th>';
    tableHTML +=
      '<th style="width: 10%; border: 1px solid #6EC3FF;  background-color: #6EC3FF;color:black;">X<sub>1</sub></th>';
    tableHTML +=
      '<th style="width: 10%; border: 1px solid #6EC3FF;  background-color: #6EC3FF;color:black;">X<sub>2</sub></th>';
    tableHTML +=
      '<th style="width: 10%; border: 1px solid #6EC3FF;  background-color: #6EC3FF;color:black;">X<sub>1</sub>&oplus;X<sub>2</sub></th>';

    data.forEach((item) => {
      tableHTML += `<tr>`;
      tableHTML += `<td style="border: 1px solid #6EC3FF; height: 30px; text-align: center;">${item.sno}</td>`;
      tableHTML += `<td style="border: 1px solid #6EC3FF; height: 30px; text-align: center;">${item.x1}</td>`;
      tableHTML += `<td style="border: 1px solid #6EC3FF; height: 30px; text-align: center;">${item.x2}</td>`;
      tableHTML += `<td style="border: 1px solid #6EC3FF; height: 30px; text-align: center;">${item.t}</td>`;
      tableHTML += `</tr>`;
    });

    tableHTML += "</table>";
    return tableHTML;
  }

  // Display the generated table
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = generateTable(data);
}


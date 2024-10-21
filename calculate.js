//Triangle area......
function TriangleAreaCalculate() {
  //triangle base input....
  const TriangleBaseInput = document.getElementById('Triangle-Base-Input');
  const BaseText = TriangleBaseInput.value;
  const base = parseFloat(BaseText);
  //tringle height input.......
  const TriangleHeightInput = document.getElementById('Triangle-Height-Input');
  const HeightText = TriangleHeightInput.value;
  const height = parseFloat(HeightText);
  //triangle area.....
  const area = 0.5 * base * height;
  const TriangleAreaSpan = document.getElementById('Triangle-Area');
  TriangleAreaSpan.innerText = area;

}


//Rectangle area.....
function RectangleAreaCalculate() {
  //rectangle width input....
  const RectangleWidthInput = document.getElementById('Rectangle-Width-Input');
  const WidthText = RectangleWidthInput.value;
  const width = parseFloat(WidthText);
  //rectangle height input.......
  const RectangleHeightInput = document.getElementById('Rectangle-Height-Input');
  const HeightText = RectangleHeightInput.value;
  const height = parseFloat(HeightText);
  //rectangle area......
  const area = width * height;
  const RectangleAreaSpan = document.getElementById('Rectangle-Area');
  RectangleAreaSpan.innerText = area;
}


//Hrumbus area.....
function HrumbusAreaCalculate() {
  //hrumbus base input....
  const HrumbusBaseInput = document.getElementById('Hrumbus-Base-Input');
  const BaseText = HrumbusBaseInput.value;
  const base = parseFloat(BaseText);
  //hrumbus height input.......
  const HrumbusHeightInput = document.getElementById('Hrumbus-Height-Input');
  const HeightText = HrumbusHeightInput.value;
  const height = parseFloat(HeightText);
  //hrumbus area......
  const area = base * height;
  const HrumbusAreaSpan = document.getElementById('Hrumbus-Area');
  HrumbusAreaSpan.innerText = area;
}
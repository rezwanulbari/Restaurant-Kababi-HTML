
  var slider = document.getElementById("myRange");
  var output = document.getElementById("value");
  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
  slider.addEventListener("mousemove", function () {
    var x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    var color =
      "linear-gradient(90deg, rgba(200,169,106,1)" +
      x +
      "%, rgba(200,169,106,0.2)" +
      x +
      "%)";
    slider.style.background = color;
  });


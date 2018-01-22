(function loaderModule() {
  function clearCircle(context, x, y, radius) {
    context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.clip();
    context.clearRect(x - radius, y - radius, radius * 2, radius * 2);
    context.restore();
  }

  const canvases = document.getElementById('loader').children;

  Array.prototype.forEach.call(canvases, (canvas, i) => {
    canvas.style.display = 'block';
    if (i === 1) {
      canvas.style.transform = 'rotate(180deg)';
    }
    const context = canvas.getContext('2d');

    const gradient = context.createLinearGradient(0, 0, 60, 30);
    gradient.addColorStop(0, 'rgba(102, 149, 186, 1)');
    gradient.addColorStop(1, 'rgba(102, 149, 186, 0)');

    context.arc(30, 30, 30, 0, Math.PI, true);
    context.fillStyle = gradient;
    context.fill();
    clearCircle(context, 30, 30, 26);
  });
}());

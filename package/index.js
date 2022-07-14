const methods = {
  angleBetweenTwoPoints: function (p1, p2) {
    var angle = this.radiansToDegrees(Math.atan2(p2.y - p1.y, p2.x - p1.x));
    return angle;
  },
  radiansToDegrees: function (radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
  },
  degreesToRadians: function (degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  },
};

module.exports = methods;

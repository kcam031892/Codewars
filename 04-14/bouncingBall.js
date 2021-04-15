// h - height of the floor
// bounce -
// window - his mother looks out of a window {window} from the ground
// output - how many times will the mother see the ball pass in front of her window
// the ball bounces 2/3 of its height
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
  let seen = 0;

  while (h > window) {
    seen += 1;
    h *= bounce;
    if (h > window) seen += 1;
  }

  return seen;
}
// console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(3.0, 0.66, 1.5), 3);

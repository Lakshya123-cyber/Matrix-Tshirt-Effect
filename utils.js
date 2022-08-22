function colorMatch(c1, c2, threshold) {
  return distance(c1, c2) < threshold;
}

function distance(p1, p2) {
  let dist = 0;

  for (let i = 0; i < p1.length; i++) {
    dist += (p1[i] - p2[i]) * (p1[i] - p2[i]);
  }

  return Math.sqrt(dist);
}

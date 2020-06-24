const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }
];

function getWorthyWorkers(workers) {
  var worthyWorkerNames = [];
  for (var i = 0; i < workers.length; i++) {
    var worker = workers[i]
    if (worker.salary > 1000) {
      worthyWorkerNames.push(worker.name);
    }
  }
  return worthyWorkerNames;
}

console.log(getWorthyWorkers(workers))

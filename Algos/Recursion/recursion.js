//////COUNTDOWN

/* 
function countDown(num) {
  if (num > 0) {
    console.log(num)
    countDown(num - 1);
  }
}

countDown(5);
 */

/* function recursiveCountDown(num) {
  //base case
  if (num == 0) return;
  console.log(num)
  recursiveCountDown(num-1)
}

recursiveCountDown(15) */

//////SUM OF NUMBERS

/* function recursionSum(n, total = 0) {
  if (n === 0) return total;
  return recursionSum(n - 1, total += n);
}
console.log(recursionSum(3));
 */

////// ITERATION OF OBJECT INDEFINITE TIMES (Where recursion becomes useful)

const TeamStructure = {
  name: "Osman",
  teams: [
    {
      name: "Benjamin",
      teams: [
        {
          name: "Bill",
          teams: [
            {
              name: "Goktug",
              teams: [],
            },
          ],
        },
      ],
    },
    { name: "Mark", teams: [] },
  ],
};

function getTeamDetail(t) {
    console.log('Team.....',t)
  if (t.teams.length === 0) return;
  t.teams.forEach((team) => {
    console.log(team);
    getTeamDetail(team);
  });
}

getTeamDetail(TeamStructure);

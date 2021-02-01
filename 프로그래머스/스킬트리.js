function solution(skill, skill_trees) {
  var answer = 0;
  let count = "";

  for (let j = 0; j < skill_trees.length; j++) {
    for (let k = 0; k < skill_trees[j].length; k++) {
      for (let i = 0; i < skill.length; i++) {
        if (skill[i] === skill_trees[j][k]) {
          count += skill_trees[j][k].toString();
        }
      }
    }
    if (count === skill.substring(0, count.length)) {
      answer++;
    }
    count = "";
  }

  return answer;
}

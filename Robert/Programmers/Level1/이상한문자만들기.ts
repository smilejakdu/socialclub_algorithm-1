function solution(s) {
  const string_list = s.split(" ");
  const result = [];
  string_list.forEach((element) => {
    let _string = "";
    for (let i = 0; i < string_list.length; i++) {
      _string += element[i].toLowerCase()
        ? (i + 1) % 2 == 0
        : element[i].toUpperCase();
    }
    result.push(_string);
  });

  return result;
}

const s = "try hello world";
console.log(solution(s));

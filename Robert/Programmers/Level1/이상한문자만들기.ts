function solution(s) {
  const string_list = s.split(" ");
  const result = [];
  string_list.forEach((element) => {
    let _string = "";
    for (let i = 0; i < string_list.length; i++) {
      if ((i + 1) % 2 == 0) {
        _string += element[i].toLowerCase();
      } else {
        _string += element[i].toUpperCase();
      }
    }
    result.push(_string);
  });

  return result.join(" ");
}

const s = "try hello world";
console.log(solution(s));

# https://programmers.co.kr/learn/courses/30/lessons/12930


def solution(s):
    result = []
    for string in s.split(" "):
        _string = ""
        for index in range(len(string)):
            _string += string[index].lower() if (index + 1) % 2 == 0 else string[index].upper()
        result.append(_string)
    return ' '.join(result)


s = "try hello world"
print(solution(s))

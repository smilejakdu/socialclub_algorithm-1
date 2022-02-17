# solution 1
def solution1(n):
    answer = 0
    for char in str(n):
        answer += int(char)

    return answer


# solution 2
def solution2(number):
    return sum(map(int, str(number)))

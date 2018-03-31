import sys

# feedback ENUMS
TOO_BIG = 'TOO_BIG'
TOO_SMALL = 'TOO_SMALL'
CORRECT = 'CORRECT'
WRONG_ANSWER = 'WRONG_ANSWER'

def solveOne():
  # read guess range and chances count
  a, b = [int(s) for s in input().split(" ")]
  n = int(input())
  lower, upper = a, b

  for trial in range(n):
    # make a guess
    guess = lower + (upper - lower + 1) // 2
    print(guess)

    # process feedback
    feedback = input()
    if feedback == TOO_BIG:
      upper = guess
    elif feedback == TOO_SMALL:
      lower = guess
    elif feedback == CORRECT:
      break
    elif feedback == WRONG_ANSWER:
      sys.exit("Error: program terminated due to WRONG_ANSWER")

# read number of test cases
t = int(input())

for i in range(t):
  solveOne()

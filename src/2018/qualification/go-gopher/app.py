import math
import sys

DEBUG = False

if DEBUG:
  f = open('log.txt', 'w')

def flushPrint(str):
  print(str, flush=True)

def sum2d(matrix):
  return sum(map(sum, matrix))

def isFulfilled(matrix, length):
  return sum2d(matrix) >= (3 * (length + 3))

def prepareOneCell(rowIndex):
  return str(rowIndex + 2) + ' 2'

def solveOne(i):
  matrix = [[0]*3 for _ in range(3)]
  target = int(input())
  downShifted = 0

  while downShifted + 2 < math.ceil(target / 3):
    if DEBUG: f.write("downShifted = {}\n".format(downShifted))

    while not isFulfilled(matrix, downShifted):
      flushPrint(prepareOneCell(downShifted))
      x, y = map(int, input().split())
      if x == 0 and y == 0:
        return
      elif x == -1 and y == -1:
        sys.exit("Error: program terminated due to WRONG_ANSWER")
      matrix[x - 1][y - 1] = 1
      if DEBUG: f.write("matrix = {}\n".format(matrix))

    matrix.append([0]*3)
    matrix.append([0]*3)
    if DEBUG: f.write("matrix appended = {}\n".format(matrix))
    downShifted += 2

# Main
t = int(input())
for i in range(t):
  if DEBUG: f.write("{} ##################\n".format(i))
  solveOne(i)

import heapq

# use negate to use heapq as max heap
def negate (value):
  return -1 * value

def split (value):
  if value % 2 == 0:
    sEven = value // 2
    return sEven, sEven - 1
  else:
    sOdd = (value - 1) // 2
    return sOdd, sOdd

def calcSpaces (numOfStalls, numOfPeople):
  priorityQueue = []
  heapq.heappush(priorityQueue, negate(numOfStalls))
  for _ in range(numOfPeople):
    largestSegment = negate(heapq.heappop(priorityQueue))
    spaceLeft, spaceRight = split(largestSegment)
    heapq.heappush(priorityQueue, negate(spaceLeft))
    heapq.heappush(priorityQueue, negate(spaceRight))

  return spaceLeft, spaceRight

# Main
t = int(input())

for i in range(1, t + 1):
  numOfStalls, numOfPeople = map(int, input().split())
  maxSpace, minSpace = calcSpaces(numOfStalls, numOfPeople)
  print("Case #{}: {} {}".format(i, maxSpace, minSpace))

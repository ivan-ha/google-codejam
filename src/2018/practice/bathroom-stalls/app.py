def split (value):
  return value // 2, (value - 1) // 2

def calcSpaces (numOfStalls, numOfPeople):
  dictionary = { numOfStalls: 1 }
  splitCount = 0

  while (splitCount < numOfPeople):
    largestSegment = max(dictionary)
    numOfLargestSegment = dictionary[largestSegment]
    spaceLeft, spaceRight = split(largestSegment)

    # accelerate using the fact that same number would split into same two nodes
    # `+ numOfLargestSegment` means by one split, already consider all node of that value
    dictionary[spaceLeft] = dictionary.get(spaceLeft, 0) + numOfLargestSegment
    dictionary[spaceRight] = dictionary.get(spaceRight, 0) + numOfLargestSegment
    splitCount += numOfLargestSegment

    # because all nodes of that value are splitted
    # so can remove it
    del dictionary[largestSegment]

  return spaceLeft, spaceRight

# Main
t = int(input())

for i in range(1, t + 1):
  numOfStalls, numOfPeople = map(int, input().split())
  maxSpace, minSpace = calcSpaces(numOfStalls, numOfPeople)
  print("Case #{}: {} {}".format(i, maxSpace, minSpace))

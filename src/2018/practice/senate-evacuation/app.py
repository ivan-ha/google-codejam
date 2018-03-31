import heapq

def getPartyCode (index):
  return chr(65 + index)

def isSumOdd (list):
  listSum = sum(list)
  return listSum % 2 != 0

def genEvacuationPlan (list):
  evacPlan = ''
  isFirstEvac = True

  while (sum(list) > 0):
    if (isFirstEvac and isSumOdd(list)):
      maxValue = max(list)
      maxIndex = list.index(maxValue)
      list[maxIndex] -= 1
      evacPlan += getPartyCode(maxIndex)
    else:
      largestParty, secondLargestParty= heapq.nlargest(2, range(len(list)), list.__getitem__)
      list[largestParty] -= 1
      list[secondLargestParty] -= 1
      evacPlan += ('' if isFirstEvac else ' ') + getPartyCode(largestParty) + getPartyCode(secondLargestParty)
    isFirstEvac = False

  return evacPlan

# Main
t = int(input())

for i in range(1, t + 1):
  numOfParties = int(input())
  parties = [int(s) for s in input().split(" ")]
  result = genEvacuationPlan(parties)
  print("Case #{}: {}".format(i, result))

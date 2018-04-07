def processOne():
  length = int(input())
  values = [int(s) for s in input().split()]
  evenIndexList = []
  oddIndexList = []
  troubleSorted = []

  # split list into 2
  for i in range(length):
    if i % 2 == 0:
      evenIndexList.append(values[i])
    else:
      oddIndexList.append(values[i])

  # sort and merge resulting list
  evenIndexList.sort()
  oddIndexList.sort()
  for i in range(length):
    toPush = evenIndexList.pop(0) if (i % 2 == 0) else oddIndexList.pop(0)
    troubleSorted.append(toPush)

  # find result
  for i in range(length - 1):
    if troubleSorted[i] > troubleSorted[i + 1]:
      return i

  return 'ok'

# Main
t = int(input())
for i in range(1, t + 1):
  result = processOne()
  print("Case #{}: {}".format(i, result))

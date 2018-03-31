def calcRemainingTime (remainingDist, speed):
  return (remainingDist / speed)

def recordTimeOfAllHorses (kilometers, totalHorses):
  remainingTimeOfHorses = []
  for _ in range(totalHorses):
    _dist, _speed = [int(s) for s in input().split(' ')]
    remainingTimeOfHorses.append(calcRemainingTime((kilometers - _dist), _speed))
  return remainingTimeOfHorses

def calcSpeed (distance, timeOfTravel):
  return (distance / timeOfTravel)

# Main
t = int(input())

for i in range(1, t + 1):
  kilometers, numOfHorses = [int(s) for s in input().split(' ')]
  longestTravelTime = max(recordTimeOfAllHorses(kilometers, numOfHorses))
  annieSpeed = calcSpeed(kilometers, longestTravelTime)
  print("Case #{}: {}".format(i, annieSpeed))

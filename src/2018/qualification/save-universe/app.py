CHARGE = 'C'
SHOOT = 'S'
IMPOSSIBLE = 'IMPOSSIBLE'

def initWaveForm (wave):
  waveForm = []
  beamStrength = 1
  for x in wave:
    if x == CHARGE:
      beamStrength *= 2
    elif x == SHOOT:
      waveForm.append(beamStrength)
  return waveForm

def calcResult (shield, wave):
  swapCount = 0
  waveForm = initWaveForm(wave)

  if len(waveForm) > shield:
    return IMPOSSIBLE
  else:
    while sum(waveForm) > shield:
      maxIndex = waveForm.index(max(waveForm))
      waveForm[maxIndex] /= 2
      swapCount += 1

  return swapCount

# Main
t = int(input())

for i in range(1, t + 1):
  shield, wave = input().split()
  result = calcResult(int(shield), wave)
  print("Case #{}: {}".format(i, result))

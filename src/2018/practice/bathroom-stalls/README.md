# Bathroom Stalls

* Whenever a stall was chosen, it would be splitted into a left and right segment. e.g. `split(18) = (8, 9)`.
* A leave node with largest value would be splitted first.
* Splitting same node value would result same `(left, right)` (i.e. can do them in one go, accelerate)

```
Repeat splitCount < K:
  left, right = split(largestLeaveNode)
  node[left] += numberOfLargestLeaveNode
  node[right] += numberOfLargestLeaveNode
  splitCount += numberOfLargestLeaveNode
  delete largestLeaveNode from node

return left, right
```

e.g. `N = 18`
![screen shot 2018-04-01 at 15 38 04](https://user-images.githubusercontent.com/20895743/38170985-de9e2878-35c2-11e8-8ed1-861140bdce51.jpg)

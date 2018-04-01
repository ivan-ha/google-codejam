# Senate Evacuation

Facts

1.  Fastest evacuation plan is maximizing number of 2 people evac
1.  `Odd - 1 = Even`
1.  `Even - 2 = Even`
1.  `Odd + Odd = Even`
1.  Evac 2 people from a sum of odd is NOT SAFE, e.g. Evac `AB` from `[1, 1, 1]` would results `[0, 0, 1]`, making `C` 100%
1.  Evac 2 people from a sum of even is SAFE, e.g. Evac `AB` from `[1, 1, 1, 1]`, `CD` is still 50 50
1.  Consider extreme case, `[A (50%), ...others (50)]`, after evac 1 from `A` and 1 from `others`, still 50 50 (`[A - 1 (50%), ...others - 1 (50%)]`)

So the tricks is to make the list sum a even number, then every time we can safely evac 2, the fastest.

```
Repeat until list empty:
  if list is even
    remove 1 from max(list)
  else
    remove 1 from max(list)
    remove 1 from secondMax(list)
```

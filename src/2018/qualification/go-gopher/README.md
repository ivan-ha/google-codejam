# Go Gopher

Observations
![screen shot 2018-04-08 at 23 13 45](https://user-images.githubusercontent.com/20895743/38469147-aa1504b2-3b82-11e8-8124-bc314479c558.jpg)

* since gopher will deploy randomly in the 3x3 block, so by repeating target the same cell, gopher will deploy all of the 9 cells one day... (just like holding your mouse in M$ Paint's spray brush)
* after gopher deploy a full 3x3 block, we move the target by 2 cell such that it can deploy another 3x3 block
* i.e. the orchard is a very long rectangle with width 3
* for larget test case (`A = 200`), the lenght is `ceil(200 / 3) = 67`

```
xxx
xxx
xxx
ooo
oto // the middle cell is the new target
ooo
```

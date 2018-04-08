# Saving The Universe Again

Observations

* given a pattern, the min attack will be putting all `S` in front, e.g. `SSSCCC`
* consider `SSSCCC`, the attack value is simply number of `S`, use this to determine `IMPOSSIBLE`
* only swaping `CS` to `SC` can reduce attack value, by half
* the attack pattern can be transformed to a list of attack values,e.g. `SCCSSC` to `[1, 4, 4]`
* by performing a swap, the resulting list will become `[1, 2, 4]` i.e. look for the max, reduce it by half
* repeat until `sum(list) <= targetValue`

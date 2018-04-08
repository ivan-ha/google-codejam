# Trouble Sort

Observations

* odd index and even index are never swaped
* after trouble sort, odd index and even index sub-list are sorted
* so, split the given list in to 2 (odd index, even index), have them sorted seperately, merge them back
* scan the result list, when `i > i + 1` we find the answer, else `ok`

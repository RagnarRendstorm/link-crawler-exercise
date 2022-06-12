# Link Crawler Exercise

```
// Design a data graph



// Objectives: design a program that cycles all the required resources and returns two arrays with the resources visited and the not available ones.

// A resource can visit multiple resources before finishing.

// If a resource was already visit then its skipped (see 12 example).

// Two special resources return "404"



// Data Example:

// 1 => [2]

// 2 => []

// 3 => [4]

// 4 => [5, 6]

// 5 => []

// 6 => []

// 7 => [100]

// 8 => [9]

// 9 => [101]

// 10 => [11, 12]

// 11 => []

// 12 => [10]



// 100 => "404"

// 101 => "404"



// Some return examples



// fetch_bundle(1) => { bundle: [1, 2], not_available: [] }

// fetch_bundle(3) => { bundle: [3, 4, 5, 6], not_available: [] }

// fetch_bundle(12) => { bundle: [12, 10, 11], not_available: [] }

// fetch_bundle(8) => { bundle: [8, 9], not_available: [101] }
```

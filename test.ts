import { resourceCrawler, fetch_bundle, ResourceGraph } from "./fetch_bundle";
import { strict as assert } from "assert";

const leafGraph = { 1: [] };
const leafTestResult = resourceCrawler(leafGraph, 1);
assert.deepStrictEqual(leafTestResult, { bundle: [1], not_available: [] });

const singleLinkGraph = { 1: [2], 2: [] };
const singleLinkTestResult = resourceCrawler(singleLinkGraph, 1);
assert.deepStrictEqual(singleLinkTestResult, {
  bundle: [1, 2],
  not_available: [],
});

const loopLinkGraph = { 1: [2], 2: [1] };
const loopLinkTestResult = resourceCrawler(loopLinkGraph, 1);
assert.deepStrictEqual(loopLinkTestResult, {
  bundle: [1, 2],
  not_available: [],
});

const errorGraph: ResourceGraph = { 1: "404" };
const errorTestResult = resourceCrawler(errorGraph, 1);
assert.deepStrictEqual(errorTestResult, { bundle: [], not_available: [1] });

// fetch_bundle(1) => { bundle: [1, 2], not_available: [] }
assert.deepStrictEqual(fetch_bundle(1), { bundle: [1, 2], not_available: [] });

// // fetch_bundle(3) => { bundle: [3, 4, 5, 6], not_available: [] }
assert.deepStrictEqual(fetch_bundle(3), {
  bundle: [3, 4, 5, 6],
  not_available: [],
});

// fetch_bundle(12) => { bundle: [12, 10, 11], not_available: [] }
assert.deepStrictEqual(fetch_bundle(12), {
  bundle: [12, 10, 11],
  not_available: [],
});

// fetch_bundle(8) => { bundle: [8, 9], not_available: [101] }
assert.deepStrictEqual(fetch_bundle(8), {
  bundle: [8, 9],
  not_available: [101],
});

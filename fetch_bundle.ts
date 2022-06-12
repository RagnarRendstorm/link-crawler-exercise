export type ResourceGraph = {
  [label: number]: number[] | "404";
};

/**
 * Crawls resources in the given graph.
 */
export function resourceCrawler(graph: ResourceGraph, startLabel: number) {
  const bundle: number[] = [];
  const not_available: number[] = [];

  // depth first search starting at the given label
  const stack = [startLabel];
  do {
    const currentLabel = stack.shift();

    if (currentLabel === undefined) continue;

    // skip already visited resources to avoid loops
    if (bundle.includes(currentLabel) || not_available.includes(currentLabel)) {
      continue;
    }
    const resourceData = graph[currentLabel];

    // handles resources that are not available
    if (resourceData === "404") {
      not_available.push(currentLabel);
      continue;
    }

    if (Array.isArray(resourceData)) {
      // records the visit in the bundle
      bundle.push(currentLabel);

      // add the linked resources to the stack
      stack.unshift(...resourceData);
    }
  } while (stack.length > 0);

  return {
    bundle,
    not_available,
  };
}

// Example data for exercise
const fetchBundleData: ResourceGraph = {
  1: [2],
  2: [],
  3: [4],
  4: [5, 6],
  5: [],
  6: [],
  7: [100],
  8: [9],
  9: [101],
  10: [11, 12],
  11: [],
  12: [10],

  100: "404",
  101: "404",
};

/**
 * Cycles all the required resources and returns two arrays with the resources visited and the not available ones.
 */
export function fetch_bundle(startLabel: number) {
  return resourceCrawler(fetchBundleData, startLabel);
}

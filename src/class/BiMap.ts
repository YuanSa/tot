/**
 * Bi-direction map
 *
 * @constructor Given an object or a key-value pair array to build both forward and backward map.
 * @method autoGet given a key, find the value forwardly first. If no value found, find backwardly.
 * @todo Not finished. Continue when needed.
 */
export class BiMap<
  A extends string | number | symbol,
  B extends string | number | symbol
> extends Map {
  abMap: Map<A, B>;
  baMap: Map<B, A>;

  constructor(raw: Record<A, B> | Array<[A, B]>) {
    super();
    let array;
    if (Array.isArray(raw)) {
      array = raw;
    } else {
      array = Object.entries(raw) as unknown as Array<[A, B]>;
    }
    this.abMap = new Map(array);
    this.baMap = new Map(array.map(([a, b]) => [b, a]));
  }

  autoGet(key: A | B) {
    const uniKey = key as any;
    return this.abMap.get(uniKey) ?? this.baMap.get(uniKey);
  }

  getObjectForward() {
    return [...this.abMap.entries()].reduce(
      (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] }),
      {} as Record<A, B>
    );
  }

  getObjectBackward() {
    return [...this.baMap.entries()].reduce(
      (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] }),
      {} as Record<B, A>
    );
  }
}

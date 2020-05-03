import { curry } from "ramda";
/**
 * @param T type of the object data is being merged into
 * @param object the current object
 * @param data the partial of data to update object with
 * @returns new object with updated properties
 */
export const mergeObjects = <T>(obj1: T) => {
  return function (obj2: Partial<T>) {
    return {
      ...obj1,
      ...obj2,
    };
  };
};

/**
 * generate curried function for easy mapping
 * @param property string of the key to extract from object
 * @param object the current object
 * @returns curried function
 */
export const extract = curry((property: string, object: any) => {
  return object[property];
});

/**
 * @param array the array we are adding to
 * @param payload the item we want to insert or update in the array.
 * @param selector the property we want to compare.
 * @returns a new array containing the original items and the new item.
 */
export const insertItem = <T>(array: T[], k: keyof T) => {
  return function (payload: T) {
    return array.map((item: T) => (item[k] === payload[k] ? payload : item));
  };
};

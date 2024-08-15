function updateUniqueItems(map) {
  const items = map;

  if (items instanceof Map) {
    for (const [key, value] of items) {
      if (value === 1) {
        items.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return items;
}
export default updateUniqueItems;

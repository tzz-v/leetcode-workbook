function jsonStringify(object: any): string {
  if (typeof object === 'string') {
    return `"${object}"`;
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const res: string[] = [];
  if (Array.isArray(object)) {
    for (const val of object) {
      res.push(`${jsonStringify(val)}`);
    }
    return `[${res.join(',')}]`;
  } else {
    for (const key in object) {
      res.push(`"${key}":${jsonStringify(object[key])}`);
    }
    return `{${res.join(',')}}`;
  }
}

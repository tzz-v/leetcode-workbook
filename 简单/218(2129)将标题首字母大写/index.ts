function capitalizeTitle(title: string): string {
  const arr = title.split(' ');
  return arr.map((item) => {
      if (item.length <= 2) {
          return item.toLowerCase();
      }
      return item[0].toLocaleUpperCase() + item.slice(1).toLowerCase()
  }).join(' ')
};
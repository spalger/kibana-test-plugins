export async function loadPart2() {
  console.log('loading part2');
  require.ensure([
    './loaded_part'
  ], (require) => {
    require('./loaded_part').loadedPart(2);
  }, 'part2');
}
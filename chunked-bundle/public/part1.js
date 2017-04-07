export async function loadPart1() {
  console.log('loading part1');
  require.ensure([
    './loaded_part'
  ], (require) => {
    require('./loaded_part').loadedPart(1);
  }, 'part1');
}
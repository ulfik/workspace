import composite from './composite';

const {PhotoGallery, Album, Photo} = composite;

test('show all photos in the gallery', () => {
  const christmas = new Album([new Photo('me and dad'), new Photo('santa who looks like an uncle Wacek'), new Photo('angry mommy is cooking')]);
  const wedding = new Album([new Photo('my brother with new wife'), new Photo('dancing grandmother'), new Photo('ups we are drunk')]);
  const myFamily = new PhotoGallery([christmas, wedding]);

  const result = myFamily.showAll();

  expect(result).toEqual(
    [ 
      ['me and dad', 'santa who looks like an uncle Wacek', 'angry mommy is cooking' ],
      ['my brother with new wife', 'dancing grandmother', 'ups we are drunk' ]
    ]
  );
})


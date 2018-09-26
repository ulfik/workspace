import observer from './observer';

const {Instagram, Follower} = observer;

test('send message to followers', () => {
  const flyinGeek = new Instagram();
  const gustav = new Follower('Gustav');
  const vladimir = new Follower('Vladimir');

  flyinGeek.addFollower(gustav);
  flyinGeek.addFollower(vladimir);

  const result = flyinGeek.publishNewMessage('! Check out new photos from Seoul!');

  expect(result).toEqual(['Gustav! Check out new photos from Seoul!', 'Vladimir! Check out new photos from Seoul!']);
});


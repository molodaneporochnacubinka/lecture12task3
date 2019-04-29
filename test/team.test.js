import Character from '../src/js/character';
import Team from '../src/js/team';

test('test team iterable by weak and attack order 1', () => {
  const bowerman = new Character('Лучник', 'Bowerman', 50, 8, 8);
  const swordsman = new Character('Мечник', 'Swordsman', 50, 5, 5);
  const magician = new Character('Маг', 'Magician', 60, 10, 10);
  const team = new Team();
  team.addALL(bowerman, swordsman, magician);

  const generator = team.generateAttack();

  expect(generator.next().value).toEqual(magician);
  expect(generator.next().value).toEqual(bowerman);
  expect(generator.next().value).toEqual(swordsman);
});

test('test team iterable by weak and attack initial order', () => {
  const bowerman = new Character('Лучник', 'Bowerman', 50, 5, 5);
  const swordsman = new Character('Мечник', 'Swordsman', 50, 5, 5);
  const magician = new Character('Маг', 'Magician', 60, 10, 10);
  const team = new Team();
  team.addALL(magician, bowerman, swordsman);

  const generator = team.generateAttack();

  expect(generator.next().value).toEqual(magician);
  expect(generator.next().value).toEqual(bowerman);
  expect(generator.next().value).toEqual(swordsman);
});

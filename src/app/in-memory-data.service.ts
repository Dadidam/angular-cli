import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, name: 'Risen' },
      { id: 12, name: 'Knight & Merchants' },
      { id: 13, name: 'Gothic: Forsaken Gods' },
      { id: 14, name: 'The Witcher' },
      { id: 15, name: 'Half-Life' },
      { id: 16, name: 'Hearthstone' },
      { id: 17, name: 'Warcraft' },
      { id: 18, name: 'Theme Hospital' },
      { id: 19, name: 'Hay Day' },
      { id: 20, name: 'Puzzle Craft' }
    ];
    return {games};
  }
}
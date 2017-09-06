import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meals = [
      { id: 0, image: '../assets/img/margarita.jpg', name: 'Pizza Margarita', price: 3},
      { id: 1, image: '../assets/img/lasagna.jpg', name: 'Lasagna', price: 4},
      { id: 2, image: '../assets/img/carbonara.jpg', name: 'Pasta Carbonara', price: 5}
    ];
    return {meals};
  }
}

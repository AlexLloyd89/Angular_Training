export class CounterService {
  countA: number = 0;
  countI: number = 0;

  countActive() {
    this.countA++;
    console.log(this.countA);
  }

  countInactive() {
    this.countI++;
    console.log(this.countI);
  }
}

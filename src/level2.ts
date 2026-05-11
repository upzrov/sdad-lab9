import { Utils } from "./utils";

export class Level2 {
  private alphabetSize: number;
  private wordLength: number;

  constructor(alphabetSize: number, wordLength: number) {
    this.alphabetSize = alphabetSize;
    this.wordLength = wordLength;
  }

  public solve(): void {
    console.log("Рівень 2:");
    console.log(
      `Дано: Алфавіт з ${this.alphabetSize} літер, довжина серії = ${this.wordLength}`,
    );
    const result = Utils.permutationsWithRepetition(
      this.alphabetSize,
      this.wordLength,
    );
    console.log(`Кількість комбінацій (A_n^m з повт.): ${result}\n`);
  }
}

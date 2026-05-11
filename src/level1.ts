import { Utils } from "./utils";

export class Level1 {
  private teamsCount: number;

  constructor(teamsCount: number) {
    this.teamsCount = teamsCount;
  }

  public solve(): void {
    console.log("Рівень 1:");
    console.log(`Дано: Кількість команд = ${this.teamsCount}`);
    const result = Utils.factorial(this.teamsCount);
    console.log(`Кількість можливих варіантів розподілу (P_n): ${result}\n`);
  }
}

import { write } from "bun";

export class Level3 {
  private sequence: number[];
  private permutationsList: string[];

  constructor(sequence: number[]) {
    this.sequence = [...sequence];
    this.permutationsList = [];
    this.generateLexicographic();
  }

  // Приватний метод для генерації та збереження в пам'ять
  private generateLexicographic(): void {
    let seq = [...this.sequence];

    while (true) {
      // Зберігаємо поточну перестановку у список
      this.permutationsList.push(seq.join(" "));

      let m = seq.length - 2;
      while (m >= 0 && seq[m]! >= seq[m + 1]!) {
        m--;
      }

      if (m < 0) break; // Завершення алгоритму

      let minPos = seq.length - 1;
      while (seq[minPos]! <= seq[m]!) {
        minPos--;
      }

      // Обмін елементів
      [seq[m], seq[minPos]] = [seq[minPos]!, seq[m]!];

      // Перевертання "хвоста"
      let left = m + 1;
      let right = seq.length - 1;
      while (left < right) {
        [seq[left], seq[right]] = [seq[right]!, seq[left]!];
        left++;
        right--;
      }
    }
  }

  // Публічний метод для отримання згенерованого списку
  public getList(): string[] {
    return this.permutationsList;
  }

  // Публічний метод для запису у файл
  public async writeToFile(filePath: string): Promise<void> {
    const content = this.permutationsList.join("\n");
    await write(filePath, content);
    console.log("Рівень 3:");
    console.log(
      `Згенеровано ${this.permutationsList.length} перестановок для масиву [${this.sequence.join(", ")}].`,
    );
    console.log(`Дані успішно записані у файл: ${filePath}\n`);
  }
}

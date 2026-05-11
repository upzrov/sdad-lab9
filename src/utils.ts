export class Utils {
  /** Обчислення факторіала (Перестановки без повторень) */
  static factorial(n: number): bigint {
    const num = BigInt(n);
    if (num === 0n || num === 1n) return 1n;

    let result = 1n;
    for (let i = 2n; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  /** Розміщення з повтореннями (n^m) */
  static permutationsWithRepetition(n: number, m: number): bigint {
    return BigInt(n) ** BigInt(m);
  }
}

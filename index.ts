import { Level1 } from "./src/level1";
import { Level2 } from "./src/level2";
import { Level3 } from "./src/level3";

const level1 = new Level1(10);
level1.solve();

const level2 = new Level2(11, 4);
level2.solve();

const testSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const level3 = new Level3(testSequence);
await level3.writeToFile("level3.txt");

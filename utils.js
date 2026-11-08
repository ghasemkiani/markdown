import { cutil } from "@ghasemkiani/base";
import { Obj } from "@ghasemkiani/base";

class Utils extends Obj {
  static extractFirstCodeBlock(text) {
    text = cutil.asString(text);
    
    // Matches ```[optional language]\n [content] \n```
    // removed (?:\r?\n)?\s* from before ending backticks
    const match = text.match(/```(?:\w+)?\s*\r?\n([\s\S]*?)```/);
    return match ? match[1].trim() : text;
  }
}

export { Utils };

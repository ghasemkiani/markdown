import { cutil } from "@ghasemkiani/base";

class Utils {
  static extractFirstCodeBlock(text) {
    text = cutil.asString(text);
    
    // Matches ```[optional language]\n [content] \n```
    // removed (?:\r?\n)?\s* from before ending backticks
    const match = text.match(/```(?:\w+)?\s*\r?\n([\s\S]*?)```/);
    text = match ? match[1] : text;
    // text = text.trim();
    return text;
  }
}

export { Utils };

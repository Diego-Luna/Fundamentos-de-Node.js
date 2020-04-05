const sharpp = require("sharp");

sharpp('js.png')
  .resize(80)
  .grayscale()
  .toFile('2.png');
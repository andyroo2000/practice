var fs = require("fs");
console.log("Starting");
fs.writeFile("./files/write_sync.txt", "Hello world!", function (error) {
  console.log("Written file");
});
console.log("Finished!");


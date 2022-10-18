const fs = require('fs');

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      fs.writeFile(file, JSON.stringify(parsedData), (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("saved");
        }
      });
    }
  });
};

const idGenerator = () =>
  Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);


module.exports = { idGenerator, readAndAppend};

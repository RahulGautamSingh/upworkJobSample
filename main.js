const axios = require("axios");
let url = "https://packagist.org/packages.json";
let files = async () => {
  axios({
    method: "get",
    url: url,
    // responseType: "stream",
  }).then(function (response) {
    console.log(response);
    // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
  });
};

files();

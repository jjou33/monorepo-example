const axios = require("axios");

module.exports = async function () {
  const response = await axios.get("https://api.github.com/users/octocat");

  return response.data;
};

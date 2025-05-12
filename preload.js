const { contextBridge } = require("electron");
const axios = require("axios");

contextBridge.exposeInMainWorld("cryptoAPI", {
  async getPrices() {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );
    return res.data;
  },
});

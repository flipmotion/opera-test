const express = require('express');
const request = require('request');
const app = express();

const toHex = num => `0x${(num).toString(16)}`;

app.listen(3001, () => {
 console.log("Server running on port 3001");
});

app.get("/api/block/:blockId", (req, res, next) => {
  const { blockId } = req.params;
  const isEmpty = blockId === 'latest';
  const param = isEmpty ? blockId : toHex(blockId);
  console.log(param);

  request.post({
    url: 'https://cloudflare-eth.com',
    json: true,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      jsonrpc:'2.0',
      id: '1',
      method: 'eth_getBlockByNumber',
      params: [`${param}`, true],
    }
  }, (err, r, body) => {
    if (err) {
      return res.send(err);
    }
    res.send(body);
  });
});
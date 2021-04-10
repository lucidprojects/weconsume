import React from "react";

const BLKAPI =
  "https://wrapapi.com/use/dezshredder/iconsume/iconsume_msgs/0.0.1?wrapAPIKey=hMlKRxOESkVmbTZj6Sozd0z32gumRNrY";
//const DEFAULT_QUERY = 'redux';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

class BlkTxs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blkdata: [],
    };
  }

  componentDidMount() {
    fetch(BLKAPI)
      .then((response) => response.json())
      .then((data) => {
        let blktxs = [];
        // console.log("then2 data " + data.data.msg);
        blktxs.msgs = data.data.msg;
        blktxs.txids = data.data.txid;
        // console.log("my txids " + blktxs.txids);
        // console.log("my msgs " + blktxs.msgs);
        return blktxs.msgs.map(function (blktxmsg, index) {
          const div = document.getElementById("consume_msgs");
          // console.log(`blktxmsg is ${blktxmsg}`);
          if (blktxmsg.match(/[/]/)) {
          let divblk = createNode("div");
          divblk.innerHTML = `<a href="https://iconsu.me/tx/${blktxs.txids[index]}" target="_blank" class="blklink">${blktxmsg}</a><hr class="style-three">`;
          append(div, divblk);
          }
        });
      });
    
  }

  render() {
    return null;
  }
}

export default BlkTxs;


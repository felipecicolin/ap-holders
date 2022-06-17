import { Controller } from "@hotwired/stimulus";
import * as asmjs from "@emurgo/cardano-serialization-lib-asmjs";
import { get } from "@rails/request.js";

let Buffer = require("buffer/").Buffer;

export default class extends Controller {
  static targets = ["btnNami"];

  namiConnect() {
    window.cardano.nami.enable();
  }

  async isConnected() {
    let connected = await window.cardano.nami.isEnabled();

    if (connected) {
      this.btnNamiTarget.innerText = "Connected";
    } else {
      this.btnNamiTarget.innerText = "Connect to Nami";
    }
  }

  async walletAddress() {
    var api = await window.cardano.nami.enable();

    var address = (await api.getUsedAddresses())[0];
    var address_buffer = Buffer.from(address, "hex");
    var bech32address = asmjs.Address.from_bytes(address_buffer).to_bech32();

    return bech32address;
  }
}

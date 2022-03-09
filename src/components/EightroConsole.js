import React, { Component } from "react";
import Eightro from "../components/eightro";

export class EightroConsole extends Component {
  async componentDidMount() {
    const eightro = new Eightro("console-canvas");
    const res = await fetch(this.props.url);
    const text = await res.text();
    const fun = `
      "use strict";
      return (
        function(eightro) {
          ${text}
        }
      )
      `;
    return Function(fun)()(eightro);
  }

  render() {
    const { scale } = this.props;
    return (
      <div>
        <div className="console">
          <div className="bezel">
            <canvas
              id="console-canvas"
              width={128 * scale}
              height={64 * scale}
            ></canvas>
          </div>
        </div>
      </div>
    );
  }
}

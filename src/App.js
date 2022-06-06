
import Inventory from "./components/Inventory";
import Speech from "./components/Speech";
import Log from "./components/Log";
import Title from "./components/Title";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { setState, Component } from "react";

var alanBtnInstance = alanBtn({
  key: "941bd0cebc41b715e745d3d71b0f8b0c2e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    if (commandData.command != null) {
      console.log(commandData.command);
      window.helloComponent.updateNarratorText(commandData.newText);
      switch (commandData.command) {
        case "proceed":
          window.helloComponent.updateActions("Dark room with skeleton");
          break;
        case "gotKey":
          window.helloComponent.updateActions("Collected Skeleton Key");
          window.helloComponent.updateItems("Skeleton Key");
          break;
        case "examined":
          window.helloComponent.updateActions("Skeleton has key");
          break;
        case "skip":
          window.helloComponent.updateActions(
            "Key skipped. Still in dark room"
          );
          break;
        case "doorway":
          console.log(1123123);
          window.helloComponent.updateActions("Moved North. Bone door");
          break;
        case "pit":
          window.helloComponent.updateActions("Moved East. Pit with hermes");
          break;
        case "kissed":
          window.helloComponent.updateActions("Smooched Hermes boots");
          window.helloComponent.updateItems("Hermes Boots");
          break;
        case "escaped":
          window.helloComponent.updateActions("Obtained American Ideals");
          break;
        case "back":
          window.helloComponent.updateActions("Moved Back");
          break;
        case "died":
          window.helloComponent.updateActions("Got destroyed by death");
          break;
        case "retry":
          window.location.reload(false);
          break;
        case "refused":
          window.helloComponent.updateActions("Became rebellious");
          break;
        default:
          break;
      }
    }
  },
  rootEl: document.getElementById("alan-btn"),
});
alanBtnInstance.activate();
alanBtnInstance.callProjectApi("greetUser");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
      narratorText:
        'My name is Falcon-Hoof, and I will be the guide on your quest. Press the microphone in the bottom right corner and say "Proceed" to move on.',

      items: [],
    };
    window.helloComponent = this;
  }
  updateNarratorText(newText) {
    this.setState({ narratorText: newText });
  }
  updateActions(action) {
    console.log("bruh");
    this.setState((prevState) => ({
      actions: prevState.actions.concat(action),
    }));
  }
  updateItems(item) {
    this.setState({ items: [...this.state.items, item] });
  }
  render() {
    const actionList = this.state.actions.map((action, i) =>
      <li key={i}>{action}</li>
    );
    const itemList = this.state.items.map((item, i) =>
      <li key={i}>{item}</li>
    );
    return (
      <div className=" bg-gray-300 h-screen p-6 ">
        <Title />
        <br></br>
        {/* <div class="flex items-stretch ...">
        <Log class="py-4" />
        <Inventory class="py-12" />
        <Speech class="py-8" />
      </div> */}
        <div className="relative rounded-xl overflow-auto p-8 align-text-top">
          <div className="font-mono text-white text-xl leading-6">
            <div className="flex items-stretch gap-4 w-full rounded-lg bg-stripes-cyan text-center">
              <Speech text={this.state.narratorText}></Speech>
              <Log actions={actionList}></Log>
              <Inventory items={itemList}></Inventory>
            </div>
          </div>
        </div>
        <div id="alan-btn"></div>
      </div>
    );
  }
}

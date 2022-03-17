import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        SELECT THEE LANGUAGE PLEASE:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag tw"
          onClick={() => this.context.onLanguageChange("chinese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;

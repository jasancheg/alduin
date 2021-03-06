import * as React from "react";

import { ComponentsRefs } from "./../../components-refs";
import { Button } from "./button";

export class PinSidebarButton extends Button<{}, {}> {

    constructor() {
        super();

        this.onClick = this.onClick.bind(this);

        ComponentsRefs.pinSidebarButton = this;
    }

    render() {
        return (
            <li id="pin-button" onClick={this.onClick}>
                <i className="fa fa-thumb-tack"></i>
            </li>
        );
    }
    onClick(event: React.MouseEvent<HTMLElement>) {
        ComponentsRefs.sidebar.togglePin();
    }
}

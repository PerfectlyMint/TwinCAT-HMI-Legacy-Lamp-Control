﻿/*
 * Generated 11/10/2020 3:08:40 PM
 * Copyright (C) 2020
 */
module TcHmi {
    export module Controls {
        export module Legacy_Lamp {
            export class Legacy_LampControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */

                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;
                protected __lampElement!: JQuery;

                protected __value?: boolean;
                protected __color?: string | "Yellow";

				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Legacy_Lamp_Legacy_LampControl-Template');
                    this.__lampElement = this.__elementTemplateRoot.find('.TcHmi_Controls_Legacy_Lamp_Legacy_LampControl-Lamp');
                    if (this.__elementTemplateRoot.length === 0 || this.__lampElement.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }

                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * @description Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                /**
                * Sets the value of Value
                * @param valueNew The new value for Value
                */
                public setValue(valueNew: boolean | undefined) {
                    this.__value = valueNew;
                    this.__processValue();
                }

                /**
                 * Gets the value of Responsive
                 * @returns The current value of Value
                 */
                getValue(): boolean | undefined {
                    return this.__value;
                    this.__processValue();
                }
                /**
                 * Processes Value
                 */
                protected __processValue(): void {
                    this.__processColor();
                }

                /**
                * Sets the value of Value
                * @param valueNew The new value for Value
                */
                public setColor(valueNew: string | undefined) {
                    this.__color = valueNew;
                    this.__processColor();
                }

                /**
                 * Gets the value of Responsive
                 * @returns The current value of Value
                 */
                getColor(): string | undefined {
                    return this.__color;
                    this.__processColor();
                }
                /**
                 * Processes Value
                 */
                protected __processColor(): void {
                    let lampElement = this.__lampElement.find("img")[0];
                    switch (this.__color) {
                        case "Red": {
                            if (this.__value === true) {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-red-off.svg" 
                            } else {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-red-off.svg" 
                            }
                        }
                        case "Green": {
                            if (this.__value === true) {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-green-on.svg"
                            } else {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-green-off.svg"
                            }
                        }
                        case "Blue": {
                            if (this.__value === true) {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-blue-on.svg"
                            } else {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-blue-off.svg"
                            }
                        }
                        case "Grey": {
                            if (this.__value === true) {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-grey-on.svg"
                            } else {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-grey-off.svg"
                            }
                        }
                        case "Yellow": {
                            if (this.__value === true) {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-yellow-on.svg"
                            } else {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-yellow-off.svg"
                            }
                        }
                        default: {
                            if (this.__value === true) {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-yellow-on.svg"
                            } else {
                                lampElement.src = "Legacy_LampControl/Images/element-lamp-lamp1-yellow-off.svg"
                            }
                        }

                    } 
                }
            }
        }

        registerEx('Legacy_LampControl', 'TcHmi.Controls.Legacy_Lamp', Legacy_Lamp.Legacy_LampControl);
    }
}
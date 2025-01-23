const config = {
    controlName: "hello-world",
    groupName: "Custom Controls",
    version: "1.0",
    description: "A simple hello world control",
    properties: {
        message: {
            type: "string",
            title: "Message to display",
            description: "The message that will be shown",
            defaultValue: "Hello World!"
        },
        textColor: {
            type: "string",
            title: "Text Color",
            description: "Color of the message",
            defaultValue: "#000000"
        }
    },
    standardProperties: {
        fieldLabel: true,
        description: true,
        defaultValue: true,
        readOnly: true,
        visibility: true,
        validation: true
    }
};

const styles = [
    css`
        :host {
            display: block;
            padding: 10px;
        }
        .message {
            font-size: 16px;
            font-family: sans-serif;
        }
    `
];

@customElement('hello-world')
export class HelloWorld extends LitElement {
    static getMetaConfig() {
        return config;
    }
    
    static styles = styles;

    @property({ type: String })
    message = '';

    @property({ type: String })
    textColor = '#000000';

    render() {
        return html`
            <div class="message" style="color: ${this.textColor}">
                ${this.message}
            </div>
        `;
    }
}

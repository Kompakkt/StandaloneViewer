class AppKompakkt extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.buildSrc();
  }

  buildSrc() {
    // Build dataset from allowed properties
    const allowed = ['instance', 'endpoint', 'resource', 'settings', 'annotations'];
    const dataset = { standalone: true };

    for (const prop of allowed) {
      const item = this.attributes.getNamedItem(prop);
      const { nodeName, nodeValue } = item;
      dataset[nodeName] = nodeValue;
    }

    // Build url using specified or default instance
    const url = new URL(this.instance ?? 'https://kompakkt.de/viewer/index.html');
    for (const [key, value] of Object.entries(dataset)) {
      if (!value) continue;
      url.searchParams.set(key, value.toString());
    }

    // Create, configure and attach iframe to shadow DOM
    const iframe = document.createElement('iframe');
    iframe.src = url.toString();
    iframe.allowFullscreen = true;
    const style = this.attributes.getNamedItem('style');
    if (style) iframe.setAttribute('style', style.nodeValue);
    this.shadowRoot.append(iframe);
  }
}

customElements.define('app-kompakkt', AppKompakkt);

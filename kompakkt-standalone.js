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
    const allowed = ['instance', 'endpoint', 'resource', 'settings', 'annotations', 'minimal'];
    const dataset = { standalone: true, minimal: true };

    for (const prop of allowed) {
      const item = this.attributes.getNamedItem(prop);
      if (!item) continue;
      const { nodeName, nodeValue } = item;
      dataset[nodeName] = nodeValue;
    }

    // Build url using specified or default instance
    const url = new URL(dataset.instance ?? 'https://kompakkt.de/viewer/index.html');
    for (const [key, value] of Object.entries(dataset)) {
      if (!value) continue;
      url.searchParams.set(key, encodeURIComponent(value.toString()));
    }

    // Create, configure and attach iframe to shadow DOM
    const iframe = document.createElement('iframe');
    iframe.src = url.toString();
    iframe.allowFullscreen = true;
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    iframe.style.border = 'none';
    this.shadowRoot.append(iframe);

    this.style.display = 'block';
  }
}

customElements.define('app-kompakkt', AppKompakkt);

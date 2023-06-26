import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    cardGrid: {
      render: component("@astrojs/starlight/components", "CardGrid"),
      attributes: {
        stagger: { type: "Boolean", default: false },
      },
    },
    card: {
      render: component("@astrojs/starlight/components", "Card"),
      attributes: {
        icon: { type: "String" },
        title: { type: "String" },
      },
    },
  },
});

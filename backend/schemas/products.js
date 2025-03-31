export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "productName",
      title: "Product name",
      type: "string",
    },
    {
      name: "productImage",
      title: "Product image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "productCapabilities",
      title: "Product capabilities",
      type: "blockContent",
    },
    {
      name: "productSummary",
      title: "Product summary",
      type: "string",
    },
    {
      name: "productDescription",
      title: "Product description",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'subheadingExtraText1',
      title: 'Subheading Extra Text 1',
      type: 'string',
    },
    {
      name: 'subheadingExtraText2',
      title: 'Subheading Extra Text 2',
      type: 'string',
    },
    {
      name: 'subheadingExtraText3',
      title: 'Subheading Extra Text 3',
      type: 'string',
    },
    {
      name: 'subheadingExtraText4',
      title: 'Subheading Extra Text 4',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

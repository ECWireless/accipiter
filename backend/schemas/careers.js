export default {
  name: 'careers',
  title: 'Careers',
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'position1Title',
      title: 'Position 1 Title',
      type: 'string',
    },
    {
      name: 'position1Description',
      title: 'Position 1 Description',
      type: 'blockContent'
    },
    {
      name: 'position2Title',
      title: 'Position 2 Title',
      type: 'string',
    },
    {
      name: 'position2Description',
      title: 'Position 2 Description',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

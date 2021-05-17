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
      name: 'positionTitle',
      title: 'Position Title',
      type: 'string',
    },
    {
      name: 'positionDescription',
      title: 'Position Description',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

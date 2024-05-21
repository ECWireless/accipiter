export default {
  name: 'ourTech',
  title: 'Our Tech',
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
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
    },
    {
      name: 'pageSubheading',
      title: 'Page Subheading',
      type: 'string',
    },
    {
      name: 'section1Heading',
      title: 'Section 1 Heading',
      type: 'string',
    },
    {
      name: 'section1Paragraph1',
      title: 'Section 1 Paragraph 1',
      type: 'blockContent',
    },
    {
      name: 'section1Subheading',
      title: 'Section 1 Subheading',
      type: 'string',
    },
    {
      name: 'section1Paragraph2',
      title: 'Section 1 Paragraph 2',
      type: 'blockContent',
    },
    {
      name: 'section2Heading',
      title: 'Section 2 Heading',
      type: 'string',
    },
    {
      name: 'section2Paragraph1',
      title: 'Section 2 Paragraph 1',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}

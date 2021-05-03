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
      name: 'heroSubheading',
      title: 'Subheading',
      type: 'string',
    },
    {
      name: 'heroAnimatedText1',
      title: 'Hero Animated Text 1',
      type: 'string',
    },
    {
      name: 'heroAnimatedText2',
      title: 'Hero Animated Text 2',
      type: 'string',
    },
    {
      name: 'heroAnimatedText3',
      title: 'Hero Animated Text 3',
      type: 'string',
    },
    {
      name: 'heroAnimatedText4',
      title: 'Hero Animated Text 4',
      type: 'string',
    },
    {
      name: 'techHeading',
      title: 'Tech Heading',
      type: 'string',
    },
    {
      name: 'techSubheading',
      title: 'Tech Subheading',
      type: 'string',
    },
    {
      name: 'techCard1Title',
      title: 'Tech Card 1 Title',
      type: 'string',
    },
    {
      name: 'techCard1Paragraph',
      title: 'Tech Card 1 Paragraph',
      type: 'string',
    },
    {
      name: 'techCard2Title',
      title: 'Tech Card 2 Title',
      type: 'string',
    },
    {
      name: 'techCard2Paragraph',
      title: 'Tech Card 2 Paragraph',
      type: 'string',
    },
    {
      name: 'techCard3Title',
      title: 'Tech Card 3 Title',
      type: 'string',
    },
    {
      name: 'techCard3Paragraph',
      title: 'Tech Card 3 Paragraph',
      type: 'string',
    },
    {
      name: 'techCard4Title',
      title: 'Tech Card 4 Title',
      type: 'string',
    },
    {
      name: 'techCard4Paragraph',
      title: 'Tech Card 4 Paragraph',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

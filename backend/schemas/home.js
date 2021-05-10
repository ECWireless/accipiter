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
    {
      name: 'productsHeading',
      title: 'Products Heading',
      type: 'string',
    },
    {
      name: 'productsSubheading',
      title: 'Products Subheading',
      type: 'string',
    },
    {
      name: 'products1Image',
      title: 'Product 1 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'products1Name',
      title: 'Products 1 Name',
      type: 'string',
    },
    {
      name: 'products1Description',
      title: 'Products 1 Description',
      type: 'string',
    },
    {
      name: 'products2Image',
      title: 'Product 2 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'products2Name',
      title: 'Products 2 Name',
      type: 'string',
    },
    {
      name: 'products2Description',
      title: 'Products 2 Description',
      type: 'string',
    },
    {
      name: 'products3Image',
      title: 'Product 3 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'products3Name',
      title: 'Products 3 Name',
      type: 'string',
    },
    {
      name: 'products3Description',
      title: 'Products 3 Description',
      type: 'string',
    },
    {
      name: 'products4Image',
      title: 'Product 4 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'products4Name',
      title: 'Products 4 Name',
      type: 'string',
    },
    {
      name: 'products4Description',
      title: 'Products 4 Description',
      type: 'string',
    },
    {
      name: 'partnersHeading',
      title: 'Partners Heading',
      type: 'string',
    },
    {
      name: 'partnersLogo1',
      title: 'Partners Logo 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo2',
      title: 'Partners Logo 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo3',
      title: 'Partners Logo 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo4',
      title: 'Partners Logo 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo5',
      title: 'Partners Logo 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo6',
      title: 'Partners Logo 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo7',
      title: 'Partners Logo 7',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo8',
      title: 'Partners Logo 8',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo9',
      title: 'Partners Logo 9',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'partnersLogo10',
      title: 'Partners Logo 10',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
    },
    {
      name: 'contactSubheading',
      title: 'Contact Subheading',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}

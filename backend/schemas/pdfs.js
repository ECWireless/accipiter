export default {
  name: 'pdfs',
  title: 'PDFs',
  type: 'document',
  fields: [
      {
          name: 'title',
          title: 'Title',
          type: 'string'
      },
      {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
              source: 'title',
              maxLength: 96
          }
      },
      {
          name: 'pdfFile',
          title: 'PDF File',
          type: 'file'
      },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
export default {
  name: 'contacts',
  title: 'Contacts',
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
      name: 'adress',
      title: 'Adress',
      type: 'blockContent',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'blockContent',
    },
    {
      name: 'worktime',
      title: 'Worktime',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

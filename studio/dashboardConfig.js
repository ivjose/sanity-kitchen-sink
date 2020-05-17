export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec0dc26ff64583c451954ee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t7syktf1',
                  apiId: '0a538a86-7be0-47c7-91e4-79b861d4ec63'
                },
                {
                  buildHookId: '5ec0dc2668f986749d01fb17',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bcsg7hei',
                  apiId: '65a3a1ee-2840-4c4c-8c56-b72e7edb4add'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivjose/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bcsg7hei.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

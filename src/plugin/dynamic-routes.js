module.exports = function (context, options) {
    return {
      name: 'docusaurus-plugin-dynamic-routes',
      async contentLoaded({ content, actions }) {
        const { addRoute } = actions;
  
       
        const items = [{ id: '1' }, { id: '2' }, { id: '3' }];
  
        items.forEach((item) => {
          addRoute({
            path: `/updates/${item.id}`,
            component: '@site/src/components/updates/UpdatesList.tsx',
            exact: true,
            modules: {
              // Puedes inyectar datos específicos a la ruta
              itemData: `@site/data/workflows/${item.id}.json`,
            },
          });
        });
      },
    };
  };
  

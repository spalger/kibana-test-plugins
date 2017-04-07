export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      app: {
        title: 'Chunking Test',
        description: 'chunking test',
        main: 'plugins/chunking_test/app'
      },
    },
  });
};

const FormView = require('./views/form_view.js')
const GridView = require('./views/grid_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  const formView = new FormView(form);
  formView.bindEvents();

  const container = document.querySelector('#grid');
  const gridView = new GridView(container);
  gridView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
  bucketList.getData();
});

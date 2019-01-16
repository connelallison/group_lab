const FormView = require('./views/form_view.js')
const GridView = require('./views/grid_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const createForm = document.querySelector('#create-form');
  const createFormView = new FormView(createForm);
  createFormView.bindEvents();

  const updateForm = document.querySelector('#update-form');
  const updateFormView = new FormView(updateForm);
  updateFormView.bindEvents();

  const container = document.querySelector('#grid');
  const gridView = new GridView(container);
  gridView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
  bucketList.getData();
});

import express from 'express';
import {
  addMediaItem,
  deleteMediaItem,
  fetchMediaItems,
  fetchMediaTypes,
  fetchSingleMediaItem,
  updateMediaItem,
} from '../controller/DashboardController.js';

const DashboardRouter = express.Router();

//add media to server middleware parameter
DashboardRouter.route('/types').get(fetchMediaTypes);
DashboardRouter.route('/items').get(fetchMediaItems);
DashboardRouter.route('/addItem').post(addMediaItem);
DashboardRouter.route('/:id')
  .get(fetchSingleMediaItem)
  .patch(updateMediaItem)
  .delete(deleteMediaItem);

export default DashboardRouter;

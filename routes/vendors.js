var express = require('express');
var router = express.Router();

var vendor_controller = require('../controllers/vendorController');
var product_controller = require('../controllers/productController');
var choice_controller = require('../controllers/choiceController');

module.exports = function (app) {
  /**
   * @api {get} /vendors list
   *
   * @apiDescription Get all vendors
   *
   * @apiName list
   * @apiGroup Vendor
   *
   * @apiHeader {string} Authorization Bearer
   *
   * @apiSuccess {Number} id Id
   * @apiSuccess {String} name  Name
   * @apiSuccess {String} url URL
   * @apiSuccess {DateTime} createdAt  Created At
   * @apiSuccess {DateTime} updatedAt UpdatedAt
   */
  router.get('/', app.oauth.authorise(), vendor_controller.list);

  /**
   * @api {get} /vendors/:id show
   *
   * @apiDescription Get vendor
   *
   * @apiName show
   * @apiGroup Vendor
   *
   * @apiHeader {string} Authorization Bearer
   *
   * @apiSuccess {Number} id Id
   * @apiSuccess {String} name  Name
   * @apiSuccess {String} url URL
   * @apiSuccess {DateTime} createdAt  Created At
   * @apiSuccess {DateTime} updatedAt UpdatedAt
   */
  router.get('/:id', app.oauth.authorise(), vendor_controller.show);

  /**
   * @api {post} /vendors store
   *
   * @apiDescription Create vendor
   *
   * @apiName store
   * @apiGroup Vendor
   *
   * @apiHeader {string} Authorization Bearer
   *
   * @apiParam {String} name Name
   * @apiParam {String} [url]  URL
   */
  router.post('/', app.oauth.authorise(), vendor_controller.store);

  /**
   * @api {patch} /vendors/:vendorId update
   *
   * @apiDescription Update vendor
   *
   * @apiName update
   * @apiGroup Vendor
   *
   * @apiHeader {string} Authorization Bearer
   *
   * @apiParam {String} name Name
   * @apiParam {String} [url]  URL
   */
  router.patch('/:vendorId', app.oauth.authorise(), vendor_controller.update);

  /**
   * @api {delete} /vendors/:vendorId delete
   *
   * @apiDescription Delete vendor
   *
   * @apiName delete
   * @apiGroup Vendor
   *
   * @apiHeader {string} Authorization Bearer
   */
  router.delete('/:vendorId', app.oauth.authorise(), vendor_controller.delete);

  /**
   * @api {get} /vendors/:vendorId/products list
   *
   * @apiDescription Get all products of vendor
   *
   * @apiName list
   * @apiGroup Product
   *
   * @apiHeader {string} Authorization Bearer
   */
  router.get('/:vendorId/products', app.oauth.authorise(), product_controller.list);

  /**
   * @api {get} /vendors/:vendorId/products/:productId show
   *
   * @apiDescription Get product
   *
   * @apiName show
   * @apiGroup Product
   *
   * @apiHeader {string} Authorization Bearer
   */
  router.get('/:vendorId/products/:productId', app.oauth.authorise(), product_controller.show);
  router.post('/:vendorId/products', app.oauth.authorise(), product_controller.store);
  router.post('/:vendorId/products/many', app.oauth.authorise(), product_controller.storeMany);
  router.patch('/:vendorId/products/:productId', app.oauth.authorise(), product_controller.update);
  router.delete('/:vendorId/products/:productId', app.oauth.authorise(), product_controller.delete);

  /**
   * @api {get} /vendors/:vendorId/products/:productId/choices list
   *
   * @apiDescription Get all choices of product
   *
   * @apiName listOfProduct
   * @apiGroup Choice
   *
   * @apiHeader {string} Authorization Bearer
   */
  router.get('/:vendorId/products/:productId/choices', app.oauth.authorise(), choice_controller.listOfProduct);

  return router;
};

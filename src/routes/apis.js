const { app } = require('firebase-admin');
const services = require('../services/index');

const multer = require('multer');
const upload = multer();
// const { loggedIn, adminOnly } = require("../middlewares/auth.middleware");
module.exports = (app) => {

	//*********** User *************************/

	/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing API
 */

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     User:
	 *       type: object
	 *       required:
	 *         - email
	 *         - password
	 *         - name
	 *       properties:
	 *         id:
	 *           type: string
	 *           description: The auto-generated id of the User
	 *         name:
	 *           type: string
	 *           description: The user name 
	 *         email:
	 *           type: string
	 *           description: The user email
	 *         password:
	 *           type: string
	 *           description: The  user password 
	 *       example:
	 *         name: xyz
	 *         email: xyz@gmail.com
	 *         password: xyz@123
	 */

	/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
	*/


	app.post('/api/users/register', services.User.register);

	/**
* @swagger
* /api/users/login:
*   post:
*     summary:  User Login
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: The User was successfully created
*         content:
*           application/json:
*            
*       500:
*         description: Some server error
*/

	app.post('/api/users/login', services.User.login);

	/**
 * @swagger
 *  /api/v1/profile/{email}:
 *   get:
 *     summary: Remove the User by email
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: The User email
 * 
 *     responses:
 *       200:
 *         description: The User details 
 *       404:
 *         description: The User details not found
 */

	app.post('/api/v1/profile', services.User.profile);

	/**
 * @swagger
 * /api/updateUser/{id}:
 *  patch:
 *    summary: Update the User by the id
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The User id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The User was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The User was not found
 *      500:
 *        description: Some error happened
 */

	app.patch('/api/updateUser/:id', services.User.updateUser);

	/**
 * @swagger
 *  /api/deleteUser/{id}:
 *   delete:
 *     summary: Remove the User by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 * 
 *     responses:
 *       200:
 *         description: The User was deleted
 *       404:
 *         description: The User was not found
 */
	app.delete('/api/deleteUser/:id', services.User.deleteUser);

	//*********** category *************************/

	/**
	 * @swagger
	 * tags:
	 *   name: Category
	 *   description: The Category managing API
	 */

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     Category:
	 *       type: object
	 *       required:
	 *         - name
	 *         - imagePath
	 *       properties:
	 *         id:
	 *           type: string
	 *           description: The auto-generated id of the category
	 *         name:
	 *           type: string
	 *           description: The name 
	 *         imagePath:
	 *           type: string
	 *           description: The imagePath
	 *       example:
	 *         name: Mehendi
	 *         imagePath: /mehendi.img.jpg
	 */

	/**
 * @swagger
 * /api/v1/createCategory:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
	*/

	app.post('/api/v1/createCategory', services.categories.createCategory);

	/**
	 * @swagger
	 * /api/v1/getCategory:
	 *   get:
	 *     summary: Returns the list of all the category
	 *     tags: [Category]
	 *     responses:
	 *       200:
	 *         description: The list of the Category
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Category'
	   */

	app.get('/api/v1/getCategory', services.categories.getCategory);

	/**
	 * @swagger
	 * /api/v1/FindOneCategory/{id}:
	 *   get:
	 *     summary: Get the Category by id
	 *     tags: [Category]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The Category id
	 *     responses:
	 *       200:
	 *         description: The Category description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/Category'
	 *       404:
	 *         description: The Category was not found
	 */
	app.get('/api/v1/FindOneCategory/:id', services.categories.FindOneCategory);

	/**
 * @swagger
 * /api/v1/updateCategory/{id}:
 *  patch:
 *    summary: Update the Category by the id
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The Category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: The Category was not found
 *      500:
 *        description: Some error happened
 */

	app.patch('/api/v1/updateCategory/:id', services.categories.updateCategory);

	/**
 * @swagger
 *  /api/v1/deleteCategory/{id}:
 *   delete:
 *     summary: Remove the Category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Category id
 * 
 *     responses:
 *       200:
 *         description: The Category was deleted
 *       404:
 *         description: The Category was not found
 */
	app.delete('/api/v1/deleteCategory/:id', services.categories.deleteCategory);


	//*********** Sub category *************************/


	/**
	 * @swagger
	 * tags:
	 *   name: SubCategory
	 *   description: The SubCategory managing API
	*/

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     SubCategory:
	 *       type: object
	 *       required:
	 *         - categoryId
	 *         - name
	 *         - imagePath
	 *         - imagePath
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the SubCategory
 *         name:
 *           type: string
 *           description: The name 
 *         imagePath:
 *           type: string
 *           description: The imagePath
 *         bannerPath:
 *           type: string
 *           description: The imagePath
 *         categoryId:
 *           type: string
 *           description: The category_id
 *       example:
 *         categoryId: 34sdf55
 *         name: Bridal Makeup
 *         imagePath: /Bridalmakeup.img.jpg
 *         bannerPath: /Bridalmakeup.img.jpg
	*/


	/**
* @swagger
* /api/v1/createSubCategory:
*   post:
*     summary: Create a new SubCategory
*     tags: [SubCategory]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/SubCategory'
*     responses:
*       200:
*         description: The SubCategory was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/SubCategory'
*       500:
*         description: Some server error
*/
	app.post('/api/v1/createSubCategory', services.subcategories.createNewSubCategory);

	app.post('/api/v1/Category/subCategory', services.subcategories.CreateSubCategory);

	/**
	 * @swagger
	 * /api/v1/getSubCategory:
	 *   get:
	 *     summary: Returns the list of all the SubCategory
	 *     tags: [SubCategory]
	 *     responses:
	 *       200:
	 *         description: The list of the SubCategory
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/SubCategory'
	   */
	app.get('/api/v1/getSubCategory', services.subcategories.getSubCategory);

	/**
	 * @swagger
	 * /api/v1/FindOneSubCategory/{id}:
	 *   get:
	 *     summary: Get the SubCategory by id
	 *     tags: [SubCategory]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The SubCategory id
	 *     responses:
	 *       200:
	 *         description: The SubCategory description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/SubCategory'
	 *       404:
	 *         description: The SubCategory was not found
	 */
	app.get('/api/v1/FindOneSubCategory/:id', services.subcategories.FindOneSubCategory);

	/**
 * @swagger
 * /api/v1/updateSubCategory/{id}:
 *  patch:
 *    summary: Update the SubCategory by the id
 *    tags: [SubCategory]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The SubCategory id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SubCategory'
 *    responses:
 *      200:
 *        description: The SubCategory was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SubCategory'
 *      404:
 *        description: The SubCategory was not found
 *      500:
 *        description: Some error happened
 */
	app.patch('/api/v1/updateSubCategory/:id', services.subcategories.updateSubCategory);

	/**
 * @swagger
 *  /api/v1/deleteSubCategory/{id}:
 *   delete:
 *     summary: Remove the SubCategory by id
 *     tags: [SubCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SubCategory id
 * 
 *     responses:
 *       200:
 *         description: The SubCategory was deleted
 *       404:
 *         description: The SubCategory was not found
 */
	app.delete('/api/v1/deleteSubCategory/:id', services.subcategories.deleteSubCategory);

	//**************** Services *************************/


	/**
	 * @swagger
	 * tags:
	 *   name: Services
	 *   description: The Services managing API
	*/


	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     Services:
	 *       type: object
	 *       required:
	 *         - subCatgoryId
	 *         - name
	 *         - serviceImage
	 *         - descriptions
	 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Services
 *         name:
 *           type: string
 *           description: The sub_category_name 
 *         serviceImage:
 *           type: string
 *           description: The sub_category_image
 *         descriptions:
 *           type: string
 *           description: The descriptions
 *       example:
 *         subCatgoryId: 34sdf55
 *         name: Bridal Makeup
 *         serviceImage: /Bridalmakeup.img.jpg
 *         descriptions: the army
 *         price: 10000
	*/


	/**
* @swagger
* /api/v1/createServices:
*   post:
*     summary: Create a new Services
*     tags: [Services]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Services'
*     responses:
*       200:
*         description: The Services was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Services'
*       500:
*         description: Some server error
*/
	app.post('/api/v1/createServices', services.Services.createNewServices);

	/**
	 * @swagger
	 * /api/v1/getServices:
	 *   get:
	 *     summary: Returns the list of all the Services
	 *     tags: [Services]
	 *     responses:
	 *       200:
	 *         description: The list of the Services
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Services'
	   */

	app.get('/api/v1/getServices', services.Services.getServices);

	/**
	 * @swagger
	 * /api/v1/FindOneServices/{id}:
	 *   get:
	 *     summary: Get the Services by id
	 *     tags: [Services]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The Services id
	 *     responses:
	 *       200:
	 *         description: The Services description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/Services'
	 *       404:
	 *         description: The Services was not found
	 */

	app.get('/api/v1/FindOneServices/:id', services.Services.FindOneServices);

	/**
	 * @swagger
	 * /api/v1/getBestSeller:
	 *   get:
	 *     summary: Returns the list of all the getBestSeller
	 *     tags: [Services]
	 *     responses:
	 *       200:
	 *         description: The list of the getBestSeller
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Services'
	   */

	app.get('/api/v1/getBestSeller', services.Services.getBestSeller);

	/**
 * @swagger
 * /api/v1/updateServices/{id}:
 *  patch:
 *    summary: Update the Services by the id
 *    tags: [Services]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Services id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Services'
 *    responses:
 *      200:
 *        description: The Services was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Services'
 *      404:
 *        description: The Services was not found
 *      500:
 *        description: Some error happened
 */

	app.patch('/api/v1/updateServices/:id', services.Services.updateServices);

	/**
 * @swagger
 *  /api/v1/deleteServices/{id}:
 *   delete:
 *     summary: Remove the Services by id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Services id
 * 
 *     responses:
 *       200:
 *         description: The Services was deleted
 *       404:
 *         description: The Services was not found
 */

	app.delete('/api/v1/deleteServices/:id', services.Services.deleteServices);

	//*********** Order *************************/


	/**
	 * @swagger
	 * tags:
	 *   name: Order
	 *   description: The Order managing API
	*/


	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     Order:
	 *       type: object
	 *       required:
	 *         - category_name
	 *         - category_image
	 *         - category_banner_image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Order
 *         sub_category_name:
 *           type: string
 *           description: The sub_category_name 
 *         sub_category_image:
 *           type: string
 *           description: The sub_category_image
 *         category_id:
 *           type: string
 *           description: The category_id
 *       example:
 *         category_id: 34sdf55
 *         sub_category_name: Bridal Makeup
 *         sub_category_image: /Bridalmakeup.img.jpg
	*/


	/**
* @swagger
* /api/v1/createNewOrder:
*   post:
*     summary: Create a new Order
*     tags: [Order]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Order'
*     responses:
*       200:
*         description: The Order was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Order'
*       500:
*         description: Some server error
*/

	app.post('/api/v1/createNewOrder', services.Order.createNewOrder);

	/**
	 * @swagger
	 * /api/v1/getOrderList:
	 *   get:
	 *     summary: Returns the list of all the Order
	 *     tags: [Order]
	 *     responses:
	 *       200:
	 *         description: The list of the Order
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Order'
	   */

	app.get('/api/v1/getOrderList', services.Order.getOrderList);

	/**
	 * @swagger
	 * /api/v1/getSingleOrder/{id}:
	 *   get:
	 *     summary: Get the Order by id
	 *     tags: [Order]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The Order id
	 *     responses:
	 *       200:
	 *         description: The Order description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/Order'
	 *       404:
	 *         description: The Order was not found
	 */

	app.get('/api/v1/getSingleOrder/:id', services.Order.getSingleOrder);

	/**
 * @swagger
 * /api/v1/updateOrder/{id}:
 *  patch:
 *    summary: Update the Order by the id
 *    tags: [Order]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Order id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Order'
 *    responses:
 *      200:
 *        description: The Order was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Order'
 *      404:
 *        description: The Order was not found
 *      500:
 *        description: Some error happened
 */

	app.patch('/api/v1/updateOrder/:id', services.Order.updateOrder);

	/**
 * @swagger
 *  /api/v1/deleteOrder/{id}:
 *   delete:
 *     summary: Remove the Order by id
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Order id
 * 
 *     responses:
 *       200:
 *         description: The Order was deleted
 *       404:
 *         description: The Order was not found
 */
	app.delete('/api/v1/deleteOrder/:id', services.Order.deleteOrder);

	//****************** Vendor *************************/


	/**
	 * @swagger
	 * tags:
	 *   name: Vendor
	 *   description: The Vendor managing API
	*/


	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     Vendor:
	 *       type: object
	 *       required:
	 *         - category_name
	 *         - category_image
	 *         - category_banner_image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Vendor
 *         sub_category_name:
 *           type: string
 *           description: The sub_category_name 
 *         sub_category_image:
 *           type: string
 *           description: The sub_category_image
 *         category_id:
 *           type: string
 *           description: The category_id
 *       example:
 *         category_id: 34sdf55
 *         sub_category_name: Bridal Makeup
 *         sub_category_image: /Bridalmakeup.img.jpg
	*/


	/**
* @swagger
* /api/v1/createNewOrder:
*   post:
*     summary: Create a new Vendor
*     tags: [Vendor]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Vendor'
*     responses:
*       200:
*         description: The Vendor was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Vendor'
*       500:
*         description: Some server error
*/

	app.post('/api/v1/createVendors', upload.any(), services.Vendor.createVendors);

	/**
	 * @swagger
	 * /api/v1/getVendor:
	 *   get:
	 *     summary: Returns the list of all the Order
	 *     tags: [Vendor]
	 *     responses:
	 *       200:
	 *         description: The list of the Order
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Order'
	   */

	app.get('/api/v1/getVendor', services.Vendor.getVendor);

	/**
	 * @swagger
	 * /api/v1/FindOneVendor/{id}:
	 *   get:
	 *     summary: Get the Order by id
	 *     tags: [Vendor]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The Order id
	 *     responses:
	 *       200:
	 *         description: The Order description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/Order'
	 *       404:
	 *         description: The Order was not found
	 */

	app.get('/api/v1/FindOneVendor/:id', services.Vendor.FindOneVendor);

	/**
	* @swagger
	* /api/v1/updateVendor/{id}:
	*  patch:
	*    summary: Update the Order by the id
	*    tags: [Vendor]
	*    parameters:
	*      - in: path
	*        name: id
	*        schema:
	*          type: string
	*        required: true
	*        description: The Order id
	*    requestBody:
	*      required: true
	*      content:
	*        application/json:
	*          schema:
	*            $ref: '#/components/schemas/Order'
	*    responses:
	*      200:
	*        description: The Order was updated
	*        content:
	*          application/json:
	*            schema:
	*              $ref: '#/components/schemas/Order'
	*      404:
	*        description: The Order was not found
	*      500:
	*        description: Some error happened
	*/

	app.patch('/api/v1/updateVendor/:id', services.Vendor.updateVendor);

	/**
	* @swagger
	*  /api/v1/deleteVendor/{id}:
	*   delete:
	*     summary: Remove the Order by id
	*     tags: [Vendor]
	*     parameters:
	*       - in: path
	*         name: id
	*         schema:
	*           type: string
	*         required: true
	*         description: The Order id
	* 
	*     responses:
	*       200:
	*         description: The Order was deleted
	*       404:
	*         description: The Order was not found
	*/
	app.delete('/api/v1/deleteVendor/:id', services.Vendor.deleteVendor);


	//********************** profile *************************/

	/**
	 * @swagger
	 * tags:
	 *   name: Profile
	 *   description: The Profile managing API
	 */

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     Profile:
	 *       type: object
	 *       required:
	 *         - fullName
	 *         - phoneNumber
	 *         - coverImage
	 *       properties:
	 *         id:
	 *           type: string
	 *           description: The auto-generated id of the profile
	 *         fullName:
	 *           type: string
	 *           description: The fullName 
	 *         phoneNumber:
	 *           type: Number
	 *           description: The phoneNumber
	 *         coverImage:
	 *           type: string
	 *           description: The coverImage
	 *       example:
	 *         fullName: Ashish
	 *         phoneNumber: 7987567888
	 *         coverImage: /ashish.img.jpg
	 */

	/**
 * @swagger
 * /api/v1/createProfile:
 *   post:
 *     summary: Create a new Profile
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: The profile was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Some server error
	*/
	app.post('/api/v1/createProfiles', services.Profile.createProfiles);

	/**
	 * @swagger
	 * /api/v1/getProfile:
	 *   get:
	 *     summary: Returns the list of all the Profile
	 *     tags: [Profile]
	 *     responses:
	 *       200:
	 *         description: The list of the Profile
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Profile'
	   */

	app.get('/api/v1/getProfile', services.Profile.getProfile);

	/**
	 * @swagger
	 * /api/v1/FindOneProfile/{id}:
	 *   get:
	 *     summary: Get the Profile by id
	 *     tags: [Profile]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The Profile id
	 *     responses:
	 *       200:
	 *         description: The Profile description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/Profile'
	 *       404:
	 *         description: The profile was not found
	 */
	app.get('/api/v1/FindOneProfile/:id', services.Profile.FindOneProfile);

	/**
 * @swagger
 * /api/v1/updateProfile/{id}:
 *  patch:
 *    summary: Update the Profile by the id
 *    tags: [Profile]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Profile id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Profile'
 *    responses:
 *      200:
 *        description: The Profile was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Profile'
 *      404:
 *        description: The Profile was not found
 *      500:
 *        description: Some error happened
 */

	app.patch('/api/v1/updateProfile/:id', services.Profile.updateProfile);

	/**
 * @swagger
 *  /api/v1/deleteProfile/{id}:
 *   delete:
 *     summary: Remove the Profile by id
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Profile id
 * 
 *     responses:
 *       200:
 *         description: The Profile was deleted
 *       404:
 *         description: The Profile was not found
 */
	app.delete('/api/v1/deleteProfile/:id', services.Profile.deleteProfile);


		//********************** Banner *************************/

	/**
	 * @swagger
	 * tags:
	 *   name: Banner
	 *   description: The Banner managing API
	 */

	/**
	 * @swagger
	 * components:
	 *   schemas:
	 *     Banner:
	 *       type: object
	 *       required:
	 *         - imagePath
	 *       properties:
	 *         id:
	 *           type: string
	 *           description: The auto-generated id of the Banner
	 *         imagePath:
	 *           type: string
	 *           description: The fullName 
	 *       example:
	 *         imagePath: /ashish.img.jpg
	 */

	/**
 * @swagger
 * /api/v1/createBanner:
 *   post:
 *     summary: Create a new Banner
 *     tags: [Banner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Banner'
 *     responses:
 *       200:
 *         description: The Banner was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Banner'
 *       500:
 *         description: Some server error
	*/
	app.post('/api/v1/createBanner', services.Banner.createBanner);

	/**
	 * @swagger
	 * /api/v1/getBanner:
	 *   get:
	 *     summary: Returns the list of all the Banner
	 *     tags: [Banner]
	 *     responses:
	 *       200:
	 *         description: The list of the Banner
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: array
	   *               items:
	   *                  $ref: '#/components/schemas/Banner'
	   */

	app.get('/api/v1/getBanner', services.Banner.getBanner);

	/**
	 * @swagger
	 * /api/v1/FindOneBanner/{id}:
	 *   get:
	 *     summary: Get the Banner by id
	 *     tags: [Banner]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The Banner id
	 *     responses:
	 *       200:
	 *         description: The Banner description by id
	 *         contens:
	 *           application/json:
	 *             schema:
	 *             $ref: '#/components/schemas/Banner'
	 *       404:
	 *         description: The Banner was not found
	 */
	app.get('/api/v1/FindOneBanner/:id', services.Banner.FindOneBanner);

	/**
 * @swagger
 * /api/v1/updateBanner/{id}:
 *  patch:
 *    summary: Update the Banner by the id
 *    tags: [Banner]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Banner id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Banner'
 *    responses:
 *      200:
 *        description: The Banner was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Banner'
 *      404:
 *        description: The Banner was not found
 *      500:
 *        description: Some error happened
 */

	app.patch('/api/v1/updateBanner/:id', services.Banner.updateBanner);

	/**
 * @swagger
 *  /api/v1/deleteBanner/{id}:
 *   delete:
 *     summary: Remove the Banner by id
 *     tags: [Banner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Banner id
 * 
 *     responses:
 *       200:
 *         description: The Banner was deleted
 *       404:
 *         description: The Banner was not found
 */
	app.delete('/api/v1/deleteBanner/:id', services.Banner.deleteBanner);

	app.get('/api/v1/location', services.User.location);

};
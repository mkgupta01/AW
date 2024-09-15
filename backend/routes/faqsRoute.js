const express = require('express');

const router = express.Router();

// Controllers for FAQs (replace with actual implementations)
const {
  getAllFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq
} = require('../controllers/faqCont');

// Routes for FAQs
router.route('/faqs')
  .get(getAllFaqs)      
  .post(createFaq);     

router.route('/faqs/:id')
  .get(getFaqById)      
  .put(updateFaq)       
  .delete(deleteFaq);   

module.exports = router;

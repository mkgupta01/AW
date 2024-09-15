const FAQModel = require('../models/FAQModel');


const getAllFaqs = async (req, res) => {
    try {
        const faqs = await FAQModel.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching FAQs", error });
    }
};

const getFaqById = async (req, res) => {
    try {
        const faq = await FAQModel.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({ message: "FAQ not found" });
        }
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ message: "Error fetching FAQ", error });
    }
};

const createFaq = async (req, res) => {
    const { name, title, content } = req.body;

    try {
        const newFaq = await FAQModel.create({ name, title, content }); 
        res.status(201).json(newFaq);
    } catch (error) {
        res.status(500).json({ message: "Error creating FAQ", error });
    }
};

const updateFaq = async (req, res) => {
    const { name, title, content } = req.body;

    try {
        const updatedFaq = await FAQModel.findByIdAndUpdate(
            req.params.id,
            { name, title, content },
            { new: true, runValidators: true }
        );

        if (!updatedFaq) {
            return res.status(404).json({ message: "FAQ not found" });
        }

        res.status(200).json(updatedFaq);
    } catch (error) {
        res.status(500).json({ message: "Error updating FAQ", error });
    }
};

const deleteFaq = async (req, res) => {
    try {
        const faq = await FAQModel.findByIdAndDelete(req.params.id);
        
        if (!faq) {
            return res.status(404).json({ message: "FAQ not found" });
        }

        res.status(200).json({ message: "FAQ deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting FAQ", error });
    }
};

module.exports = {
    getAllFaqs,
    getFaqById,
    createFaq,
    updateFaq,
    deleteFaq
};

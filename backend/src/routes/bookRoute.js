// bookRoute.js
import { Router } from "express";
import { authmiddleware } from "../middleware/authmiddleware.js"; // Correctly import authmiddleware
import BookModel from "../model/bookModel.js";

const bookRoute = Router();

bookRoute.post("/create", authmiddleware, async (req, res) => {
    const { title, author, frontCoverImage, backCoverImage, pages } = req.body;
    try {
        const newbook = new BookModel({ title, author, frontCoverImage, backCoverImage, pages });
        await newbook.save();
        res.status(201).json({ book: newbook });
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).json({ message: "Error creating book" });
    }
});

// Get all the books
bookRoute.get("/", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const books = await BookModel.find()
            .skip((page - 1) * limit)
            .limit(limit);
        res.status(200).json({ books: books });
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).json({ message: "Error fetching books" });
    }
});

bookRoute.get("/:id", async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await BookModel.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ book: book });
    } catch (error) {
        console.error("Error fetching the book by ID", error);
        res.status(500).json({ message: "Error fetching the book by ID" });
    }
});

// Delete by ID
bookRoute.delete("/:id", authmiddleware, async (req, res) => {
    const bookId = req.params.id;
    try {
        const deleteBook = await BookModel.findByIdAndDelete(bookId);
        if (!deleteBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting the book by ID", error);
        res.status(500).json({ message: "Error deleting the book by ID" });
    }
});

export default bookRoute;

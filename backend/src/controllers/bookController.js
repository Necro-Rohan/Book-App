const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.createBook = async (req, res) => {
  const { title, summary, authorId, isbn, genreId } = req.body;
  if (!title || !summary || !authorId || !isbn || !genreId) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    let genres = [];
    if (Array.isArray(genreId)) {
      genres = genreId.map(id => ({ genre: { connect: { id: Number(id) } } }));
    } else {
      genres = [{ genre: { connect: { id: Number(genreId) } } }];
    }
    const newBook = await prisma.book.create({
      data: {
        title,
        summary,
        author: { connect: { id: Number(authorId)} },
        isbn,
        genre: { 
          create: genres
        },
      },
    });
    return res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book:", error);
    return res.status(500).json({ error: "Failed to create book" });
  }
};

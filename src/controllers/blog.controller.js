import db from "../config/db.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      author_name,
      category,
      tags,
    } = req.body;

    const image = req.file ? req.file.filename : null;

    await db.query(
      `INSERT INTO blogs 
      (title, slug, excerpt, content, author_name, image, category, tags)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        slug,
        excerpt,
        content,
        author_name,
        image,
        category,
        tags,
      ]
    );

    res.json({ message: "Blog created successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM blogs ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE BLOG
export const getBlogById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM blogs WHERE id=?", [
      req.params.id,
    ]);

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      author_name,
      category,
      tags,
    } = req.body;

    const image = req.file ? req.file.filename : null;

    await db.query(
      `UPDATE blogs SET 
      title=?, slug=?, excerpt=?, content=?, author_name=?, image=?, category=?, tags=?
      WHERE id=?`,
      [
        title,
        slug,
        excerpt,
        content,
        author_name,
        image,
        category,
        tags,
        req.params.id,
      ]
    );

    res.json({ message: "Blog updated ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    await db.query("DELETE FROM blogs WHERE id=?", [req.params.id]);
    res.json({ message: "Blog deleted ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/actor', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	actor')
    res.json(rows)
})
router.get('/address', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	address')
    res.json(rows)
})
router.get('/category', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	category')
    res.json(rows)
})
router.get('/city', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	city')
    res.json(rows)
})
router.get('/country', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	country')
    res.json(rows)
})
router.get('/customer', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	customer')
    res.json(rows)
})
router.get('/film', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	film')
    res.json(rows)
})
router.get('/inventory', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	inventory')
    res.json(rows)
})
router.get('/language', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	language')
    res.json(rows)
})
router.get('/payment', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	payment')
    res.json(rows)
})
router.get('/rental', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	rental')
    res.json(rows)
})
router.get('/staff', async (req, res) => {
const {rows} = await pool.query('SELECT * FROM	staff')
    res.json(rows)
})


export default router;
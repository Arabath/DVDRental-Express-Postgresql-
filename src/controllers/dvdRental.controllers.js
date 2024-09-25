import { pool } from "../db.js";

export const getActors = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM actor')
    res.json(rows)
}
export const getAddress = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM address')
    res.json(rows)
}
export const getCategory = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM category')
    res.json(rows)
}
export const getCity = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM city')
    res.json(rows)
}
export const getCountry = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM country')
    res.json(rows)
}
export const getCustomer = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM customer')
    res.json(rows)
}
export const getFilm = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM film')
    res.json(rows)
}
export const getInventory = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM inventory')
    res.json(rows)
}
export const getLanguage = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM language')
    res.json(rows)
}
export const getPayment = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM payment')
    res.json(rows)
}
export const getRental = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM rental')
    res.json(rows)
}
export const getStaff = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM staff')
    res.json(rows)
}
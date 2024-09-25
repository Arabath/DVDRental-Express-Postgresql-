import { Router } from "express";
import { getActors, getAddress, getCategory, getCity, getCountry, getCustomer, getFilm, getInventory, getLanguage, getPayment, getRental, getStaff } from "../controllers/dvdRental.controllers.js";


const router = Router();

router.get('/actor', getActors)

router.get('/address',getAddress)

router.get('/category', getCategory)

router.get('/city', getCity)

router.get('/country', getCountry)

router.get('/customer', getCustomer)

router.get('/film', getFilm)

router.get('/inventory', getInventory)

router.get('/language', getLanguage)

router.get('/payment', getPayment)

router.get('/rental', getRental)

router.get('/staff', getStaff)


export default router;
const express = require("express")
const mysql = require("../config/db")

const router = express.Router()

router.get("/", (req, res) => {
    const sql = "SELECT * FROM boats"
    mysql.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data from database")
        } else {
            console.table(result)
            res.status(200).json(result)
        }
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const sql = "SELECT * FROM boats WHERE boats_id = ?"
    const values = [id]
    mysql.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data from database")
        } else {
            console.table(result)
            res.status(200).json(result)
        }
    })
})

router.post("/", (req, res) => {
    const sql = `INSERT INTO boats (boats_name, boats_title, boats_desc) VALUES (?, ?, ?)`
    console.log(req.body)
    const values = [req.body.boats_name, req.body.boats_title, req.body.boats_desc]
    mysql.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data from database")
        } else {
            console.table(result)
            res.status(200).json(result)
        }
    })
})

router.put("/:id", (req, res) => {
    const { id } = req.params
    const sql = `UPDATE boats SET boats_name = ? WHERE boats_id = ?`
    console.log(req.body)
    const values = [req.body.boats_name, id]
    mysql.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data from database")
        } else {
            console.table(result)
            res.status(200).json(result)
        }
    })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM boats  WHERE id = ?`
    const values = [id]
    mysql.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data from database")
        } else {
            console.table(result)
            res.status(200).json(result)
        }
    })
})

module.exports = router

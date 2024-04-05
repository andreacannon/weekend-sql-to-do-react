const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET all from table
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM tasks ORDER BY due_date`
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got tasks back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })

})

// POST route for new tasks to database
router.post('/', (req, res) => {
    const task = req.body;
    const sqlText = `INSERT INTO tasks ("name", "due_date")
                     VALUES ($1, $2)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [task.name, task.dueDate])
        .then((result) => {
            console.log(`Added task to the database`, task);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT route to update tasks
router.put('/', (req, res) => {
    const task = req.body
    const sqlText = (`UPDATE tasks SET name = $1 WHERE id = $2`, [task.name, task.id])

    pool.query(sqlText, [task.name])
})

// DELETE
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const sqlText = 'DELETE FROM tasks WHERE id = $1';
  
    pool.query(sqlText, [taskId])
      .then(() => {
        console.log('Task deleted from the database');
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error deleting task with ID ${taskId}`, error);
        res.sendStatus(500);
      });
  });
module.exports = router;

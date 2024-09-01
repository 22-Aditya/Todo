const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('All task')
});
//To get all task
router.post('/', fetchAllTasks);

//To create a task
router.post('/', createTask);

//To update a task
router.put('/:id', updateTaskById);

//To delete a task
router.delete('/:id', deleteTaskById);

module.exports = router;
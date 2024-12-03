var express = require ('express');
const {user, $disconnect} = require ("@prisma/client");
var router = express.Router ();

const { PrismaClient } = require ('@prisma/client');

const prisma = new PrismaClient ();

/* GET home page. */
router.get ('/', async (req, res, next) =>
{
  const task = await prisma.task.create ({
    data: {
      title: 'New Task',
      description: 'Description',
    },
  });

  res.json ({
    ok: true,
    task
  });
});


router.get ('/all', async (req, res, next) => {
  const tasks = await prisma.task.findMany ();

  res.json ({
    ok: true,
    tasks: tasks,
  });
});

module.exports = router;
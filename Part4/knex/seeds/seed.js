exports.seed = function(knex) {
    return knex("todo").insert([
        {task: "Task 1", description: "Task 1 description"},
        {task: "Task 2", description: "Task 2 description"},
        {task: "Task 3", description: "Task 3 description"},
    ])
}

exports.seed = function(knex) {
    return knex("todo2").insert([
        {task: "Task 1", description: "Task 1 description"},
        {task: "Task 2", description: "Task 2 description"},
        {task: "Task 3", description: "Task 3 description"},
    ])
}
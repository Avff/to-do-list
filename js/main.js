


let todo = [
{task:"Meeting", available:false},
{task:"Prepare and send budget", available:true},
{task:"50% payment", available:true},
{task:"Share References", available:true},
{task:"Meeting to discuss references", available:true},
{task:"Make sketches", available:true},
{task:"Digitize sketches", available:true},
{task:"Meet and show concepts and options", available:true},
{task:"Refine option selected", available:true},
{task:"Send final files", available:true},
{task:"Second 50% of the payment", available:true}
];




todo.forEach(td => {


var oneTodo = document.createElement('li');

oneTodo.innerHTML = td.task;

oneTodo.classList.add('todo');

if (td.available == false)
oneTodo.classList.add('unavailable');

document.getElementById('todo').appendChild(oneTodo);

});

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  let ul = document.createElement('ul');
  document.getElementById('list').append(ul);
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = document.querySelector('#new-task-description').value
    let li = document.createElement('li');
    li.innerText=value
    ul.append(li);
  })
});



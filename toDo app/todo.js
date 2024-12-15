let todoList=[
  {
    item:'Buy MIlk',
    dueDate:'4/10/2023',
  },
  {
    item:'Go to college',
    dueDate:'5/10/2023',
  }
];
displayItems();

function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  todoList.push({item:todoItem,
     dueDate:todoDate}
  );
  inputElement.value='';
  dateElement.value='';
  displayItems();  
}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');

  let newHtml='';

  // displayElement.innerText='';

  for(let i=0;i<todoList.length;i++){
    // let item=todoList[i].item;
    // let dueDate=todoList[i].dueDate;  below is the same thing
    let {item,dueDate}=todoList[i];
    newHtml +=`
     <span>${item}</span>
     <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `
    // displayElement.innerText =displayElement.innerText+"\n"+todoList[i];
    
  }
  containerElement.innerHTML=newHtml;
  
}
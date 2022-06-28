//sets up a function that will be called whenever the specified event is delivered to the target.

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#inpute");
	const list_el = document.querySelector("#tasks");

  // prevent the page from constatly refreshin content, prevenDefault
	form.addEventListener('submit', (e) => {
		e.preventDefault();

    //set our task to the input
		const task = input.value;
    
    //Create a <p> element and append it to the document:
		const task_el = document.createElement('div');
		task_el.classList.add('task');
    
    //Class list is read-only property that returns a live DOMTokenList collection of the class attributes of the element
    // we create our div and add our task(values) and content
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

    //appendChild() method appends a node (element) as the last child of an element.
    //This allows our content to be moved as a list inside of our task const
		task_el.appendChild(task_content_el);

    //we create a input value for the new variable and allow that to hold our values
		const task_input_el = document.createElement('input');
    //set DOMtoken as html text
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
    //set const as our task value
		task_input_el.value = task;
    //only read the inout
		task_input_el.setAttribute('readonly', 'readonly');

    //This allows our content to be moved as a list inside of our content const
		task_content_el.appendChild(task_input_el);

    //create a new element and classlist for our edits and deltes 
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		  //create a new element and for edits 
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		//create a new element and for deletes
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		//actualize those edits,send em back of line

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
//fully setting the task area to appened our action s
		task_el.appendChild(task_actions_el);
//finally set the list towards asw ell 
		list_el.appendChild(task_el);

		input.value = '';

		//focus() method sets focus on the specified element,
		// set the edit and if equal we will save the focous 
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
				//else we will save the edit
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
//allow you to delete 
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
console.log(window);
console.log(document);
console.log(console);

var input = document.getElementById("input");
var btn = document.getElementById('btn');

function create_list_item()
{
	//creating an list item and adding it to the list
	var ul = document.getElementById('list');
	var li = document.createElement("li");
	li.appendChild( document.createTextNode(input.value ));
	li.addEventListener( 'mouseover' , function ()
		{
			li.style.fontWeight = "bold";
		});
	li.addEventListener( 'mouseout' , function ()
		{
			li.style.fontWeight = "normal";
		});
	li.addEventListener( 'click' , function ()
		{
			li.style.textDecoration = "line-through";
			setTimeout(function()
				{
					//this wording because the identifier li is a pointer to the object
					li.parentNode.removeChild(li)
				}
				, 3000)
		});
	ul.appendChild(li);
}

function add_list_item_after_keypress(event)
{
	//checking to see if the input is valid
	if ( event.keyCode !== 13 || input.value.length < 1 )
	{
		return;
	}

	create_list_item();

	//clearing the input
	input.value = "";
}

function add_list_item()
{
	//checking to see if the input is valid
	if ( input.value.length < 1 )
	{
		return;
	}

	create_list_item();

	//clearing the input
	input.value = "";
}

input.addEventListener( "keydown", add_list_item_after_keypress);
btn.addEventListener( "click", add_list_item );
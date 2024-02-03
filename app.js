let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

for(let list of lists)
{
    // console.log(list);
    list.addEventListener("dragstart",function(e)
    {
        let selected = e.target;
        // console.log(selected);
        rightBox.addEventListener("dragover",function(e)
        {
            e.preventDefault();  //preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.
        });
        rightBox.addEventListener("drop",function(e)
        {
            rightBox.appendChild(selected)
            selected = null
        })
        leftBox.addEventListener("dragover",function(e)
        {
            e.preventDefault();  
        });
        leftBox.addEventListener("drop",function(e)
        {
            leftBox.appendChild(selected)
            selected = null  //after selecting to select another element we made it null else it moves both selected elements
        })
    })
}
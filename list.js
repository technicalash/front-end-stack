function deleteItem(li_item){
    li_item.remove();
}
let add_btn=document.getElementById("btn");
add_btn.onclick=()=>{
    if (document.getElementById("addtaskbox").value.trim()!==""){
        let li = document.createElement("li");
        li.textContent=document.getElementById("addtaskbox").value;
        document.getElementById("list").appendChild(li);
        document.getElementById("list").value="";
        document.getElementById("addtaskbox").value="";
        //done button
        let donebutton=document.createElement("button");
        donebutton.textContent="❌"
        donebutton.onclick=function(){
            donebutton.textContent="✅"
        }
        donebutton.style.borderRadius="20%";
        donebutton.style.marginLeft="50%";
        donebutton.style.cursor= "pointer";
        li.appendChild(donebutton);
        
        //delete button
        let deletebutton=document.createElement("button");
        deletebutton.textContent="delete";
        deletebutton.onclick=function(){
            deleteItem(li);
        };
        deletebutton.style.borderRadius="20%";
        deletebutton.style.marginLeft="5px";
        deletebutton.style.cursor= "pointer";
        li.appendChild(deletebutton);
    } else{
        alert("please enter the task");
    }
};






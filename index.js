let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addText = document.getElementById("note-text")
addBtn.addEventListener("click",(e)=>{
if(addTitle.value==""||addText.value==""){
   return alert("please add note title and details")
}
let notes = localStorage.getItem("notes");
if(notes==null){
    noteObj=[];
}else{
    notesObj =JSON.parse(notes);
}
let myObject = {
    title: addText.value,
    text: addText.value
}
notesObj.push(myObject);
localStorage.setItem("notes",JSON.stringify(notesObj))

addTitle.value =''
addText.value=''

showNotes()
} );
//showNotes on the page
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes ==null){
notesObj =[]
    }else{
        notesObj = JSON.parse(notes)
    }
    let HTML = "";
    notesObj.forEach(function(element, index ){
       HTML +=`
       <div id="note">
        <p class="note-counter">Note ${index+1}</p>
        <h1 class="note-title">${element.title}</h1>
        <p class="note-text">${element.text}</p>
        <button id="${index}" onclick= "deleteNote(this.id)" class="note-btn">Delete Note</button>
        <button id="${index}" onclick= "editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
      </div>
       
       ` ;
    });
let noteElement = document.getElementById("notes");
if(notesObj.length!=0){
    noteElement.innerHTML = HTML;
}else{
    noteElement.innerHTML = "No notes yet, type into the form ";
}
}
//function to delete notes
function deleteNote(index){
let confirmDel = confirm("You are deleting this note");

let notes = localStorage.getItem("notes")
if (confirmDel==true){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        noteObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes()
}
}
//function to edit the notes
function editNote(index){
    let notes = localStorage.getItem("notes");
    if (addTitle.value!= ""|| addText.value!=""){
      return alert("Clear the form before edditing the note")  
    }
    if(notes ==null){
        notesObj =[]
            }else{
                notesObj = JSON.parse(notes)
            }
            // console.log(notesObj)
            noteObj.findIndex((element, index)=>{
                addTitle.value= element.title;
                addText.value= element.text;

            })
            notesObj.splice(index, 1);
            localStorage.setItem("notes",JSON.stringify(notesObj))
}
showNotes()
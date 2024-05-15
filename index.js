var selectedRow = null

//this function will be  work when user click the submit button
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewREcord(formData);
    }
    else
        updateRecord(formData);

    resetForm();

}

// read the data when user put in side form

function readFormData() {
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["class"] = document.getElementById("class").value;
    formData["rollno"] = document.getElementById("rollno").value;
    formData["studentid"] = document.getElementById("studentid").value;
    formData["email"] = document.getElementById("email").value;
    formData["mob"] = document.getElementById("mob").value;

    return formData;
}

// insert data in <thead> cells
function insertNewREcord(data) {
    var table = document.getElementById("Student-List").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.class;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.rollno;


    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.studentid;


    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.mob;

    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)" href="#home">edit</a> 
                     <a onClick="onDelete(this)">Delete</a>`;
}

// this function used for reset when the  user fill the form  after come to orinal position  
function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("class").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("studentid").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mob").value = "";

    selectedRow = null
}


// this function use for udate the table record 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;

    document.getElementById("class").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("studentid").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("mob").value = selectedRow.cells[5].innerHTML;
}

// this funtion use for send the data inside record 
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.class;
    selectedRow.cells[2].innerHTML = formData.rollno;
    selectedRow.cells[3].innerHTML = formData.studentid;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.mob;

}


// delete funtion use for delete value insid table permanent
function onDelete(td) {
    if (confirm("Are you sure you to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("Student-List").deleteRow(row.rowIndex);
        resetForm();

    }


}
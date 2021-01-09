function createContactMeForm() {    

    /* Removing button from page to create form */
    let button = document.getElementById('button');
    /* Time to display the form */
    let form = document.getElementById('contactMeForm');    
    form.classList.add('animate');
    button.parentNode.removeChild(button);

    form.innerHTML = 
        /* Label and input for name */
        '<label for="contactname">Name <i class="i-color">required</i></label><br>' 
      + '<input type="text" id="contactname" name="name" placeholder="Enter Name" required></input><br><br>'
        /* Label and input for company */
      + '<label for="company">Company <i>optional</i></label><br>'
      + '<input type="text" id="company" name="company" placeholder="Enter Company"></input><br><br>'
        /* Label and input for message */
      + '<label for="contactmessage">Message <i class="i-color">required</i></label><br>'
      + '<textarea id="contactmessage" name="contactmessage" required></textarea><br>'
        /* Button to submit form */
      + '<button id="submitbutton">Submit</button>';          
}

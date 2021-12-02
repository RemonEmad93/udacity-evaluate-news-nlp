function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    var regex = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); 
   
    if(regex){
        return 1;
    } else{
      return 0; 
    }  
    
}

export { checkForName }

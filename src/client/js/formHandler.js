function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    if(Client.checkForName(formText)){
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/information',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url:formText})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('model').innerHTML = `Model: ${res.agreement}`;
            document.getElementById('agreement').innerHTML = ` Agreement: ${res.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
        })
    }else{
        alert('Invalid URL')
    }    
}

export { handleSubmit }

let formData={
    name:"",
    mail:"",
    status:"Active",
    gender:"male"
}

let WorkingStatus=document.getElementById("status");

WorkingStatus.addEventListener("change",function(event){
    formData.status=event.target.value;
    
})

let genderMale=document.getElementById("genderMale");

genderMale.addEventListener("change",function(event){
    formData.gender=event.target.value
    console.log(formData)
})

let genderFemale=document.getElementById("genderFemale");

genderFemale.addEventListener("change",function(event){
    formData.gender=event.target.value
    console.log(formData)
})







let form=document.getElementById("forms")

let Input1=document.getElementById("name")

let Input2=document.getElementById("mail")

let Paragraph=document.getElementById("para")
let Paragraph1=document.getElementById("para1")

Input1.addEventListener("change",function(event){
    if (event.target.value===""){
        Paragraph.textContent="Required*";
    }
    else{
        Paragraph.textContent="";
    }
    formData.name=event.target.value;
})

Input2.addEventListener("change",function(event){
    if (event.target.value===""){
        Paragraph1.textContent="Required*";
    }
    else{
        Paragraph1.textContent="";
    }
    formData.mail=event.target.value
})







function submitFormData(formData) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
      },
      body: JSON.stringify(formData)
    };
  
    let url = "https://gorest.co.in/public-api/users";
  
    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        console.log(jsonData);
        if (jsonData.code === 422) {
          if (jsonData.data[0].message === "has already been taken") {
            emailErrMsgEl.textContent = "Email Already Exists";
          }
        }
      });
  }


form.addEventListener("submit",function(event){
    event.preventDefault()
    submitFormData(formData);
    })
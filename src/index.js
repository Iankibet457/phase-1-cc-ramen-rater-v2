// index.js


// Callbacks
let name1 = document.getElementById("name")
let restaurant1 = document.getElementById("res")
let rating1 = document.getElementById("rating-display")
let comment1 = document.getElementById("comment-display")
  let image1 = document.getElementById("img")
  const handleClick = (ramen) => {
    // Add code
    
    image1.src = ramen

  };
  
  
  const addSubmitListener = () => {
    // Add code
    let form = document.querySelector("form")
    console.log(form)
    form.addEventListener("submit",(e)=>{
      e.preventDefault()
      let nme = document.getElementById("new-name").value
      let res = document.getElementById("new-restaurant").value
      let rat = document.getElementById("new-rating").value
      let com = document.getElementById("new-comment").value
      let img = document.getElementById("new-image").value
      console.log(nme)
      fetch("http://localhost:3000/ramens",{
        method:"POST",
        headers:{
          "Content-type": "application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          name:nme,
          restaurant:res,
          rating:rat,
          comment:com,
          image:img
        })
      })
      alert("Refresh page to see Update")
      
      form.reset()

    })


  }
  // fetch('http://localhost:3000/ramens/c69f', {
  //   method: 'DELETE'
  // })
  //   .then(response => console.log(response));
  
  let div = document.getElementById("ramen-menu")
  const displayRamens = () => {
    // Add code
    fetch("http://localhost:3000/ramens")
    .then(respone => respone.json())
    .then(data =>{
      for (let id in data){
        let img = document.createElement("img")
        img.src = data[id].image
        img.id = id
        div.appendChild(img)
        img.addEventListener("click",(e)=>{
          // alert ("clicked")
          
          handleClick(img.src)
          
          name1.innerText = data[id].name
          restaurant1.innerText = data[id].restaurant
          rating1.innerText = data[id].rating
          comment1.innerText = data[id].comment
          
          
        })
        let btn = document.createElement("button")
        btn.innerText = "Delete"
        div.appendChild(btn)
        btn.addEventListener("click",(e)=>{
          img.remove()
          btn.remove()
          name1.innerText = ""
          restaurant1.innerText =""
          rating1.innerText = ""
          comment1.innerText =""
          image1.src = ""
          
        })
        
      }
    })
  };
  
  const main = () => {
    // Invoke displayRamens here
    displayRamens()
    // Invoke addSubmitListener here
    addSubmitListener()
    
  }
  
  main()
  
  
  
// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};



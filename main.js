let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let fourth = document.querySelector('#fourth')
let five = document.querySelector('#five')


let btnSubmit = document.querySelector('.btn-submit')

let ratingContainer = document.querySelector('.rating-container')
let thankUContainer = document.querySelector('.thank-u-container')

var x = null



btnSubmit.addEventListener('click', function(){
    if( x != null){
    showContainer()
    textSelected()
}

    else{
        return
    }
}
)


one.addEventListener('click', function(){
    resetActive()
    x = this.value
    one.classList.add('active')
})

two.addEventListener('click', function(){
    resetActive()
    x = this.value
    this.classList.add('active')
})

three.addEventListener('click', function(){
    resetActive()
    x = this.value
    this.classList.add('active')
})

fourth.addEventListener('click', function(){
    resetActive()
    x = this.value
    this.classList.add('active')
})

five.addEventListener('click', function(){
    resetActive()
    x = this.value
    this.classList.add('active')
})

function resetActive (){
    one.classList.remove('active')
    two.classList.remove('active')
    three.classList.remove('active')
    fourth.classList.remove('active')
    five.classList.remove('active')
}


function showContainer (){
    thankUContainer.classList.remove('hidden')
    ratingContainer.classList.add('hidden')
}




function textSelected() {
    var messageSelected = document.querySelector("#message-selected");
  
    messageSelected.innerHTML +=  " You selected " + x + " out of 5";
  }
  
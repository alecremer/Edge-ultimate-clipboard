let wordsIndex = 0;
let indexList = [];

load()

function save(){
    localStorage['indexList'] = JSON.stringify(indexList);
}

function load(){

    if(localStorage['indexList']) indexList = JSON.parse(localStorage['indexList']);
    wordsIndex = 0;
    indexList.forEach(el => console.log(el.index));
    // localStorage.removeItem('indexList');
    document.getElementById("debug").innerText = localStorage['indexList'];

    addContainers();
    addRemoveBehaviour();
    addCopyBehaviour();
    addEditBehaviour();


}

function addContainers(){
    indexList.forEach(el => {
        createContainer(el.index, el.value);

    });
}

function createContainer(index, text){

    let container = `<div class="container">
    <div style="flex-grow: 7;" class="text-container">
        <input id="clipboardText` + index + `" class="clipboard-text" type="text" placeholder="clipboard text" value="` + text + `">
    </div>
    <button id="copyBtn` + index + `" style="flex-grow: 1;">copy</button>
    <button id="removeBtn` + index + `" style="flex-grow: 1;" >remove ` + index + `</button>
    </div>`
    document.getElementById("containers-area").innerHTML += container;

}

function addRemoveBehaviour(){
    indexList.forEach(((el, index) => {
        try{
            document.getElementById("removeBtn" + el.index).onclick = function(el){
                // indexList.splice(indexList.indexOf(indexList.filter(e => e.index === el.index)), 1);
    
                let count = indexList.length;
                indexList.splice(index, 1);
                if(count !== indexList.length){
                    
                    el.target.parentNode.remove()
    
                }
                else {
                    addRemoveBehaviour();
                    indexList.splice(index, 1);
                    if(count !== indexList.length){
                    
                        el.target.parentNode.remove()
        
                    }
    
                }
                // document.getElementById("debug").innerText = indexList
                
                save();
                
                
                document.getElementById("debug").innerText = localStorage['indexList'];
            }
        }
        catch{}

    }))
}

function addCopyBehaviour(){
    indexList.forEach((el => {
        document.getElementById("copyBtn" + el.index).onclick = function(){
    
            let textValue = document.getElementById("clipboardText" + el.index).value;
            navigator.clipboard.writeText(textValue);
        
        }
        
    }))
}

function addEditBehaviour(){
    indexList.forEach((el => {
        document.getElementById("clipboardText" + el.index).onchange = function(){
            
            let textValue = document.getElementById("clipboardText" + el.index).value;
            el.value = textValue;
            
            
            save();
            
            document.getElementById("debug").innerText = localStorage['indexList'];

        }

        // document.getElementById("clipboardText" + el.index).onfocusout = function(){
    
        //     let textValue = document.getElementById("clipboardText" + el.index).value;
        //     el.value = textValue;

        //     save();

        // }

    }))
}

document.getElementById("add").onclick = function () {
    
    // while(indexList.includes(wordsIndex)) wordsIndex++;
    while(indexList.filter(e => e.index === wordsIndex).length > 0) {
        wordsIndex++;
    }
    let btnIndex = wordsIndex; 
    
    createContainer(btnIndex, "");
    
    let textValue = "";
    indexList.push({index: btnIndex, value: textValue});
    
    save();
    document.getElementById("containers-area").innerHTML = "";
    load();
    
    
    // addCopyBehaviour();
    // addEditBehaviour();
    // addRemoveBehaviour();
    
    

    document.getElementById("debug").innerText = localStorage['indexList'];
                
};

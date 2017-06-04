// 1. Given the following HTML, if you needed to select an element that has an ID of foo
// implement getElementById
const getElementById = (id)=>{
    let elm = null;
    
    const traverse = (node)=>{
        let nodeList = node.childNodes;
        for(let i = 0; i < nodeList.length; i++){
            
            if(nodeList[i].childNodes.length > 0)
                traverse(nodeList[i]);
            
            if((nodeList[i].id) && nodeList[i].id === id) {
                elm = nodeList[i];
                break;
            }
        }
    };
    traverse(document.body);
    
    return elm;
};


// 2. select all of the elements that are a div - implement getElementsByTagName
const getElementsByTagName = (tag)=>{
    let elms = [];
    
    const traverse = (node)=>{
        let nodeList = node.childNodes;
        for(let i = 0; i < nodeList.length; i++){
            
            if(nodeList[i].childNodes.length > 0)
                traverse(nodeList[i]);
            
            if(nodeList[i].tagName && nodeList[i].tagName.toLowerCase() === tag)
                elms.push(nodeList[i]);
        }
    };
    traverse(document.body);
    
    return elms;
};


// 3. select all of the elements that have a class of row - implement getElementsByClassName
const getElementsByClassName = (className)=>{
    let elms = [];
    
    const traverse = (node)=>{
        let nodeList = node.childNodes;
        for(let i = 0; i < nodeList.length; i++){
            
            if(nodeList[i].childNodes.length > 0)
                traverse(nodeList[i]);
            
            if(nodeList[i].getAttribute && nodeList[i].getAttribute('class'))
                if(nodeList[i].getAttribute('class').split(' ').indexOf(className) >= 0)
                    elms.push(nodeList[i]);
        }
    };
    traverse(document.body);
    
    return elms;
};

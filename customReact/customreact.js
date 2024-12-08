// import { Children } from "react"

function customRender(reactElement, container){
    /*
    const domElement= document.createElement(reactElement.type) // This will create a new element of type reactElement.type
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    //problem here is we are adding each attribute manually because if there are more attributes then we have to add them manually
    // so we can use spread operator to add all the attributes at once

    container.appendChild(domElement)
    */

    //Better approach is to use for loop to add all the attributes at once
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props){
        if(prop==='children'){
            continue // we don't want to add children as attribute because it is not an attribute
        }
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)

}

const reactElement = { // This is a react element object
    type: 'a',  // This is a type of element we want to create as react creates tree of elements
    props: {
        href: 'https://www.google.com', // This is a property of the element i.e <a href='https://www.google.com'>
        target: '_blank' // This is a property of the element i.e <a target='_blank'> which means open the link in new tab
    },
    children: 'Click me to visit google' // This is a children of the element i.e <a>Click me to visit google</a> which is a text node
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

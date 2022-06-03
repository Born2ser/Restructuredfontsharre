
let family_name = document.getElementById("font_name");

console.log(family_name);

const google_font_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key= AIzaSyA-8zilGn00gHqmhn9S_OBeF8RSRFj-csg';
async function get_fontname(){
    const response = await fetch(google_font_url);
    const data = await response.json();
    console.log(data.items);
    // Divide the API 
    const cut = data.items.slice(0,2);
    console.log(cut); 
    let container = document.querySelector('.container');
    console.log(container);
    cut.forEach(i=>{
        console.log(i);
        // let tets = document.createElement('DIV')
        // let text = document.createTextNode(i.family)
        // tets.appendChild(text)
        // container.appendChild(tets)
        // creating new elements
        let motherdiv = document.createElement('div');
        let controller = document.createElement('div');
        let text = document.createElement('input');
        let footer = document.createElement('div');
      
        // others created stuff
        let fontName = document.createElement('p');
        let select1 = document.createElement('select');
        i.variants.forEach(option=>{
            let option1 = document.createElement('option'); 
            let optionvalue = document.createTextNode(option);
            option1.setAttribute('value', option);
            option1.appendChild(optionvalue);
            select1.appendChild(option1);
        });
        let weight_container = document.createElement('div');
        let weight = document.createElement('a');
        weight_container.appendChild(weight)
        // weight.appendChild(weight_container);
        let input_weight_range1 = document.createElement('input');
        let size = document.createElement('a');
        let = input_size_range2 = document.createElement('input');
        input_weight_range1.setAttribute('type', 'range');
        input_size_range2.setAttribute('type', 'range');
        let variable = document.createElement('p');
        let number_of_styles = document.createElement('p');  
        let variabu = document.createElement('a'); 
        let closed_source = document.createElement('a');
           
  

        //Append to the motherdiv
        motherdiv.appendChild(controller);
        // motherdiv.classList.add('conts');
        motherdiv.appendChild(text);
        motherdiv.appendChild(footer);

        // Appending to Controller
        controller.appendChild(fontName);
        controller.appendChild(select1);
        // controller.appendChild(option1);
        controller.appendChild(weight_container);
        controller.appendChild(input_weight_range1);
        controller.appendChild(size);
        controller.appendChild(input_size_range2);
        controller.appendChild(variable);
        controller.appendChild(number_of_styles);
        controller.appendChild(number_of_styles);
        controller.appendChild(variabu);
        controller.appendChild(closed_source);




        // Apend controller to the body
        container.appendChild(controller);
        container.appendChild(motherdiv);

        // Adding Value to Elements
        let display_family = document.createTextNode(i.family);
        fontName.appendChild(display_family);
        let weight_display = document.createTextNode('Weight');
        weight.appendChild(weight_display);
        let Size_display = document.createTextNode('Size');
        size.appendChild(Size_display);
        
        // let display_variable = document.createTextNode(i.variants);
        // select1.appendChild(display_variable);
        // variable.appendChild(display_variable);

        //Adding classlist
        select1.classList.add('classification');
        controller.classList.add('inputbox');
        fontName.classList.add('font_description');

        
        // Adding No of Styles in the variable
        let no_of_styles = document.createTextNode(i.variants.length + ' ' + 'Styles');
        number_of_styles.appendChild(no_of_styles);
        let vari = document.createTextNode('Variable');
        variabu.appendChild(vari);
        let close = document.createTextNode('Closed Source');
        closed_source.appendChild(close);

        // console.log(i.variants.length);

        
    });
}
get_fontname();

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
        let fontName = document.createElement('p');
        let select1 = document.createElement('select');
        let weight_container = document.createElement('div');
        let weight = document.createElement('a');
        let input_weight_range1 = document.createElement('input');
        let size_container = document.createElement('div');
        let size = document.createElement('a');
        let  input_size_range2 = document.createElement('input');
        let no_of_styles = document.createTextNode(i.variants.length + ' ' + 'Styles');
                // Part Two
        let number_of_styles = document.createElement('p');  
        let variabu = document.createElement('a'); 
        let closed_source = document.createElement('a');
        // 4 Pillar Div
        let motherdiv = document.createElement('div');
        let controller = document.createElement('div');
        let text = document.createElement('input');
        text.classList.add('text');
        let footer = document.createElement('div');
        footer.classList.add('footer');
        let sec1 = document.createElement('div');
        let sec2 = document.createElement('div'); 
        let mother_control = document.createElement('div');
        console.log(mother_control)
        // Style Select1
        select1.classList.add('classification');
        // Weight_Container Styles
        weight_container.classList.add('weight');
        weight.classList.add('weight_input');
        size_container.classList.add('size');
        size.classList.add('size_input');



          // Appending to Controller
          controller.appendChild(fontName);
          controller.appendChild(select1);
          // controller.appendChild(option1);
          controller.appendChild(weight_container);
          controller.appendChild(input_weight_range1); 
          controller.appendChild(size);
          controller.appendChild(input_size_range2);
          controller.appendChild(number_of_styles);
          controller.appendChild(number_of_styles);
          controller.appendChild(variabu);
          controller.appendChild(closed_source); 
        //   mother_control.appendChild(controller);
        //   mother_control.appendChild(motherdiv);
          // Classlist for mother_controller
            mother_control.classList.add('mother_control');
         // Controller children Di
                // others created stuff
                controller.appendChild(sec1);
                controller.appendChild(sec2); 
        // Append to Sec1 Div
        sec1.appendChild(fontName);
        fontName.classList.add('font_name');
        sec1.appendChild(select1);
        sec1.appendChild(weight_container);
        sec1.appendChild(size_container);

        // Append to Sec2 Div

        
        i.variants.forEach(option=>{
            let option1 = document.createElement('option'); 
            let optionvalue = document.createTextNode(option);
            option1.setAttribute('value', option);
            option1.appendChild(optionvalue);
            select1.appendChild(option1);
        });
        // Append 
        //weight DIV
       
        weight_container.appendChild(weight);  
        weight_container.appendChild(input_weight_range1);
        input_weight_range1.setAttribute('type', 'range');


        // weight.appendChild(weight_container);

        // Size DIV
       
        size_container.appendChild(size);
        size_container.appendChild(input_size_range2);
        input_size_range2.setAttribute('type', 'range');
  
        // Section2
        sec2.appendChild(number_of_styles);
        sec2.appendChild(variabu);
        sec2.appendChild(closed_source);
        //Sec1 classlist
        sec1.classList.add('section1');
        sec2.classList.add('section2');
        //Append to the motherdiv
        motherdiv.appendChild(controller);
        console.log(motherdiv);
+        motherdiv.appendChild(text);
        motherdiv.appendChild(footer);
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
        number_of_styles.appendChild(no_of_styles);
        let vari = document.createTextNode('Variable');
        variabu.appendChild(vari);
        let close = document.createTextNode('Closed Source');
        closed_source.appendChild(close);

        // console.log(i.variants.length);

        
    });
}
get_fontname();
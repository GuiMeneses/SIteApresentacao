

let isRotated = false;  
function bt_menu_principal(deg_final,){
    
    rotacao_line("bt_menu", ".div_line3", 
        deg_inicial = 0, 
        deg_final = 45, 
        opacity_final = 100, 
        opacity_inicial = 100);
    rotacao_line("bt_menu", ".div_line2", 
        deg_inicial = 0, 
        deg_final = -45, 
        opacity_final = 100, 
        opacity_inicial = 100);
    opacidade_line("bt_menu", ".div_line2",
        opacity_final = 100, 
        opacity_inicial = 0);
    
    opacidade_line("bt_menu", ".div_line1",
        opacity_final = 0, 
        opacity_inicial = 100);
    
    opacidade_line("bt_menu", ".div_line4",
        opacity_final = 0, 
        opacity_inicial = 100);
    
    
    isRotated = !isRotated;
}


function rotacao_line(
    id_bt, 
    div_line,
    deg_inicial = 0, 
    deg_final = 45,){
    let angulo = deg_inicial;
    const button = document.getElementById(id_bt);
    const line = button.querySelector(div_line);

    if (!isRotated) {
        angulo = deg_final;
    } else {
        angulo = deg_inicial;
    }
        
    line.style.transform = `rotate(${angulo}deg)`;
}

function opacidade_line(
    id_bt, 
    div_line,
    opacity_final = 100, 
    opacity_inicial = 100){
    let opacidade = opacity_inicial;
    const button = document.getElementById(id_bt);
    const line = button.querySelector(div_line);

    if (!isRotated) {
        opacidade = opacity_final;
    } else {
        opacidade = opacity_inicial;
    }
        
    line.style.opacity = `${opacidade}%`;
}



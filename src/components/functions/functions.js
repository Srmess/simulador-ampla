//function para calculos de valor apos o submit
export const onSubmit = (data) => {
    var value = Number(data.number);

    var sifao = "R$ ";
    var percent = "%";

    var IOFtotal = (value*0.0038);
    var JUROStotal = (value*0.045);
    var TdPtotal = (value*0.02);
    var SPtotal = (value*0.01);
    var PRESTtotal = (value*0.02);

    var somaporc = (value*0.0038)+(value*0.045)+(value*0.02)+(value*0.01)+(value*0.02);
    var somataxa = (somaporc+value);
    
    var totalporc = (somaporc/1000)

    document.getElementById("porc").textContent = String(totalporc.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2})+percent);
    document.getElementById("cet").textContent = String(sifao+(somaporc.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2})));

    document.getElementById("iof").textContent   = String(sifao+IOFtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("juros").textContent = String(sifao+JUROStotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("tdp").textContent   = String(sifao+TdPtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("sa").textContent    = String(sifao+SPtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("prest").textContent = String(sifao+PRESTtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));

    document.getElementById("textsoma").textContent = String(somataxa.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
};


//function para expandir a sanfona apos o click
export const expand = () =>{
    var acc = document.getElementsByClassName("sanfona");
    var i=0;
     
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
}
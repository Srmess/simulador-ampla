//function para calculos de valor apos o submit
export const onSubmit = (data) => {
    var value = Number(data.number);

    var sifao = "R$ ";

    //dados tabela de custeio
    var IOFtotal = (value*0.0038);
    var JUROStotal = (value*0.06);
    var TdPtotal = (value*0.02);
    var SPtotal = (value*0.008);

    var somaporc = (value*0.0038)+(value*0.06)+(value*0.02)+(value*0.008);

    document.getElementById("cet").textContent = String(sifao+(somaporc.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2})));

    document.getElementById("iof").textContent   = String(sifao+IOFtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("juros").textContent = String(sifao+JUROStotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("tdp").textContent   = String(sifao+TdPtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    document.getElementById("sa").textContent    = String(sifao+SPtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));

    //valor da simulação
    var somataxa = (value);
    document.getElementById("textsoma").textContent = String(somataxa.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));

    //dado tabela de investimento
    // var TCtotal = (value*0.02);
    // var somaporc2 = (value*0.0038)+(value*0.02)+(value*0.02);

    // document.getElementById("iof2").textContent = String(sifao+IOFtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    // document.getElementById("tdp2").textContent = String(sifao+TdPtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
    // document.getElementById("tc2").textContent = String(sifao+TCtotal.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));

    // document.getElementById("cet2").textContent = String(sifao+somaporc2.toLocaleString("pt-BR", {maximumFractionDigits: 2, minimumFractionDigits: 2}));
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
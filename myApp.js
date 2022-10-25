var x = document.getElementById("addCont");
            x.addEventListener("click", hae);
            function hae() {
                var uusi = document.createElement('p');
                uusi.innerHTML = "Upouusi p-elementti sivulle";
                uusi.setAttribute('id', 'newData');
                document.body.appendChild(uusi)
            }
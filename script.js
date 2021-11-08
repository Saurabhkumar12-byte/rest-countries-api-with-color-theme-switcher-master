let url=`https://restcountries.com/v2/all/`;

const componentDidMount= async()=> {
    
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    let html=``;
    parseData.forEach(element => {
        html= html +`<div class="card">
            <div class="card-content">
                
                <img src="${element.flags.svg}" alt="" style="width: 100%; height: 50%;/>
                
                <div class="card-desc" style="">
                    <h5 style="">${element.name}</h5>
                    <p>Population:${element.population}</p>
                    <p>Region:${element.region}</p>
                    <p>capital:${element.capital}</p>
                </div>
            </div>
        </div>`
    });
    let hero =document.querySelector(".hero");
    hero.innerHTML=html;

   
  }
  componentDidMount();

  let dark = document.querySelector(".icon-title");
  dark.addEventListener("click",function darkmode() {
      setTimeout(() => {
        
        if (document.getElementsByTagName("body")[0].classList.contains("light")) {
          document.getElementsByTagName("body")[0].classlist.remove("light");
          document.getElementsByTagName("body")[0].classlist.add("dark");
        } else {
          document.getElementsByTagName("body")[0].classlist.add("light");
          document.getElementsByTagName("body")[0].classlist.remove("dark");
        }
        
      }, 5000);
  })


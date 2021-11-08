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
                    <h5 style="">Germany</h5>
                    <p>Population:355545</p>
                    <p>Region:jfgh</p>
                    <p>capital:fghfg</p>
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
        
        if (document.body.classList.contains("light")) {
          document.body.classlist.remove("light");
          document.body.classlist.add("dark");
        } else {
          document.body.classlist.add("light");
          document.body.classlist.remove("dark");
        }
        
      }, 5000);
  })


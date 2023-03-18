        //  this function fetches data from an API endpoint  parses the response into JSON format

        const onclicSortByDate = () =>{
            fetch(" https://openapi.programming-hero.com/api/ai/tools")
            .then(response => response.json())
            .then(data =>displayData(data.data))
            }
        
        // dynamically generates HTML elements to display data fetched from an API 

        const displayData = (data) =>{
        const aiBody = document.getElementById('main-card');
        data.tools.forEach((modalData)=>{
        const div = document.createElement('div');
        div.innerHTML =`<div class="col">
                        <div class="card">
                        <img src=${modalData.image} class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">Features</h5>
                        <div class="grid grid-rows-1">
                        <p>1.Natural language processing</p>
                        <p>2.Contextual understanding</p>
                        <p>3.Text generation</p>
                        </div>
                        <hr>
                        <h5 class="card-title">${modalData.name}</h5>
                        <div class="d-flex justify-content-between">
                        <i class="fa fa-calendar" aria-hidden="true">${modalData.published_in} </i>
                        <i class="fas fa-arrow-right" onclick="fetchNewDetails('${modalData.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </div>
                      </div>
                    </div>
                  </div>`;
        aiBody.appendChild(div)
        })
        };

        // displays the data in a modal window with information about the tool's, image from an API endpoint

        const fetchNewDetails = id =>{
                const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
                fetch(url)
                .then(response => response.json())
                .then(data =>displayAboutsDetail(data.data))
                }

        const displayAboutsDetail = aboutsDetail =>{
                console.log(aboutsDetail)
                const {image_link,input_output_examples,description,pricing,features,integrations } = aboutsDetail;
        document.getElementById("modal-body").innerHTML = `
              <div class="aiBody col col-md-6 d-flex flex-row gap-3 w-100">
              <div class="col">
              <div class="card ">
              <img class=" img-fluid img-thumbnail"  src=${image_link[0]}  alt=""/>
              <h3 class="card-title text-center">${input_output_examples[0].input.slice(0,100)}</h3>
              <p>${input_output_examples[0].output.slice(0,50) ? input_output_examples[0].output.slice(0,50) :"No! Not Yet! Take a break!!!" }</p>
              </div>
              </div>
              <div class="col">
              <div class="card bg-danger-subtle border container">
              <p class="card-text font-weight-bold w-75%">${description.slice(0,100)}</p>
              </div>
              <div class="col col-md-6-center d-flex gap-5">
              <div class="text-success border rounded bg-white h-25 text-center g-0">
              <p>${pricing[0].plan}</p>
              <p>${pricing[0].price}</p>
              </div>
              <div class="text-warning border rounded bg-white h-25 text-center g-0">
              <p>${pricing[1].plan}</p>
              <p>${pricing[1].price}</p>
              </div>
              <div class="text-danger border rounded bg-white w-25 text-center g-0">
              <p >${pricing[2].plan}</p>
              <p>${pricing[2].price}</p>
              </div>
              </div>
              <div class="col col-md-6-center d-flex -flex-row gap-5">
              <div class="col">
              <h5 class="card-title">Features</h5>
              <ul>
              <li>${features[1].feature_name}</li>
              <li>${features[2].feature_name}</li>
              <li>${features[3].feature_name}</li>
              </ul>
              </div>
              <div class="col">
              <h5 class="card-title">Integrations</h5>
              <ul>
              <li>${integrations[0]}</li>
              <li>${integrations[1]}</li>
              <li>${integrations[2]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`;  
    };

   

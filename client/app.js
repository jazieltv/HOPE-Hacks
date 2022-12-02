const submit = document.querySelector(".submit");
const cityData = document.querySelector(".cityData");
const searchBar = document.querySelector(".search");

const getCity = (query) => {
  let url = `http://127.0.0.1:3000/${query}`;
  if (query === undefined) url = `http://127.0.0.1:3000`;

  /*
    Example response:
    {
      "CO": {
        "concentration": 216.96,
        "aqi": 2
      },
      "NO2": {
        "concentration": 2.64,
        "aqi": 3
      },
      "O3": {
        "concentration": 60.8,
        "aqi": 55
      },
      "SO2": {
        "concentration": 0.47,
        "aqi": 0
      },
      "PM2.5": {
        "concentration": 5.03,
        "aqi": 16
      },
      "PM10": {
        "concentration": 5.14,
        "aqi": 4
      },
      "overall_aqi": 55
    }

  */
  /*
  [
    {
      "element: "CO",
      "value": {"concentration": 216.96,"aqi": 2}
    },
  ]

  arr[0].element == "CO",
  arr[0].value.concentration == 216.96

 */

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    });

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Object.keys(data) == ["CO", "NO2", "O3", ...]
      const listElements = Object.keys(data).map((k) => {
        // return data[k] would return an array of each
        // of the objects within data

        // for the first iteration of map:
        // k == "CO"
        // data[k] == {"concentration": 216.96,"aqi": 2}

        //const info;
        return `<div>
                 <div>${k}</div>
                 <ul>
                   <li>${data[k].concentration}</li>
                   <li>${data[k].aqi}</li>
                 </ul>
                </div>`;
      });

      for (let i = 0; i < listElements.length; i++) {
        cityData.innerHTML += listElements[i];
      }
    })
    .catch((err) => {
      console.log("Error ocurred:", err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const query = searchBar.value;
  getCity(query);

  setTimeout(() => {
    searchBar.value = "";
  }, 2000);
});
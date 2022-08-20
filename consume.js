var ajax = new XMLHttpRequest();
ajax.onload = function () {
  let data = JSON.parse(this.responseText);
  console.log(data);

  let json = JSON.parse(ajax.responseText);
  console.log(json);
  let images = json;
  // console.log(images);

  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    console.log(image);
    let img = document.createElement("img");
    img.src = image.url;
    document.body.appendChild(img);

    let p = document.createElement("p");
    p.innerHTML = image.id;
    document.body.appendChild(p);

    let h3 = document.createElement("h3");
    h3.innerHTML = image.height + "px" + "  x " + image.width + "px";
    document.body.appendChild(h3);

    let h4 = document.createElement("h4");
    h4.innerHTML = image.breeds;
    document.body.appendChild(h4);
  }

  let wikipedia_link = json.breeds.wikipedia_url;
  console.log(wikipedia_link);

  //   for (let i = 0; i < json.length; i++) {
  //     let wikipedia_url = json.breeds[i].wikipedia_url;
  //     console.log("Wikipedia Url : " + wikipedia_url);
  //   }
};

ajax.onerror = function () {
  window.alert("Could not load data");
  //   console.log(this);
  //   console.error(e);
};

CAT_API_KEY = "b4a92c29-aa41-45be-8161-cde0cc010347";
BREED = "beng";
ajax.open(
  "GET",
  `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${{
    CAT_API_KEY,
  }}`,
  true
);
ajax.send();

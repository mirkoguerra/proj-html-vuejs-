const boolfixApp = new Vue({
  el: '#root',
  data: {
    // array contenente le icone relative ai social
    socialIcons: ['fab fa-facebook-f', 'fab fa-instagram', 'fab fa-twitter', 'fab fa-youtube'],
    // array contenente i list item della nav-bar; ho preso solo i 5 che sono presenti sia nell'header che nel footer, così da poterli utilizzare 2 volte
    navBar: ["Recipes", "Places", "Blog", "About", "Contact"],
    // array contenente il percorso delle immagini della sezione recipes nel main
    mainRecipesImages: [
      {
        url: "img/Mixed-fruits-200x132.jpg",
        text: "Mixed Fruits"
      },
      {
        url: "img/r-rachel-park-366508-unsplash-min-200x132.jpg",
        text: "Rich table"
      },
      {
        url: "img/r-michelle-tsang-500721-unsplash-min-200x132.jpg",
        text: "Ice cream"
      },
      {
        url: "img/quick-summer-drink-460x295.jpg",
        text: "Cocktails"
      },
      {
        url: "img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg",
        text: "Spicy"
      },
      {
        url: "img/perfect-cosmopolitan-460x295.jpg",
        text: "Perfect Cosmopolitan"
      },
      {
        url: "img/fi2x-6-460x295.jpg",
        text: "Strawberryies & more"
      },
      {
        url: "img/r-brooke-lark-96398-unsplash-min-460x295.jpg",
        text: "So sweet ..."
      }
    ],
    // array contenente il percorso delle immagini della section collection nel main
    mainCollectionImages: [
      {
        image: "img/drinks-recipes.png",
        text: "DRINKS"
      },
      {
        image: "img/soups-recipes.png",
        text: "SOUPS"
      },
      {
        image: "img/baking-recipes.png",
        text: "BAKERY"
      },
      {
        image: "img/dinner-recipes.png",
        text: "DINNER"
      },
      {
        image: "img/healthy-recipes.png",
        text: "HEALTHY"
      },
      {
        image: "img/staff-picks.png",
        text: "STAFF PICKS"
      },
      {
        image: "img/premium-recipes.png",
        text: "APPETISERS"
      },
      {
        image: "img/quick-easy-recipes.png",
        text: "QUICK & EASY"
      }
    ],
    // array contenente il percorso delle immagini della section table-left nel main
    middleCards: [
      {
        url: "img/fi-roundup-200x132.jpg",
        text: "Roundup: My New Favourite Recipes For Healthy Living",
        date: "March 25, 2019"
      },
      {
        url: "img/fi-korean-food-200x132.jpg",
        text: "Meal Prep: Korean Bibimbap with Kimchi",
        date: "March 25, 2019"
      },
      {
        url: "img/fi-toasts-200x132.jpg",
        text: "Why These Toasts with Tea are My New Favourite",
        date: "March 25, 2019"
      },
      {
        url: "img/fi-street-food-200x132.jpg",
        text: "Exploring Street Food in Bangkok",
        date: "March 25, 2019"
      },
      {
        url: "img/fi-organic-breakfast-200x132.jpg",
        text: "Organic Choises For Healthier Living",
        date: "March 25, 2019"
      },
      {
        url: "img/fi-water-side-rest-200x132.jpg",
        text: "5 Waterside Restaurants in Istanbul for Special Events",
        date: "March 25, 2019"
      }
    ],
    // array contenente il percorso delle immagini della section table-right nel main
    smallTemplate: [
      {
        url: "img/single-post-img3-66x66.jpg",
        text: "Food Corner: Top Japanese Restaurants for Sushi",
        date: "March 25, 2019"
      },
      {
        url: "img/singapore-featured-image-66x66.jpg",
        text: "City Guide: Singapore",
        date: "February 27th, 2019"
      },
      {
        url: "img/slide1-bg-66x66.jpg",
        text: "6 Nutritional Tips to Help Burn Body Fat",
        date: "February 27th, 2019"
      }
    ],
    // array contenente il percorso delle immagini del footer, nella section only-images
    footerOnlyImages: ["img/Yogurt-Nan-400x263.jpg", "img/Mixed-fruits-400x263.jpg", "img/r-rachel-park-366508-unsplash-min-400x263.jpg", "img/r-michelle-tsang-500721-unsplash-min-400x263.jpg"]
  }
});

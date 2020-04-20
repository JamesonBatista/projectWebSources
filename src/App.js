import React from "react";
import "./App.css";
import Shop from "./shop/Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./chatOnline/About";
import Home from "./Home/Home";
import Login from "./LoginRegister/Login";
import RegisterNewUser from "./LoginRegister/Register";

var images = [
  "https://previews.123rf.com/images/elen1/elen11712/elen1171200031/91448152-abstract-technology-background-web-developer-computer-code-programming-coding-hacker-concept-green-n.jpg",
  "https://previews.123rf.com/images/elen1/elen11612/elen1161200037/66551422-combination-padlock-on-motherboard-computer-for-security-concept.jpg",
  "https://previews.123rf.com/images/crstrbrt/crstrbrt1304/crstrbrt130400001/19122178-microchip-integrated-on-motherboard.jpg",
  "https://previews.123rf.com/images/semisatch/semisatch1205/semisatch120500028/13615629-microchip-background-technology-concept.jpg",
  "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-clear-531880.jpg&fm=jpg",
  "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?cs=srgb&dl=adventure-alps-background-beautiful-547114.jpg&fm=jpg",
  "https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?cs=srgb&dl=background-beautiful-bloom-blooming-96627.jpg&fm=jpg",
  "https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?cs=srgb&dl=afterglow-background-beautiful-branches-552791.jpg&fm=jpg",
  "https://images.pexels.com/photos/1546898/pexels-photo-1546898.jpeg?cs=srgb&dl=gray-concrete-roadway-beside-green-and-brown-leafed-trees-1546898.jpg&fm=jpg",
  "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?cs=srgb&dl=atmosphere-background-beautiful-blue-531756.jpg&fm=jpg",
  "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?cs=srgb&dl=background-balance-beach-boulder-289586.jpg&fm=jpg",
  "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?cs=srgb&dl=timelapse-photography-of-falls-near-trees-707915.jpg&fm=jpg",
  "https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?cs=srgb&dl=background-bloom-blooming-blossom-295771.jpg&fm=jpg",
  "https://images.pexels.com/photos/65777/pexels-photo-65777.jpeg?cs=srgb&dl=urban-metro-subway-65777.jpg&fm=jpg",
  "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?cs=srgb&dl=christmas-board-decors-1303098.jpg&fm=jpg",
  "https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?cs=srgb&dl=abstract-architecture-background-buildings-370717.jpg&fm=jpg",
  "https://images.pexels.com/photos/1068340/pexels-photo-1068340.jpeg?cs=srgb&dl=yellow-sparks-in-front-of-person-in-white-top-1068340.jpg&fm=jpg",
  "https://images.pexels.com/photos/733036/pexels-photo-733036.jpeg?cs=srgb&dl=photo-of-a-man-standing-in-the-cliff-733036.jpg&fm=jpg",
  "https://images.pexels.com/photos/917406/pexels-photo-917406.jpeg?cs=srgb&dl=brown-concrete-building-917406.jpg&fm=jpg",
  "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?cs=srgb&dl=blue-and-red-galaxy-artwork-1629236.jpg&fm=jpg",
  "https://images.pexels.com/photos/3604267/pexels-photo-3604267.jpeg?cs=srgb&dl=aerial-shot-of-forest-3604267.jpg&fm=jpg",
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?cs=srgb&dl=black-and-white-cold-fog-forest-235621.jpg&fm=jpg",
  "https://images.pexels.com/photos/355411/pexels-photo-355411.jpeg?cs=srgb&dl=cabin-cold-daylight-environment-355411.jpg&fm=jpg",
  "https://images.pexels.com/photos/3905310/pexels-photo-3905310.jpeg?cs=srgb&dl=full-moon-in-dark-night-sky-3905310.jpg&fm=jpg",
  "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?cs=srgb&dl=astronomy-atmosphere-earth-exploration-220201.jpg&fm=jpg",
  "https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?cs=srgb&dl=landscape-photo-of-mountain-with-polar-lights-1434608.jpg&fm=jpg",
  "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg",
  "https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?cs=srgb&dl=aerial-view-atmosphere-clouds-cold-front-76969.jpg&fm=jpg",
  "https://images.pexels.com/photos/414916/pexels-photo-414916.jpeg?cs=srgb&dl=antique-antique-globe-antique-shop-antique-store-414916.jpg&fm=jpg",
  "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=sky-clouds-cloudy-earth-46160.jpg&fm=jpg",
  "https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?cs=srgb&dl=air-atmosphere-blue-blue-sky-314726.jpg&fm=jpg",
  "https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?cs=srgb&dl=beach-clouds-dawn-dusk-391522.jpg&fm=jpg",
  "https://images.pexels.com/photos/230629/pexels-photo-230629.jpeg?cs=srgb&dl=autumn-boulder-creek-environment-230629.jpg&fm=jpg",
  "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?cs=srgb&dl=landscape-nature-sky-person-33688.jpg&fm=jpg",
  "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?cs=srgb&dl=landscape-photography-of-mountains-covered-in-snow-691668.jpg&fm=jpg",
  "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?cs=srgb&dl=scenic-view-of-lake-and-mountains-against-sky-326058.jpg&fm=jpg",
  "https://images.pexels.com/photos/361104/pexels-photo-361104.jpeg?cs=srgb&dl=evergreen-glacier-hike-hill-361104.jpg&fm=jpg",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg&fm=jpg",
  "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?cs=srgb&dl=bamboo-bamboo-whisk-board-bowls-461428.jpg&fm=jpg",
  "https://images.pexels.com/photos/462023/pexels-photo-462023.jpeg?cs=srgb&dl=clouds-cropland-crops-dawn-462023.jpg&fm=jpg",
  "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?cs=srgb&dl=beach-birds-calm-clouds-219998.jpg&fm=jpg",
  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=beautiful-calm-clouds-dark-206359.jpg&fm=jpg",
  "https://images.pexels.com/photos/434551/pexels-photo-434551.jpeg?cs=srgb&dl=backlit-beach-beautiful-dawn-434551.jpg&fm=jpg",
  "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg",
  "https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?cs=srgb&dl=frozen-wave-against-sunlight-1210273.jpg&fm=jpg",
  "https://images.pexels.com/photos/552779/pexels-photo-552779.jpeg?cs=srgb&dl=clouds-cloudy-country-distance-552779.jpg&fm=jpg",
  "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?cs=srgb&dl=turned-on-black-laptop-computer-on-table-2148217.jpg&fm=jpg",
  "https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?cs=srgb&dl=close-up-photo-of-keyboard-220357.jpg&fm=jpg",
  "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?cs=srgb&dl=two-computer-flat-screen-monitors-turned-on-777001.jpg&fm=jpg",
  "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?cs=srgb&dl=bandwidth-close-up-computer-connection-1148820.jpg&fm=jpg",
  "https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?cs=srgb&dl=apple-magic-keyboard-with-numeric-pad-on-table-near-wireless-1714205.jpg&fm=jpg",
  "https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?cs=srgb&dl=computer-cup-desk-drink-434337.jpg&fm=jpg",
  "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?cs=srgb&dl=blur-computer-connection-electronics-442150.jpg&fm=jpg",
  "https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?cs=srgb&dl=computer-system-unit-component-2225616.jpg&fm=jpg",
  "https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?cs=srgb&dl=black-and-gray-computer-motherboard-2588757.jpg&fm=jpg",
  "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?cs=srgb&dl=worms-eye-view-of-spiral-stained-glass-decors-through-the-161154.jpg&fm=jpg",
  "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?cs=srgb&dl=close-up-of-fish-over-black-background-325044.jpg&fm=jpg",
  "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?cs=srgb&dl=yellow-and-brown-house-painting-164455.jpg&fm=jpg",
  "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?cs=srgb&dl=focus-photo-of-super-mario-luigi-and-yoshi-figurines-163036.jpg&fm=jpg",
  "https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?cs=srgb&dl=ball-ball-shaped-blur-color-235615.jpg&fm=jpg",
  "https://images.pexels.com/photos/415574/pexels-photo-415574.jpeg?cs=srgb&dl=arch-architecture-art-building-415574.jpg&fm=jpg",
  "https://images.pexels.com/photos/2130793/pexels-photo-2130793.jpeg?cs=srgb&dl=graffiti-2130793.jpg&fm=jpg",
  "https://images.pexels.com/photos/1486902/pexels-photo-1486902.jpeg?cs=srgb&dl=time-lapse-photography-of-waterfalls-1486902.jpg&fm=jpg",
  "https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?cs=srgb&dl=abstract-alcohol-art-bar-274131.jpg&fm=jpg",
  "https://images.pexels.com/photos/1112007/pexels-photo-1112007.jpeg?cs=srgb&dl=yellow-and-white-fish-1112007.jpg&fm=jpg",
  "https://images.pexels.com/photos/302271/pexels-photo-302271.jpeg?cs=srgb&dl=adventure-conifer-daylight-desert-302271.jpg&fm=jpg",
  "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?cs=srgb&dl=photo-of-a-turtle-underwater-847393.jpg&fm=jpg",
  "https://images.pexels.com/photos/37079/milan-pegasus-gallery-statue.jpg?cs=srgb&dl=architecture-buildings-gallery-gothic-37079.jpg&fm=jpg",
];
var number = Math.floor(Math.random() * 66) + 1;
var url = number;

if (url) {
  document.body.style.backgroundImage = "url(" + images[url] + ")";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}
url += 1;
console.log(url);
if (url === 67) {
  url = number;
}
document.body.style.backgroundImage = "url(" + images[url] + ")";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

function App() {
  const user = window.localStorage.getItem("userLogin");

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <Nav />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/" exact component={Login} />
              <Route path="/register" component={RegisterNewUser} />
              <Route path="/shop" component={Shop} />
            </Switch>
          </>
        ) : (
          <div className="loginRegister">
            <Login />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

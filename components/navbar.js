function navbar(){
    return `
    
    <div id="flipkart-logo">
    <img
      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
      alt=""
    />
    <a href=""
      >Explore <span>Plus</span>
      <img
        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
        alt=""
        width="10px"
      />
    </a>
  </div>
  <div id="input-container">
    <input type="text" placeholder="Search for products,brand and more" />
    <button id="search-btn">
      <i class="fa fa-search" style="font-size: 20px"></i>
    </button>
  </div>

  <div id="login">
    <button id="log">Login</button>
    <div id="more">Sign Up</div>
    <div id="cart">
      <i class="fas fa-shopping-cart"></i>
      <span>Cart </span>
    </div>
  </div>
    
    `
}

export default navbar
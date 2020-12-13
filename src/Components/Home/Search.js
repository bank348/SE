import React from "react" ;

export default function Home () {

    return ( 
      <div>
        <h2 class="Header">ค้นหาหนังสือ</h2> 
        <div class = "Search" >
          <form >
            <div class="search-input">
                  <input type="search" id="search-box" placeholder="Search..." size ="120"/>
            </div>
            <div class="search-botton">
            <button class="btn btn-primary">ค้นหา</button>
            </div>
          </form>
        </div>
      </div>
    ) ;
}
import React from 'react'

function Products() {
  return (
    <main className="main-body">
    <div className="container">
      <section className="product">
        <div className="product-heading">
          <h3>Our Products</h3>
          <p>Check out our latest collection</p>
        </div>
        <div className="product-list">
          <div className="product-item">
            <img src="/asset/download.jpg" alt="anh1"/>
            <h4>Product 1</h4>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="/asset/download.jpg" alt="anh1"/>
            <h4>Product 2</h4>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="/asset/download.jpg" alt="anh1"/>
            <h4>Product 3</h4>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="/asset/download.jpg" alt="anh1"/>
            <h4>Product 4</h4>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="/asset/download.jpg" alt="anh1"/>
            <h4>Product 5</h4>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="/asset/download.jpg"  alt="anh1"/>
            <h4>Product 6</h4>
            <p>$100</p>
          </div>
        </div>
      </section>
    </div>
  </main>
  )
}

export default Products
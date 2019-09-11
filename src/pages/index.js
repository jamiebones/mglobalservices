import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "../images/bg.jpg"

const HomeStyles = styled.div`
  .col-bg {
    height: 50vh;
    min-height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${BackgroundImage});
    margin-left: -15px;
    margin-right: -15px;
  }
  .img-home {
    min-width: 100%;
    height: 40vh;
    margin-left: -15px;
    margin-right: -15px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeStyles>
      <div className="row">
        <div className="col">
          <div className="col-bg"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card-component">
            <h3 className="text-center">Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, placeat eius. Dolore necessitatibus deserunt mollitia
              repellat, eligendi cumque ea velit? Ex iure adipisci modi odio sed
              vero voluptas sunt. Est, quia perferendis? Assumenda, velit rem,
              eius dicta veritatis, iusto quaerat id hic illo libero nam.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-component">
            <h3 className="text-center">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, placeat eius. Dolore necessitatibus deserunt mollitia
              repellat, eligendi cumque ea velit? Ex iure adipisci modi odio sed
              vero voluptas sunt. Est, quia perferendis? Assumenda, velit rem,
              eius dicta veritatis, iusto quaerat id hic illo libero nam.
            </p>
          </div>
        </div>
      </div>
    </HomeStyles>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LoadMe from "../components/scriptLoader"
import SEO from "../components/seo"
import styled from "styled-components"

const HomeStyles = styled.div`
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
        <div className="col-md-6">
          <div className="card-component">
            <LoadMe
              script1={
                <script
                  charset="utf-8"
                  src="//www.travelpayouts.com/calendar_widget/iframe.js?marker=243426.&origin=LOS&destination=DXB&currency=usd&searchUrl=travel.mglobalservicesltd.com%2Fflights&one_way=false&only_direct=false&locale=en&period=year&range=7%2C14&powered_by=true&width=800"
                  async
                ></script>
              }
              script2={
                <script
                  charSet="utf-8"
                  src="//www.travelpayouts.com/calendar_widget/iframe.js?marker=243426.&origin=LOS&destination=DXB&currency=usd&searchUrl=travel.mglobalservicesltd.com%2Fflights&one_way=false&only_direct=false&locale=en&period=year&range=7%2C14&powered_by=true&width=800"
                  async
                ></script>
              }
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-component">
            <LoadMe
              script1={
                <script
                  async
                  src="//www.travelpayouts.com/blissey/scripts_en.js?categories=5stars%2Csea_view%2Cluxury&id=30553&type=compact&currency=usd&width=800&host=travel.mglobalservicesltd.com%2Fhotels&marker=243426.&limit=6&powered_by=true"
                  charset="UTF-8"
                ></script>
              }
              script2={
                <script
                  async
                  src="//www.travelpayouts.com/blissey/scripts_en.js?categories=5stars%2Csea_view%2Cluxury&id=30553&type=compact&currency=usd&width=800&host=travel.mglobalservicesltd.com%2Fhotels&marker=243426.&limit=6&powered_by=true"
                  charSet="UTF-8"
                ></script>
              }
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card-component"></div>
        </div>

        <div className="col-md-6">
          <div className="card-component">
            <LoadMe
              script1={
                <script
                  charset="utf-8"
                  async
                  src="//www.travelpayouts.com/chansey/iframe.js?hotel_id=361687&locale=en&host=search.hotellook.com&marker=243426.&currency=usd&powered_by=true"
                ></script>
              }
              script2={
                <script
                  charSet="utf-8"
                  async
                  src="//www.travelpayouts.com/chansey/iframe.js?hotel_id=361687&locale=en&host=search.hotellook.com&marker=243426.&currency=usd&powered_by=true"
                ></script>
              }
            />
          </div>
        </div>
      </div>
    </HomeStyles>
  </Layout>
)

export default IndexPage

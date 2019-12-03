import React from "react"
import { Nav, Tab } from "react-bootstrap"
import "../components/products.css"
import DM from "../images/migrating-1.png"
import DL from "../images/data-lake-icon.png"
import AI from "../images/machine-learning-and-ai-icon.png"
import AN from "../images/analytics-icon.png"
import DV from "../images/devops-icon.png"

import P1_1 from "../images/1-1.png"
import P1_2 from "../images/1-2.png"
import P1_3 from "../images/1-3.png"
import P1_4 from "../images/1-4.png"

import P2_1 from "../images/2-1.png"
import P2_2 from "../images/2-2.png"
import P2_3 from "../images/2-3.png"
import P2_4 from "../images/2-4.png"

import P3_1 from "../images/3-1.png"
import P3_2 from "../images/3-2.png"
import P3_3 from "../images/3-3.png"
import P3_4 from "../images/3-4.png"

import P4_1 from "../images/4-1.png"
import P4_2 from "../images/4-2.png"
import P4_3 from "../images/4-3.png"
import P4_4 from "../images/4-4.png"

import P5_1 from "../images/5-1.png"
import P5_2 from "../images/5-2.png"
import P5_3 from "../images/5-3.png"
import P5_4 from "../images/5-4.png"

const Products = () => {
  return (
    <div className="col-12" id="projects">
      <Tab.Container id="main-products-tab" defaultActiveKey="dm">
        <div
          className="container-fluid nav-section"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}
        >
          <Nav
            variant="pills"
            className="container row pronav" 
            style={{ margin: "auto" }}
          >
            <Nav.Item className="col mainSercivesTabTitle">
              <Nav.Link
                eventKey="dm"
                style={{ textAlign: "center", padding: "0px" }}
              >
                <img src={DM} /> <br />
                <span style={{ fontSize: "18px" }}>Data Migration</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col mainSercivesTabTitle">
              <Nav.Link
                eventKey="dl"
                style={{ textAlign: "center", padding: "0px" }}
              >
                <img src={DL} /> <br />
                <span style={{ fontSize: "18px" }}>Data Lake</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col mainSercivesTabTitle">
              <Nav.Link
                eventKey="ai"
                style={{ textAlign: "center", padding: "0px" }}
              >
                <img src={AI} /> <br />
                <span style={{ fontSize: "18px" }}>Machine Learning & AI</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col mainSercivesTabTitle">
              <Nav.Link
                eventKey="an"
                style={{ textAlign: "center", padding: "0px" }}
              >
                <img src={AN} /> <br />
                <span style={{ fontSize: "18px" }}>Analytics</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col mainSercivesTabTitle">
              <Nav.Link
                eventKey="dv"
                style={{ textAlign: "center", padding: "0px" }}
              >
                <img src={DV} /> <br />
                <span style={{ fontSize: "18px" }}>DevOps</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div
          style={{ backgroundColor: "#1d232f", padding: "30px 0px 30px 0px" }}
        >
          <Tab.Content className="container">
            <Tab.Pane eventKey="dm">
              <div className="container">
                <div className="row">
                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P1_1}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Cost estimation and tuning with maximized ROI
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P1_2}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Migration at scale from multiple data sources to your
                        Cloud Data Lake.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P1_3}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Dynamic Cloud Migration with standard use-case based
                        architecture
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P1_4}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        ETL pipelines secure reliable data migration from
                        existing data sources
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="dl">
              <div className="container">
                <div className="row">
                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P2_1}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Your cloud-native data lake built for you to power
                        actionable insights
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P2_2}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Store, process, and analyze massive volumes of data with
                        enterprise-grade security and auditing
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P2_3}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Develop massively parallel ETL pipelines and Data
                        Warehouses with simplicity
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P2_4}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        On-demand infrastructure and minimal maintenance cost to
                        start instantly and pay per job
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="ai">
              <div className="container">
                <div className="row">
                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P3_1}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Design, develop and train industry-level, robust ML
                        solutions to answer your business needs
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P3_2}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Automated Machine Learning with Cloud DevOps for
                        limitless scalable power
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P3_3}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Leverage our professional experience using best-in-class
                        open source machine learning stack
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P3_4}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Providing large number of results by applying multiple
                        ML models in parallel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="an">
              <div className="container">
                <div className="row">
                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P4_1}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Govern, manage, and deliver data for BI with the right
                        Data Platform Architecture
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P4_2}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Visualize data on any preferred tool, including Tableau,
                        Power BI, Jupyter, etc
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P4_3}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Draw powerful, actionable, and data driven insights
                        quickly from complex collections
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P4_4}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Use-case-based feature engineering, design and
                        implementation for customized solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="dv">
              <div className="container">
                <div className="row">
                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P5_1}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Design, architect, build, and automate your data
                        workloads on the Public Cloud
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P5_2}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Agile Solution Development and Operations on Cloud
                        using DevOps Practices
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P5_3}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Off-the-shelf cloud Infrastructure and Code solutions for
                        Big Data on Cloud
                      </p>
                    </div>
                  </div>

                  <div
                    className="col col-12 col-sm-12 col-md-6 col-lg-3 "
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="mainProductsCard">
                      <img
                        className="project-img"
                        style={{ width: "100%" }}
                        src={P5_4}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          margin: "10px 10px 10px 10px",
                          fontSize: "16px",
                        }}
                      >
                        Cloud security implementation based on industry
                        standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  )
}

export default Products

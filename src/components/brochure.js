import React from "react"
import ReactDOM from "react-dom"
import { Nav, Tab } from "react-bootstrap"
import { Parallax } from "react-spring/renderprops-addons"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "../components/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/logo.png"
import Brain from "../images/brain.png"
import Icon from "../images/icon.png"
import Title from "../images/dept-title.png"
import Subject from "../images/subject.png"
import Industry from "../images/industry.png"
import Description from "../images/description.png"
import Point from "../images/point.png"
import Pin from "../images/pin.png"
import Contact from "../images/background5.jpg"
import MainservicesTab from "../components/tabs"
import Products from "../components/products"
import Line from "../images/line.png"
import ActivePoint from "../images/group.png"
import WhitePoint from "../images/fill-1-copy-5.png"

import A1 from "../images/1.png"
import A2 from "../images/2.png"
import A3 from "../images/3.png"
import A4 from "../images/4.png"
import A5 from "../images/5.png"
import A6 from "../images/6.png"
import A7 from "../images/7.png"
import A8 from "../images/8.png"
import A9 from "../images/9.png"
import A10 from "../images/10.png"

import C1 from "../images/c1.png"
import C2 from "../images/c2.png"
import C3 from "../images/c3.png"
import C4 from "../images/c4.png"
import C5 from "../images/c5.png"
import C6 from "../images/c6.png"
import C7 from "../images/c7.png"
import C8 from "../images/c8.png"
import C9 from "../images/c9.png"
import C10 from "../images/c10.png"
import C11 from "../images/c11.png"
import C12 from "../images/c12.png"
import C13 from "../images/c13.png"
import C14 from "../images/c14.png"
import C15 from "../images/c15.png"
import C16 from "../images/c16.png"
import C17 from "../images/c17.png"
import C18 from "../images/c18.png"
import C19 from "../images/c19.png"
import C20 from "../images/c20.png"

class Brochure extends React.Component {
  componentDidMount() {
    var btns = document.getElementsByClassName("point")
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
      })
    }
  }

  render() {
    return (
      <div className="main-container">
        <section class="anchors">
          <ul>
            <li>
              <AnchorLink
                href="#b1"
                id="btn0"
                className="point active"
              ></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b2" id="btn1" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b3" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b4" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b5" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b6" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b7" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b8" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b9" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b10" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b11" className="point"></AnchorLink>
            </li>
            <li>
              <AnchorLink href="#b12" className="point"></AnchorLink>
            </li>
          </ul>
        </section>
        <div className="background background1" id="b1">
          <img src={Logo} className="img-fluid" />
        </div>

        <div className="background background2" id="b2">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="title">
                    <img className="img-fluid" src={Icon} />
                    <h2>Qimia specializes in custom use-case implementation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elements-content">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xs-12">
                  <div className="description">
                    <p>
                      As an international, dynamic, and top performant service
                      company, we assist our customers in the realization of IT
                      projects with next-generation technologies.
                    </p>
                    <p>
                      Our services range from small data science applications to
                      enterprise-grade, scalable end-to-end solutions. We offer
                      specialist and generalist data consulting, use-case
                      analysis, tailor-made software products, conception,
                      implementation, testing, production, and deployment of
                      solutions. The standard information cycle includes Data
                      Migration, Data Lake Formation, Data Warehousing and ETL,
                      Analytics, and Machine Learning implementation for
                      Predictive Analytics.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-xs-12">
                  <img src={Brain} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background background4" id="b3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <img src={Icon} />
                  <h2>Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Products />
            </div>
          </div>
        </div>
        <div className="background background3" id="b4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <img src={Icon} />
                  <h2>Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <MainservicesTab />
            </div>
          </div>
        </div>

        <div className="background background5" id="b5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <img src={Icon} />
                  <h2>Company Data</h2>
                </div>
                <div className="shortDescription">
                  <p>
                    With decades of experience, you will receive innovative,
                    creative, and efficient execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-5ths  col-xs-12">
                <div className="achievments">
                  <img src={A1} />
                  <p>300+ Company Partners</p>
                </div>
              </div>
              <div class="col-md-5ths  col-xs-12">
                <div className="achievments">
                  <img src={A2} />
                  <p>5 Worldwide Offices</p>
                </div>
              </div>
              <div class="col-md-5ths  col-xs-12">
                <div className="achievments">
                  <img src={A3} />
                  <p>Certified Scrum Master</p>
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={A4} />
                  <p>Cloudera, Hadoop, AWS, Azure partner</p>
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={A5} />
                  <p>No outsourcing to freelancers or subcontractors</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={A6} />
                  <p>Internal training & certification of employees</p>
                </div>
              </div>
              <div class="col-md-5ths  col-xs-12">
                <div className="achievments">
                  <img src={A7} />
                  <p>Over 15 years of project experience</p>
                </div>
              </div>
              <div class="col-md-5ths  col-xs-12">
                <div className="achievments">
                  <img src={A8} />
                  <p>80+ permanent Data Engineers and Data Scientists</p>
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={A9} />
                  <p>
                    Realization of a variety ofcustomized software solutions
                  </p>
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={A10} />
                  <p>Machine Intelligence, Big Data & AI consulting company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background background6" id="b6">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <img src={Icon} />
                  <h2>Project Referances</h2>
                </div>
                <div className="shortDescription">
                  <h1>AWS Data Lake Project</h1>
                </div>
                <div className="row">
                  <div className=" details">
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Title} />
                      <p>Data Engineering</p>
                    </div>
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Industry} />
                      <p className="yellow">
                        Industry: <span>Consulting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Subject} />
                      <p className="yellow">
                        Subject:{" "}
                        <span>
                          AWS Cloud Data Lake Development; Cloud Big Data
                          Engineering
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Description} />
                      <p className="yellow">
                        Description:{" "}
                        <span>
                          Developing and maintaining data lakes on AWS. Data
                          migration from RDBMS and file sources, loading data
                          into S3, Redshift, and RDS. Designing and developing
                          big data batch solutions using AWS Data Pipeline and
                          AWS Glue and EMR. Developing a massive data warehouse
                          using Redshift and Redshift Spectrum.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="box-container">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <h5>Project Task Summary</h5>
                    <ul>
                      <li>
                        Feature engineering using Spark SQL by joining and
                        aggregating user tracking data
                      </li>
                      <li>
                        Keras and TensorFlow implementation for training RNN and
                        CNN models
                      </li>
                      <li>
                        Using Spark ML for training gradient boosting
                        classifiers
                      </li>
                      <li>
                        Cross-validation, F1-score evaluation, hyperparameter
                        optimization
                      </li>
                      <li>
                        Containerized Spark standalone cluster, using Docker
                        Compose for local deployment and AWS container services
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Technologies</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>AWS CLI</li>
                          <li>AWS Console</li>
                          <li>IAM</li>
                          <li>S3</li>
                          <li>AWS ECS</li>
                          <li>AWS Batch</li>
                          <li>AWS CLI</li>
                          <li>AWS Console</li>
                          <li>IAM</li>
                          <li>S3</li>
                          <li>AWS ECS</li>
                          <li>AWS Batch</li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>AWS CLI</li>
                          <li>AWS Console</li>
                          <li>IAM</li>
                          <li>S3</li>
                          <li>AWS ECS</li>
                          <li>AWS Batch</li>
                          <li>AWS CLI</li>
                          <li>AWS Console</li>
                          <li>IAM</li>
                          <li>S3</li>
                          <li>AWS ECS</li>
                          <li>AWS Batch</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background background6" id="b7">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shortDescription">
                  <h1>AWS Data Lake Project</h1>
                </div>
                <div className="row">
                  <div className=" details">
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Title} />
                      <p>DevOps</p>
                    </div>
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Industry} />
                      <p className="yellow">
                        Industry: <span>Consulting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Subject} />
                      <p className="yellow">
                        Subject: <span>Cloud Data Lake DevOps; AWS DevOps</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Description} />
                      <p className="yellow">
                        Description:{" "}
                        <span>
                          Provisioning and deployment of big data solutions on
                          AWS. Operationalize cloud data solutions, implementing
                          infrastructure as code (IaC), using CloudFormation
                          templates for resource management. Provisioning and
                          deploying on-demand Redshift cluster and RDS instances
                          using CloudFormation. Development, management, and
                          deployment of Docker images and containers.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="box-container">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <h5>Project Task Summary</h5>
                    <ul>
                      <li>
                        Provisioning resources using CloudFormation templates
                      </li>
                      <li>
                        Provisioning of Redshift, Data Pipeline, and Glue ETL
                        pipelines
                      </li>
                      <li>User account and access management in IAM</li>
                      <li>
                        Develop Docker images for batch processing applications
                        and Python, ML models, using AWS Container Registry (AWS
                        ECR)
                      </li>
                      <li>Docker container deployment using AWS ECS</li>
                      <li>CI/CD implementation using GitLab</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Technologies</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>AWS CLI</li>
                          <li>AWS CloudWatch</li>
                          <li>AWS CloudFormation </li>
                          <li>AWS Glue</li>
                          <li>IAM</li>
                          <li>AWS Data</li>
                          <li>Pipeline</li>
                          <li>AWS ECS</li>
                          <li>Redshift</li>
                          <li>Python</li>
                          <li>SQL</li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>AWS ECS</li>
                          <li>Redshift</li>
                          <li>Python</li>
                          <li>SQL</li>
                          <li>Docker</li>
                          <li>Dockerfile</li>
                          <li>CI/CD</li>
                          <li>Git</li>
                          <li>Gitlab</li>
                          <li>Scrum</li>
                          <li>Slack</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background background6" id="b8">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shortDescription">
                  <h1>Azure Data Lake Project</h1>
                </div>
                <div className="row">
                  <div className=" details">
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Title} />
                      <p>Data Engineering</p>
                    </div>
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Industry} />
                      <p className="yellow">
                        Industry: <span>Consulting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Subject} />
                      <p className="yellow">
                        Subject:{" "}
                        <span>
                          Azure Cloud Data Lake Development; Azure Big Data
                          Engineering
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Description} />
                      <p className="yellow">
                        Description:{" "}
                        <span>
                          Data lake development on Microsoft Azure. Data
                          migration from RDBMS and file sources, data loading
                          into Azure Blob storage and Azure SQL. Design and
                          development of big data batch solutions using Data
                          Factory and Databricks. Massive data warehouse
                          development using Azure SQL Data Warehouse.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="box-container">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <h5>Project Task Summary</h5>
                    <ul>
                      <li>
                        Create ETL workflows in Data Factory with data factory
                        ETL pipeline monitoring and management
                      </li>
                      <li>
                        Batch processing in Azure Databricks using Scala Spark
                      </li>
                      <li>
                        Data warehouse design and development using SQL Data
                        Warehouse
                      </li>
                      <li>
                        DWH data model design, featuring index and partitioning
                        table design
                      </li>
                      <li>
                        Accessing and processing big data in Blob storage via
                        Transact-SQL using Polybase
                      </li>
                      <li>CI/CD development using SBT and Gitlab</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Technologies</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>Azure CLI</li>
                          <li>Azure Portal</li>
                          <li>Data Factory </li>
                          <li>Polybase</li>
                          <li>Azure SQL DWH</li>
                          <li>Databricks</li>
                          <li>Spark</li>
                          <li>Spark SQL</li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>Scala</li>
                          <li>Python</li>
                          <li>SQL</li>
                          <li>Transact-SQL</li>
                          <li>GitLab</li>
                          <li>Scrum</li>
                          <li>SBT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background background6" id="b9">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shortDescription">
                  <h1>Azure Data Lake Project</h1>
                </div>
                <div className="row">
                  <div className=" details">
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Title} />
                      <p>DevOps</p>
                    </div>
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Industry} />
                      <p className="yellow">
                        Industry: <span>Consulting</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Subject} />
                      <p className="yellow">
                        Subject:{" "}
                        <span>Cloud Data Lake DevOps; Azure DevOps</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Description} />
                      <p className="yellow">
                        Description:{" "}
                        <span>
                          Data Factory and Databricks provisioning and
                          deployment. Operationalization of cloud data solutions
                          and infrastructure as code (IaC) implementation using
                          ARM templates and Azure Python SDK for resource
                          management. Azure SQL data warehouse provisioning and
                          deployment. CI/CD implementation using Azure DevOps
                          tools. Development, management, and deployment of
                          Docker images and containers.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="box-container">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <h5>Project Task Summary</h5>
                    <ul>
                      <li>
                        Azure resources (VM and storage account, SQL DB and
                        network) provisioning using Azure Python SDK and ARM
                        template
                      </li>
                      <li>
                        SQL data warehouse provisioning with Databricks and Data
                        Factory integration, using Python scripts and ARM
                        templates, with Azure Key Vault for deployment
                      </li>
                      <li>
                        User account and role-based (RBAC) access management in
                        Azure Active Directory
                      </li>
                      <li>
                        Docker image development for batch processing
                        applications and ML model APIs, using Azure Container
                        Registry for build, storage, and management of images
                      </li>
                      <li>
                        Azure container deployment on ACI (Azure Container
                        Instances)
                      </li>
                      <li>
                        CI/CD implementation via Azure Repos, Azure Artifacts,
                        Azure Pipelines, and Azure Test Plans
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Technologies</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>AWS CLI</li>
                          <li>Azure Python SDK</li>
                          <li>Azure Portal</li>
                          <li>Azure Active Directory</li>
                          <li>Data Factory</li>
                          <li>Databricks</li>
                          <li>Python</li>
                          <li>SQL</li>
                          <li>ARM</li>
                          <li>Docker</li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <ul>
                          <li>Dockerfile</li>
                          <li>Azure Container Registry</li>
                          <li>CI/CD</li>
                          <li>Azure Repos</li>
                          <li>Azure Artifacts</li>
                          <li>Azure Pipelines</li>
                          <li>Azure Test Plans</li>
                          <li>Git</li>
                          <li>SBT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background background6" id="b10">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shortDescription">
                  <h1>ML/AI Projects</h1>
                </div>
                <div className="row">
                  <div className=" details">
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Title} />
                      <p>NLP Project</p>
                    </div>
                    <div className="col-md-3 col-xs-12 info">
                      <img src={Industry} />
                      <p className="yellow">
                        Industry: <span>AI/Automatization</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Subject} />
                      <p className="yellow">
                        Subject:{" "}
                        <span>
                          Implementation of supervised Machine Learning
                          Algorithm for automatic keyphrase extraction.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="details">
                    <div className="col-md-12 info">
                      <img src={Description} />
                      <p className="yellow">
                        Description:{" "}
                        <span>
                          Implementation of automated Context Tagger for a B2B
                          Marketing automated AI solution. Text classification
                          models are implemented in Python using Python Text
                          Mining, NLP and other ML and data analysis libraries
                          (Python Data Science and ML stack). Text mining, data
                          processing, and feature engineering of a massive
                          dataset in Spark.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="box-container">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <h5>Project Task Summary</h5>
                    <ul>
                      <li>
                        Design and implementation of a very fast multi-threaded
                        AKKA-based stream (SAX/Stax) processing of XML data for
                        transforming huge XML data to CSV format.
                      </li>
                      <li>
                        Preprocessing of the data by filtering normalizing text
                        content and applying Spacy and NLTK
                      </li>
                      <li>
                        Text mining and data preprocessing in Spark SQL Scala on
                        Hadoop and S3
                      </li>
                      <li>
                        Training of embedding and language models using
                        fastText, Gensim, and GPT-2
                      </li>
                      <li>
                        Modeling term to tag relations in massive graph networks
                        in Tigergraph
                      </li>
                      <li>
                        Keyphrase extraction (automatic tagging) using N-Grams,
                        Word2vec scoring and PageRank algorithm on massive
                        graphs of tag-to-tag relations
                      </li>
                      <li>FP-Growth association rules learning</li>
                      <li>
                        Distributed CNN training in Docker containers on AWS
                        using GPU instances
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="row">
                      <div className="col-12">
                        <h5>Technologies</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <ul>
                          <li>Python</li>
                          <li>Scala</li>
                          <li>Apache Spark</li>
                          <li>Spark SQL</li>
                          <li>Tigergraph</li>
                          <li>Apache Hadoop</li>
                          <li>Apache Hadoop</li>
                          <li>Spacy</li>
                          <li>XML</li>
                          <li>AKKA</li>
                          <li>Word2vec</li>
                          <li>GPT-2</li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <ul>
                          <li>Pandas</li>
                          <li>NumPy</li>
                          <li>SciPy</li>
                          <li>Scikit-learn</li>
                          <li>Keras</li>
                          <li>PyTorch</li>
                          <li>CNN</li>
                          <li>Docker</li>
                          <li>Kubernetes</li>
                          <li>FastText</li>
                          <li>Gensim</li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <ul>
                          <li>Classification</li>
                          <li>NLTK</li>
                          <li>Jupyter</li>
                          <li>Parquet</li>
                          <li>Apache Arrow</li>
                          <li>IntelliJ</li>
                          <li>SBT</li>
                          <li>Nvidia-docker</li>
                          <li>Linux</li>
                          <li>Git</li>
                          <li>GitLab</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background background12" id="b11">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <img src={Icon} />
                  <h2>Customer</h2>
                </div>
              </div>
            </div>
            <div className="row margin30">
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C1} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C2} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C3} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C4} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C5} />
                </div>
              </div>
            </div>
            <div className="row margin30">
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C6} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C7} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C8} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C9} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C10} />
                </div>
              </div>
            </div>
            <div className="row margin30">
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C11} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C12} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C13} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C14} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className="circulwidth" src={C15} />
                </div>
              </div>
            </div>
            <div className="row ">
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C16} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C17} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img className=" rectanglewidth" src={C18} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C19} />
                </div>
              </div>
              <div class="col-md-5ths col-xs-12">
                <div className="achievments">
                  <img src={C20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background background13" id="b12">
          <img src={Contact} />
          <div className="bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="title">
                    <h1>Ready to get started?</h1>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 displaygrid">
                  <div className="contact margin10">
                    <img src={Pin} className="pinimage" />
                    <h3>Germany</h3>
                  </div>
                  <div className="contact">
                    <img src={Point} />
                    <p>contact@qimia.de</p>
                  </div>
                  <div className="contact">
                    <img src={Point} />
                    <p>+49 221 5796 7940</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 displaygrid">
                  <div className="contact margin10">
                    <img src={Pin} className="pinimage" />
                    <h3>USA</h3>
                  </div>
                  <div className="contact">
                    <img src={Point} />
                    <p>contact@qimia.io</p>
                  </div>
                  <div className="contact">
                    <img src={Point} />
                    <p>+1 (858) 286 61 10</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 displaygrid">
                  <div className="contact margin10">
                    <img src={Pin} className="pinimage" />
                    <h3>Turkey</h3>
                  </div>
                  <div className="contact">
                    <img src={Point} />
                    <p>contact@qimia.io</p>
                  </div>
                  <div className="contact">
                    <img src={Point} />
                    <p>+90 542 412 02 31</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Brochure

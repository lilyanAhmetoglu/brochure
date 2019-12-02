import React from "react"
import { Nav, Tab } from "react-bootstrap"
import "../components/mainServicesTab.css"

import service1_1 from "../images/s1-1.png"
import service1_2 from "../images/s1-2.png"
import service1_3 from "../images/s1-3.png"
import service1_4 from "../images/s1-4.png"

import service2_1 from "../images/s2-1.png"
import service2_2 from "../images/s2-2.png"
import service2_3 from "../images/s2-3.png"
import service2_4 from "../images/s2-4.png"

import service3_1 from "../images/s3-1.png"
import service3_2 from "../images/s3-2.png"
import service3_3 from "../images/s3-3.png"

class MainServicesCreate extends React.Component {
  render() {
    return (
      <div className="col-12 mainSercivesTabContainer" id="projects">
        <Tab.Container id="main-products-tab" defaultActiveKey="BG">
          <div className="container mainSercivesTabTitle1Container ">
            <Nav variant="pills" className="container row">
              <Nav.Item className="col col-12 col-sm-12 col-md-4 col-lg-4 mainSercivesTabTitle1">
                <Nav.Link eventKey="BG">Big Data Services</Nav.Link>
              </Nav.Item>
              <Nav.Item className="col col-12 col-sm-12 col-md-4 col-lg-4 mainSercivesTabTitle1">
                <Nav.Link eventKey="DV">Cloud DevOps Services</Nav.Link>
              </Nav.Item>
              <Nav.Item className="col col-12 col-sm-12 col-md-4 col-lg-4 mainSercivesTabTitle1">
                <Nav.Link eventKey="DA">Data Analytics Service</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="mainSercivesTabContentContainer">
            <Tab.Content className="container">
              <Tab.Pane eventKey="BG">
                <div className="container">
                  <p>
                    We effectively guide our customers through the risky and
                    costly journey of enterprise data hub implementation. <br />
                    Every phase of this journey requires different technologies,
                    skills, and specialists.
                    <br />
                    Qimia is your reliable technology partner with well-founded
                    expertise, that will lead your project to great success.
                    <br />
                    Qimia’s big data service model is designed to provide
                    expertise and solutions needed for maximizing your ROI at
                    any phase of a project.
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service1_1} />
                        <p>
                          <span className="serviceplan">
                            Qimia Enterprise Data Hub
                          </span>
                          <span className="bolder">
                            Off-the-shelf Big Data Platform:
                          </span>
                          <br />
                          Off-the-shelf Hadoop cluster and cloud data lake
                          deployment.
                          <br />
                          <span className="bolder">Hadoop Data Hub:</span>{" "}
                          Apache Hadoop, Apache Spark, Apache Hive, HBase,
                          Zeppelin. <br />
                          <span className="bolder">Cloud Data Lake:</span>
                          Azure, AWS and GCP infrastructure-based data lake.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service1_2} />
                        <p>
                          <span className="serviceplan">
                            Big Data Consulting Services
                          </span>
                          Best Practices: We have an in-depth overview and
                          understand the details involved with deploying big
                          data platforms. We help define your strategy and
                          advise you on solution designs based on your business
                          use-cases. Our experts design the architecture and
                          help to establish the processes needed for the
                          successful implementation of these.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service1_3} />
                        <p>
                          <span className="serviceplan">
                            Qimia Data Hub Operational Service
                          </span>
                          Qimia’s Data Hub Operational Service is a subscription
                          service that manages customers’ enterprise data hub by
                          our team of expert engineers. Monitoring and
                          reporting, on-site architecture review,
                          troubleshooting and incident management, capacity
                          planning, multi-tenant and access management.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service1_4} />
                        <p>
                          <span className="serviceplan">
                            Standard Data Solutions
                          </span>
                          Data processing solutions and off-the-shelf standard
                          implementations for standard use-cases.
                          Production-ready, tested and verified streaming and
                          ETL pipelines secure reliable data migration from
                          existing data sources (databases).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="DV">
                <div className="container">
                  <p>
                    Qimia professional cloud DevOps services help customers of
                    all sizes to design, architect, build, migrate, and manage
                    their workloads and applications on public clouds (Azure,
                    AWS, GCP, and IBM Cloud) via standard DevOps
                    implementations. Industrialized agile enterprise software
                    solution development and operations lifecycle management are
                    provided on cloud infrastructure using DevOps tools and
                    practices.
                    <br />
                    To remain as agile as possible, we utilize and integrate the
                    latest automation tools and techniques, such as
                    infrastructure as code (IaC). Qimia standard cloud services
                    provide off-the-shelf cloud IaC solutions, including user
                    management and access control, monitoring, storage,
                    relational databases, NoSQL databases, and cloud network
                    deployment.
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service2_1} />
                        <p>
                          <span className="serviceplan">Cloud Automation</span>
                          Efficient cloud orchestration, provisioning, and
                          management of client cloud-based IT environment.CI/CD
                          (continuous integration and continuous delivery)
                          practices automate the software build, deploy, and
                          release process. Streamlined CI/CD deployment using
                          Jenkins, Git, Ansible, and Terraform.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service2_2} />
                        <p>
                          <span className="serviceplan">Cloud Security</span>
                          Cloud security implementation based on industry
                          standards. Continuous support via operations support
                          subscription model. Monitor and address security
                          issues in real-time, with preemptive protection of
                          known vulnerabilities and new threat identification.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service2_3} />
                        <p>
                          <span className="serviceplan">
                            Cloud Migration and Cost Management
                          </span>
                          Migrate to cloud with dynamic, standard use-case-based
                          architecture. Use-case and requirement analysis for
                          cloud architecture tailored to client business needs.
                          Cost estimation and tuning to maximize ROI.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service2_4} />
                        <p>
                          <span className="serviceplan">Cloud DevOps</span>
                          Public cloud services and state of the art DevOps
                          tools and practices enable business adaptability.
                          Optimize business value for cloud migration with Qimia
                          DevOps solutions, providing infrastructure as code
                          (IaC) templates and off-the-shelf deployments.
                          Standard automated cloud DevOps solutions via Ansible,
                          Terraform, Docker, Kubernetes, Jenkins, Git, ELK,
                          Nagios, and Ganglia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="DA">
                <div className="container">
                  <p>
                    Standard solutions using statistics and probability to
                    design, train, execute, and evaluate predictive machine
                    learning models. Use-case-based feature engineering, design,
                    implementation, and evaluation building blocks for
                    customized solutions.
                    <br />
                    Big data ML pipelines on cloud and Hadoop using Spark.
                    <br />
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service3_1} />
                        <p>
                          <span className="serviceplan">
                            Data Analytics Components
                          </span>
                          Data warehouse models, Spark, cloud, Hadoop and
                          Kubernetes deployments.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service3_2} />
                        <p>
                          <span className="serviceplan">
                            Data Visualization
                          </span>
                          Tableau, Qlik, PowerBI and Superset.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service3_3} />
                        <p>
                          <span className="serviceplan">
                            Standard Model Implementation
                          </span>
                          Spark generics classification implementation and Spark
                          generics recommendation implementation. Spark generics
                          time-series implementation, standard feature
                          engineering, ETL building blocks, standard
                          hyperparameter tuning, cross-validation, and grid
                          search in Spark ML.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="details">
                        <img src={service2_4} />
                        <p>
                          <span className="serviceplan">
                            Secure Notebook Deployment
                          </span>
                          Dynamic privileges and secure containerization allows
                          for robust deployment of containers in Zeppelin and
                          Jupyter.
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
}

export default MainServicesCreate

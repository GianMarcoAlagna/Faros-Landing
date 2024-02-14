import { useRef, useState } from 'react'
import { Image, Button, Container, Row, Card } from 'react-bootstrap';
import farosNetwork from './assets/faros-network-graph.png';
import logo from './assets/faros-removebg.png'
import CustomCard from './components/Card/Card';
import Sketch from './components/p5/Sketch';

function App() {
  const headerRef = useRef(null);
  const descriptionCards = [
    [
      {
        title: 'Interactable Graphs',
        text: 'Faros focuses on providing a clear and concise visuals of your Kubernetes cluster.',
        img: farosNetwork
      },
      {
        title: 'Real-Time Metrics',
        text: 'Faros provides real-time metrics and logs for your Kubernetes cluster.',
        img: farosNetwork
      },
    ],
    [
      {
        title: 'Easy Setup',
        text: 'Faros is easy to setup and deploy in your Kubernetes cluster.',
        img: farosNetwork
      },
      {
        title: 'Simple Interface',
        text: 'We seek to provide a simple and easy to use interface with no learning curve.',
        img: farosNetwork
      }
    ]
  ].map((row, i) => (
    <Row key={i} className='d-flex justify-content-center m-2 gap-5'>
      {row.map((card, j) => (
        <CustomCard key={j} {...card} />
      ))}
    </Row>
  ));
  return (
    <>
      <header ref={headerRef}>
        <Sketch parent={headerRef} />
        <Container
          className='header-container'
          fluid
        >
          <div className="blur-overlay"></div>
          <Image className='logo' src={logo} alt="Faros logo" />
          <div className='header-body'>
            <h1 className='description-emphasis'>Faros-Scope</h1>
            <Row className='d-flex justify-content-center m-2'>
              <h2 className='description'>
                Faros is a Kubernetes Cluster observability platform that helps you visualize, and monitor your Kubernetes based applications/infrastructure
              </h2>
              <h3 className='description'>
                Click get started to start monitoring your Kubernetes cluster
              </h3>
            </Row>
            <Row className='d-flex justify-content-center m-2'>
              <Button variant="primary" href="https://github.com/oslabs-beta/faros-scope" >
                Get Started
              </Button>
            </Row>
          </div>
        </Container>
      </header>
      <main>
        <Container
          className='content-container'
        >
          <Row className='d-flex justify-content-center m-2'>
            <h1 className='description-emphasis'>
              Features
            </h1>
          </Row>
          {descriptionCards}
        </Container>
        <Container
          className='content-container'
        >
          <Row className='d-flex justify-content-center m-2'>
            <h1 className='description-emphasis'>
              Meet The Team
            </h1>
          </Row>
          <Row className='d-flex justify-content-center m-2 gap-2'>
            <Card style={{ width: '25rem' }} className='p-1'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Bobby Stipp</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente tempore modi voluptatem molestiae mollitia vitae quos, fugiat voluptates impedit sed maiores illum nulla necessitatibus molestias quia, reiciendis similique sint?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem' }} className='p-1'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Edwin Morlu</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nam voluptas sunt ea, reiciendis, cupiditate, pariatur obcaecati corrupti nulla earum dicta asperiores perferendis ex porro fugiat itaque autem suscipit dolorem!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='d-flex justify-content-center m-2 gap-2'>
            <Card style={{ width: '25rem' }} className='p-1'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Gian-Marco Alagna</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nemo magni, sapiente sit iste, nisi nam dignissimos quae fugit debitis dolor eligendi, a eveniet modi obcaecati dolorem aliquam. Nesciunt, sed.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem' }} className='p-1'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Nick Doolan</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo ipsum ex sed neque veritatis deleniti, obcaecati voluptas similique non sit quia iure voluptatum ipsa nisi maiores atque. Quas, asperiores.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='d-flex justify-content-center m-2 gap-2'>
            <Card style={{ width: '25rem' }} className='p-1'>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Tristan Williams</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum, id earum eius omnis voluptatem minus aliquam quaerat modi excepturi dicta accusamus ipsum inventore molestias possimus beatae, impedit exercitationem vero.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </main >
      <footer>
        <div className='footer-body'>
          <h3 className='footer-text'>
            Faros-Scope is an open-source project developed by the OS Labs Beta team.
          </h3>
        </div>
      </footer>
    </>
  )
}

export default App

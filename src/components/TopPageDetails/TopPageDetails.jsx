import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 class TopPageDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container  fluid={true} className='top-page-banner  p-0'>
            <div className='top-page-layout'>
                <Container>
                    <Row>
                        <Col className='top-page-text'>
                        <h1 className='top-page-title'>{this.props.pageTitle}</h1>
                        </Col>
                    </Row>
                </Container>

            </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopPageDetails

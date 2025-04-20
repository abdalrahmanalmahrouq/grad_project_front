import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

 class TopPageDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container  fluid={true} className='TopPageBanner  p-0'>
            <div className='TopPageLayout'>
                <Container>
                    <Row>
                        <Col className='TopPageText'>
                        <h1 className='TopPageTitle'>{this.props.pageTitle}</h1>
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

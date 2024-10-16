import React from 'react'
import Header from "../components/Header/header"
import Footer from '../components/Footer/footer'

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <h2>Welcome to Our Home Page!</h2><br />
      <p>Discover our amazing services and features tailored just for you.</p>
      <div><br />
          <h3>Highlights</h3><br /><br />
          <ul>
            <li><i><strong>Feature 1: `Our platform connects you with top-notch resources and services tailored to meet your needs.`</strong></i></li><br />
            <li><i><strong>Feature 2: `Whether you`re a busy professional or a student, we have solutions that cater to your lifestyle.`</strong></i></li><br />
            <li><i><strong>Feature 3: `Explore our features today and discover how we can help you achieve your goals!</strong></i></li><br />
          </ul>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default HomePage

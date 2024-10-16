import React from 'react'
import Header from "../components/Header/header"
import Footer from '../components/Footer/footer'
import Link from 'next/link'


const contact = () => {
  return (
    <div>
      <Header></Header>
      <h2>Contact Us</h2><br />
      <p><i><strong>If you have any questions, feel free to reach out to us!</strong></i></p><br />
        
        <form>
          <label>
            <b>Name:</b>
            <input type="text" name="name" required placeholder='please enter yor name' />
          </label><br /><br />
          <label>
            <b>Email:</b>
            <input type="email" name="email" required placeholder='please enter yor email' />
          </label><br /><br />
          <label>
            <b>Message:</b>
            <input name="message" required placeholder='please enter yor message'></input>
          </label><br /><br />
          <button type="submit">Send Message</button>
          
        </form>
        <br />
      
    <div className="parent">
    <div className="content">Or Email <br /><span className='spemail'>aneeq.edward@outlook.com</span></div>
    <div className="git">
        <Link href="https://github.com/Aneeq-Ahmed1">Click to Our Github</Link>
    </div>
</div>

           
      <Footer></Footer>
    </div>
  )
}

export default contact

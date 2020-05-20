import React from "react"

const Home = () => (
    <form name="Contact Form" method="POST" data-netlify="true" action="/">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="email" placeholder="Email"/>
      </div>
      <div >
        <textarea name="message" placeholder="Mensagem"/>
      </div>
      <button type="submit" onclick="window.open('Ebook-Free.docx')">Enviar</button>
    </form>
)

export default Home

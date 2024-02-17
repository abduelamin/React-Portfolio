import React from "react";

const Contact = () => {
  return (
    <>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="368843df-858b-4fb1-8781-4ad6ff13f3d8"
        />

        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
};

export default Contact;

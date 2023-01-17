import axios from "axios";

const sendgridApiKey = process.env.SENDGRID_API_KEY;
const sendgridEndpoint =
  "https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send";

export const sendEmail = async () => {
  try {
    const response = await axios({
      method: "post",
      url: sendgridEndpoint,

      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sendgridApiKey}`,
      },
      data: {
        personalizations: [
          {
            to: [{ email: "akinyemi.akinlabi047@gmail.com" }],
            subject: "Hello, World!",
          },
        ],
        from: { email: "akinyemi.akinlabi@rocketmail.com" },
        content: [{ type: "text/plain", value: "Hello, World!" }],
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }

  
};



// Example usage:
// sendEmail('example@email.com', 'sender@email.com', 'Hello!', '<h1>Hello World!</h1>');
